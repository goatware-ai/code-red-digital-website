"use client";

import { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  function closeAfterNavigation() {
    window.setTimeout(() => setIsOpen(false), 0);
  }

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className={`mobile-nav${isOpen ? " is-open" : ""}`} ref={navRef}>
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeAfterNavigation}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeAfterNavigation}>
            Discuss your project
          </a>
        </nav>
      )}
    </div>
  );
}
