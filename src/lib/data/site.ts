export const siteConfig = {
  name: "Maya Devi Resort",
  tagline: "A warm escape for stays, food, swims and celebrations",
  phone: "+977 984-7062177",
  phoneRaw: "+9779847062177",
  foodOrderNumbers: ["9847062177", "9847062176", "9869789194"],
  email: "mayadeviresort@gmail.com",
  openingStatus: "Always open",
  deliveryTime: "11 AM – 6 PM",
  deliveryNote: "Free delivery",
  address: "Maya Devi Resort, Nepal",
  facebookUrl: "https://facebook.com/",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/stay", label: "Stay" },
  { to: "/food-delivery", label: "Food & Delivery" },
  { to: "/swimming-pool", label: "Pool" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
