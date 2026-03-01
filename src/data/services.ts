export interface Boat {
  name: string;
  image: string;
  location: string;
  duration: string;
  slug: string;
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
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2026/01/PORTADA-.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "6 hours",
    slug: "catamaran-jenica-47",
  },
  {
    name: "Catamaran Lagoon Luxury 42′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/05/PORTADA-1-2.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "4 - 6 hours",
    slug: "lagoon-42",
  },
  {
    name: "Cruiser Yacht 54′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/PORTADA-.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "6 / 8 hours",
    slug: "cruiser-yacht-54",
  },
  {
    name: "Double Dip Power Catamaran",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/07/PORTADA-.jpg?fit=600%2C400&ssl=1",
    location: "Villa Marina",
    duration: "4 hours",
    slug: "double-dip-power-catamaran",
  },
  {
    name: "Grady White 30′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-9.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the Day",
    slug: "grady-white-30",
  },
  {
    name: "Grady White 33′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/1-10.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the Day",
    slug: "grady-white-33",
  },
  {
    name: "Luxury Sailing Catamaran 54′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2024/12/PORTADA-1.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "luxury-sailing-catamaran",
  },
  {
    name: "Marine Trader 42′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/PORTADA-600-x-400-px-3.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "marine-trader-42",
  },
  {
    name: "Neptunus Cabrio 60′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/1-5.jpg?fit=675%2C450&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "neptunus-cabrio-60",
  },
  {
    name: "Newton 48′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/02/PORTADA-1-2.jpg?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "newton-48",
  },
  {
    name: "Riviera 40′ Yacht",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px-1.png?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "riviera-40-yacht",
  },
  {
    name: "Sea Ray 51′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/10/3.jpeg?fit=600%2C400&ssl=1",
    location: "Puerto del Rey",
    duration: "During the day",
    slug: "sea-ray-51",
  },
  {
    name: "Wellcraft 30′",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/PORTADA-600-x-400-px.png?fit=600%2C400&ssl=1",
    location: "Fajardo",
    duration: "During the day",
    slug: "wellcraft-30",
  },
];

export const chefServices: ChefService[] = [
  {
    name: "Breakfast Service",
    description: "Fresh and tasty breakfast services, continental or hot. Drop off, buffet or plated service available.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-410-x-410-px.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Dinner Service",
    description: "Custom Caribbean dinner service. Buffet style or plated with optional servers and wine pairings. Menu designed per your request.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/1.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Lunch Service",
    description: "Lunch on the go or poolside at your villa. Choose from pre-packaged bag lunches delivered fresh to your villa or hot chef service served how you like it.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/2.png?fit=1024%2C1024&ssl=1",
  },
];

export const wellnessServices: WellnessService[] = [
  {
    name: "Massage",
    description: "Great for those with limited time or tension in specific areas. Unlike a full body massage, this service allows your therapist to focus solely on areas in need.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/1.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Therapeutic Massage",
    description: "Release chronic patterns of tension and pain. Deeper pressure, slower massage strokes and cupping are utilized to facilitate flow of qi and blood.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/2.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Soothing Massage",
    description: "Banish stress and enjoy a fresh start. This service is designed to relax muscles, improve circulation and range of motion, and calm the nervous system.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/3.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Yoga",
    description: "Private and semi-private sessions are a great way to try yoga for the first time or to share the experience with loved ones. Address specific physical needs and personal goals.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/4.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Sound Therapy",
    description: "Close your eyes while listening to music, vibrations and magnetic stimulation to drift into a deep meditative state. Tune into your body's energy and rebalance.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/5.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Acupuncture",
    description: "This comprehensive service begins with a brief update on progress and your priority for the session, followed by insertion of tiny sterile needles along the acupuncture meridians.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/6.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Reiki",
    description: "It acts on the aura and chakras, and also helps to remove energy blockages or imbalances at different levels.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/7.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Astrology",
    description: "Astrology is a method of divination based on the map of the sky at the exact place and time of birth. It has been used for millennia to study life in all its aspects.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/8.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Tarot",
    description: "Taromancy is a divinatory art that uses 78 randomly chosen decks or cards to seek knowledge about past, present and future situations.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/9.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Numerology",
    description: "Numerology is a centuries-old divinatory art based on the teachings of Pythagoras. The father of mathematics believed that every word or name contains a number vibration.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/10.png?fit=1024%2C1024&ssl=1",
  },
  {
    name: "Energy Cleaning",
    description: "Energetic cleansings are used in different cultures to purify and/or bless people, objects or places. Usually, a ceremony with one or more elements of nature is carried out.",
    image: "https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/11/11.png?fit=1024%2C1024&ssl=1",
  },
];
