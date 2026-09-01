import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiCornerDownLeft,
  FiDownload,
  FiExternalLink,
  FiHash,
  FiLayers,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { navLinks, profile, projects } from "../data/content";

/*
  Subsequence match with a light score: exact substrings win, then earlier
  and tighter matches. Fast enough to feel instant, small enough to read.
*/
const score = (haystack, needle) => {
  if (!needle) return 1;
  const text = haystack.toLowerCase();
  const query = needle.toLowerCase().trim();

  const direct = text.indexOf(query);
  if (direct === 0) return 1000;
  if (direct > 0) return 800 - direct;

  let i = 0;
  let last = -1;
  let gaps = 0;
  for (const char of query) {
    const found = text.indexOf(char, i);
    if (found === -1) return 0;
    if (last !== -1) gaps += found - last - 1;
    last = found;
    i = found + 1;
  }
  return Math.max(1, 400 - gaps);
};

const smoothScrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const CommandPalette = ({ open, setOpen, theme, toggleTheme }) => {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const restoreFocus = useRef(null);

  const close = useCallback(() => setOpen(false), [setOpen]);

  /* Every command in one flat list - grouping is presentation only. */
  const commands = useMemo(() => {
    const items = [];

    navLinks.forEach((link) =>
      items.push({
        id: `nav-${link.id}`,
        group: "Jump to",
        label: link.label,
        hint: `#${link.id}`,
        icon: <FiHash size={15} />,
        run: () => smoothScrollTo(link.id),
      })
    );

    projects.forEach((p) =>
      items.push({
        id: `project-${p.id}`,
        group: "Projects",
        label: p.name,
        hint: p.subtitle,
        keywords: `${p.stack.join(" ")} ${p.tags.join(" ")} ${p.client || ""}`,
        icon: <FiLayers size={15} />,
        run: () =>
          window.dispatchEvent(
            new CustomEvent("portfolio:focus-project", { detail: p.id })
          ),
      })
    );

    items.push(
      {
        id: "theme",
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
        hint: "Theme",
        icon: theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />,
        run: () => toggleTheme(),
      },
      {
        id: "cv-full",
        group: "Actions",
        label: "Download full-stack CV",
        hint: "PDF",
        icon: <FiDownload size={15} />,
        run: () => window.open(profile.cv.fullstack, "_blank", "noopener"),
      },
      {
        id: "cv-security",
        group: "Actions",
        label: "Download security CV",
        hint: "PDF",
        icon: <FiDownload size={15} />,
        run: () => window.open(profile.cv.security, "_blank", "noopener"),
      },
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        icon: copied ? <FiCheck size={15} /> : <FiCopy size={15} />,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          } catch {
            window.location.href = `mailto:${profile.email}`;
          }
        },
      }
    );

    const elsewhere = [
      ["GitHub", profile.socials.github],
      ["LinkedIn", profile.socials.linkedin],
      ["TryHackMe", profile.socials.tryhackme],
    ];

    elsewhere.forEach(([label, href]) =>
      items.push({
        id: `link-${label}`,
        group: "Elsewhere",
        label,
        hint: "Opens in a new tab",
        icon: <FiExternalLink size={15} />,
        run: () => window.open(href, "_blank", "noopener,noreferrer"),
      })
    );

    return items;
  }, [theme, toggleTheme, copied]);

  const results = useMemo(() => {
    if (!query.trim()) return commands;
    return commands
      .map((command) => ({
        command,
        rank: Math.max(
          score(command.label, query),
          score(command.hint || "", query) * 0.6,
          score(command.keywords || "", query) * 0.4
        ),
      }))
      .filter((entry) => entry.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .map((entry) => entry.command);
  }, [commands, query]);

  const groups = useMemo(() => {
    const map = new Map();
    results.forEach((item) => {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group).push(item);
    });
    return [...map.entries()];
  }, [results]);

  const runCommand = useCallback(
    (item) => {
      if (!item) return;
      if (!item.keepOpen) close();
      item.run();
    },
    [close]
  );

  /* Global shortcut: Cmd/Ctrl+K from anywhere, Esc to leave. */
  useEffect(() => {
    const onKey = (event) => {
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        restoreFocus.current = document.activeElement;
        setOpen((v) => !v);
      }
      if (key === "escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      // Opened by click rather than shortcut: remember what had focus.
      if (!restoreFocus.current) restoreFocus.current = document.activeElement;
      setQuery("");
      setCursor(0);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    restoreFocus.current?.focus?.();
    restoreFocus.current = null;
  }, [open]);

  useEffect(() => setCursor(0), [query]);

  /* Keep the highlighted row in view as the cursor walks the list. */
  useEffect(() => {
    listRef.current
      ?.querySelector("[data-active=true]")
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor, results]);

  const onInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setCursor((c) => (results.length ? (c + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCursor((c) =>
        results.length ? (c - 1 + results.length) % results.length : 0
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(results[cursor]);
    } else if (event.key === "Home") {
      event.preventDefault();
      setCursor(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setCursor(Math.max(0, results.length - 1));
    }
  };

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmdk"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseDown={close}>
          <motion.div
            className="cmdk__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}>
            <div className="cmdk__search">
              <FiArrowRight size={16} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search sections, projects, actions..."
                aria-label="Search commands"
                autoComplete="off"
                spellCheck="false"
              />
              <kbd className="cmdk__esc">Esc</kbd>
            </div>

            <div className="cmdk__list" ref={listRef} role="listbox">
              {groups.map(([group, items]) => (
                <div className="cmdk__group" key={group}>
                  <span className="cmdk__group-label">{group}</span>
                  {items.map((item) => {
                    flatIndex += 1;
                    const index = flatIndex;
                    const active = index === cursor;
                    return (
                      <button
                        key={item.id}
                        role="option"
                        aria-selected={active}
                        data-active={active}
                        className={`cmdk__item${active ? " cmdk__item--active" : ""}`}
                        onMouseMove={() => setCursor(index)}
                        onClick={() => runCommand(item)}>
                        <span className="cmdk__item-icon">{item.icon}</span>
                        <span className="cmdk__item-label">{item.label}</span>
                        {item.hint && (
                          <span className="cmdk__item-hint">
                            {item.id === "copy-email" && copied ? "Copied" : item.hint}
                          </span>
                        )}
                        {active && <FiCornerDownLeft size={14} />}
                      </button>
                    );
                  })}
                </div>
              ))}

              {!results.length && (
                <p className="cmdk__empty">Nothing matches &ldquo;{query}&rdquo;.</p>
              )}
            </div>

            <div className="cmdk__foot">
              <span>
                <kbd>&uarr;</kbd>
                <kbd>&darr;</kbd> navigate
              </span>
              <span>
                <kbd>&crarr;</kbd> select
              </span>
              <span>
                <kbd>Esc</kbd> close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
