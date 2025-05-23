import { CabinClass } from "@/types/types";

export const cabinClassData: CabinClass[] = [
  {
    title: "Economy Class",
    image: "/img/cabin-class/economy.jpg",
    link: "/economy-class",
    features: [
      "Affordable fares",
      "Complimentary snacks",
      "Standard in-flight entertainment",
    ],
  },
  {
    title: "Premium Class",
    image: "/img/cabin-class/premium.jpg",
    link: "/premium-class",
    features: [
      "Wider seats and more legroom",
      "Extra baggage allowance",
      "Enhanced in-flight entertainment",
    ],
  },
  {
    title: "Business Class",
    image: "/img/cabin-class/business.jpg",
    link: "/business-class",
    features: [
      "Priority boarding",
      "Reclining seats with extra legroom",
      "Exclusive gourmet meals",
    ],
  },
  {
    title: "First Class",
    image: "/img/cabin-class/first.jpg",
    link: "/first-class",
    features: [
      "Private suites (on select routes)",
      "Luxury seating with full recline",
      "Personalized fine dining",
    ],
  },
];
