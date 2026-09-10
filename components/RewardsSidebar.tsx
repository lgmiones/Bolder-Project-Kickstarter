import Link from "next/link";
import {
  formatAmount,
  formatAvailable,
  rewards,
  type Reward,
} from "@/lib/rewards";
import PurchaseAction from "./PurchaseAction";

function SidebarReward({ reward }: { reward: Reward }) {
  /** Both buttons jump to this tier's row on the Rewards tab. */
  const href = `/rewards#reward-${reward.id}`;

  return (
    <div className="rounded-[4px] border border-ksr-border-soft p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-wide text-ksr-text-soft">
            Tier {reward.tier}
          </p>
          <h3 className="mt-1 text-[17px] font-bold uppercase leading-snug tracking-tight">
            {reward.title}
          </h3>
        </div>
        <p className="shrink-0 text-[17px] font-bold">
          ${formatAmount(reward.amount)}
        </p>
      </div>

      <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-ksr-text">
        {reward.description}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[12px] text-ksr-text-soft">Total value</p>
          <p className="text-[14px] font-medium">
            ${formatAmount(reward.totalValue)}
          </p>
        </div>
        <div>
          <p className="text-[12px] text-ksr-text-soft">Available</p>
          <p className="text-[14px] font-medium">
            {formatAvailable(reward.available)}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[13px] font-medium">
          {reward.items.length} item{reward.items.length === 1 ? "" : "s"} included
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-relaxed marker:text-ksr-text-soft">
          {reward.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Stacked on narrow cards so the pledge label never wraps mid-button. */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={href}
          className="ksr-btn ksr-btn-secondary w-full px-5 py-2 text-[14px] sm:w-auto sm:flex-none"
        >
          Details
        </Link>
        <PurchaseAction
          reward={reward}
          fallbackHref={href}
          className="w-full py-2 text-center text-[14px] sm:flex-1"
        />
      </div>
    </div>
  );
}

/** Rewards rail shown alongside the story on the Story tab. */
export default function RewardsSidebar() {
  return (
    <div>
      <h2 className="mb-4 text-[20px] font-bold">Available rewards</h2>
      {/* Two-up on tablet, where a single column would stretch the cards. */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {rewards.map((reward) => (
          <SidebarReward key={reward.id} reward={reward} />
        ))}
      </div>
    </div>
  );
}
