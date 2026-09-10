import Link from "next/link";
import { formatAmount, type Reward } from "@/lib/rewards";
import { withUtm } from "@/lib/utm";

/**
 * The purchase call to action for a tier.
 *
 * Once Paul supplies a point-of-sale link it renders as an outbound anchor with
 * the campaign's UTM parameters applied, tagged per tier via `utm_content` so
 * each tier's clicks can be told apart at the destination. Until then it falls
 * back to `fallbackHref`, or to an inert button.
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

  if (reward.purchaseUrl) {
    return (
      <a
        href={withUtm(reward.purchaseUrl, { utm_content: `tier-${reward.tier}` })}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
      </a>
    );
  }

  if (fallbackHref) {
    return (
      <Link href={fallbackHref} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {label}
    </button>
  );
}
