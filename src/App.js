import React, { useCallback, useEffect, useRef , useState} from 'react';
import * as THREE from "three"
import './App.css';
import { usePlayer } from './hooks/usePlayer';
import HUD from './components/ui/HUD';
import InfoPanel from './components/ui/InfoPanel';
import Intro from './components/ui/Intro';
import { animateOrbs, buildWorld } from './world/builder';
import { ZONES } from './data/portfolio';

function App() {
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const worldRef = useRef({ colliders: [], orbs: [] });
  const frameRef = useRef(null);
  const yawRef = useRef(0);
  const openPanelRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);
  const [nearbyZone, setNearbyZone] = useState(null);
  const [openPanel, setOpenPanel] = useState(null);

  const { updatePlayer, yawRef: playerYaw } = usePlayer(cameraRef, worldRef.current.colliders);

  // Keep openPanelRef in sync
  useEffect(() => { openPanelRef.current = openPanel; }, [openPanel]);

  const detectZone = useCallback((pos) => {
    for (const z of ZONES) {
      if (Math.abs(pos.x - z.x) < 10 && Math.abs(pos.z - z.z) < 10) return z;
    }
    return null;
  }, []);

  // Click / E key to open panel
  useEffect(() => {
    const onClick = () => { if (!openPanelRef.current && nearbyZone) setOpenPanel(nearbyZone.id); };
    const onKey = e => {
      if (e.code === 'KeyE' && nearbyZone && !openPanelRef.current) setOpenPanel(nearbyZone.id);
      if (e.code === 'Escape') setOpenPanel(null);
    };
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('click', onClick); window.removeEventListener('keydown', onKey); };
  }, [nearbyZone]);

  const initScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x04080f);
    scene.fog = new THREE.FogExp2(0x04080f, 0.032);

    const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.set(0, 1.65, 0);
    cameraRef.current = camera;

    worldRef.current = buildWorld(scene);
    clockRef.current.start();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const dt = clockRef.current.getDelta();
      const t = clockRef.current.getElapsedTime();

      if (!openPanelRef.current) {
        updatePlayer(dt, t, worldRef.current.colliders);
      }

      const nearby = animateOrbs(worldRef.current.orbs, camera.position, t);
      setNearbyZone(nearby);
      setCurrentZone(detectZone(camera.position));
      yawRef.current = playerYaw.current;

      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
    };
  }, [updatePlayer, detectZone, playerYaw]);

  const handleEnter = useCallback(() => {
    setStarted(true);
    setTimeout(initScene, 50);
  }, [initScene]);

  return (
    <div className="app">
      {!started && <Intro onEnter={handleEnter} />}

      <canvas
        ref={canvasRef}
        className="world-canvas"
        style={{ display: started ? 'block' : 'none' }}
      />

      {started && (
        <HUD
          cameraRef={cameraRef}
          yawRef={yawRef}
          currentZone={currentZone}
          nearbyZone={nearbyZone}
        />
      )}

      {openPanel && (
        <InfoPanel zoneId={openPanel} onClose={() => setOpenPanel(null)} />
      )}

      <div className="scanlines" />
    </div>
  );
}

export default App;