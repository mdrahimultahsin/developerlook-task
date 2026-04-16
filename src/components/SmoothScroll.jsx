import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const SmoothScroll = ({ children, native = false }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const scrollY = useMotionValue(0);

  const smoothY = useSpring(scrollY, {
    stiffness: 55,
    damping: 18,
    mass: 0.35,
  });

  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    if (native) return;

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
  }, [native]);

  useEffect(() => {
    if (native) return;

    const updateScroll = () => {
      scrollY.set(window.scrollY);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scrollY, native]);

  if (native) {
    return <div className="relative w-full">{children}</div>;
  }

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