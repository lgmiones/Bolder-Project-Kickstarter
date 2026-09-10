"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { formatAmount, type Reward } from "@/lib/rewards";
import { withUtm } from "@/lib/utm";

/**
 * The purchase call to action for a tier.
 *
 * Two pieces of tracking hang off this button, and they measure different
 * things:
 *
 * - A `tier_click` dataLayer event, picked up in GTM and forwarded to GA4.
 *   It records which tier was clicked, on this site.
 * - UTM parameters on the outbound link, read by analytics at the destination
 *   (Roller) to attribute the visit back to this campaign.
 *
 * Once Paul supplies a point-of-sale link the button renders as an outbound
 * anchor. Until then it falls back to `fallbackHref`, or to an inert button —
 * the event fires either way.
 */
export default function PurchaseAction({
  reward,
  className = "",
  fallbackHref,
}: {
  reward: Reward;
  className?: string;
  fallbackHref?: string;
}) {
  const label = reward.cta ?? `Purchase $${formatAmount(reward.amount)}`;
  const classes = `ksr-btn ksr-btn-primary ${className}`;

  const trackClick = () =>
    sendGTMEvent({
      event: "tier_click",
      tier: `tier-${reward.tier}`,
      tier_name: reward.title,
      tier_price: reward.amount,
    });

  if (reward.purchaseUrl) {
    return (
      <a
        href={withUtm(reward.purchaseUrl, { utm_content: `tier-${reward.tier}` })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackClick}
        className={classes}
      >
        {label}
      </a>
    );
  }

  if (fallbackHref) {
    return (
      <Link href={fallbackHref} onClick={trackClick} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={trackClick} className={classes}>
      {label}
    </button>
  );
}
