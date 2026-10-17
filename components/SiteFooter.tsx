import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  ["Services", "/#services"],
  ["Technology", "/#technologies"],
  ["Why Code Red", "/#why-code-red"],
  ["Our Approach", "/#approach"],
  ["Solutions", "/#solutions"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Code Red home">
            <Image
              src="/logo-white-red.png"
              alt="Code Red Digital Solutions LLC"
              width={190}
              height={63}
            />
          </Link>
          <p>
            IT consulting and digital solutions designed to help businesses
            modernize technology, improve operations, and grow.
          </p>
        </div>
        <div className="footer-links">
          <p>Company</p>
          {companyLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <p>Contact &amp; Legal</p>
          <a href="mailto:info@coderedsolutions.com">
            info@coderedsolutions.com
          </a>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© 2026 Code Red Digital Solutions LLC. All rights reserved.</span>
        <Link href="/">Back to home ↑</Link>
      </div>
    </footer>
  );
}
