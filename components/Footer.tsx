import BolderLogo from "./BolderLogo";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./Icons";

/** Bolder Adventure Park's own accounts, as linked from bolderadventurepark.com. */
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/BolderAdventurePark/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/BolderAdventurePark",
    Icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@bolderadventurepark",
    Icon: TiktokIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCE4n2AB2YVxstpcsYLsIQOg",
    Icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-ksr-footer text-ksr-footer-text">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-4 py-14">
        <BolderLogo variant="light" width={320} className="max-w-full" />

        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Bolder Adventure Park on ${label}`}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon width={22} height={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
