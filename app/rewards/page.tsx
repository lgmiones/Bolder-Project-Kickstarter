import HashScroll from "@/components/HashScroll";
import RewardRow from "@/components/RewardRow";
import RewardsIndex from "@/components/RewardsIndex";
import SponsorshipCard from "@/components/SponsorshipCard";
import { rewards } from "@/lib/rewards";

export const metadata = {
  title: "Bolder Project: See the fun, support the fun",
};

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10">
      <HashScroll />
      <div className="grid grid-cols-12 gap-x-10 gap-y-10">
        {/* Jump-list of every tier. Desktop only — below lg it would just be a
            second copy of the list the user is about to scroll through. */}
        <aside className="hidden lg:col-span-3 lg:block">
          <RewardsIndex />
        </aside>

        {/* Pledge cards + details */}
        <div className="col-span-12 flex flex-col gap-10 lg:col-span-9">
          {rewards.map((reward) => (
            <RewardRow key={reward.id} reward={reward} />
          ))}
          <SponsorshipCard />
        </div>
      </div>
    </div>
  );
}
