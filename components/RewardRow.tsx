"use client";

import { useState } from "react";
import { formatAmount, formatAvailable, type Reward } from "@/lib/rewards";
import { BoxIcon, ChevronDownIcon, TagIcon, UsersIcon } from "./Icons";

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 py-2">
      <span className="mt-[2px] text-ksr-text-soft">{icon}</span>
      <div>
        <p className="text-[12px] text-ksr-text-soft">{label}</p>
        <p className="text-[14px] font-medium text-ksr-text">{value}</p>
      </div>
    </div>
  );
}

export default function RewardRow({ reward }: { reward: Reward }) {
  const [open, setOpen] = useState(false);

  const visibleItems = reward.items.slice(0, 4);
  const extra = reward.items.length - visibleItems.length;

  return (
    <article
      id={`reward-${reward.id}`}
      className="grid scroll-mt-24 grid-cols-12 gap-x-8 gap-y-6 border-b border-ksr-border-soft pb-10 last:border-b-0"
    >
      {/* Pledge card */}
      <div className="col-span-12 lg:col-span-5">
        <div className="overflow-hidden rounded-[4px] border border-ksr-green bg-white lg:sticky lg:top-24">
          <div className="p-5">
            <p className="text-[12px] font-bold uppercase tracking-wide text-ksr-text-soft">
              Tier {reward.tier}
            </p>
            <h3 className="mt-1 text-[17px] font-bold uppercase leading-snug tracking-tight">
              {reward.title}
            </h3>
            <p className="mt-2 text-[22px] font-bold">
              ${formatAmount(reward.amount)}
            </p>

            <div className="mt-4 divide-y divide-ksr-border-soft border-y border-ksr-border-soft">
              <MetaRow
                icon={<TagIcon width={14} height={14} />}
                label="Total value"
                value={`$${formatAmount(reward.totalValue)}`}
              />
              <MetaRow
                icon={<UsersIcon width={14} height={14} />}
                label="Available"
                value={formatAvailable(reward.available)}
              />
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-[13px] font-medium text-ksr-text">
                <BoxIcon width={14} height={14} className="text-ksr-text-soft" />
                {reward.items.length} item{reward.items.length === 1 ? "" : "s"} included
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ksr-text-soft">
                {visibleItems.join(", ")}
                {extra > 0 && (
                  <span className="font-medium text-ksr-text"> +{extra} More</span>
                )}
              </p>
            </div>

            {/* Mobile-only expandable details, matching the live layout */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-4 flex w-full items-center justify-between border-t border-ksr-border-soft pt-4 text-[14px] font-medium lg:hidden"
            >
              Details
              <ChevronDownIcon
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="lg:hidden">
                <RewardDetails reward={reward} compact />
              </div>
            )}
          </div>

          <div className="px-5 pb-5">
            <button type="button" className="ksr-btn ksr-btn-primary w-full">
              {reward.cta ?? `Purchase $${formatAmount(reward.amount)}`}
            </button>
          </div>
        </div>
      </div>

      {/* Details panel */}
      <aside className="col-span-12 hidden lg:col-span-7 lg:block">
        <RewardDetails reward={reward} />
      </aside>
    </article>
  );
}

function RewardDetails({
  reward,
  compact = false,
}: {
  reward: Reward;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "pt-4" : ""}>
      <p className="whitespace-pre-line text-[16px] leading-relaxed text-ksr-text">
        {reward.description}
      </p>

      <p className="mt-6 text-[14px] font-bold">
        {reward.items.length} item{reward.items.length === 1 ? "" : "s"} included
      </p>

      <ul className="mt-3 flex flex-col gap-2">
        {reward.items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-between gap-3 rounded-[4px] border border-ksr-border-soft px-4 py-3"
          >
            <span className="text-[14px] font-medium">{item}</span>
            <span className="shrink-0 text-[13px] text-ksr-text-soft">
              Quantity 1
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
