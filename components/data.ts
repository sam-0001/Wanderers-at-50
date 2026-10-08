// All copy and image paths live here. Swap /images/*.jpg for real photos (e.g. /images/hero.jpg).

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#story" },
  { label: "Journeys", href: "#journeys" },
  { label: "Gallery", href: "#gallery" },
  { label: "Travel Tips", href: "#tips" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "28+", label: "Countries" },
  { value: "4", label: "Continents" },
  { value: "50+", label: "Years of Wonder" },
  { value: "73+", label: "Days on the Silk Route" },
];

export const journeys = [
  {
    n: "01",
    title: "The Great Silk Route & Caucasus Odyssey",
    text: "Tracing the footsteps of merchants and mystics through Kazakhstan, Uzbekistan, Armenia and Georgia.",
    img: "/images/silk-route.jpg",
  },
  {
    n: "02",
    title: "Whispers of India",
    text: "A journey through India's timeless landscapes, living traditions and enduring heritage.",
    img: "/images/whispers-india.jpg",
  },
  {
    n: "03",
    title: "Indianization of South and Southeast Asia",
    text: "Traveling through the timeless legacy of Indian civilization across Asia and beyond.",
    img: "/images/indianization.jpg",
  },
];

// x / y are positions inside a 540 x 260 box
export const routeStops = [
  { name: "Astana", country: "Kazakhstan", img: "/images/node-astana.jpg", x: 95, y: 62, label: "top" },
  { name: "Uzbekistan", country: "Samarkand", img: "/images/node-samarkand.jpg", x: 185, y: 150, label: "bottom" },
  { name: "Armenia", country: "Yerevan", img: "/images/node-yerevan.jpg", x: 335, y: 112, label: "bottom" },
  { name: "Georgia", country: "Tbilisi", img: "/images/node-tbilisi.jpg", x: 480, y: 118, label: "bottom" },
] as const;

export const values = [
  { n: "01.", title: "Travel Slowly" },
  { n: "02.", title: "Engage Deeply" },
  { n: "03.", title: "Respect History" },
];

export const regions = [
  { name: "North India", img: "/images/north-india.jpg" },
  { name: "South India", img: "/images/south-india.jpg" },
  { name: "West India", img: "/images/west-india.jpg" },
  { name: "East India", img: "/images/east-india.jpg" },
];

export const tips = [
  { n: "01", title: "Visas & Border Crossings" },
  { n: "02", title: "Rail & Logistics" },
  { n: "03", title: "Currency & Finance" },
  { n: "04", title: "Cultural Etiquette" },
  { n: "05", title: "Health & Food" },
  { n: "06", title: "Packing Essentials" },
];

export const contact = {
  location: "New Delhi, India",
  email: "wanderersat50@gmail.com",
};
