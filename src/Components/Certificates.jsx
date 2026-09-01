import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import SectionHead from "./SectionHead";
import { certificates } from "../data/content";
import { usePointerTilt } from "../hooks/usePointerTilt";

/* Tabs come from the data, so a new certificate type needs no code change. */
const types = ["All", ...new Set(certificates.map((c) => c.type))];

const FeaturedCert = ({ cert, index }) => {
  const { ref, rotateX, rotateY, onPointerMove, onPointerLeave } = usePointerTilt(5);

  return (
    <motion.div
      ref={ref}
      className="cert-hero"
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
      <span className="spotlight" aria-hidden="true" />
      <span className="cert-hero__ribbon" />
      <span className="cert-hero__icon">
        <FiAward size={22} />
      </span>
      <h3>{cert.title}</h3>
      <p className="cert-hero__issuer">{cert.issuer}</p>
      <span className="cert-hero__badge">
        <FiCheckCircle size={14} />
        {cert.badge}
      </span>
      <span className="cert-hero__date">{cert.date}</span>
    </motion.div>
  );
};

const Certificates = () => {
  const [type, setType] = useState("All");

  const visible = useMemo(
    () =>
      type === "All" ? certificates : certificates.filter((c) => c.type === type),
    [type]
  );

  const featured = visible.filter((c) => c.featured);
  const rest = visible.filter((c) => !c.featured);

  return (
    <section className="section section--alt" id="certificates">
      <div className="container">
        <SectionHead
          eyebrow="Certificates"
          title="Certifications & recognition"
          subtitle="Programs completed, scores achieved, and the recommendations that came with them."
        />

        <div className="work__bar">
          <div className="work__filters" role="tablist" aria-label="Filter certificates">
            {types.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={type === t}
                className={`work__filter${type === t ? " work__filter--active" : ""}`}
                onClick={() => setType(t)}>
                {type === t && (
                  <motion.span
                    layoutId="cert-filter-pill"
                    className="work__filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span>{t}</span>
              </button>
            ))}
          </div>

          <motion.span
            className="work__count"
            key={visible.length}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            {visible.length} of {certificates.length} certificates
          </motion.span>
        </div>

        {featured.length > 0 && (
          <motion.div className="certs__featured" layout>
            <AnimatePresence mode="popLayout">
              {featured.map((c, i) => (
                <FeaturedCert cert={c} index={i} key={c.id} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div className="certs__list" layout>
          <AnimatePresence mode="popLayout">
            {rest.map((c, i) => (
              <motion.div
                className="cert-row"
                key={c.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -14 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <span className="cert-row__icon">
                  <FiCheckCircle size={17} />
                </span>
                <div className="cert-row__body">
                  <strong>{c.title}</strong>
                  <span>{c.issuer}</span>
                </div>
                <span className="cert-row__type">{c.type}</span>
                <span className="cert-row__date">{c.date}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
