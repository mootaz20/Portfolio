import { motion } from "framer-motion";
import { FiShield, FiExternalLink } from "react-icons/fi";
import { security, profile } from "../data/content";

/*
  Deliberately compact: security is context for how I build,
  not the headline of this portfolio.
*/
const Security = () => (
  <section className="section section--security">
    <div className="container">
      <motion.div
        className="sec-note"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
        <span className="sec-note__label">
          <FiShield size={13} /> Background &middot; not my day job
        </span>

        <h3>Security-minded by training</h3>
        <p>{security.intro}</p>

        <div className="sec-note__grid">
          {security.items.map((item) => (
            <div className="sec-item" key={item.title}>
              <strong>{item.title}</strong>
              <em>{item.org}</em>
              <p>{item.note}</p>
              <span className="sec-item__meta">{item.meta}</span>
            </div>
          ))}
        </div>

        <div className="sec-note__tools">
          {security.tools.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
          <a className="btn btn--ghost btn--sm" href={profile.cv.security} download>
            <FiShield size={15} /> Security CV
          </a>
          <a
            className="btn btn--ghost btn--sm"
            href={profile.socials.tryhackme}
            target="_blank"
            rel="noreferrer">
            <FiExternalLink size={15} /> TryHackMe profile
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Security;
