import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface TranslatablePost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  [key: string]: unknown;
}

// In-memory cache keyed by post id + lang
const translationCache = new Map<string, Record<string, string>>();

export function useBlogTranslation<T extends TranslatablePost>(posts: T[]): { translatedPosts: T[]; translating: boolean } {
  const { lang } = useLanguage();
  const [translatedPosts, setTranslatedPosts] = useState<T[]>(posts);
  const [translating, setTranslating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (lang === "en" || posts.length === 0) {
      setTranslatedPosts(posts);
      setTranslating(false);
      return;
    }

    // Check which posts need translation
    const needsTranslation: T[] = [];
    const alreadyCached: T[] = [];

    for (const post of posts) {
      const cacheKey = `${post.id}_${lang}`;
      const cached = translationCache.get(cacheKey);
      if (cached) {
        alreadyCached.push({ ...post, ...cached } as T);
      } else {
        needsTranslation.push(post);
      }
    }

    if (needsTranslation.length === 0) {
      setTranslatedPosts(alreadyCached);
      setTranslating(false);
      return;
    }

    // Show cached ones immediately, mark as translating for the rest
    setTranslatedPosts(posts.map(p => {
      const cacheKey = `${p.id}_${lang}`;
      const cached = translationCache.get(cacheKey);
      return cached ? { ...p, ...cached } as T : p;
    }));

    setTranslating(true);

    // Abort previous request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const translate = async () => {
      try {
        const textsToTranslate = needsTranslation.map(p => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          ...(p.content ? { content: p.content } : {}),
          category: p.category,
        }));

        const { data, error } = await supabase.functions.invoke("translate-blog", {
          body: { texts: textsToTranslate, targetLang: lang },
        });

        if (controller.signal.aborted) return;

        if (error || !data?.translated) {
          console.error("Translation error:", error);
          setTranslating(false);
          return;
        }

        // Cache results
        const translatedMap = new Map<string, Record<string, string>>();
        for (const item of data.translated) {
          const fields: Record<string, string> = {};
          if (item.title) fields.title = item.title;
          if (item.excerpt) fields.excerpt = item.excerpt;
          if (item.content) fields.content = item.content;
          if (item.category) fields.category = item.category;
          translatedMap.set(item.id, fields);
          translationCache.set(`${item.id}_${lang}`, fields);
        }

        setTranslatedPosts(posts.map(p => {
          const cacheKey = `${p.id}_${lang}`;
          const cached = translationCache.get(cacheKey);
          return cached ? { ...p, ...cached } as T : p;
        }));
      } catch (e) {
        if (!controller.signal.aborted) console.error("Translation fetch error:", e);
      } finally {
        if (!controller.signal.aborted) setTranslating(false);
      }
    };

    translate();

    return () => { controller.abort(); };
  }, [posts, lang]);

  return { translatedPosts, translating };
}
