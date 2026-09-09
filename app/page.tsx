import RewardsSidebar from "@/components/RewardsSidebar";
import { ChevronRightIcon } from "@/components/Icons";

/**
 * Campaign tab.
 * All prose below is placeholder copy — replace the strings with the real
 * campaign story. Image slots are marked with the .ksr-placeholder class.
 */

const STORY_PARAGRAPHS = [
  "Placeholder paragraph. Replace this text with the opening of the campaign story — the hook that explains what the project is and why it exists.",
  "Placeholder paragraph. This second block is where the background and origin of the project goes: how it started, who noticed it first, and what happened next.",
  "Placeholder paragraph. Use this block to describe the work itself — the shape of the show, the tone, and what an audience can expect from it.",
];

const TEAM_PARAGRAPHS = [
  "Placeholder paragraph. Introduce the writers and creators here, with a sentence or two on each.",
  "Placeholder paragraph. Add the producing team, collaborators, and any partners attached to the project.",
];

const WHY_PARAGRAPHS = [
  "Placeholder paragraph. Explain why the campaign is running now and what the funds unlock.",
  "Placeholder paragraph. Close with the ask, and what backers make possible.",
];

function SectionBanner({ label }: { label: string }) {
  return <div className="ksr-placeholder my-8 aspect-[16/7] w-full">{label}</div>;
}

export default function CampaignPage() {
  return (
    <>
      <div className="mx-auto max-w-[1240px] px-4 py-10">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10">
          {/* Story column */}
          <div className="col-span-12 lg:col-span-8">
            <SectionBanner label="Hero image — what is The Pyramid?" />

            {STORY_PARAGRAPHS.map((p, i) => (
              <p key={i} className="mb-5 text-[16px] leading-[1.7]">
                {p}
              </p>
            ))}

            <SectionBanner label="Story image" />

            <h2 className="mb-4 mt-10 text-[22px] font-bold">Our Story</h2>
            {TEAM_PARAGRAPHS.map((p, i) => (
              <p key={i} className="mb-5 text-[16px] leading-[1.7]">
                {p}
              </p>
            ))}

            <SectionBanner label="Team photo" />

            <h2 className="mb-4 mt-10 text-[22px] font-bold">
              The Team Bringing The Pyramid To Life
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="ksr-placeholder aspect-square w-full text-[10px]">
                  Headshot {i + 1}
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-10 text-[22px] font-bold">Why Kickstarter</h2>
            {WHY_PARAGRAPHS.map((p, i) => (
              <p key={i} className="mb-5 text-[16px] leading-[1.7]">
                {p}
              </p>
            ))}

            <h2 className="mb-4 mt-10 text-[22px] font-bold">Rewards</h2>
            <SectionBanner label="Rewards graphic" />
            <a
              href="/rewards"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-ksr-green hover:underline"
            >
              See all rewards
              <ChevronRightIcon width={14} height={14} />
            </a>

            <div id="risks" className="mt-14 border-t border-ksr-border-soft pt-8">
              <h2 className="mb-3 text-[18px] font-bold">Risks and challenges</h2>
              <p className="text-[16px] leading-[1.7]">
                Placeholder paragraph. Replace with the risks and challenges
                statement for the project.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4">
            <RewardsSidebar />
          </aside>
        </div>
      </div>
    </>
  );
}
