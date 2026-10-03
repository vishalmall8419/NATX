import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };
    let lastMouse = { x: -1000, y: -1000 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;
      lastMouse = { x: mouse.x, y: mouse.y };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Physics constants
    const PARTICLE_COUNT = 150;
    const CONNECT_DISTANCE = 120;
    const MOUSE_REPULSE_RADIUS = 200;
    const RESTORE_FORCE = 0.005;
    const DAMPING = 0.9;
    const MOUSE_FORCE = 0.5;

    class Particle {
      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = 0;
        this.vy = 0;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? "0, 229, 255" : "112, 0, 255";
      }

      update() {
        // Distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsion from mouse
        if (dist < MOUSE_REPULSE_RADIUS && dist > 0) {
          const force = (MOUSE_REPULSE_RADIUS - dist) / MOUSE_REPULSE_RADIUS;
          this.vx -= (dx / dist) * force * MOUSE_FORCE;
          this.vy -= (dy / dist) * force * MOUSE_FORCE;
        }

        // Restore to base position (Spring physics)
        this.vx += (this.baseX - this.x) * RESTORE_FORCE;
        this.vy += (this.baseY - this.y) * RESTORE_FORCE;

        // Apply damping
        this.vx *= DAMPING;
        this.vy *= DAMPING;

        // Update position
        this.x += this.vx;
        this.y += this.vy;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(" + this.color + ")";
        ctx.fill();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Decay mouse velocity
      mouse.vx *= 0.8;
      mouse.vy *= 0.8;

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            const alpha = 1 - dist / CONNECT_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Mix colors or just use cyan
            ctx.strokeStyle = "rgba(0, 229, 255, " + (alpha * 0.3) + ")";
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen opacity-50"
    />
  );
};

export default ParticlesBackground;
