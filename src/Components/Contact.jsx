import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiShield,
  FiExternalLink,
  FiCopy,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { profile } from "../data/content";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const change = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const compose = () => ({
    subject: `Portfolio enquiry from ${form.name || "a visitor"}`,
    body: `${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`,
  });

  /*
    There is no backend, so the message is handed to whatever the visitor
    actually has. mailto: only fires when a desktop mail client is registered -
    plenty of people have none - so Gmail and clipboard are offered alongside it.
  */
  const submit = (e) => {
    e.preventDefault();
    const { subject, body } = compose();
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // A real anchor click is honoured more reliably than assigning location.href.
    const a = document.createElement("a");
    a.href = href;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setStatus("opened");
  };

  const openGmail = () => {
    const { subject, body } = compose();
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("gmail");
  };

  const copyMessage = async () => {
    const { subject, body } = compose();
    const text = `To: ${profile.email}\nSubject: ${subject}\n\n${body}`;

    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      return;
    } catch {
      // The Clipboard API needs a secure context - fall back to a scratch textarea.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setStatus("copied");
      } catch {
        setStatus("copyfailed");
      }
      ta.remove();
    }
  };

  const statusText = {
    opened:
      "Your mail app should be opening. Nothing happened? Use Gmail or copy the message below.",
    gmail: "Gmail compose opened in a new tab.",
    copied: "Message copied - paste it into any email client.",
    copyfailed: `Could not copy automatically. Email me at ${profile.email}.`,
  };

  const cards = [
    { icon: <FiMapPin size={19} />, label: "Location", value: profile.location },
    {
      icon: <FiPhone size={19} />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: <FiMail size={19} />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Let us build something"
          subtitle="Open to full-stack roles and freelance work. The fastest way to reach me is email."
        />

        <div className="contact__grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="contact__cards">
              {cards.map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag className="contact__card" key={c.label} href={c.href}>
                    <span className="contact__card-icon">{c.icon}</span>
                    <div>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <div className="contact__socials">
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
            </div>
          </motion.div>

          <motion.form
            className="form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <h3>Send a message</h3>
            <p>Tell me about the role or the project - I usually reply within a day.</p>

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                value={form.name}
                onChange={change}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                value={form.email}
                onChange={change}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What are you building?"
                value={form.message}
                onChange={change}
              />
            </div>

            <button type="submit" className="btn btn--primary">
              <FiSend size={17} /> Send message
            </button>

            <div className="form__fallback">
              <span>No mail app?</span>
              <button type="button" onClick={openGmail}>
                <FiExternalLink size={13} /> Open in Gmail
              </button>
              <span className="form__sep" aria-hidden="true">
                &middot;
              </span>
              <button type="button" onClick={copyMessage}>
                <FiCopy size={13} /> Copy message
              </button>
            </div>

            {status && <p className="form__status">{statusText[status]}</p>}

            <p className="form__hint">
              Goes to {profile.email} - however you prefer to send it.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
