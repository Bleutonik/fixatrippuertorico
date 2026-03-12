
export interface Boat {
  name: string;
  image: string;
  location: string;
  duration: string;
  slug: string;
  gallery: string[];
  description: string;
  included: string[];
  groupSize: string;
  cancellation: string;
  age: string;
  youtubeVideoId?: string;
  whatsappNumber?: string;
}

export interface ChefService {
  name: string;
  description: string;
  image: string;
}

export interface WellnessService {
  name: string;
  description: string;
  image: string;
}

export const boats: Boat[] = [
  {
    name: "Catamaran Jenica 47′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PORTADA-.jpg?ssl=1",
    location: "Fajardo",
    duration: "6 hours",
    slug: "catamaran-jenica-47",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Enjoy a beautiful day on our 47 foot Power Catamaran. You can choose to visit one of the many stunning locations that the east coast of Puerto Rico has to offer. You'll have the chance to explore the beautiful beaches and snorkel around Fajardo or Vieques. You can even learn to scuba on this trip if you prefer!",
    included: [
      "Air Conditioning",
      "Electric BBQ grill on the 5800, 514PC, and 433PC",
      "Music radio with Cockpit Speakers",
      "DVD / Flat Screen TV",
      "Fans in Saloon & Staterooms",
      "Bean Bags (x2 per yacht except in our Franchise partner bases)",
      "Floating water mat",
      "4 cabins, 4 bathrooms, dinner saloon, fully equipped kitchen, upper deck and lower deck seating.",
      "USCG Licensed Captain and crew",
      "Drinks- water, sodas, coffee, Top Shelf Rum and Vodka drinks, Local beer and Mimosas, red or white wine.",
      "Fruit platter, and cheese platter with chips and dip.",
    ],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-32_1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-29_1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-30_4.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-33.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-31_1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PHOTO-2026-01-31-15-35-32_4.jpg?ssl=1",
    ],
  },
  {
    name: "Catamaran Lagoon Luxury 42′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/PORTADA-1-2.jpg?ssl=1",
    location: "Fajardo",
    duration: "4 - 6 hours",
    slug: "lagoon-42",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Destinations:\n\n2 islands Icacos or Palomino\n\n2 islands Culebra or Vieques",
    included: [],
    youtubeVideoId: "vPuBkcuKaIc",
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/mrb19313_65f9a50f0bc08.webp?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/unnamed-file.webp?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/2020-lagoon-46-sail-9786601-20250508025053330-1_XLARGE.webp?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/2020-lagoon-46-sail-9786601-20250508025229847-1_XLARGE.webp?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/2020-lagoon-46-sail-9786601-20250508025256289-1_XLARGE.webp?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/cocina.webp?ssl=1",
    ],
  },
  {
    name: "Cruiser Yacht 54′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/PORTADA-.jpg?ssl=1",
    location: "Fajardo",
    duration: "6 / 8 hours",
    slug: "cruiser-yacht-54",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "All ages",
    description: "Experience the ultimate luxury on the water. Enjoy comfort, space, and style while exploring Puerto Rico's most beautiful islands.\n\n1/ Visit to Icacos and Palomino (6 hours)\n\n2/ Visit to Vieques o Culebra (8 hours)\n\n• Maximum 12 people",
    included: [
      "3 rooms / 2 bathrooms",
      "Sunchill water lounger",
      "Music system",
      "Air conditioning (A/C)",
      "Freshwater and bathroom on board",
    ],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.10-2.jpeg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.11-6.jpeg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.11-7.jpeg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.10-3.jpeg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.11-5.jpeg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-12-at-11.42.11-3.jpeg?ssl=1",
    ],
  },
  {
    name: "Double Dip Power Catamaran",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/07/PORTADA-.jpg?ssl=1",
    location: "Villa Marina",
    duration: "4 hours",
    slug: "double-dip-power-catamaran",
    groupSize: "30 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "### Snorkeling & Beach Tour in Fajardo\n\nJoin us for a memorable experience at Cordillera Cays Nature Reserve. On the first part of the excursion it includes the chance to snorkel and witness the beauty of tropical fishes as you explore the vibrant underwater world of Puerto Rico's live coral reef. Depending on the weather, our captain will take you to different reefs such as Tortugas Reef, Lobos Reef, Punta Aguila or Palominitos Reef for an hour of exploration. Don't miss the opportunity to discover the wonders of Icacos island.\n\nDuring our second stop at the beach, you will be able to swim, sunbathe, and enjoy a refreshing drink by the shore. As we anchor you'll find yourself surrounded by the beautiful crystal clear waters. Additionally, you will have the opportunity to explore the history of the island as our qualified trained team caters to your relaxation.",
    included: [
      "Amenities Aboard: Shaded Cabin, Cushion Seats, Private Restroom, Premium Sound System, Easy Access Ladder for Snorkeling and Swimming, Floating Mat, and Fresh Water Shower.",
      "Gear: Quality snorkeling gear and flotation devices. We disinfect all snorkel equipment following each use, but we encourage guests to bring their own snorkel gear when possible.",
    ],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/06/7.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/06/4-2.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/06/5-1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/06/6.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/06/3-4.jpg?ssl=1",
    ],
  },
  {
    name: "Grady White 30′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-9.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the Day",
    slug: "grady-white-30",
    groupSize: "6 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "**Capacity of up to 6 passengers |**\n\n**Length:** 30 ft",
    included: ["Snorkeling gear"],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/2-9.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-9.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/3-9.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/4-9.jpg?ssl=1",
    ],
  },
  {
    name: "Grady White 33′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-10.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the Day",
    slug: "grady-white-33",
    groupSize: "6 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "**Capacity of up to 6 passengers |**\n\n**Length:** 33 ft",
    included: ["Water", "Snorkeling gear"],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-10.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/2-10.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/3-10.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/4-10.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/5-8.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/6-4.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/7-1.jpg?ssl=1",
    ],
  },
  {
    name: "Luxury Sailing Catamaran 54′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/12/PORTADA-1.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "luxury-sailing-catamaran",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Experience the luxury of sailing on a 54 foot catamaran along the beautiful east coast of Puerto Rico. Visit stunning islands and enjoy crystal clear waters.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/12/PORTADA-1.jpg?ssl=1",
    ],
  },
  {
    name: "Marine Trader 42′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/PORTADA-600-x-400-px-3.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "marine-trader-42",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Enjoy a day on our classic Marine Trader 42 foot yacht. Perfect for exploring the islands of eastern Puerto Rico.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/PORTADA-600-x-400-px-3.jpg?ssl=1",
    ],
  },
  {
    name: "Neptunus Cabrio 60′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/1-5.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "neptunus-cabrio-60",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Experience the ultimate luxury on a 60 foot Neptunus Cabrio yacht. Spacious, comfortable, and perfect for exploring Puerto Rico's beautiful coastline.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/1-5.jpg?ssl=1",
    ],
  },
  {
    name: "Newton 48′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/PORTADA-1-2.jpg?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "newton-48",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "A classic 48 foot Newton yacht perfect for exploring the beautiful islands of eastern Puerto Rico.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/PORTADA-1-2.jpg?ssl=1",
    ],
  },
  {
    name: "Riviera 40′ Yacht",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px-1.png?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "riviera-40-yacht",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "Enjoy a luxurious day on a 40 foot Riviera yacht, exploring the stunning coastline and islands of Puerto Rico.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px-1.png?ssl=1",
    ],
  },
  {
    name: "Sea Ray 51′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/3.jpeg?ssl=1",
    location: "Puerto del Rey",
    duration: "During the day",
    slug: "sea-ray-51",
    groupSize: "12 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "**DESTINATIONS– Icacos y Palomino**\n\n**Capacity of up to 12 passengers | State Rooms 2 | Bathrooms 1**\n\n**Length:** 51 ft\n\n**12 people will charge an extra**",
    included: ["Floaties and Snorkle Masks"],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/2-14.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/14-1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/4-14.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/13-1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/12-1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/11-1.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/3-14.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-14.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/7-3.jpg?ssl=1",
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/5-11.jpg?ssl=1",
    ],
  },
  {
    name: "Wellcraft 30′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px.png?ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "wellcraft-30",
    groupSize: "6 pp",
    cancellation: "No Cancel",
    age: "___",
    description: "A versatile 30 foot Wellcraft boat perfect for day trips exploring the islands and reefs of eastern Puerto Rico.",
    included: [],
    gallery: [
      "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px.png?ssl=1",
    ],
  },
];

export const chefServices: ChefService[] = [
  {
    name: "Breakfast Service",
    description: "Fresh and tasty breakfast services, continental or hot. Drop off, buffet or plated service available.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Dinner Service",
    description: "Custom Caribbean dinner service. Buffet style or plated with optional servers and wine pairings. Menu designed per your request.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Lunch Service",
    description: "Lunch on the go or poolside at your villa. Choose from pre-packaged bag lunches delivered fresh to your villa or hot chef service served how you like it.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop",
  },
];

export const wellnessServices: WellnessService[] = [
  {
    name: "Massage",
    description: "Great for those with limited time or tension in specific areas. Unlike a full body massage, this service allows your therapist to focus solely on areas in need.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
  },
  {
    name: "Therapeutic Massage",
    description: "Release chronic patterns of tension and pain. Deeper pressure, slower massage strokes and cupping are utilized to facilitate flow of qi and blood.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    name: "Soothing Massage",
    description: "Banish stress and enjoy a fresh start. This service is designed to relax muscles, improve circulation and range of motion, and calm the nervous system.",
    image: "https://tse1.explicit.bing.net/th/id/OIP.H5cqhHeeBO2_NVjst4SVfgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Yoga",
    description: "Private and semi-private sessions are a great way to try yoga for the first time or to share the experience with loved ones. Address specific physical needs, personal goals, and discover modifications for poses that you can use in any yoga class no matter where you are.",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
  },
  {
    name: "Sound Therapy",
    description: "Close your eyes while listening to music, vibrations and magnetic stimulation to drift into a deep meditative state. Tune into your body's energy and rebalance with this deep and healing power nap session.",
    image: "https://tse4.mm.bing.net/th/id/OIP.1e4oCDkzMpYQI9_UHvzYvQHaEY?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Acupuncture",
    description: "This comprehensive service begins with a brief update on progress and your priority for the session, followed by insertion of tiny sterile needles along the acupuncture meridians. Known to be effective for neurological, musculo-skeletal, gynecological, digestive, respiratory, emotional and other conditions.",
    image: "https://tse2.mm.bing.net/th/id/OIP.Y7bIin25aVrYKR9E0PW5MQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Reiki",
    description: "It acts on the aura and chakras, and also helps to remove energy blockages or imbalances at different levels. A distance healing is performed when the person who requests it, for various reasons, either health or not being able to move, is not present with a healer.",
    image: "https://i0.wp.com/reikipsychics.com/wp-content/uploads/2021/06/Capture-1.jpg?fit=1252%2C699&ssl=1",
  },
  {
    name: "Astrology",
    description: "Astrology is a method of divination based on the map of the sky at the exact place and time of birth. It has been used for millennia to study the life of a person in all its aspects and to know its possibilities such as: life purpose, finances, health, relationships, spirituality, education, etc.",
    image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=800&q=80",
  },
  {
    name: "Tarot",
    description: "Taromancy is a divinatory art that uses 78 randomly chosen decks or cards to seek knowledge about past, present and future situations. By reading or interpreting the images and symbols on the cards, the taromancer answers specific questions from the client.",
    image: "https://tse3.mm.bing.net/th/id/OIP.5jSr27-sZM5LFK-pUUisNQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Numerology",
    description: "Numerology is a centuries-old divinatory art based on the teachings of Pythagoras. The father of mathematics believed that every word or name contains a number vibration and that every number has a meaning.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    name: "Energy Cleaning",
    description: "Energetic cleansings are used in different cultures to purify and/or bless people, objects or places. Usually, a ceremony with one or more of the four elements of nature – fire, earth, air or water – is carried out with a prayer. Each ceremony is specific to the need of the consultant, object or place to be purified or consecrated.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80",
  },
];
