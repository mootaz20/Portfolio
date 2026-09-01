import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Security from "./Components/Security";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CommandPalette from "./Components/CommandPalette";
import { ScrollProgress, BackToTop } from "./Components/Chrome";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#000016" : "#ffffff");
  }, [theme]);

  /*
    The new theme is revealed with a circle wiped out from wherever the
    toggle was clicked. Browsers without the View Transitions API - and
    anyone who asked for less motion - just get the instant swap.
  */
  const toggleTheme = useCallback((event) => {
    const flip = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    if (!document.startViewTransition || prefersReducedMotion()) {
      flip();
      return;
    }

    const x = event?.clientX ?? window.innerWidth - 60;
    const y = event?.clientY ?? 40;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document
      .startViewTransition(() => flushSync(flip))
      .ready.then(() =>
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 520,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      );
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openPalette={() => setPaletteOpen(true)}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Security />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default App;
