import { motion } from "framer-motion";

const SectionHead = ({ eyebrow, title, subtitle, center = false }) => (
  <motion.div
    className={`sec-head${center ? " sec-head--center" : ""}`}
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="sec-title">{title}</h2>
    {subtitle && <p className="sec-sub">{subtitle}</p>}
  </motion.div>
);

export default SectionHead;
