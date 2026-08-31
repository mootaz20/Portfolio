import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShield,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { profile, stats } from "../data/content";

/* Typewriter cycling through the role list. */
const useTypewriter = (words, typing = 75, deleting = 40, hold = 1700) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!erasing && text === word) {
      const t = setTimeout(() => setErasing(true), hold);
      return () => clearTimeout(t);
    }

    if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          erasing ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        ),
      erasing ? deleting : typing
    );
    return () => clearTimeout(t);
  }, [text, erasing, index, words, typing, deleting, hold]);

  return text;
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="hero" id="top">
      <div className="grid-bg" />
      <span className="glow hero__glow-a" />
      <span className="glow hero__glow-b" />

      <div className="container rel">
        <div className="hero__inner">
          <div>
            <motion.div
              className="hero__status"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}>
              <span className="hero__dot" />
              Full-Stack Developer at 90Soft &middot; Open to opportunities
            </motion.div>

            <motion.p
              className="hero__greet"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}>
              &lt;/&gt; Hello, I am
            </motion.p>

            <motion.h1
              className="hero__name"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}>
              Mootaz <span className="grad-text">Alhalak</span>
            </motion.h1>

            <motion.div
              className="hero__roles"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}>
              <span className="hero__role">
                {typed}
                <span className="hero__cursor" />
              </span>
            </motion.div>

            <motion.p
              className="hero__tag"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}>
              {profile.tagline}
            </motion.p>

            <motion.div
              className="hero__cta"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}>
              <a href="#work" className="btn btn--primary">
                View my work <FiArrowRight size={17} />
              </a>
              <a href="#contact" className="btn btn--ghost">
                <FiMail size={17} /> Get in touch
              </a>
            </motion.div>

            <motion.div
              className="hero__socials"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}>
              <a
                className="icon-btn"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub">
                <FiGithub size={19} />
              </a>
              <a
                className="icon-btn"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn">
                <FiLinkedin size={19} />
              </a>
              <a
                className="icon-btn"
                href={profile.socials.tryhackme}
                target="_blank"
                rel="noreferrer"
                aria-label="TryHackMe">
                <FiShield size={19} />
              </a>
              <a
                className="icon-btn"
                href={profile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook">
                <FaFacebookF size={17} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero__orb">
              <motion.span
                className="hero__ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="hero__ring hero__ring--2"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <span className="hero__ring hero__ring--3" />

              <motion.img
                src="/assets/images/linkIcon.png"
                alt=""
                className="hero__mark"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.span
                className="hero__chip hero__chip--1"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
                Angular 21
              </motion.span>
              <motion.span
                className="hero__chip hero__chip--2"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}>
                Node &middot; NestJS
              </motion.span>
              <motion.span
                className="hero__chip hero__chip--3"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}>
                MongoDB &middot; Docker
              </motion.span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
