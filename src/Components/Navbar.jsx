import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiDownload,
  FiSearch,
  FiCommand,
} from "react-icons/fi";
import { navLinks, profile } from "../data/content";

const isMac = () =>
  typeof navigator !== "undefined" && /mac/i.test(navigator.platform || "");

const Navbar = ({ theme, toggleTheme, openPalette }) => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [mac] = useState(isMac);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently filling the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${solid ? " nav--solid" : ""}`}>
        <div className="container nav__inner">
          <a href="#top" className="nav__logo" aria-label="Mootaz Alhalak - home">
            <img src="/assets/images/Logo.png" alt="Mootaz Alhalak" />
          </a>

          <nav className="nav__links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link${active === link.id ? " nav__link--active" : ""}`}>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav__pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button
              className="nav__cmdk"
              onClick={openPalette}
              aria-label="Open command palette">
              <FiSearch size={15} />
              <span>Search</span>
              <kbd>
                {mac ? <FiCommand size={11} /> : "Ctrl"}
                K
              </kbd>
            </button>

            <button
              className="icon-btn nav__cmdk-icon"
              onClick={openPalette}
              aria-label="Open command palette">
              <FiSearch size={18} />
            </button>

            <a
              className="btn btn--primary btn--sm nav__resume"
              href={profile.cv.fullstack}
              download>
              <FiDownload size={15} />
              Resume
            </a>

            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  className="nav__theme-icon"
                  initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
                  {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              className="icon-btn nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}>
              {open ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
            <div className="nav__mobile-list">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}>
                  {link.label}
                </motion.a>
              ))}
              <a
                href={profile.cv.fullstack}
                download
                onClick={() => setOpen(false)}
                style={{ color: "var(--primary)", fontWeight: 600 }}>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
