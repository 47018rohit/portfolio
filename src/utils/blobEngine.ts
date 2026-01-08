type BlobEngineOptions = {
  points?: number;
  baseRadius?: number;
  maxRadius?: number;
  ease?: number;
  wobble?: number;
};

type Blob = {
  angle: number;
  speed: number;
  size: number;
  phase: number;
  depth: number; // 0 = center, 1 = outer edge
};

export function startBlobEngine({
  points = 20,
  baseRadius = 10,
  maxRadius = 140,
  ease = 0.12,
  wobble = 20
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

  // blob particles
  const blobs: Array<Blob> = Array.from({ length: points }, (_, i) => ({
    angle: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.002,
    size: Math.random() * 20+ Math.random() * 2,
    phase: Math.random() * Math.PI * 2,
    depth: Math.pow(Math.random(), 1.8) // bias toward center
  }));

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

    // velocity (distance per frame)
    const dx = currentX - lastX;
    const dy = currentY - lastY;
    velocity = Math.min(Math.hypot(dx, dy) * 4, maxRadius - baseRadius);

    lastX = currentX;
    lastY = currentY;

    const t = performance.now() * 0.001;

    const mask = blobs.map((b, i) => {
      b.angle += b.speed;

      // radius reacts to velocity
      const radius =
        (baseRadius + velocity) * b.depth;

      // organic wobble
      const wobbleX = Math.sin(t * 2 + b.phase) * wobble;
      const wobbleY = Math.cos(t * 2.3 + b.phase) * wobble;

      const x =
        currentX +
        Math.cos(b.angle + i) * radius +
        wobbleX;

      const y =
        currentY +
        Math.sin(b.angle + i) * radius +
        wobbleY;

      return `
        radial-gradient(
          ${b.size}px ${b.size}px
          at ${x}px ${y}px,
          black 65%,
          transparent 70%
        )
      `;
    }).join(",");

    const core = `
      radial-gradient(
        10px 10px
        at ${currentX}px ${currentY}px,
        black 80%,
        transparent 90%
      )
    `;
    const finalMask = core + "," + mask;

    document.documentElement.style.setProperty("--mask", finalMask);
    document.documentElement.style.setProperty("--x", `${currentX}px`);
    document.documentElement.style.setProperty("--y", `${currentY}px`);

    rafId = requestAnimationFrame(animate);
  };

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleTouch, { passive: true });

  animate();

  // cleanup
  return () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("touchmove", handleTouch);
  };
}
