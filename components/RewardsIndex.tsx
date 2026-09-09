import Link from "next/link";
import { formatAmount, rewards } from "@/lib/rewards";

/** Jump-list of every tier, shown beside the rewards on the Rewards tab. */
export default function RewardsIndex() {
  return (
    <div>
      <h2 className="mb-4 text-[20px] font-bold">Available rewards</h2>

      <nav aria-label="Available rewards">
        <ul className="flex flex-col gap-5">
          {rewards.map((reward) => (
            <li key={reward.id}>
              <Link href={`#reward-${reward.id}`} className="group block">
                <p className="text-[15px] font-bold uppercase leading-snug tracking-tight group-hover:underline">
                  {reward.title}
                </p>
                <p className="mt-1 text-[14px] text-ksr-text-soft">
                  <span className="font-bold text-ksr-text">
                    ${formatAmount(reward.amount)}
                  </span>{" "}
                  {reward.items.length} item
                  {reward.items.length === 1 ? "" : "s"} included
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
