export type Reward = {
  id: string;
  title: string;
  amount: number;
  /** Placeholder copy — swap in the real reward description. */
  description: string;
  backers: number;
  estimatedDelivery: string;
  shipsTo?: string;
  items: string[];
};

const PLACEHOLDER =
  "Placeholder description. Replace this string in lib/rewards.ts with the copy for this reward tier — a short paragraph describing what the backer receives at this level.";

export const rewards: Reward[] = [
  {
    id: "empty-chair",
    title: "THE EMPTY CHAIR",
    amount: 1,
    description: PLACEHOLDER,
    backers: 2,
    estimatedDelivery: "Sep 2026",
    items: ["Exclusive Backer Updates"],
  },
  {
    id: "finger-out-of-my-face",
    title: "GET YOUR FINGER OUT OF MY FACE",
    amount: 5,
    description: PLACEHOLDER,
    backers: 3,
    estimatedDelivery: "Sep 2026",
    items: ["Digital Backer Wall", "Exclusive Backer Updates"],
  },
  {
    id: "tears-for-the-pillow",
    title: "SAVE YOUR TEARS FOR THE PILLOW",
    amount: 15,
    description: PLACEHOLDER,
    backers: 8,
    estimatedDelivery: "Nov 2026",
    items: [
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "everyones-replaceable",
    title: "EVERYONE'S REPLACEABLE",
    amount: 25,
    description: PLACEHOLDER,
    backers: 18,
    estimatedDelivery: "Nov 2026",
    items: [
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "second-place",
    title: "SECOND PLACE IS THE FIRST TO LOSE",
    amount: 50,
    description: PLACEHOLDER,
    backers: 19,
    estimatedDelivery: "Feb 2027",
    shipsTo: "Anywhere in the world",
    items: [
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Cast Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "moms-better-have-my-money",
    title: "MOMS BETTER HAVE MY MONEY",
    amount: 100,
    description: PLACEHOLDER,
    backers: 18,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "youre-on-the-pyramid",
    title: "YOU'RE ON THE PYRAMID",
    amount: 250,
    description: PLACEHOLDER,
    backers: 9,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "Backer Pyramid",
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "nationals",
    title: "NATIONALS",
    amount: 500,
    description: PLACEHOLDER,
    backers: 8,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "Two VIP Tickets",
      "Backer Pyramid",
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "the-viewing-room",
    title: "THE VIEWING ROOM",
    amount: 1000,
    description: PLACEHOLDER,
    backers: 1,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "Rehearsal Invitation with Q&A",
      "Exclusive Merch Box",
      "Two VIP Tickets",
      "Backer Pyramid",
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "pyramid-royalty",
    title: "PYRAMID ROYALTY",
    amount: 2500,
    description: PLACEHOLDER,
    backers: 1,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "Signed Script and Top of Backer Pyramid",
      "Rehearsal Invitation with Q&A",
      "Exclusive Merch Box",
      "Two VIP Tickets",
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
  {
    id: "i-was-there",
    title: "I WAS THERE",
    amount: 5000,
    description: PLACEHOLDER,
    backers: 1,
    estimatedDelivery: "Jan 2028",
    shipsTo: "Anywhere in the world",
    items: [
      "ULTIMATE VIP EXPERIENCE",
      "Personalized Video",
      "Signed Script and Top of Backer Pyramid",
      "Exclusive Merch Box",
      "Rehearsal Invitation with Q&A",
      "Two VIP Tickets",
      "Poster Signed by Pyramid Cast",
      "Exclusive T-Shirt",
      "Advance Ticket Access",
      "Early Album Access",
      "Digital Backer Wall",
      "Exclusive Backer Updates",
    ],
  },
];

export function formatAmount(amount: number) {
  return amount.toLocaleString("en-US");
}
