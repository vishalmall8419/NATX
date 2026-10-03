import { useEffect } from "react";
import gsap from "gsap";

const usePhysicsTilt = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.target.closest('.physics-tilt');
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      // Calculate light glare based on mouse position
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      
      card.style.setProperty('--glare-x', glareX + '%');
      card.style.setProperty('--glare-y', glareY + '%');

      gsap.to(card, {
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

    const handleMouseLeave = (e) => {
      const card = e.target.closest('.physics-tilt');
      if (!card) return;
      
      // Prevent jitter: if moving to a child of the same card, ignore!
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);
};

export default usePhysicsTilt;

