import { motion, useScroll } from "framer-motion"

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, blue, black)',
        transformOrigin: '0%',
        zIndex: 10000, 
        opacity: 1, 
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}

export default ScrollProgressBar