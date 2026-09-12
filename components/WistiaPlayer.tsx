"use client";

import { createElement } from "react";
import Script from "next/script";

/**
 * Wistia-hosted VSL, from Kai's embed snippet.
 *
 * The two scripts register the <wistia-player> custom element. The style block
 * is Wistia's own placeholder treatment: until the element is defined it shows
 * a blurred thumbnail at 16:9, which keeps the layout from jumping while the
 * player loads.
 *
 * <wistia-player> is a custom element rather than a React component, so it is
 * built with createElement to sidestep JSX intrinsic-element typing.
 */
export default function WistiaPlayer({
  mediaId,
  aspect = "1.7777777777777777",
  className = "",
}: {
  mediaId: string;
  aspect?: string;
  className?: string;
}) {
  const placeholderCss = `
    wistia-player[media-id='${mediaId}']:not(:defined) {
      background: center / contain no-repeat
        url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
      display: block;
      filter: blur(5px);
      padding-top: 56.25%;
    }
  `;

  return (
    <div className={className}>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        type="module"
        strategy="afterInteractive"
      />
      <style dangerouslySetInnerHTML={{ __html: placeholderCss }} />
      {createElement("wistia-player", { "media-id": mediaId, aspect })}
    </div>
  );
}
