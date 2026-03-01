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
  category: string;
  description: string;
  featured?: boolean;
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
    category: "adventure",
    description: "Visit El Yunque, the only tropical rainforest in the US National Forest System! A Puerto Rico must-stop. Get adventurous. Get off the road. Get off the paved trail! See something new and interesting as you explore the hidden depths of this natural wonder.",
    featured: true,
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
    category: "adventure",
    description: "Experience the thrill of natural waterslides and waterfalls in El Yunque, followed by relaxation at the beautiful Luquillo Beach.",
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
    category: "nature",
    description: "Explore the beauty of El Yunque National Forest in a guided half-day morning tour.",
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
    category: "adventure",
    description: "Feel the adrenaline rush as you ride through the trails of Luquillo on an ATV adventure.",
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
    category: "city-nightlife",
    description: "Walk through the colorful streets of Old San Juan and discover centuries of history.",
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
    category: "nature",
    description: "Witness the magical glow of the bioluminescent bay in Fajardo, one of the brightest in the world.",
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
    category: "nature",
    description: "The complete bioluminescent bay experience with round-trip transportation included.",
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
    category: "boat-trips",
    description: "Sail to Culebra Island and enjoy its pristine beaches and amazing snorkeling.",
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
    category: "boat-trips",
    description: "Set sail on a catamaran to the beautiful Icacos island for beach time and snorkeling.",
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
    category: "boat-trips",
    description: "Explore the beautiful beaches and waters of Vieques Island on this half-day adventure.",
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
    category: "foodie-culture",
    description: "Taste the finest Puerto Rican rum at the legendary Barrilito distillery.",
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
    text: "Amazing experience! The tour guide was incredibly knowledgeable and made El Yunque come alive. Highly recommend the Off the Beaten Path tour!",
    rating: 5,
    tour: "Off the Beaten Path @ Yunque Rainforest",
  },
  {
    id: "2",
    name: "James K.",
    text: "The bioluminescent bay was out of this world! One of the most magical experiences of my life. Fix a Trip made it so easy to book.",
    rating: 5,
    tour: "Bioluminescent Bay Experience",
  },
  {
    id: "3",
    name: "Maria L.",
    text: "Culebra Island was paradise! Crystal clear waters, amazing snorkeling, and a wonderful crew. Worth every penny!",
    rating: 5,
    tour: "Culebra Island Beach & Snorkel",
  },
];
