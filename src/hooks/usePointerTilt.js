import { useCallback, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/*
  Pointer-reactive card: springy tilt plus a --gx/--gy spotlight position
  handed to CSS. Touch pointers and reduced-motion users get the spotlight
  only - no tilt, nothing that moves under a finger.
*/
export const usePointerTilt = (max = 6) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 200, damping: 20, mass: 0.4 };
  const rotateX = useSpring(rawX, spring);
  const rotateY = useSpring(rawY, spring);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      el.style.setProperty("--gx", `${(px * 100).toFixed(2)}%`);
      el.style.setProperty("--gy", `${(py * 100).toFixed(2)}%`);

      if (reduced || event.pointerType === "touch") return;
      rawY.set((px - 0.5) * max * 2);
      rawX.set((0.5 - py) * max * 2);
    },
    [max, reduced, rawX, rawY]
  );

  const onPointerLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, rotateX, rotateY, onPointerMove, onPointerLeave };
};
