import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/*
  Splits a display string like "98.8%", "2+" or "12" into the parts we can
  animate. Anything unparseable is rendered verbatim, never mangled.
*/
const parse = (raw) => {
  const match = String(raw).match(/^([^\d-]*)(-?[\d.,]+)(.*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const value = Number(digits.replace(/,/g, ""));
  if (Number.isNaN(value)) return null;

  return { prefix, value, suffix, decimals: (digits.split(".")[1] || "").length };
};

/* Counts up once, the first time the element scrolls into view. */
export const useCountUp = (raw, duration = 1500) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const parsed = useMemo(() => parse(raw), [raw]);

  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : raw
  );

  useEffect(() => {
    if (!parsed || !inView) return;

    if (reduced) {
      setDisplay(raw);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(
        `${parsed.prefix}${(parsed.value * eased).toFixed(parsed.decimals)}${parsed.suffix}`
      );
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(raw);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [parsed, inView, reduced, raw, duration]);

  return [ref, display];
};
