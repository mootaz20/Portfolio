import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase, FiShield, FiAward, FiChevronDown } from "react-icons/fi";
import SectionHead from "./SectionHead";
import { experience } from "../data/content";

const icons = {
  work: <FiBriefcase size={11} />,
  security: <FiShield size={11} />,
  training: <FiAward size={11} />,
};

/* First two bullets are always visible; the rest open on request. */
const PREVIEW = 2;

const TimelineItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const hidden = item.points.slice(PREVIEW);

  return (
    <motion.div
      className="tl__item"
      initial={{ opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
      <span
        className={`tl__dot${item.current ? " tl__dot--current" : ""}`}
        aria-hidden="true">
        {icons[item.kind]}
      </span>

      <article className={`tl__card${open ? " tl__card--open" : ""}`}>
        <div className="tl__top">
          <h3 className="tl__role">{item.role}</h3>
          <span className="tl__period">{item.period}</span>
        </div>

        <p className="tl__org">
          {item.org} &middot; {item.place}
        </p>

        {item.highlight && <span className="tl__highlight">{item.highlight}</span>}

        <p className="tl__summary">{item.summary}</p>

        <ul className="tl__points">
          {item.points.slice(0, PREVIEW).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {hidden.length > 0 && (
          <>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}>
                  <ul className="tl__points tl__points--more">
                    {hidden.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="tl__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}>
              {open ? "Show less" : `${hidden.length} more details`}
              <motion.span
                className="tl__toggle-icon"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
                <FiChevronDown size={15} />
              </motion.span>
            </button>
          </>
        )}
      </article>
    </motion.div>
  );
};

const Experience = () => (
  <section className="section section--alt" id="experience">
    <div className="container">
      <SectionHead
        eyebrow="Experience"
        title="Where I have worked and trained"
        subtitle="Two years of production development, plus the training programs that shaped how I build."
      />

      <div className="tl">
        {experience.map((item, i) => (
          <TimelineItem item={item} index={i} key={item.id} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
