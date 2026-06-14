import suiteImg from "@/assets/suite.jpg";
import spaImg from "@/assets/spa.jpg";
import saunaImg from "@/assets/sauna.jpg";
import ritualImg from "@/assets/ritual.jpg";

export type Room = {
  id: string;
  name: string;
  description: string;
  capacity: string;
  amenities: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description: "Cozy, comfortable, and quiet — ideal for solo travelers or couples seeking a restful stay.",
    capacity: "2 guests",
    amenities: ["Private bath", "Wi-Fi", "Resort access", "Parking"],
    image: suiteImg,
  },
  {
    id: "family",
    name: "Family Room",
    description: "Spacious rooms designed for families with extra beds and a warm, welcoming layout.",
    capacity: "4 guests",
    amenities: ["Family beds", "Private bath", "Pool access", "Food service"],
    image: spaImg,
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Upgraded comfort with refined interiors, premium bedding, and a peaceful resort view.",
    capacity: "2–3 guests",
    amenities: ["King bed", "Resort view", "Premium linens", "Pool access"],
    image: saunaImg,
  },
  {
    id: "group",
    name: "Group Stay Package",
    description: "A custom package for friends, group trips and gatherings — book together, stay together.",
    capacity: "6+ guests",
    amenities: ["Multiple rooms", "Event access", "Custom meals", "Group rates"],
    image: ritualImg,
  },
];

export const stayAmenities = [
  "Comfortable rooms",
  "Family-friendly environment",
  "Food service",
  "Parking",
  "Event access",
  "Pool access",
  "Peaceful resort environment",
];
