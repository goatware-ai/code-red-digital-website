import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Services", href: "/#services" },
  { label: "Our approach", href: "/#approach" },
  { label: "About", href: "/#about" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="site-width utility-inner">
          <span>IT Consulting &amp; Digital Solutions</span>
          <a href="mailto:info@coderedsolutions.com">
            info@coderedsolutions.com
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-width header-inner">
          <Link className="brand" href="/" aria-label="Code Red home">
            <Image
              src="/logo-white-red.png"
              alt="Code Red Digital Solutions LLC"
              width={190}
              height={63}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <Link className="header-cta" href="/#contact">
            Discuss your project <span aria-hidden="true">↗</span>
          </Link>

          <MobileNav links={links} />
        </div>
      </header>
    </>
  );
}
