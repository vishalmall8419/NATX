import React, { useEffect, useRef } from 'react';

const CanvasMeteors = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Resize for high DPI
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    window.addEventListener('resize', resize);
    resize();

    const comets = [];
    const sparks = [];

    const random = (min, max) => Math.random() * (max - min) + min;

    class Spark {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = random(-8, 8);
        this.vy = random(-8, 8);
        this.life = 1;
        this.decay = random(0.02, 0.05);
        this.color = color;
        this.size = random(1, 2.5); 
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.25; // gravity
        this.vx *= 0.92; // friction
        this.life -= this.decay;
      }
      draw(ctx) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Comet {
      constructor() {
        this.reset(true);
      }
      
      reset(initial = false) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Spawn from any of the 4 edges
        const edge = Math.floor(random(0, 4));
        if (edge === 0) { // Top
          this.x = random(0, width);
          this.y = -50;
        } else if (edge === 1) { // Bottom
          this.x = random(0, width);
          this.y = height + 50;
        } else if (edge === 2) { // Left
          this.x = -50;
          this.y = random(0, height);
        } else { // Right
          this.x = width + 50;
          this.y = random(0, height);
        }
        
        // Aim roughly towards the center with some randomness
        const centerX = width / 2 + random(-300, 300);
        const centerY = height / 2 + random(-300, 300);
        this.baseAngle = Math.atan2(centerY - this.y, centerX - this.x);
        
        this.speed = random(8, 16); 
        this.vx = Math.cos(this.baseAngle) * this.speed;
        this.vy = Math.sin(this.baseAngle) * this.speed;
        
        // Zig-zag properties
        this.zigZagTimer = 0;
        this.zigZagFrequency = random(0.05, 0.15);
        this.zigZagAmplitude = random(2, 5);
        
        this.length = random(60, 150);
        this.maxSize = random(1.5, 3.5);
        this.size = this.maxSize;
        
        // Strictly Tech/Cyber colors (Cyan, Teal, White)
        const colors = ["#00ff66", "#00cc52", "#ffffff", "#ccffdd"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.active = false;
        this.life = 1.0; 
        this.burnRate = random(0.003, 0.006); // Dheere dheere burn hoga
        
        // Wait before spawning
        this.delay = initial ? random(0, 200) : random(30, 150);
      }

      update() {
        if (this.delay > 0) {
          this.delay--;
          if (this.delay <= 0) this.active = true;
          return;
        }
        if (!this.active) return;
        
        // Zig-zag physics (perpendicular sine wave offset)
        this.zigZagTimer += this.zigZagFrequency;
        const offset = Math.sin(this.zigZagTimer) * this.zigZagAmplitude;
        
        // True position is base trajectory + offset
        const currentAngle = this.baseAngle + (offset * 0.05);
        this.x += Math.cos(currentAngle) * this.speed;
        this.y += Math.sin(currentAngle) * this.speed;

        // Burn out logic
        this.life -= this.burnRate;
        this.size = this.maxSize * Math.max(0, this.life);

        // If fully burned out, disappear without blast
        if (this.life <= 0) {
          this.active = false;
          this.reset();
        }
      }

      explode() {
        if (!this.active) return;
        const sparkCount = Math.floor(random(20, 40)); // Moderate blast
        for (let i = 0; i < sparkCount; i++) {
          sparks.push(new Spark(this.x, this.y, this.color));
        }
        this.active = false;
        this.reset();
      }

      draw(ctx) {
        if (!this.active || this.life <= 0) return;

        ctx.save();
        
        // Opacity based on life (burning out)
        ctx.globalAlpha = Math.max(0, this.life);
        
        // Comet Head
        ctx.shadowBlur = 15 * this.life;
        ctx.shadowColor = this.color;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Comet Tail
        const tailX = this.x - Math.cos(this.baseAngle) * this.length;
        const tailY = this.y - Math.sin(this.baseAngle) * this.length;
        
        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "transparent");

        ctx.shadowBlur = 0;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size * 0.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Initialize 20 comets for high collision probability
    for (let i = 0; i < 20; i++) {
      comets.push(new Comet());
    }

    const render = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = 'lighter';

      // Collision Detection
      for (let i = 0; i < comets.length; i++) {
        for (let j = i + 1; j < comets.length; j++) {
          const c1 = comets[i];
          const c2 = comets[j];
          
          if (c1.active && c2.active) {
            const dx = c1.x - c2.x;
            const dy = c1.y - c2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // If they are very close, they collide
            if (dist < c1.size + c2.size + 40) {
              // Add a big flash at collision point
              sparks.push(new Spark((c1.x + c2.x)/2, (c1.y + c2.y)/2, "#ffffff"));
              
              c1.explode();
              c2.explode();
            }
          }
        }
      }

      // Update and Draw
      comets.forEach(c => {
        c.update();
        c.draw(ctx);
      });

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.update();
        s.draw(ctx);
        if (s.life <= 0) sparks.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none  opacity-90"
    />
  );
};

export default CanvasMeteors;
