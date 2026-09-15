import Link from "next/link";
import RewardsSidebar from "@/components/RewardsSidebar";
import StoryImage from "@/components/StoryImage";
import WistiaPlayer from "@/components/WistiaPlayer";

// Static imports: Next fingerprints the file contents into each URL, so a
// replaced image is never served from a stale optimizer cache.
import sectionScalingBolder from "@/public/story-contents/section-scaling-bolder.jpg";
import heroParkEntrance from "@/public/story-contents/hero-park-entrance.jpg";
import construction from "@/public/story-contents/construction.jpg";
import collage from "@/public/story-contents/collage.jpg";
import review1 from "@/public/story-contents/review-1.jpg";
import review2 from "@/public/story-contents/review-2.jpg";
import tierList from "@/public/story-contents/tier-list.jpg";

/**
 * Paul's VSL, hosted on Wistia at Kai's request (previously YouTube).
 * Swapping in a new cut is a one-line change: replace this media ID.
 */
const VSL_MEDIA_ID = "e1zu52g0hx";

/**
 * Story tab — copy from Paul's "Story DRAFT V2", images from Jezam.
 *
 * To replace an image, overwrite the file in public/story-contents under the
 * same name. The static imports above pick up the new file, its dimensions,
 * and a fresh cache-busting URL automatically.
 */

const OPENING_LINES = [
  "I grew up chasing thrills at theme parks.",
  "Roller coasters. Water slides. Big drops. Big laughs.",
  "About a decade ago, I found a new kind of adventure in the mountains.",
  "Cliffs. Zip lines. Mountain air.",
  "Most kids in our city won't see that any time soon.",
  "They see roads, parking lots, and screens.",
  "Bolder exists to bring that “mountain feeling” to them, right here at home.",
];

const CAMPAIGN_POINTS = [
  "You get an incredible deal on visits, birthday parties, memberships, or private events.",
  "For every tier, you also help send kids from local Title 1 schools to Bolder through our Give the Gift of Adventure Passes.",
  "Everyone who participates gets access to our behind-the-scenes data, insights, and business updates so you can see exactly how your support helps.",
];

const STEPS = [
  {
    lead: "Pick a tier",
    rest: "that fits your family, your company, or your budget.",
  },
  {
    lead: "Get your rewards:",
    rest: "passes, memberships, parties, shirts, and more, exactly as listed.",
  },
  {
    lead: "Send kids to Bolder:",
    rest: "every tier includes Give the Gift of Adventure Passes donated to Title 1 Schools for their students.",
  },
  {
    lead: "Follow the journey:",
    rest: "every supporter gets access to behind-the-scenes data, insights, and business updates as we work to turn Bolder into a healthy, long-term business.",
  },
];

const FAQS = [
  {
    q: "When do passes and memberships expire?",
    bullets: [
      "Any item labelled “never expires” truly never expires.",
      "Base Camp and All Access memberships in Tiers 4 and 5 include unlimited visits for the remainder of 2026 and the full 2027 calendar year, as listed on each reward.",
      "Birthday parties and party packages are valid anytime during 2026–2027, exactly as described on each tier.",
    ],
  },
  {
    q: "How do the Give the Gift of Adventure Passes work?",
    a: "For each pass included in your tier, we donate admission passes through local schools to kids that might not otherwise be able to come to Bolder on their own. Our team will coordinate with Title 1 school partners and share updates in the behind-the-scenes reports you receive.",
  },
  {
    q: "Does every tier include behind-the-scenes updates?",
    a: "Yes. Every single tier includes access to behind-the-scenes data, insights, and business updates so you can see how this campaign impacts Bolder.",
  },
];

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10">
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="min-w-0 lg:col-span-8">
          {/* Sales video, recorded separately */}
          <WistiaPlayer
            mediaId={VSL_MEDIA_ID}
            className="overflow-hidden rounded-[4px]"
          />

          {/* SECTION 1 — Scaling Bolder */}
          <section className="mt-10">
            <StoryImage
              src={sectionScalingBolder}
              alt="Scaling Bolder"
              priority
            />

            <h1 className="mt-8 text-[30px] font-bold leading-tight md:text-[36px]">
              Help us Scale Bolder and Make Memories Together
            </h1>
            <p className="mt-4 text-[17px] leading-[1.7]">
              For a limited time, you can grab discounted passes, memberships,
              and once-in-a-lifetime experiences at Bolder Adventure Park — while
              also sending kids from local Title 1 Schools on their very first
              Bolder adventure.
            </p>

            <Link href="/rewards" className="ksr-btn ksr-btn-primary mt-6">
              Choose Your Adventure Tier
            </Link>

            <div className="mt-8">
              <StoryImage
                src={heroParkEntrance}
                alt="The front entrance of Bolder Adventure Park"
              />
            </div>
          </section>

          {/* SECTION 2 — Bolder's story */}
          <section className="mt-14">
            <h2 className="text-[24px] font-bold">Why Bolder Exists</h2>

            <div className="mt-5 text-[17px] leading-[1.8]">
              {OPENING_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <p className="mt-6 text-[17px] leading-[1.8]">
              Thousands of families have shown up, and experiences and memories
              have been made for the past 4 years. We even partnered with famous
              YouTubers (more on that coming soon). I&rsquo;ve made plenty of
              mistakes on the business side that you&rsquo;ll see on the show,
              but that&rsquo;s all a part of the journey of being an
              entrepreneur. As Alex says, you don&rsquo;t lose if you don&rsquo;t
              quit. The honest truth: Bolder is an amazing experience for
              families, but the business has been on the edge. Cash has been
              tight. I&rsquo;ve had nights staring at the ceiling wondering if we
              were going to make it.
            </p>

            <p className="mt-5 text-[17px] leading-[1.8]">
              Enter Alex Hormozi. I started following Alex as a business man
              about a year ago. I sent in a selfie video applying to be on a new
              show he was launching called Scale or Fail. On the show with Alex
              Hormozi you will see me at our lowest point. I cried in the diary
              room, and Alex called our business a mess. It was the most
              embarrassing moment of my career, but it was also a turning point.
              Alex and his team gave us clear advice and a plan. Our leaders,
              staff, and partners have spent the last 90 days doing the hard work
              to follow that plan. This campaign, and the rewards on this page,
              are part of that work to make Bolder stronger for years to come.
              It&rsquo;s been a life changing experience already, and I look
              forward to seeing what the future holds as we try to Scale Bolder.
              This page is your chance to be part of that story.
            </p>

            <p className="mt-5 text-[17px] leading-[1.8]">
              So we built a simple campaign:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[17px] leading-[1.8] marker:text-ksr-green">
              {CAMPAIGN_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className="mt-5 text-[17px] leading-[1.8]">
              We could use your help, and we can have fun together while we scale
              it. We scale the business, and you scale our mountains. What do you
              say? I&rsquo;d be honored if you&rsquo;d pick a tier below and join
              us.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8]">
              Thank you for giving us a shot.
            </p>
            <p className="mt-4 text-[17px] font-bold">— Paul</p>

            {/* Full width rather than side by side: both carry captions baked
                into the artwork, which would be unreadable at half width. */}
            <div className="mt-8 flex flex-col gap-4">
              <StoryImage
                src={construction}
                alt="Building the mountain during construction"
              />
              <StoryImage
                src={collage}
                alt="Hailey, Ethan and Shay helping with marketing photos"
              />
            </div>
          </section>

          {/* SECTION 3 — How the campaign works */}
          <section className="mt-14">
            <h2 className="text-[24px] font-bold">How Your Support Works</h2>
            <ol className="mt-5 space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.lead} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ksr-green text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[17px] leading-[1.7]">
                    <strong>{step.lead}</strong> {step.rest}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-l-2 border-ksr-green pl-4 text-[17px] font-medium leading-[1.7]">
              Quantities are limited for each tier. Once a tier sells out, it is
              gone.
            </p>
          </section>

          {/* SECTION 4 — Proof */}
          <section className="mt-14">
            <h2 className="text-[24px] font-bold">What Families Say</h2>
            {/* Square sources, kept square so no review text is cropped. */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <StoryImage
                src={review1}
                alt="A five-star Google review from a Bolder visitor"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 388px"
              />
              <StoryImage
                src={review2}
                alt="A five-star Google review from a Bolder visitor"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 388px"
              />
            </div>
          </section>

          {/* SECTION 5 — Reward tiers overview */}
          <section className="mt-14">
            <h2 className="text-[24px] font-bold">Choose Your Adventure Tier</h2>
            {/* A tall infographic (1920x8150). Rendered at its natural ratio —
                any fixed aspect would crop it to an unreadable sliver. */}
            <div className="mt-5">
              <StoryImage
                src={tierList}
                alt="All seven reward tiers and what each one includes"
              />
            </div>
            <Link href="/rewards" className="ksr-btn ksr-btn-primary mt-6">
              See All Tiers
            </Link>
          </section>

          {/* SECTION 6 — FAQ */}
          <section className="mt-14 border-t border-ksr-border-soft pt-10">
            <h2 className="text-[24px] font-bold">Common Questions</h2>
            <dl className="mt-6 space-y-7">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <dt className="text-[17px] font-bold">{faq.q}</dt>
                  {faq.a && (
                    <dd className="mt-2 text-[17px] leading-[1.8]">{faq.a}</dd>
                  )}
                  {faq.bullets && (
                    <dd className="mt-2">
                      <ul className="list-disc space-y-2 pl-6 text-[17px] leading-[1.8] marker:text-ksr-text-soft">
                        {faq.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="min-w-0 lg:col-span-4">
          <RewardsSidebar />
        </aside>
      </div>
    </div>
  );
}
