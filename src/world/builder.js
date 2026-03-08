import * as THREE from 'three';
import { ZONES } from '@/data/portfolio';

const WALL_H = 4.5;
const BOUND = 57;

export function buildWorld(scene) {
  const colliders = [];
  const orbs = [];

  // ── Floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120, 60, 60),
    new THREE.MeshStandardMaterial({ color: 0x020810, roughness: 0.95, metalness: 0.04 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  scene.add(new THREE.GridHelper(120, 120, 0x080f1a, 0x050c15));

  // ── Boundary walls (only collision objects)
  [
    [0, -BOUND, 120, 0.4],
    [0,  BOUND, 120, 0.4],
    [-BOUND, 0, 0.4, 120],
    [ BOUND, 0, 0.4, 120],
  ].forEach(([x, z, w, d]) => {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, WALL_H, d),
      new THREE.MeshStandardMaterial({ color: 0x060e18, roughness: 0.9, emissive: 0x031020, emissiveIntensity: 0.5 })
    );
    m.position.set(x, WALL_H / 2, z);
    scene.add(m);
    colliders.push(m);
  });

  // ── Lighting
  scene.add(new THREE.AmbientLight(0x112233, 1.1));
  const sun = new THREE.DirectionalLight(0x223344, 0.5);
  sun.position.set(10, 20, 10);
  scene.add(sun);

  // ── Per-zone decoration + orbs
  ZONES.forEach((z, i) => {
    const hex = z.color;

    // Floor rings
    [7, 4.5, 2].forEach((rad, ri) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(rad, rad + 0.12, 64),
        new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: [0.12, 0.18, 0.28][ri], side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(z.x, 0.015 + ri * 0.003, z.z);
      scene.add(ring);
    });

    // Pillar
    const pil = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.14, WALL_H, 8),
      new THREE.MeshStandardMaterial({ color: 0x0a1e2e, emissive: hex, emissiveIntensity: 0.35, roughness: 0.5 })
    );
    pil.position.set(z.x, WALL_H / 2, z.z);
    pil.castShadow = true;
    scene.add(pil);

    // Zone point light
    const pl = new THREE.PointLight(hex, 1.2, 22);
    pl.position.set(z.x, 3.8, z.z);
    pl.castShadow = true;
    scene.add(pl);

    // Bulb
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 8, 8),
      new THREE.MeshBasicMaterial({ color: hex })
    );
    bulb.position.set(z.x, 3.7, z.z);
    scene.add(bulb);

    // Path strip to hub
    if (z.x !== 0 || z.z !== 0) {
      const len = Math.sqrt(z.x * z.x + z.z * z.z);
      const ang = Math.atan2(z.x, z.z);
      const strip = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, len),
        new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
      );
      strip.rotation.x = -Math.PI / 2;
      strip.rotation.z = -ang;
      strip.position.set(z.x / 2, 0.012, z.z / 2);
      scene.add(strip);
    }

    // ── Orb
    const orbGeo = new THREE.IcosahedronGeometry(0.44, 1);
    const orbMat = new THREE.MeshStandardMaterial({
      color: hex, emissive: hex, emissiveIntensity: 0.85, roughness: 0.1, metalness: 0.85,
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orb.position.set(z.x, 1.65, z.z);
    orb.castShadow = true;
    scene.add(orb);

    const orbRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.03, 8, 48),
      new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.6 })
    );
    orbRing.position.copy(orb.position);
    orbRing.rotation.x = Math.PI / 2;
    scene.add(orbRing);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1, 12, 12),
      new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.04, side: THREE.BackSide })
    );
    halo.position.copy(orb.position);
    scene.add(halo);

    orbs.push({ mesh: orb, ring: orbRing, halo, zone: z, baseY: 1.65 });
  });

  // ── Ceiling particles
  const geo = new THREE.BufferGeometry();
  const n = 1000;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 110;
    pos[i * 3 + 1] = 4 + Math.random() * 0.25;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 110;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x5efce8, size: 0.055, transparent: true, opacity: 0.45 })));

  return { colliders, orbs };
}

export function animateOrbs(orbs, cameraPos, t) {
  let nearbyZone = null;

  orbs.forEach((o, i) => {
    o.mesh.rotation.y = t * 1.3 + i * 0.7;
    o.mesh.rotation.x = t * 0.45 + i * 0.25;
    o.mesh.position.y = o.baseY + Math.sin(t * 2.2 + i) * 0.22;
    o.ring.position.copy(o.mesh.position);
    o.ring.rotation.z = t * 0.9 + i;
    o.halo.position.copy(o.mesh.position);

    const dist = cameraPos.distanceTo(o.mesh.position);
    if (dist < 3) {
      nearbyZone = o.zone;
      o.mesh.material.emissiveIntensity = 1.5 + Math.sin(t * 5) * 0.3;
    } else {
      o.mesh.material.emissiveIntensity = 0.85;
    }
  });

  return nearbyZone;
}

export function checkCollision(pos, colliders) {
  const pb = new THREE.Box3();
  const cb = new THREE.Box3();
  pb.setFromCenterAndSize(pos, new THREE.Vector3(0.5, 2, 0.5));
  return colliders.some(w => {
    cb.setFromObject(w);
    return pb.intersectsBox(cb);
  });
}

export function drawMinimap(ctx, cameraPos, yaw) {
  const W = 130, S = 2.1, OX = 65, OY = 65;
  ctx.fillStyle = 'rgba(4,8,15,0.92)';
  ctx.fillRect(0, 0, W, W);

  // paths from hub
  ctx.strokeStyle = 'rgba(94,252,232,0.1)';
  ctx.lineWidth = 2;
  ZONES.slice(1).forEach(z => {
    ctx.beginPath();
    ctx.moveTo(OX, OY);
    ctx.lineTo(OX + z.x * S, OY + z.z * S);
    ctx.stroke();
  });

  // zone circles
  ZONES.forEach(z => {
    const cx = OX + z.x * S, cy = OY + z.z * S;
    const r = (z.color >> 16) & 255;
    const g = (z.color >> 8) & 255;
    const b = z.color & 255;
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},0.2)`;
    ctx.fill();
    ctx.strokeStyle = `rgba(${r},${g},${b},0.7)`;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // player dot + direction arrow
  const px = OX + cameraPos.x * S;
  const py = OY + cameraPos.z * S;
  ctx.fillStyle = '#5efce8';
  ctx.beginPath();
  ctx.arc(px, py, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#5efce8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px + Math.sin(-yaw) * 10, py + Math.cos(-yaw) * 10);
  ctx.stroke();
}
