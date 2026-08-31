import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
  );
};

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
