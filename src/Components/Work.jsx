import { useMemo, useState } from "react";
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

const ProjectCard = ({ p, index }) => (
  <motion.article
    className={`pcard pcard--${p.accent}`}
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.45, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}>
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

const Work = () => {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          eyebrow="Work"
          title="Platforms I have built"
          subtitle="Production systems shipped at 90Soft. Each card flags how much of it is mine and whether it runs in production today."
        />

        <div className="work__filters">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`work__filter${filter === f ? " work__filter--active" : ""}`}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <motion.div className="work__grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard p={p} index={i} key={p.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
