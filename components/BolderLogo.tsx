import Image from "next/image";

/**
 * Bolder Adventure Park logo.
 *
 * Two artwork variants ship in public/images:
 *   variant="dark"  -> bolder-logo.png             (black artwork, for light backgrounds)
 *   variant="light" -> bolder-logo-white-text.png  (white artwork, for dark backgrounds)
 *
 * Both are 1.56:1, so widths below keep their natural aspect ratio.
 */
export default function BolderLogo({
  variant = "dark",
  className = "",
  width = 110,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  const src =
    variant === "light"
      ? "/images/bolder-logo-white-text.png"
      : "/images/bolder-logo.png";

  return (
    <Image
      src={src}
      alt="Bolder Adventure Park at Epic Central"
      width={width}
      height={Math.round(width / 1.5597)}
      priority={priority}
      className={`h-auto w-auto ${className}`}
    />
  );
}
