import Image from "next/image";

/**
 * An image in the story column, rendered at its own natural aspect ratio.
 *
 * Jezam's assets came in a mix of shapes — 16:9 photos, square review
 * screenshots, and one very tall tier infographic — so nothing is forced into a
 * fixed slot. Passing the real pixel dimensions lets the layout flex around
 * each image instead of cropping it, which matters most for the reviews and the
 * tier list, where cropping would cut text.
 *
 * Next resizes and re-encodes on the fly, so the multi-megabyte sources are not
 * what visitors download.
 */
export default function StoryImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 1023px) 100vw, 792px",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full rounded-[4px] ${className}`}
    />
  );
}
