import { motion } from "framer-motion";
import { FiBriefcase, FiShield, FiAward } from "react-icons/fi";
import SectionHead from "./SectionHead";
import { experience } from "../data/content";

const icons = {
  work: <FiBriefcase size={11} />,
  security: <FiShield size={11} />,
  training: <FiAward size={11} />,
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
          <motion.div
            className="tl__item"
            key={item.id}
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <span
              className={`tl__dot${item.current ? " tl__dot--current" : ""}`}
              aria-hidden="true">
              {icons[item.kind]}
            </span>

            <article className="tl__card">
              <div className="tl__top">
                <h3 className="tl__role">{item.role}</h3>
                <span className="tl__period">{item.period}</span>
              </div>

              <p className="tl__org">
                {item.org} &middot; {item.place}
              </p>

              {item.highlight && (
                <span className="tl__highlight">{item.highlight}</span>
              )}

              <p className="tl__summary">{item.summary}</p>

              <ul className="tl__points">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
