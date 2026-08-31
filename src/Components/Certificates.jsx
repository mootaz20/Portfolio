import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import SectionHead from "./SectionHead";
import { certificates } from "../data/content";

const Certificates = () => {
  const featured = certificates.filter((c) => c.featured);
  const rest = certificates.filter((c) => !c.featured);

  return (
    <section className="section section--alt" id="certificates">
      <div className="container">
        <SectionHead
          eyebrow="Certificates"
          title="Certifications & recognition"
          subtitle="Programs completed, scores achieved, and the recommendations that came with them."
        />

        <div className="certs__featured">
          {featured.map((c, i) => (
            <motion.div
              className="cert-hero"
              key={c.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}>
              <span className="cert-hero__ribbon" />
              <span className="cert-hero__icon">
                <FiAward size={22} />
              </span>
              <h3>{c.title}</h3>
              <p className="cert-hero__issuer">{c.issuer}</p>
              <span className="cert-hero__badge">
                <FiCheckCircle size={14} />
                {c.badge}
              </span>
              <span className="cert-hero__date">{c.date}</span>
            </motion.div>
          ))}
        </div>

        <div className="certs__list">
          {rest.map((c, i) => (
            <motion.div
              className="cert-row"
              key={c.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}>
              <span className="cert-row__icon">
                <FiCheckCircle size={17} />
              </span>
              <div className="cert-row__body">
                <strong>{c.title}</strong>
                <span>{c.issuer}</span>
              </div>
              <span className="cert-row__date">{c.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
