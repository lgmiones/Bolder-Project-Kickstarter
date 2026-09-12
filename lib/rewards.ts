/**
 * Reward tiers, from Paul's "OFFERS Value Ladder" sheet.
 *
 * Descriptions are short summaries written for the card layout — Paul asked
 * that they be trimmed to fit. The `items` arrays carry his wording.
 */

export type Reward = {
  id: string;
  /** Tier number from the sheet, shown as a small label above the title. */
  tier: number;
  title: string;
  /** Price point, in USD. */
  amount: number;
  /** Stated total value of everything included, in USD. */
  totalValue: number;
  /**
   * Units available. Omit it when there is no published figure — the row is
   * hidden rather than showing a placeholder.
   */
  available?: number | string;
  description: string;
  items: string[];
  /** Overrides the default "Purchase" call to action. */
  cta?: string;
  /**
   * Point-of-sale checkout link for this tier, from Paul.
   * UTM parameters are appended automatically — store the bare URL here.
   * Until one is set, the button renders without a destination.
   */
  purchaseUrl?: string;
};

const BEHIND_THE_SCENES =
  "Access to behind-the-scenes data, insights, and business updates";

const giftPasses = (n: number) =>
  `(${n}) Give the Gift of Adventure Passes donated to underprivileged kids through a local school`;

export const rewards: Reward[] = [
  {
    id: "help-and-give",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2081700",
    tier: 1,
    title: "Help and Give an Experience",
    amount: 25,
    totalValue: 65,
    available: 5000,
    description:
      "Send a child on their first Bolder adventure — and pick up a shirt while you're at it.",
    items: ["(1) I Scaled Bolder T-Shirt", giftPasses(1), BEHIND_THE_SCENES],
  },
  {
    id: "experience-bolder",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2082060",
    tier: 2,
    title: "Experience Bolder",
    amount: 35,
    totalValue: 85,
    available: 5000,
    description:
      "A day at Bolder for you: Base Camp access, an hour in the arcade, and a cold ICEE.",
    items: [
      "(1) Base Camp Day Pass (not valid during Spring Break) — no expiration",
      "(1) Hour Free Arcade Time Play Card",
      "(1) Free ICEE",
      "(1) I Scaled Bolder T-Shirt",
      BEHIND_THE_SCENES,
    ],
  },
  {
    id: "vip-for-a-day",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2082087",
    tier: 3,
    title: "VIP for a Day",
    amount: 89,
    totalValue: 145,
    available: 1500,
    description:
      "All Access for a full day, with pizza, a drink, arcade credits, and gems to take home.",
    items: [
      "(1) All Access Single Day Pass — never expires, use it whenever you want",
      "(1) Personal Pizza",
      "(1) Free ICEE or Soft Drink",
      "$10 Arcade Game Card credits",
      "(1) Small Mining Gems Bag",
      "(1) I Scaled Bolder T-Shirt",
      giftPasses(1),
      BEHIND_THE_SCENES,
    ],
  },
  {
    id: "base-camp-family",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2082095",
    tier: 4,
    title: "Base Camp Family Membership & Party",
    amount: 399,
    totalValue: 1465,
    available: 1000,
    description:
      "Unlimited Base Camp visits for four through the end of 2027, plus a birthday party on us.",
    items: [
      "Base Camp Membership for 4 people for the remainder of 2026 (unlimited visits)",
      "Base Camp Membership for 4 people for the full 2027 calendar year (unlimited visits)",
      "(1) Free Birthday Party — valid anytime during 2026 to 2027",
      "(4) I Scaled Bolder T-Shirts",
      giftPasses(4),
      BEHIND_THE_SCENES,
    ],
  },
  {
    id: "all-access-private-party",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2082103",
    tier: 5,
    title: "All Access Private Party & Family Membership",
    amount: 2000,
    totalValue: 6500,
    available: 50,
    description:
      "The park to yourselves for two hours, plus All Access membership for four through 2027.",
    items: [
      "(1) Private Party — 2 hours of private access to the park before opening or after closing, up to 40 people",
      "40 All Access Tickets for unlimited activities during operating hours on the day of the Private Party",
      "(1) All Access Birthday Party Package — valid anytime during 2026 to 2027",
      "All Access Membership for 4 people for the remainder of 2026 (unlimited visits)",
      "All Access Membership for 4 people for the full 2027 calendar year (unlimited visits)",
      "(4) I Scaled Bolder T-Shirts",
      "30-minute invitation to talk with Paul about any professional topic (business, entrepreneurship, and the like)",
      giftPasses(10),
      BEHIND_THE_SCENES,
    ],
  },
  {
    id: "lifetime-vip-family",
    purchaseUrl:
      "https://ecom.roller.app/bolderadventurepark/memberships/en-us/product/2082111",
    tier: 6,
    title: "Lifetime VIP Family Pass",
    amount: 5000,
    totalValue: 10170,
    available: 200,
    description:
      "Five lifetime VIP passes, a private party, and a standing 25% discount that never expires.",
    items: [
      "(5) VIP All Access Lifetime Passes — never expire",
      "(5) VIP Black Metal Cards with 25% off food & beverage, merchandise, and birthday parties — never expire",
      "(1) Private Party — 2 hours of private access to the park before opening or after closing",
      "40 VIP All Access Tickets for unlimited activities during operating hours on the day of the Private Party",
      "(2) All Access Birthday Party Packages — valid anytime during 2026 to 2027",
      "(5) I Scaled Bolder T-Shirts",
      "1-hour invitation to talk with Paul about any professional topic (business, entrepreneurship, and the like)",
      giftPasses(25),
      BEHIND_THE_SCENES,
    ],
  },
  {
    id: "group-outings",
    // Kai's enquiry form rather than the Roller checkout — this tier is a lead
    // form, so "Request Information" now goes somewhere that matches the label.
    purchaseUrl: "https://bolderadventurepark.com/group-outtings-scale-or-fail",
    tier: 7,
    title: "Group Outings",
    amount: 10000,
    totalValue: 20760,
    cta: "Request Information",
    // Paul's sheet listed a lead form rather than a quantity, so the Available
    // row is omitted until there is a published figure.
    description:
      "Built for businesses, churches, schools, and other large groups — a $15,000 event budget for $10,000.",
    items: [
      "$10,000 deposit towards a group event of any size",
      "The deposit earns an additional $5,000 of credit — a $15,000 starting budget",
      "(5) VIP All Access Lifetime Passes — never expire",
      "(5) VIP Black Metal Cards with 25% off food & beverage, merchandise, and birthday parties — never expire",
      "(10) I Scaled Bolder T-Shirts",
      "1-hour invitation to talk with Paul about any professional topic (business, entrepreneurship, and the like)",
      "(50) Send a school bus of kids to Bolder — Give the Gift of Adventure Passes donated to underprivileged kids through a local school",
      BEHIND_THE_SCENES,
    ],
  },
];

export function formatAmount(amount: number) {
  return amount.toLocaleString("en-US");
}

/** Renders `available` for display, whether it's a count or a label. */
export function formatAvailable(available: number | string) {
  return typeof available === "number"
    ? available.toLocaleString("en-US")
    : available;
}
