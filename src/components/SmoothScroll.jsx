import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState(0);

  const scrollY = useMotionValue(0);

  // lower stiffness + higher damping = slower smoother scroll
  const smoothY = useSpring(scrollY, {
    stiffness: 55,
    damping: 18,
    mass: 0.35,
  });

  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;
      setContentHeight(contentRef.current.getBoundingClientRect().height);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      scrollY.set(window.scrollY);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={wrapperRef}
        style={{ y }}
        className="fixed inset-0 will-change-transform"
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </>
  );
};

export default SmoothScroll;