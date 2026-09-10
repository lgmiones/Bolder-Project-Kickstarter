/**
 * UTM tagging for outbound links (Roller checkout, booking pages).
 *
 * These parameters are read by analytics on the *destination* — they let Paul
 * and Shoab separate traffic sent from this campaign page from traffic that
 * reaches Roller by other routes. They are not read by any analytics on this
 * site, which is a separate concern.
 *
 * Naming follows the convention used on the earlier A/B test site
 * (utm_source / utm_medium / utm_campaign). Confirm these values match the
 * reporting conventions Shoab expects before the campaign goes live.
 */
export const UTM_DEFAULTS: Record<string, string> = {
  utm_source: "bolder-campaign-page",
  utm_medium: "website",
  utm_campaign: "scale-bolder",
};

/**
 * Appends the campaign's UTM parameters to an absolute URL.
 *
 * - Existing query strings are preserved.
 * - A parameter already present on the URL is left alone, so a per-link
 *   override always wins over the defaults.
 * - Relative or malformed URLs are returned untouched rather than throwing.
 */
export function withUtm(url: string, extra?: Record<string, string>): string {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  for (const [key, value] of Object.entries({ ...UTM_DEFAULTS, ...extra })) {
    if (!value) continue;
    if (parsed.searchParams.has(key)) continue;
    parsed.searchParams.set(key, value);
  }

  return parsed.toString();
}
