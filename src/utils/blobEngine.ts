type BlobEngineOptions = {
  points?: number;
  baseRadius?: number;
  maxRadius?: number;
  ease?: number;
};

type Particle = {
  angle: number;
  speed: number;
  size: number;
  phase: number;
  depth: number;
  age: number;
  life: number;
  drift: number;
};

export function startBlobEngine({
  points = 120,
  baseRadius = 10,
  maxRadius = 160,
  ease = 0.12
}: BlobEngineOptions = {}) {

  let rafId: number;

  // cursor
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  // velocity
  let lastX = targetX;
  let lastY = targetY;
  let velocity = 0;

  const noise = (t: number, seed: number) => Math.sin(t + seed) * 0.6 + Math.sin(t * .7 + seed) * 0.3 + Math.sin(t * 1.3 + seed) * 0.1

  const spawn = (): Particle => ({
    angle: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.002,
    size: 1 + Math.random() * 2,        // dust starts tiny
    phase: Math.random() * Math.PI * 2,
    depth: Math.pow(Math.random(), 1.6),
    age: 0,
    life: 120 + Math.random() * 120,    // frames
    drift: 0.2 + Math.random() * 0.6    // upward smoke
  });

  const particles: Array<Particle> = Array.from(
    { length: points },
    spawn
  );

  const handleMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  const handleTouch = (e: TouchEvent) => {
    const t = e.touches[0];
    targetX = t.clientX;
    targetY = t.clientY;
  };

  const animate = () => {
    // smooth cursor
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    // velocity
    const dx = currentX - lastX;
    const dy = currentY - lastY;
    velocity = Math.min(Math.hypot(dx, dy) * 4, maxRadius);

    lastX = currentX;
    lastY = currentY;

    const time = performance.now() * 0.001;

    const mask = particles.map(p => {
      p.age++;

      // respawn
      if (p.age > p.life) {
        Object.assign(p, spawn());
      }

      const lifeRatio = p.age / p.life; // 0 → 1

      // dust → smoke evolution
      const base =
        (baseRadius + velocity) *
        p.depth *
        (1 + lifeRatio * 0.6);

      const organic =
        1 + noise(time * 0.8, p.phase) * 0.3;

      const radius = base * organic;

      const size =
        p.size + lifeRatio * 6; // grows into smoke

      const fade =
        1 - lifeRatio;

      p.angle += p.speed;



      const nx = noise(time * 2.5, p.phase)
      const ny = noise(time * 2.5, p.phase + 10)

      const wobbleX = nx * 8;
      const wobbleY = ny * 8;

      const x =
        currentX +
        Math.cos(p.angle) * radius +
        wobbleX;

      const y =
        currentY +
        Math.sin(p.angle) * radius +
        wobbleY -
        lifeRatio * 25 * p.drift; // smoke rises

      return `
        radial-gradient(
          ${size}px ${size}px
          at ${x}px ${y}px,
          rgba(0,0,0,${fade}) 60%,
          transparent 75%
        )
      `;
    }).join(",");

    document.documentElement.style.setProperty("--mask", mask);

    rafId = requestAnimationFrame(animate);
  };

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleTouch, { passive: true });

  animate();

  return () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("touchmove", handleTouch);
  };
}
