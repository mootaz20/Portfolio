import { FiGithub, FiLinkedin, FiMail, FiShield } from "react-icons/fi";
import { navLinks, profile } from "../data/content";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/assets/images/Logo.png" alt="Mootaz Alhalak" />
          <p>
            Full-Stack Developer building production platforms with Angular,
            Node.js and MongoDB - security-minded from the first commit.
          </p>
        </div>

        <nav className="footer__nav">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. Designed and built by me.
        </span>

        <div className="footer__socials">
          <a
            className="icon-btn"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a
            className="icon-btn"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
          <a
            className="icon-btn"
            href={profile.socials.tryhackme}
            target="_blank"
            rel="noreferrer"
            aria-label="TryHackMe">
            <FiShield size={16} />
          </a>
          <a
            className="icon-btn"
            href={`mailto:${profile.email}`}
            aria-label="Email">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
