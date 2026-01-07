import { useEffect, useRef, useState } from "react";


const PortfolioMain = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let raf: number;

        // Define your blobs: offsetX, offsetY, radiusX, radiusY, scale
        const blobs = [
            { ox: 10, oy: -10, rx: 90, ry: 80, s: 1.0 },
            { ox: -70, oy: -20, rx: 70, ry: 80, s: 0.7 },
            { ox: 60, oy: -30, rx: 80, ry: 70, s: 0.9 },
            { ox: -30, oy: 60, rx: 75, ry: 85, s: 1.1 },
            { ox: 70, oy: 80, rx: 70, ry: 75, s: 0.8 },
        ];

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;

        let t = 0;
        const ease = 0.04; // cursor lag
        const speed = 0.003; // wobble speed

        const handleMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const handleTouch = (e: TouchEvent) => {
            const t0 = e.touches[0];
            targetX = t0.clientX;
            targetY = t0.clientY;
        };

        const animate = () => {
            t += 1;

            // Smooth cursor follow
            currentX += (targetX - currentX) * ease;
            currentY += (targetY - currentY) * ease;

            // Generate dynamic mask
            const gradients = blobs.map((b, i) => {
                // wobble per blob with unique phase
                const phase = i * 97.13;
                const wobbleX = Math.sin(t * speed * (0.6 + i) + phase) * 20;
                const wobbleY = Math.cos(t * speed * (0.8 + i) + phase) * 20;

                // Optional breathing: slight radius oscillation
                const pulse = Math.sin(t * speed * 0.5 + phase) * 8;

                return `radial-gradient(${b.rx + pulse}px ${b.ry + pulse}px at calc(${currentX}px + ${b.ox + wobbleX}px) calc(${currentY}px + ${b.oy + wobbleY}px), black 95%, transparent)`;
            });

            document.documentElement.style.setProperty("--blobMask", gradients.join(", "));

            raf = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleTouch, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, []);

    return (
        <div
            ref={containerRef}

            className="relative w-full h-screen overflow-hidden"
        >
            <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 w-full h-full object-cover" />

            <img
                src="https://images.unsplash.com/photo-1721132447246-5d33f3008b05?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 w-full h-full object-cover "
                style={{
                    WebkitMaskImage: "var(--blobMask)",
                    maskImage: "var(--blobMask)",
                }}

            />
        </div>
        // <div
        //     ref={containerRef}
        //     className="icon-plus"

        // ></div>
    );

}

export default PortfolioMain