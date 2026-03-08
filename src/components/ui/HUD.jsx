import React, { useEffect, useRef } from 'react';
import { drawMinimap } from '@/world/builder';
import './HUD.css';

export default function HUD({ cameraRef, yawRef, currentZone, nearbyZone }) {
  const mmRef = useRef(null);

  useEffect(() => {
    let raf;
    function loop() {
      raf = requestAnimationFrame(loop);
      if (!mmRef.current || !cameraRef.current) return;
      const ctx = mmRef.current.getContext('2d');
      drawMinimap(ctx, cameraRef.current.position, yawRef.current);
    }
    loop();
    return () => cancelAnimationFrame(raf);
  }, [cameraRef, yawRef]);

  return (
    <div className="hud">
      {/* Crosshair */}
      <div className="xh" />
      <div className="xv" />
      <div className="xd" />

      {/* Room label */}
      <div className="room-label">
        <span className="rl-tag">{currentZone?.tag ?? '00'}</span>
        <strong className="rl-name">{currentZone?.name ?? 'Hub'}</strong>
      </div>

      {/* Minimap */}
      <canvas ref={mmRef} className="minimap" width={130} height={130} />

      {/* Controls hint */}
      <div className="ctrl-hint">
        WASD · move &nbsp;|&nbsp; Drag · look &nbsp;|&nbsp; Click orb to open
      </div>

      {/* Interact prompt */}
      <div className={`interact-prompt ${nearbyZone ? 'show' : ''}`}>
        ● Click to Open · {nearbyZone?.name}
      </div>
    </div>
  );
}
