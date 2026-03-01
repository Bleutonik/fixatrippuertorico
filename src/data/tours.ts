export interface Tour {
  id: string;
  name: string;
  slug: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  ratingCount?: number;
  age: string;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  highlights: string[];
  experience: string;
  included: string[];
  notIncluded: string[];
  featured?: boolean;
  itemCode?: string;
  fareHarborItemId?: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
}

export interface PopularPlace {
  name: string;
  slug: string;
  image: string;
  tourCount: number;
}

export const tours: Tour[] = [
  {
    id: "1",
    name: "Off the Beaten Path @ Yunque Rainforest",
    slug: "off-the-beaten-path-yunque-rainforest",
    price: 85,
    duration: "7 Hours",
    location: "Ceiba",
    rating: 5,
    ratingCount: 456,
    age: "+8",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2024/10/1-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2024/10/4.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2024/10/1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2024/10/1-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2024/10/1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2024/10/2.jpg",
    ],
    category: "adventure",
    description: "Immerse yourself in nature with this action-packed, small-group tour to El Yunque, the only tropical rainforest in the U.S. National Forest System. This is not just a sightseeing trip; it is an active adventure designed for those ready to hike, swim, and play in the heart of the jungle.",
    highlights: [
      "Natural Water Park: Slide down natural waterslides, jump off a cliff, and swing from a rope in the Rio Fajardo area.",
      "Active Hiking: Embark on a moderate to difficult hike through the lush forest, learning about unique flora and fauna along the way.",
      "Small Group Experience: Enjoy a more personalized and intimate connection with nature.",
      "Convenient Transport: Travel in comfort in an air-conditioned vehicle (Pickup included, or bring your own rental car).",
    ],
    experience: "Your journey begins with a drive from San Juan to the lush landscapes of El Yunque Rainforest. Prepare for a physical adventure as we take on a moderate to difficult hike. As you traverse the forest trails, your guide will share fascinating details about the ecosystem's diverse plants and wildlife. The reward for your effort is the Rio Fajardo area, a natural playground hidden within the trees. Here, the adrenaline kicks in. You can slide down smooth rock waterslides, test your courage jumping from a cliff, or launch yourself into the water from a rope swing.",
    included: ["Tour guide"],
    notIncluded: ["Meals and gratuity which is greatly appreciated for our guides."],
    featured: true,
    itemCode: "04-156",
  },
  {
    id: "2",
    name: "Waterfall & Waterslide Rainforest Adventure + Luquillo Beach",
    slug: "yunque-rainforest-adventure-luquillo-beach",
    price: 65,
    duration: "5 Hours",
    location: "El Yunque",
    rating: 5,
    age: "+4",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-1-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/1-1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/7.jpg",
    ],
    category: "adventure",
    description: "Get ready for an exhilarating experience like no other at Las Paylas, a locally coveted natural playground. This tour invites you to slide, swim, and explore a \"natural waterpark\" tucked away in the rainforest foothills. With something for every level of adventurer, it is the perfect off-the-beaten-path escape.",
    highlights: [
      "Natural Waterslides: Feel the rush of sliding down two smooth rock formations carved by the river.",
      "Hidden Gems: Discover a secret waterfall and a cave hidden within the landscape.",
      "Natural Pools: Relax in refreshing river pools surrounded by lush nature.",
      "Local Favorite: Enjoy an authentic spot outside the ticketed National Forest system (less crowds, more fun).",
    ],
    experience: "This 5-hour adventure takes you to a place beloved by locals. Las Paylas offers a unique thrill: sliding down natural rock slides directly into refreshing river pools. Whether you are an adrenaline junkie or just looking to cool off, the natural geology provides endless fun. Beyond the slides, the area is ripe for exploration. You can swim in the natural pool, find the hidden waterfall, or explore the small cave formations. Note: This adventure takes place in the beautiful outskirts of the rainforest and does not enter the ticketed section of El Yunque National Forest managed by the U.S. Forest Service, offering a more exclusive and accessible experience.",
    included: ["Air-conditioned vehicle", "Waterfall, natural waterslide, and walk-through El Yunque Rainforest", "Swimming and shopping at Luquillo Beach \"Kioskos\"", "Local guide", "Local food options are available for an additional cost"],
    notIncluded: ["Tips"],
    itemCode: "141-5853",
  },
  {
    id: "3",
    name: "Half Day Yunque National Forest Park AM",
    slug: "half-day-rainforest-tour-am",
    price: 80,
    duration: "4 Hours",
    location: "Yunque",
    rating: 5,
    age: "+6",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-11-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/3-12.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-12.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/1-12.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-10.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-11.jpg",
    ],
    category: "nature",
    description: "Experience the best of nature on our El Yunque Half Day Tour. You can't miss the chance to explore the only tropical rainforest in the U.S. National Forest system. This immersive journey covers 28,000 acres of lush nature. We take you over 2,000 feet above sea level for incredible views, hiking, and a refreshing river swim.",
    highlights: [
      "Yokahu Tower: Climb this observation tower for a panoramic view of the entire forest and coastline.",
      "La Coca Waterfall: Marvel at this spectacular 150-foot fall, a perfect location for pictures.",
      "River Swim: Enjoy a refreshing dip in a natural river pool after a short hike.",
      "Wildlife Spotting: Keep an eye out for mongoose, lizards, and tropical birds inhabiting the forest.",
    ],
    experience: "Your El Yunque Half Day Tour begins as we drive up the mountain. We ascend over 2,000 feet into the heart of the forest. The scenery gets better with every turn. First, we reach Yokahu Tower, where you stop to enjoy sweeping panoramic views of the forest canopy. Next, we visit La Coca Waterfall. This 150-foot fall is a natural oasis tucked within the forest. It boasts flowing water and scenery that makes for gorgeous photos. To complete the experience, we embark on a managed 15-20 minute walk on a nature trail. This path leads to a pristine river. Here, you can take a nice swim and cool off in the fresh water before we head back.",
    included: ["Transport"],
    notIncluded: ["Gratuity"],
  },
  {
    id: "4",
    name: "ATV Adventure Puerto Rico",
    slug: "atv-puerto-rico",
    price: 80,
    duration: "1 Hour",
    location: "Luquillo",
    rating: 5,
    age: "+16",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-min-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-min.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/3-min.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-min.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/6-min.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-min.jpg",
    ],
    category: "adventure",
    description: "Rev your engine for the best ATV Adventure Puerto Rico has to offer. This adrenaline-pumping journey takes you through the stunning foothills of El Yunque National Forest. Whether you choose a one-hour sprint or a two-hour expedition, this ride offers the perfect mix of horsepower and nature on the east coast.",
    highlights: [
      "Powerful 600cc ATVs: Tackle rugged terrain on high-performance vehicles designed for the rainforest.",
      "Scenic Rainforest Trails: Roam through towering trees, climb hills, and enjoy spectacular views of the coast.",
      "Mameyes River Swim: Stop for a refreshing dip in pure, crystal-clear waters (sourced directly from the rainforest).",
      "Beginner Friendly: No prior experience is needed. We include a full safety briefing and instruction.",
    ],
    experience: "Your ATV Adventure Puerto Rico begins with a warm welcome. We provide a 10-minute introduction and safety briefing. Our experienced guides teach you how to operate the powerful 600cc ATV. This ensures you feel confident and safe before the tires hit the dirt. Once you are geared up, the real excitement begins! You will navigate through the lush landscape and tread through creeks. The route allows you to coast over the vast, rugged terrain of the rainforest foothills. Midway through the journey, enjoy a unique pause at the Mameyes River. This river flows directly from El Yunque. It offers water that is pure, clean, and crystal-clear.",
    included: ["Helmet (mandatory at all times during the tour)"],
    notIncluded: ["Tips"],
  },
  {
    id: "5",
    name: "Old San Juan Historical Walking Trip",
    slug: "old-san-juan-historical-walking-trip",
    price: 45,
    duration: "2 Hours",
    location: "Plaza Colon",
    rating: 5,
    age: "All Ages",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/6-1-600x400.png",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/1-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/8-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/9-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/6-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/7-1.png",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-1.png",
    ],
    category: "city-nightlife",
    description: "Stroll through history in a 500-year-old landmark! Old San Juan is a \"must-do\" for any visitor to Puerto Rico. This tour invites you to discover the magical feeling of a colorful, vibrant city known for its impressive forts, architecture, and charm, where the old and the new dance together in perfect harmony.",
    highlights: [
      "500 Years of History: Explore the rich heritage of one of the oldest cities in the Americas.",
      "Blue Cobblestones: Walk the iconic streets that make Old San Juan famous.",
      "Expert Storytelling: Our knowledgeable guides share fun facts and cool stories about how the city came to be.",
      "Social Media Ready: Take hundreds of pictures and videos that are sure to be the envy of your friends back home.",
    ],
    experience: "Discover this city's amazing history led by guides who bring the past to life through captivating storytelling. As you walk on the famous blue cobblestones, you will soak up the sun and the unique atmosphere where locals and tourists come together. From the impressive colonial architecture to the vibrant street life, every corner offers a new surprise. This is not just a history lesson; it is an immersion into the soul of Puerto Rico. Be sure to have your camera ready—the colorful buildings and historic landmarks provide the perfect backdrop for social media-worthy photos and videos.",
    included: ["Bilingual expert guide", "2 hr. walking experience of Old San Juan"],
    notIncluded: ["Tips"],
    itemCode: "141-5857",
  },
  {
    id: "6",
    name: "Bioluminescent Bay Experience",
    slug: "bioluminescent-bay-experience",
    price: 59,
    duration: "2 Hours",
    location: "Fajardo",
    rating: 5,
    age: "+6",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-6-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/1-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/6-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/4-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/3-6.jpg",
    ],
    category: "nature",
    description: "Bring excitement to your vacation with our magical Laguna Grande Bio Bay Kayaking tour in Fajardo. This eco-adventure takes you into the protected waters of the reserve. Here, you can witness one of nature's most fascinating phenomena: bioluminescence.",
    highlights: [
      "The Glowing Effect: Paddle through waters inhabited by dinoflagellates. These microscopic organisms produce a glow when stirred.",
      "Night Kayaking: Navigate through the serene mangrove forest under the stars.",
      "Inclusive Adventure: We feature an Adaptive Paddling Program and wheelchair-accessible adaptations.",
      "Eco-Focused: This is a true eco-adventure designed specifically for outdoor enthusiasts and nature lovers.",
    ],
    experience: "Your Laguna Grande Bio Bay Kayaking journey begins with a lesson for beginners. This ensures everyone feels comfortable on the water. We provide all necessary gear, including kayak rentals and US Coast Guard Approved life jackets. Once ready, you will board safe, two-person sit-on-top kayaks and follow your certified guides into the reserve. As you paddle through the mangrove channels, you will learn about this unique ecosystem. Our guides provide live commentary in both English and Spanish. The highlight of the night is seeing the water come to life; watch closely as it glows when stirred by your paddles.",
    included: ["Guided Night Kayaking Eco-Adventure at the Bioluminescent Bay of Laguna Grande Mangrove Reserve"],
    notIncluded: ["Gratuity", "Mosquito repellent is not provided", "Waterproof cell phone pouches are not provided"],
  },
  {
    id: "7",
    name: "Bioluminescent Bay Experience with Transportation",
    slug: "bioluminescent-bay-experience-transport",
    price: 100,
    duration: "2 Hours",
    location: "Fajardo",
    rating: 5,
    age: "+6",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-6-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/1-6.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/5-6.jpg",
    ],
    category: "nature",
    description: "The complete Laguna Grande Bio Bay Kayaking experience with round-trip transportation included from the San Juan area. Enjoy the same magical bioluminescent adventure without worrying about getting there.",
    highlights: [
      "Round-trip transportation from San Juan area included.",
      "Paddle through glowing bioluminescent waters at night.",
      "Navigate the serene mangrove forest under the stars.",
      "All kayaking gear and life jackets provided.",
    ],
    experience: "This is the same incredible Laguna Grande Bio Bay Kayaking experience, but with the added convenience of round-trip transportation from the San Juan area. After being picked up, you'll be taken to Fajardo where your kayaking adventure awaits. Paddle through the glowing waters and witness one of nature's most fascinating phenomena.",
    included: ["Round-trip transportation from San Juan area", "Guided Night Kayaking at the Bioluminescent Bay"],
    notIncluded: ["Gratuity", "Mosquito repellent", "Waterproof cell phone pouches"],
  },
  {
    id: "8",
    name: "Culebra Island Beach & Snorkel",
    slug: "beach-snorkel-dive-tour-to-culebra-island-puerto-rico",
    price: 165,
    duration: "6 Hours",
    location: "Fajardo Marina",
    rating: 5,
    age: "+6",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/culebra-1-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/9-2.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/8-2.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/3-11.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/2-11.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/culebra-1.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/11.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/12.jpg",
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/10.jpg",
    ],
    category: "boat-trips",
    description: "Embark on an unforgettable Culebra Snorkeling & Beach Tour aboard our sleek and spacious 46-foot Newton powerboat. This is more than just a day trip. It is an exclusive escape to Culebra's pristine reefs and beaches. We offer a serene experience with fewer crowds and an authentic connection to nature.",
    highlights: [
      "Snorkel with Turtles: Swim alongside graceful sea turtles and tropical fish in crystal-clear waters.",
      "Iconic Beaches: Visit the world-famous Flamenco Beach (or stunning alternatives depending on sea conditions).",
      "Premium Vessel: Enjoy the comfort of a spacious 46-foot Newton powerboat designed for relaxation.",
      "All-Inclusive Hospitality: We include top-quality snorkeling gear, a fresh deli buffet, and refreshing drinks.",
    ],
    experience: "Your adventure begins as we transport you to the untouched beauty of Culebra Island. Unlike crowded tours, our 46-foot Newton Powerboat offers a sense of exclusivity. The first part of your journey dives into the vibrant underwater ecosystem. In high-visibility waters, you can witness a spectacle of life. This includes rainbow-colored tropical fish, thriving coral reefs, and sea turtles gliding through the deep. After exploring the ocean, it is time to relax on land. We aim to take you to the iconic Flamenco Beach, consistently ranked among the world's best.",
    included: ["Quality snorkeling gear (mask & snorkel, fins & flotation devices)", "Snorkel & Dive instructions & orientation for beginners", "Professional Guide Paddle Boards", "Ecological interpretation about the surroundings, marine life and history of Culebra"],
    notIncluded: ["Cash for the DRNA fee", "Gratuity"],
  },
  {
    id: "9",
    name: "Icacos Morning Sailing Catamaran Beach & Snorkel Tour",
    slug: "cordillera-cays-sailing-catamaran-beach-snorkeling-tour",
    price: 115,
    duration: "5 Hours",
    location: "Villa Marina, Fajardo",
    rating: 5,
    age: "+4",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/2-7-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2026/01/2-7.jpg",
    ],
    category: "boat-trips",
    description: "Set sail on a catamaran to the beautiful Icacos island for a morning of beach relaxation and world-class snorkeling. Enjoy the turquoise waters and white sand beaches of one of Puerto Rico's most stunning uninhabited islands.",
    highlights: [
      "Sailing Catamaran: Enjoy a smooth, scenic sail to Icacos Island.",
      "Pristine Snorkeling: Explore vibrant coral reefs and tropical marine life.",
      "Beach Relaxation: Spend time on a stunning uninhabited island with crystal-clear waters.",
      "Morning Departure: Beat the crowds with an early morning start.",
    ],
    experience: "Board a beautiful sailing catamaran and set off from Villa Marina in Fajardo toward the stunning Icacos Island. The sail itself is an experience, with panoramic views of the coastline and surrounding cays. Upon arrival, you'll have time to snorkel in the vibrant coral reefs, relax on the pristine white sand beaches, and enjoy the tranquility of this uninhabited paradise.",
    included: ["Catamaran sailing", "Snorkeling gear", "Beach time on Icacos Island"],
    notIncluded: ["Gratuity"],
  },
  {
    id: "10",
    name: "Vieques Island Beach & Snorkel (1/2 Day)",
    slug: "vieques-island-snorkel-beach-tour",
    price: 120,
    duration: "4 Hours",
    location: "Ceiba",
    rating: 5,
    age: "+6",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/PORTADA-600-x-400-px-5-600x400.webp",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2026/01/PORTADA-600-x-400-px-5.webp",
    ],
    category: "boat-trips",
    description: "Explore the beautiful beaches and pristine waters of Vieques Island on this half-day snorkeling and beach adventure. Discover one of Puerto Rico's most treasured island destinations with crystal-clear waters and vibrant marine life.",
    highlights: [
      "Vieques Island: Visit one of Puerto Rico's most beautiful island destinations.",
      "Snorkeling: Explore vibrant underwater ecosystems.",
      "Beach Time: Relax on pristine, uncrowded beaches.",
      "Half-Day Format: Perfect for those with limited time.",
    ],
    experience: "Depart from Ceiba and head to the stunning Vieques Island. This half-day adventure gives you the best of island life—snorkeling in crystal-clear waters teeming with tropical fish and relaxing on beautiful beaches that feel like your own private paradise.",
    included: ["Boat transportation to Vieques", "Snorkeling gear"],
    notIncluded: ["Gratuity", "Food and drinks"],
  },
  {
    id: "11",
    name: "Barrilito Rum Distillery Tasting Tour",
    slug: "barrilito-rum-distilery-tasting-tour",
    price: 80,
    duration: "1 Hour",
    location: "San Juan",
    rating: 5,
    age: "+18",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/Rum-600x400.jpg",
    gallery: [
      "https://fixatrippuertorico.com/wp-content/uploads/2025/12/Rum.jpg",
    ],
    category: "foodie-culture",
    description: "Taste the finest Puerto Rican rum at the legendary Barrilito distillery in San Juan. Learn about the craft and tradition behind one of Puerto Rico's most celebrated artisanal rums during this exclusive tasting experience.",
    highlights: [
      "Artisanal Rum: Taste Barrilito's award-winning, craft-distilled rum.",
      "Distillery Tour: See the production process up close.",
      "Expert Guidance: Learn from knowledgeable rum experts about the history and craft.",
      "San Juan Location: Conveniently located in the heart of the city.",
    ],
    experience: "Visit the legendary Barrilito distillery in San Juan for an intimate tasting experience. You'll learn about the history and craft behind one of Puerto Rico's most sought-after artisanal rums while sampling their award-winning spirits. This is a must-do for any rum enthusiast or foodie visiting the island.",
    included: ["Rum tasting", "Distillery tour"],
    notIncluded: ["Transportation", "Gratuity"],
  },
];

export const categories: Category[] = [
  {
    name: "Adventure",
    slug: "adventure",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/ADVENTURE-600x400.jpg",
  },
  {
    name: "Boat Trips",
    slug: "boat-trips",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/BOAT-TRIPS-600x400.jpg",
  },
  {
    name: "City / Nightlife",
    slug: "city-nightlife",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/CITY-_-NIGHLIFE-600x400.jpg",
  },
  {
    name: "Foodie / Culture & History",
    slug: "foodie-culture",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/FOODIE-600x400.jpg",
  },
  {
    name: "Nature",
    slug: "nature",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/NATURE-600x400.jpg",
  },
];

export const popularPlaces: PopularPlace[] = [
  {
    name: "Luquillo",
    slug: "luquillo",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/luquilo.webp",
    tourCount: 1,
  },
  {
    name: "Vieques",
    slug: "vieques",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/vieques.jpg",
    tourCount: 1,
  },
  {
    name: "Icacos",
    slug: "icacos",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/icacos.webp",
    tourCount: 5,
  },
  {
    name: "Old San Juan",
    slug: "san-juan",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/san-juan.webp",
    tourCount: 9,
  },
  {
    name: "Yunque",
    slug: "yunque",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/vieques.webp",
    tourCount: 10,
  },
  {
    name: "Culebra",
    slug: "culebra",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2026/01/culebra.webp",
    tourCount: 1,
  },
  {
    name: "Fajardo",
    slug: "fajardo",
    image: "https://fixatrippuertorico.com/wp-content/uploads/2025/12/fajardo.jpg",
    tourCount: 8,
  },
];

export const reviews = [
  {
    id: "1",
    name: "Sarah M.",
    text: "Amazing experience! The tour guide was incredibly knowledgeable and made El Yunque come alive. The natural waterslides were so much fun. Highly recommend the Off the Beaten Path tour!",
    rating: 5,
    tour: "Off the Beaten Path @ Yunque Rainforest",
  },
  {
    id: "2",
    name: "James K.",
    text: "The bioluminescent bay was out of this world! One of the most magical experiences of my life. The kayaking through the mangroves at night was surreal. Fix a Trip made it so easy to book.",
    rating: 5,
    tour: "Bioluminescent Bay Experience",
  },
  {
    id: "3",
    name: "Maria L.",
    text: "Culebra Island was paradise! Crystal clear waters, amazing snorkeling with sea turtles, and a wonderful crew on the powerboat. The deli buffet was a nice touch. Worth every penny!",
    rating: 5,
    tour: "Culebra Island Beach & Snorkel",
  },
];
