import { useEffect } from "react";
import gsap from "gsap";

const usePhysicsTilt = () => {
  useEffect(() => {
    let activeCard = null;

    const resetCard = (card) => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });
    };

    const handleMouseOver = (e) => {
      const card = e.target.closest('.physics-tilt');
      if (card !== activeCard) {
        if (activeCard) resetCard(activeCard);
        activeCard = card;
      }
    };

    const handleMouseOut = (e) => {
      if (!activeCard) return;
      if (e.relatedTarget && activeCard.contains(e.relatedTarget)) return;
      resetCard(activeCard);
      activeCard = null;
    };

    const handleMouseMove = (e) => {
      if (!activeCard) return;
      
      const rect = activeCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      // Calculate light glare based on mouse position
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      
      activeCard.style.setProperty('--glare-x', glareX + '%');
      activeCard.style.setProperty('--glare-y', glareY + '%');

      gsap.to(activeCard, {
        rotateX,
        rotateY,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center",
        overwrite: "auto"
      });
    };

    // Use passive true for all global mouse listeners to prevent scroll blocking
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default usePhysicsTilt;
