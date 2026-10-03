import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Icons
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const DiamondIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 12L12 14L22 12L12 2Z" fill="#e9d5ff" />

    <path d="M2 12L12 22L22 12L12 14L2 12Z" fill="#a855f7" />
  </svg>
);

const NodesIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5L5 12L12 19L19 12L12 5Z"
      stroke="#a855f7"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    <circle cx="12" cy="5" r="2.5" fill="#e9d5ff" />
    <circle cx="12" cy="19" r="2.5" fill="#e9d5ff" />
    <circle cx="5" cy="12" r="2.5" fill="#e9d5ff" />
    <circle cx="19" cy="12" r="2.5" fill="#e9d5ff" />
  </svg>
);

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Governance Data
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const govData = [
  {
    icon: <DiamondIcon />,
    title: "$NATX Token",
    description:
      "NATX is stored on a high-speed blockchain - a decentralized and secure digital ledger. The NATX protocol ensures maximum security, transparent governance, and true ownership.",
  },
  {
    icon: <NodesIcon />,
    title: "Community",
    description:
      "The community governs protocol upgrades, treasury allocation, and partnership decisions through on-chain voting mechanisms.",
  },
  {
    icon: <DiamondIcon />,
    title: "Foundation",
    description:
      "The NATX Foundation stewards long-term development, grants and ecosystem growth â€” ensuring the protocol remains self-sustaining.",
  },
];

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Component
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const Governence = () => {
  const section = useRef(null);

  useGSAP(
    () => {
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Heading animation
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

      ScrollTrigger.create({
        trigger: section.current,
        start: "top 85%",

        onEnter: () => {
          gsap.fromTo(
            ".gov-heading",
            {
              y: -35,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
            },
          );
        },

        onLeave: () => {
          gsap.set(".gov-heading", {
            opacity: 0,
          });
        },

        onEnterBack: () => {
          gsap.fromTo(
            ".gov-heading",
            {
              y: 35,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
            },
          );
        },

        onLeaveBack: () => {
          gsap.set(".gov-heading", {
            opacity: 0,
          });
        },
      });

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Governance items animation
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

      ScrollTrigger.create({
        trigger: ".gov-list",
        start: "top 80%",

        onEnter: () => {
          gsap.fromTo(
            ".gov-item",
            {
              y: -40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.15,
              ease: "power3.out",
            },
          );
        },

        onLeave: () => {
          gsap.set(".gov-item", {
            opacity: 0,
          });
        },

        onEnterBack: () => {
          gsap.fromTo(
            ".gov-item",
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              stagger: -0.15,
              ease: "power3.out",
            },
          );
        },

        onLeaveBack: () => {
          gsap.set(".gov-item", {
            opacity: 0,
          });
        },
      });

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Timeline progress line
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

      gsap.utils.toArray(".gov-progress-line").forEach((line) => {
        gsap.to(line, {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",

          scrollTrigger: {
            trigger: line,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      });
    },
    {
      scope: section,
    },
  );

  return (
    <section
      ref={section}
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        px-5
        py-20
        sm:px-8
        md:py-28
      "
    >
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          Ambient glows
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

      <div
        className="
          opt-glow
          pointer-events-none
          absolute
          -left-[8%]
          top-1/2
          h-[400px]
          w-[400px]
          -translate-y-1/2
          opacity-[0.08]
        "
      />

      <div
        className="
          opt-glow
          pointer-events-none
          absolute
          -right-[8%]
          top-1/2
          h-[400px]
          w-[400px]
          -translate-y-1/2
          opacity-[0.08]
        "
      />

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          Main content
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[820px]
          flex-col
          items-center
        "
      >
        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            Badge + Heading
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

        <div className="gov-heading mb-14 text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border-light)]
              bg-[var(--text-primary)]/[0.04]
              px-4
              py-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[var(--primary)]
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[var(--primary)]
              "
            >
              Protocol Governance
            </span>
          </div>

          <h2
            className="
              text-[30px]
              font-black
              leading-[1.1]
              tracking-tight
              text-[var(--text-primary)]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            Governance: Definition
            <br className="hidden sm:block" /> and Importance
          </h2>
        </div>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            Timeline
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

        <div className="gov-list w-full">
          {govData.map((item, idx) => (
            <div
              key={idx}
              className="
                gov-item
                flex
                w-full
              "
            >
              {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
                  Left: Icon + Progress Line
              â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

              <div
                className="
                  mr-6
                  flex
                  flex-col
                  items-center
                  md:mr-10
                "
              >
                {/* Icon ring */}

                <div
                  className="
                    relative
                    flex
                    h-[64px]
                    w-[64px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--primary)]/40
                    bg-[var(--bg-card)]
                    shadow-[0_0_14px_rgba(0,214,163,0.12)]
                    md:h-[76px]
                    md:w-[76px]
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      scale-90
                      md:scale-100
                    "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Animated progress line */}

                {idx < govData.length - 1 && (
                  <div
                    className="
                      my-1.5
                      w-[1.5px]
                      grow
                      overflow-hidden
                      bg-[var(--border)]
                    "
                  >
                    <div
                      className="
                        gov-progress-line
                        h-full
                        w-full
                        origin-top
                        bg-[var(--primary)]
                        opacity-70
                      "
                      style={{
                        transform: "scaleY(0)",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
                  Right: Content
              â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

              <div
                className={`
                  w-full
                  pb-10
                  md:pb-12
                  ${idx === govData.length - 1 ? "pb-0 md:pb-0" : ""}
                `}
              >
                <div
                  className="
                    flex
                    min-h-[64px]
                    flex-col
                    justify-center
                    md:min-h-[76px]
                    md:flex-row
                    md:items-center
                  "
                >
                  {/* Title */}

                  <div
                    className="
                      mb-2
                      w-full
                      shrink-0
                      md:mb-0
                      md:w-[170px]
                    "
                  >
                    <h3
                      className="
                        text-[18px]
                        font-bold
                        tracking-tight
                        text-[var(--text-primary)]
                        md:text-[20px]
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      max-w-[460px]
                      text-[14px]
                      leading-[1.7]
                      text-[var(--text-secondary)]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governence;



