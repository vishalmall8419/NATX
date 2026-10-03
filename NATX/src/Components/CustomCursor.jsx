import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const hoverRef = useRef(false);
  const textHoverRef = useRef(false);
  const visibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    document.body.style.cursor = "none";

    let magneticEl = null;

    const moveCursor = (e) => {
      const target = e.target;
      
      const interactable = target.closest("a, button, input, .interactable");
      if (interactable) {
        if (!hoverRef.current) {
          hoverRef.current = true;
          setIsHovering(true);
        }
        magneticEl = interactable;
        
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        cursorX.set(e.clientX * 0.8 + centerX * 0.2); 
        cursorY.set(e.clientY * 0.8 + centerY * 0.2);
      } else {
        if (hoverRef.current) {
          hoverRef.current = false;
          setIsHovering(false);
        }
        magneticEl = null;
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }

      const textEl = target.closest("h1, h2, h3, p, span.text-gradient, .text-3d");
      if (textEl && !interactable) {
        if (!textHoverRef.current) {
          textHoverRef.current = true;
          setIsTextHovering(true);
        }
      } else {
        if (textHoverRef.current) {
          textHoverRef.current = false;
          setIsTextHovering(false);
        }
      }
      
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  let scale = 1;
  let bg = "rgba(0, 229, 255, 0)";
  let border = "1px solid var(--primary)";
  let mixBlend = "screen";

  if (isHovering) {
    scale = 1.3;
    bg = "rgba(0, 229, 255, 0.1)";
    border = "1.5px solid var(--primary)";
  } else if (isTextHovering) {
    scale = 1.8;
    bg = "rgba(112, 0, 255, 0.05)";
    border = "1px dashed var(--primary)";
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-1.5 w-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full flex items-center justify-center overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: mixBlend,
        }}
        animate={{
          scale: scale,
          backgroundColor: bg,
          border: border,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
};

export default CustomCursor;
