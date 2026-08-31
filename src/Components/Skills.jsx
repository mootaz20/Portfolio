import { motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiLink,
  FiShield,
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

const Skills = () => (
  <section className="section section--alt" id="skills">
    <div className="grid-bg" />
    <div className="container rel">
      <SectionHead
        eyebrow="Skills"
        title="The toolkit I ship with"
        subtitle="Everything listed here I have used on a delivered project, not just read about."
      />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <motion.div
            className="skillcard"
            key={group.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
            <div className="skillcard__head">
              <span className="skillcard__icon">{icons[group.icon]}</span>
              <div>
                <h3>{group.label}</h3>
                <span className="skillcard__count">
                  {String(group.items.length).padStart(2, "0")} technologies
                </span>
              </div>
            </div>

            <div className="skillcard__items">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
