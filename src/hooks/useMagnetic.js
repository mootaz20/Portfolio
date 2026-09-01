import { useCallback, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/* Button leans toward the cursor while it is over it, then springs home. */
export const useMagnetic = (strength = 0.28) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 260, damping: 18, mass: 0.35 };
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el || reduced || event.pointerType === "touch") return;

      const rect = el.getBoundingClientRect();
      rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength);
      rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [reduced, strength, rawX, rawY]
  );

  const onPointerLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, x, y, onPointerMove, onPointerLeave };
};
