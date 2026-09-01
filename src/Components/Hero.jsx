import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShield,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { profile, stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { useMagnetic } from "../hooks/useMagnetic";

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

/* Each stat counts up from zero the first time it is scrolled into view. */
const HeroStat = ({ stat }) => {
  const [ref, display] = useCountUp(stat.value);
  return (
    <div className="hero__stat" ref={ref}>
      <b>{display}</b>
      <span>{stat.label}</span>
    </div>
  );
};

const MagneticButton = ({ href, className, children }) => {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic();
  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}>
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const typed = useTypewriter(profile.roles);
  const reduced = useReducedMotion();

  /* Pointer parallax: the orb drifts a little, the chips drift more. */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const config = { stiffness: 120, damping: 20, mass: 0.5 };
  const orbX = useSpring(useTransform(px, [-0.5, 0.5], [-16, 16]), config);
  const orbY = useSpring(useTransform(py, [-0.5, 0.5], [-16, 16]), config);
  const chipX = useSpring(useTransform(px, [-0.5, 0.5], [-34, 34]), config);
  const chipY = useSpring(useTransform(py, [-0.5, 0.5], [-24, 24]), config);

  const onPointerMove = (event) => {
    if (reduced || event.pointerType === "touch") return;
    px.set(event.clientX / window.innerWidth - 0.5);
    py.set(event.clientY / window.innerHeight - 0.5);
  };

  return (
    <section className="hero" id="top" onPointerMove={onPointerMove}>
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
              <MagneticButton href="#work" className="btn btn--primary">
                View my work <FiArrowRight size={17} />
              </MagneticButton>
              <MagneticButton href="#contact" className="btn btn--ghost">
                <FiMail size={17} /> Get in touch
              </MagneticButton>
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
            <motion.div className="hero__orb" style={{ x: orbX, y: orbY }}>
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
                style={{ x: chipX, y: chipY }}
                animate={{ rotate: [0, 1.5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
                Angular 21
              </motion.span>
              <motion.span
                className="hero__chip hero__chip--2"
                style={{ x: chipY, y: chipX }}
                animate={{ rotate: [0, -1.5, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}>
                Node &middot; NestJS
              </motion.span>
              <motion.span
                className="hero__chip hero__chip--3"
                style={{ x: chipX, y: chipY }}
                animate={{ rotate: [0, 1.5, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
                MongoDB &middot; Docker
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          {stats.map((s) => (
            <HeroStat stat={s} key={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
