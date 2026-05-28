"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

export function AIOrb({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const { normalizedX, normalizedY } = useMousePosition();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mouseRef.current = { x: normalizedX, y: normalizedY };
  }, [normalizedX, normalizedY]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 7;

    // ── Lights ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));

    const blueLight = new THREE.PointLight(0x1457d6, 5, 12);
    blueLight.position.set(0, 0, 3);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00bcd4, 3, 10);
    cyanLight.position.set(4, 2, 2);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 2, 8);
    violetLight.position.set(-3, -2, 1);
    scene.add(violetLight);

    const rimLight = new THREE.PointLight(0x00e676, 1.5, 8);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // ── Core sphere ──
    const coreGeo = new THREE.SphereGeometry(1.8, 128, 128);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x071a4a,
      emissive: 0x1457d6,
      emissiveIntensity: 0.7,
      shininess: 200,
      specular: new THREE.Color(0x00bcd4),
      transparent: true,
      opacity: 0.95,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Atmosphere layer ──
    const atmosGeo = new THREE.SphereGeometry(1.95, 64, 64);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x00bcd4,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmosGeo, atmosMat));

    // ── Outer glow halo ──
    const haloGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x1457d6,
      transparent: true,
      opacity: 0.025,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(haloGeo, haloMat));

    // ── Wireframe grid ──
    const wireGeo = new THREE.SphereGeometry(2.05, 18, 18);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00bcd4,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    // ── Orbit rings ──
    function makeRing(radius: number, color: number, tilt: number, opacity: number, tubeR = 0.014) {
      const geo = new THREE.TorusGeometry(radius, tubeR, 8, 200);
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = tilt;
      return ring;
    }
    const ring1 = makeRing(2.7, 0x00bcd4, Math.PI / 4,   0.7, 0.018);
    const ring2 = makeRing(3.1, 0x1457d6, -Math.PI / 6,  0.5, 0.014);
    const ring3 = makeRing(3.5, 0x8b5cf6, Math.PI / 3,   0.4, 0.012);
    const ring4 = makeRing(4.0, 0x00e676, Math.PI / 2.2, 0.25, 0.008);
    scene.add(ring1, ring2, ring3, ring4);

    // ── Bright ring accent dots ──
    function makeRingDots(radius: number, color: number, tilt: number, count: number) {
      const dotGeo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        pos[i * 3]     = Math.cos(angle) * radius;
        pos[i * 3 + 1] = Math.sin(angle) * radius;
        pos[i * 3 + 2] = 0;
      }
      dotGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const dotMat = new THREE.PointsMaterial({ size: 0.08, color, transparent: true, opacity: 0.9, sizeAttenuation: true });
      const dots = new THREE.Points(dotGeo, dotMat);
      dots.rotation.x = tilt;
      return dots;
    }
    const dots1 = makeRingDots(2.7, 0x00ffff, Math.PI / 4, 60);
    const dots2 = makeRingDots(3.1, 0x4488ff, -Math.PI / 6, 48);
    scene.add(dots1, dots2);

    // ── Particle cloud ──
    const particleCount = 300;
    const pPos = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const palette = [
      [0.08, 0.34, 0.84],
      [0.0,  0.74, 0.83],
      [0.54, 0.36, 0.97],
      [0.0,  0.9,  0.46],
    ];
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 2.6 + Math.random() * 2.0;
      pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      pColors[i * 3] = c[0]; pColors[i * 3+1] = c[1]; pColors[i * 3+2] = c[2];
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color",    new THREE.BufferAttribute(pColors, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Stars ──
    const starCount = 1800;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 15;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.022, color: 0xffffff, transparent: true, opacity: 0.45 })));

    // ── Data arc lines (latitude lines) ──
    function makeLatLine(lat: number, color: number, opacity: number) {
      const pts: THREE.Vector3[] = [];
      const r = 1.83;
      const y = r * Math.sin((lat * Math.PI) / 180);
      const cr = r * Math.cos((lat * Math.PI) / 180);
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        pts.push(new THREE.Vector3(cr * Math.cos(angle), y, cr * Math.sin(angle)));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      return new THREE.Line(geo, mat);
    }
    scene.add(
      makeLatLine(30,  0x00bcd4, 0.35),
      makeLatLine(-30, 0x00bcd4, 0.35),
      makeLatLine(60,  0x1457d6, 0.2),
      makeLatLine(-60, 0x1457d6, 0.2),
      makeLatLine(0,   0x00e676, 0.25),
    );

    // ── Meridian lines ──
    function makeMeridian(lon: number, color: number, opacity: number) {
      const pts: THREE.Vector3[] = [];
      const r = 1.83;
      for (let i = 0; i <= 64; i++) {
        const phi = (i / 64) * Math.PI * 2 - Math.PI;
        pts.push(new THREE.Vector3(
          r * Math.cos(phi) * Math.cos((lon * Math.PI) / 180),
          r * Math.sin(phi),
          r * Math.cos(phi) * Math.sin((lon * Math.PI) / 180),
        ));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    }
    const meridianGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      meridianGroup.add(makeMeridian(i * 45, 0x00bcd4, 0.18));
    }
    scene.add(meridianGroup);

    // Animation
    let frame = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.01;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      core.rotation.y         += 0.003 + mx * 0.002;
      core.rotation.x         += 0.0008 - my * 0.001;
      meridianGroup.rotation.y = core.rotation.y;
      meridianGroup.rotation.x = core.rotation.x;

      wire.rotation.y -= 0.002;
      wire.rotation.z += 0.0015;

      ring1.rotation.z += 0.009;
      ring2.rotation.z -= 0.006;
      ring3.rotation.z += 0.004;
      ring4.rotation.z -= 0.003;

      dots1.rotation.z = ring1.rotation.z;
      dots1.rotation.x = ring1.rotation.x;
      dots2.rotation.z = ring2.rotation.z;
      dots2.rotation.x = ring2.rotation.x;

      particles.rotation.y += 0.0008;

      // Pulsing light
      blueLight.intensity  = 4.5 + Math.sin(frame * 1.8) * 1.0;
      cyanLight.intensity  = 2.5 + Math.sin(frame * 2.2 + 1) * 0.5;
      coreMat.emissiveIntensity = 0.6 + Math.sin(frame * 1.5) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
