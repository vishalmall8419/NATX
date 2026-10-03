import React, { useEffect, useState } from "react";

const Meteors = ({ number = 20 }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate random meteors
    const newMeteors = new Array(number).fill(true).map(() => ({
      id: Math.random().toString(36).substring(7),
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      animationDelay: Math.random() * 5 + 0.2 + "s",
      animationDuration: Math.random() * 2 + 2 + "s",
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-[var(--primary)] to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;

