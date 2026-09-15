import Image, { type StaticImageData } from "next/image";

/**
 * An image in the story column, rendered at its own natural aspect ratio.
 *
 * Takes a *static import* rather than a "/public" path, for two reasons:
 *
 * - Cache busting. Next fingerprints the file contents into the image URL, so
 *   replacing an image — even under the same filename — produces a new URL.
 *   With plain "/story-contents/x.jpg" paths the optimizer kept serving the old
 *   version for its 4-hour cache window after Jezam's files were swapped, and
 *   Next has no way to invalidate that cache.
 * - Dimensions. Width and height are read from the file itself, so a resized
 *   replacement (like the taller tier list) needs no code change.
 *
 * Nothing is cropped: Jezam's assets are a mix of 16:9 photos, square review
 * screenshots, and one very tall tier infographic, and each keeps its shape.
 */
export default function StoryImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1023px) 100vw, 792px",
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full rounded-[4px] ${className}`}
    />
  );
}
