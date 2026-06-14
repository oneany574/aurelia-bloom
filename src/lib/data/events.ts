import diningImg from "@/assets/dining.jpg";
import spaImg from "@/assets/spa.jpg";
import natureImg from "@/assets/nature.jpg";
import suiteImg from "@/assets/suite.jpg";
import ritualImg from "@/assets/ritual.jpg";
import saunaImg from "@/assets/sauna.jpg";
import heroImg from "@/assets/hero.jpg";

export type EventType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const eventTypes: EventType[] = [
  { id: "1", title: "Birthday Celebrations", description: "Cakes, candles, music and family — we make birthdays warm and memorable.", image: diningImg },
  { id: "2", title: "Family Gatherings", description: "Open space and friendly hospitality for reunions of every size.", image: spaImg },
  { id: "3", title: "Group Events", description: "Hosting school, college, club or community groups with comfort.", image: natureImg },
  { id: "4", title: "Cultural Programs", description: "A welcoming stage for cultural nights, dances and local celebrations.", image: suiteImg },
  { id: "5", title: "Private Celebrations", description: "An intimate venue for milestones, parties and personal events.", image: ritualImg },
  { id: "6", title: "Entertainment Nights", description: "Music, dance and resort vibes — designed for joyful evenings.", image: saunaImg },
  { id: "7", title: "Anniversary Events", description: "Make anniversaries special with curated dining and a peaceful setting.", image: heroImg },
  { id: "8", title: "Corporate / Local Programs", description: "Suitable for trainings, meetings and local programs.", image: diningImg },
];
