const fs = require('fs');
const path = require('path');

// 1. Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/--primary:\s*#00e5ff;/g, '--primary: #00ff66;'); // Neon Green
css = css.replace(/--grad-cyan-start:\s*#00e5ff;/g, '--grad-cyan-start: #00ff66;');
css = css.replace(/--grad-cyan-end:\s*#0077ff;/g, '--grad-cyan-end: #00993d;'); // Deep Green

// Also replace the old light mode colors just in case
css = css.replace(/--primary:\s*#2563eb;/g, '--primary: #00cc52;');
css = css.replace(/--grad-cyan-start:\s*#3b82f6;/g, '--grad-cyan-start: #00cc52;');
css = css.replace(/--grad-cyan-end:\s*#1d4ed8;/g, '--grad-cyan-end: #006629;');

// Replace selection color
css = css.replace(/rgba\(0, 229, 255, 0\.3\)/g, 'rgba(0, 255, 102, 0.3)');
// Replace badge-pill background
css = css.replace(/rgba\(0, 229, 255, 0\.07\)/g, 'rgba(0, 255, 102, 0.07)');
css = css.replace(/rgba\(0, 229, 255, 0\.2\)/g, 'rgba(0, 255, 102, 0.2)');

fs.writeFileSync('src/index.css', css, 'utf8');
console.log('index.css colors updated.');

// 2. Update inline radial gradients in all LandingPage components
const dir = 'src/Components/LandingPage/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Replace rgba(0, 229, 255, X) with rgba(0, 255, 102, X)
  code = code.replace(/rgba\(0,229,255,([\d\.]+)\)/g, 'rgba(0,255,102,$1)');
  // Replace rgba(0, 119, 255, X) with rgba(0, 153, 61, X) (Deep green)
  code = code.replace(/rgba\(0,119,255,([\d\.]+)\)/g, 'rgba(0,153,61,$1)');
  
  fs.writeFileSync(filePath, code, 'utf8');
});
console.log('Component gradients updated.');

// 3. Update CanvasMeteors.jsx
let meteors = fs.readFileSync('src/Components/CanvasMeteors.jsx', 'utf8');
meteors = meteors.replace(
  'const colors = ["#00e5ff", "#00c3ff", "#ffffff", "#e0ffff"];',
  'const colors = ["#00ff66", "#00cc52", "#ffffff", "#ccffdd"];'
);
fs.writeFileSync('src/Components/CanvasMeteors.jsx', meteors, 'utf8');
console.log('CanvasMeteors.jsx colors updated.');

// 4. Update ParticlesBackground.jsx
let particles = fs.readFileSync('src/Components/ParticlesBackground.jsx', 'utf8');
// Base particle color
particles = particles.replace(
  'this.color = Math.random() > 0.5 ? "0, 229, 255" : "112, 0, 255";',
  'this.color = Math.random() > 0.5 ? "0, 255, 102" : "255, 255, 255";'
);
// Connection line color
particles = particles.replace(
  'ctx.strokeStyle = "rgba(0, 229, 255, " + (alpha * 0.3) + ")";',
  'ctx.strokeStyle = "rgba(0, 255, 102, " + (alpha * 0.3) + ")";'
);
fs.writeFileSync('src/Components/ParticlesBackground.jsx', particles, 'utf8');
console.log('ParticlesBackground.jsx colors updated.');

// 5. Update CustomCursor.jsx
let cursor = fs.readFileSync('src/Components/CustomCursor.jsx', 'utf8');
cursor = cursor.replace(/rgba\(0, 229, 255, 0\)/g, 'rgba(0, 255, 102, 0)');
cursor = cursor.replace(/rgba\(0, 229, 255, 0\.1\)/g, 'rgba(0, 255, 102, 0.1)');
// Text hover was purple, make it light green
cursor = cursor.replace(/rgba\(112, 0, 255, 0\.05\)/g, 'rgba(0, 255, 102, 0.05)');
fs.writeFileSync('src/Components/CustomCursor.jsx', cursor, 'utf8');
console.log('CustomCursor.jsx colors updated.');
