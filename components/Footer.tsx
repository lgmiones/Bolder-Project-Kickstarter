import BolderLogo from "./BolderLogo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-ksr-footer text-ksr-footer-text">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-4 py-14">
        <BolderLogo variant="light" width={320} className="max-w-full" />

        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
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
