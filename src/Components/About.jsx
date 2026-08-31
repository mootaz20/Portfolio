import { motion } from "framer-motion";
import { FiDownload, FiShield } from "react-icons/fi";
import SectionHead from "./SectionHead";
import { profile } from "../data/content";

const focus = [
  "Angular",
  "Node.js / NestJS",
  "Parse Server",
  "MongoDB",
  "Docker",
  "REST & Cloud Functions",
  "RBAC & JWT",
  "i18n / RTL",
];

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <SectionHead
        eyebrow="About"
        title="Engineer behind the platforms"
        subtitle="Production software for real operators - owned from schema to deployment."
      />

      <div className="about__grid">
        <motion.div
          className="about__bio"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="about__focus">
            {focus.map((f) => (
              <span className="chip chip--brand" key={f}>
                {f}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <a className="btn btn--primary" href={profile.cv.fullstack} download>
              <FiDownload size={17} /> Full-Stack CV
            </a>
            <a className="btn btn--ghost" href={profile.cv.security} download>
              <FiShield size={17} /> Security CV
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="about__side"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <div className="about__panel">
            <h4>Quick facts</h4>
            <div className="about__row">
              <span>Based in</span>
              <span>{profile.location}</span>
            </div>
            <div className="about__row">
              <span>Current role</span>
              <span>Full-Stack Developer, 90Soft</span>
            </div>
            <div className="about__row">
              <span>Primary stack</span>
              <span>Angular &middot; Node.js &middot; MongoDB</span>
            </div>
            <div className="about__row">
              <span>Availability</span>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="about__panel about__degree">
            <h4>Education</h4>
            <strong>{profile.education.degree}</strong>
            <span>
              {profile.education.school} &middot; {profile.education.note}
            </span>
          </div>

          <div className="about__panel">
            <h4>Languages</h4>
            {profile.languages.map((l) => (
              <div className="about__row" key={l.name}>
                <span>{l.name}</span>
                <span>{l.level}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </div>
  </section>
);

export default About;
