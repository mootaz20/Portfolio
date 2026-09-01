import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiLayers,
  FiUser,
  FiUsers,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";
import SectionHead from "./SectionHead";
import { projects, projectFilters } from "../data/content";
import { usePointerTilt } from "../hooks/usePointerTilt";

/* Green reads as "this is live" - anything else gets the neutral tone. */
const LIVE_STATUSES = ["In production", "Live"];

/* Ownership wording drives which badge icon is shown. */
const ownershipIcon = (ownership) => {
  const o = ownership.toLowerCase();
  if (o.includes("zero") || o.includes("solo") || o.includes("sole"))
    return <FiZap size={12} />;
  if (o.includes("lead") || o.includes("owner")) return <FiUser size={12} />;
  return <FiUsers size={12} />;
};

const ProjectCard = ({ p, index, flash }) => {
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = usePointerTilt();

  return (
    <motion.article
      ref={ref}
      id={`project-${p.id}`}
      className={`pcard pcard--${p.accent}${flash ? " pcard--flash" : ""}`}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      whileHover={{ y: -6 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}>
      <span className="spotlight" aria-hidden="true" />

      <div className="pcard__head">
        <span className="pcard__icon">
          <FiLayers size={21} />
        </span>
        <span
          className={`pcard__status${
            LIVE_STATUSES.includes(p.status) ? "" : " pcard__status--soft"
          }`}>
          {p.status}
        </span>
      </div>

      <h3 className="pcard__name">{p.name}</h3>
      <p className="pcard__sub">
        {p.subtitle}
        {p.client ? ` · ${p.client}` : ""}
      </p>

      <p className="pcard__blurb">{p.blurb}</p>

      <div className="pcard__meta">
        <span className="pcard__badge">
          {ownershipIcon(p.ownership)}
          {p.ownership}
        </span>
        <span className="chip">{p.role}</span>
        <span className="chip">{p.year}</span>
      </div>

      {p.scale && <p className="pcard__scale">{p.scale}</p>}

      <div className="pcard__stack">
        {p.stack.map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>

      {p.link && (
        <a className="pcard__link" href={p.link} target="_blank" rel="noreferrer">
          Visit live site <FiArrowUpRight size={16} />
        </a>
      )}
    </motion.article>
  );
};

const Work = () => {
  const [filter, setFilter] = useState("All");
  const [flashId, setFlashId] = useState(null);
  const flashTimer = useRef(null);

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  /*
    The command palette can ask for one project by name. Clear any active
    filter first so the card definitely exists, then scroll to it and
    let the highlight fade on its own.
  */
  useEffect(() => {
    const onFocusProject = (event) => {
      const id = event.detail;
      setFilter("All");
      setFlashId(id);

      setTimeout(() => {
        document
          .getElementById(`project-${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);

      clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setFlashId(null), 2400);
    };

    window.addEventListener("portfolio:focus-project", onFocusProject);
    return () => {
      window.removeEventListener("portfolio:focus-project", onFocusProject);
      clearTimeout(flashTimer.current);
    };
  }, []);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          eyebrow="Work"
          title="Platforms I have built"
          subtitle="Production systems shipped at 90Soft. Each card flags how much of it is mine and whether it runs in production today."
        />

        <div className="work__bar">
          <div className="work__filters" role="tablist" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`work__filter${filter === f ? " work__filter--active" : ""}`}
                onClick={() => setFilter(f)}>
                {filter === f && (
                  <motion.span
                    layoutId="work-filter-pill"
                    className="work__filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span>{f}</span>
              </button>
            ))}
          </div>

          <motion.span
            className="work__count"
            key={visible.length}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            {visible.length} of {projects.length} projects
          </motion.span>
        </div>

        <motion.div className="work__grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard p={p} index={i} key={p.id} flash={flashId === p.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
