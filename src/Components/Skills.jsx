import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiLink,
  FiShield,
  FiSearch,
  FiX,
} from "react-icons/fi";
import SectionHead from "./SectionHead";
import { skillGroups } from "../data/content";

const icons = {
  layout: <FiLayout size={20} />,
  server: <FiServer size={20} />,
  database: <FiDatabase size={20} />,
  plug: <FiLink size={20} />,
  shield: <FiShield size={20} />,
};

const total = skillGroups.reduce((sum, g) => sum + g.items.length, 0);

/* Marks the matched run inside a chip so the filter shows its work. */
const Highlight = ({ text, query }) => {
  if (!query) return text;
  const at = text.toLowerCase().indexOf(query.toLowerCase());
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark>{text.slice(at, at + query.length)}</mark>
      {text.slice(at + query.length)}
    </>
  );
};

const Skills = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skillGroups
      .map((group) => ({
        ...group,
        matches: q
          ? group.items.filter((item) => item.toLowerCase().includes(q))
          : group.items,
      }))
      .filter((group) => group.matches.length > 0);
  }, [query]);

  const shown = filtered.reduce((sum, g) => sum + g.matches.length, 0);

  return (
    <section className="section section--alt" id="skills">
      <div className="grid-bg" />
      <div className="container rel">
        <SectionHead
          eyebrow="Skills"
          title="The toolkit I ship with"
          subtitle="Everything listed here I have used on a delivered project, not just read about."
        />

        <div className="skills__bar">
          <div className="skills__search">
            <FiSearch size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Filter ${total} technologies...`}
              aria-label="Filter skills"
              autoComplete="off"
              spellCheck="false"
            />
            <AnimatePresence>
              {query && (
                <motion.button
                  className="skills__clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear filter"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.16 }}>
                  <FiX size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <span className="skills__count">
            {shown} of {total} shown
          </span>
        </div>

        <motion.div className="skills__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((group, i) => (
              <motion.div
                className="skillcard"
                key={group.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <div className="skillcard__head">
                  <span className="skillcard__icon">{icons[group.icon]}</span>
                  <div>
                    <h3>{group.label}</h3>
                    <span className="skillcard__count">
                      {String(group.matches.length).padStart(2, "0")} technologies
                    </span>
                  </div>
                </div>

                <motion.div className="skillcard__items" layout>
                  <AnimatePresence mode="popLayout">
                    {group.matches.map((item) => (
                      <motion.span
                        className="chip chip--interactive"
                        key={item}
                        layout
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.22 }}>
                        <Highlight text={item} query={query.trim()} />
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!filtered.length && (
          <motion.p
            className="skills__empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}>
            No technology matches &ldquo;{query}&rdquo;. I would rather leave it off
            the list than claim it.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Skills;
