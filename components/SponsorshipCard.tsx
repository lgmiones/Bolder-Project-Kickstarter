/**
 * Sponsorship block from the bottom of Paul's offer sheet. Not a purchasable
 * tier — it points at more information rather than a checkout.
 */
export default function SponsorshipCard() {
  return (
    <section className="rounded-[4px] border border-ksr-border-soft bg-ksr-surface p-6">
      <h2 className="text-[18px] font-bold uppercase tracking-tight">
        Sponsorship Opportunities
      </h2>
      <p className="mt-2 text-[16px] leading-relaxed text-ksr-text">
        Put your brand in front of <strong>125,000 annual visitors</strong>.
        Learn more about sponsorship opportunities around Bolder Adventure Park.
      </p>
      <button type="button" className="ksr-btn ksr-btn-primary mt-5">
        More Info
      </button>
    </section>
  );
}
