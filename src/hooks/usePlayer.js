import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { checkCollision } from '../world/builder';

export function usePlayer(cameraRef, colliders) {
  const keys    = useRef({});
  const yawRef  = useRef(0);
  const pitchRef = useRef(0);
  const drag    = useRef(false);
  const last    = useRef({ x: 0, y: 0 });

  // touch look
  const touch   = useRef({ id: null, x: 0, y: 0 });

  useEffect(() => {
    const onKeyDown = e => { keys.current[e.code] = true; };
    const onKeyUp   = e => { keys.current[e.code] = false; };
    const onMouseDown = e => { drag.current = true; last.current = { x: e.clientX, y: e.clientY }; };
    const onMouseUp   = () => { drag.current = false; };
    const onMouseMove = e => {
      if (!drag.current) return;
      yawRef.current   -= (e.clientX - last.current.x) * 0.003;
      pitchRef.current -= (e.clientY - last.current.y) * 0.002;
      pitchRef.current  = Math.max(-0.55, Math.min(0.55, pitchRef.current));
      last.current = { x: e.clientX, y: e.clientY };
    };
    const onTouchStart = e => {
      const t = e.changedTouches[0];
      if (t.clientX > window.innerWidth * 0.35 && touch.current.id === null) {
        touch.current = { id: t.identifier, x: t.clientX, y: t.clientY };
      }
    };
    const onTouchMove = e => {
      for (const t of e.changedTouches) {
        if (t.identifier === touch.current.id) {
          yawRef.current   -= (t.clientX - touch.current.x) * 0.004;
          pitchRef.current -= (t.clientY - touch.current.y) * 0.003;
          pitchRef.current  = Math.max(-0.5, Math.min(0.5, pitchRef.current));
          touch.current.x = t.clientX;
          touch.current.y = t.clientY;
        }
      }
    };
    const onTouchEnd = e => {
      for (const t of e.changedTouches) {
        if (t.identifier === touch.current.id) touch.current.id = null;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  function updatePlayer(dt, t, collidersArr) {
    const cam = cameraRef.current;
    if (!cam) return;

    cam.rotation.order = 'YXZ';
    cam.rotation.y = yawRef.current;
    cam.rotation.x = pitchRef.current;

    const yaw   = yawRef.current;
    const fwd   = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    const right = new THREE.Vector3( Math.cos(yaw), 0, -Math.sin(yaw));
    const mv    = new THREE.Vector3();

    if (keys.current['KeyW'] || keys.current['ArrowUp'])    mv.add(fwd);
    if (keys.current['KeyS'] || keys.current['ArrowDown'])  mv.sub(fwd);
    if (keys.current['KeyA'] || keys.current['ArrowLeft'])  mv.sub(right);
    if (keys.current['KeyD'] || keys.current['ArrowRight']) mv.add(right);

    if (mv.lengthSq() > 0) {
      mv.normalize().multiplyScalar(6 * dt);

      const nx = cam.position.clone().add(new THREE.Vector3(mv.x, 0, 0));
      if (!checkCollision(nx, collidersArr)) cam.position.x = nx.x;

      const nz = cam.position.clone().add(new THREE.Vector3(0, 0, mv.z));
      if (!checkCollision(nz, collidersArr)) cam.position.z = nz.z;

      cam.position.y = 1.65 + Math.sin(t * 8) * 0.028;
    } else {
      cam.position.y += (1.65 - cam.position.y) * 0.1;
    }
  }

  return { updatePlayer, yawRef, keys };
}
