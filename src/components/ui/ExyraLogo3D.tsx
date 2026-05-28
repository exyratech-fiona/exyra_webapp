"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Props {
  size?: number;
  interactive?: boolean;
  className?: string;
}

export function ExyraLogo3D({ size = 44, interactive = true, className = "" }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const frameRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setSize(size, size);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.z = 4.2;

    // ── Lights ──────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    const blueLight = new THREE.PointLight(0x1457d6, 6, 10);
    blueLight.position.set(0, 0, 3);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00bcd4, 3, 8);
    cyanLight.position.set(2, 1, 1);
    scene.add(cyanLight);

    const greenLight = new THREE.PointLight(0x00e676, 1.5, 6);
    greenLight.position.set(-2, -1, -1);
    scene.add(greenLight);

    // ── Core octahedron ─────────────────────────────────────────────────
    const coreGeo = new THREE.OctahedronGeometry(1.1, 0);

    // Assign a gradient colour per face by colouring vertices
    const faceColors = [
      0x1457d6, 0x1d6be8, 0x0e8fd4, 0x00bcd4,
      0x00bcd4, 0x0a9db8, 0x00e676, 0x1457d6,
    ];
    const colorAttr = new Float32Array(coreGeo.attributes.position.count * 3);
    for (let i = 0; i < coreGeo.attributes.position.count; i++) {
      const faceIdx = Math.floor(i / 3) % faceColors.length;
      const c = new THREE.Color(faceColors[faceIdx]);
      colorAttr[i * 3] = c.r;
      colorAttr[i * 3 + 1] = c.g;
      colorAttr[i * 3 + 2] = c.b;
    }
    coreGeo.setAttribute("color", new THREE.BufferAttribute(colorAttr, 3));

    const coreMat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      shininess: 180,
      emissive: 0x1457d6,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.95,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Wireframe shell ─────────────────────────────────────────────────
    const edgesGeo = new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1.14, 0));
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x00bcd4,
      transparent: true,
      opacity: 0.6,
    });
    const edges = new THREE.LineSegments(edgesGeo, edgesMat);
    scene.add(edges);

    // ── Outer glow sphere ────────────────────────────────────────────────
    const glowGeo = new THREE.SphereGeometry(1.35, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x1457d6,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    const glowSphere = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glowSphere);

    // ── Orbit ring ───────────────────────────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(1.55, 0.018, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00bcd4,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // ── Small orbiting particle ───────────────────────────────────────────
    const dotGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x00e676 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    scene.add(dot);

    // ── Animation ────────────────────────────────────────────────────────
    let t = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      t += 0.01;

      const speed = hoverRef.current ? 0.025 : 0.008;
      core.rotation.y += speed;
      core.rotation.x += speed * 0.4;
      edges.rotation.copy(core.rotation);
      ring.rotation.z += 0.012;

      // Float
      core.position.y = Math.sin(t * 1.2) * 0.05;
      edges.position.y = core.position.y;

      // Orbiting dot
      dot.position.x = Math.cos(t * 1.5) * 1.55;
      dot.position.z = Math.sin(t * 1.5) * 1.55;
      dot.position.y = Math.sin(t * 3) * 0.3;

      // Pulse glow on hover
      blueLight.intensity = hoverRef.current
        ? 8 + Math.sin(t * 6) * 2
        : 5 + Math.sin(t * 2) * 1;
      edgesMat.opacity = hoverRef.current ? 0.9 : 0.6;
      coreMat.emissiveIntensity = hoverRef.current ? 0.5 : 0.25;

      renderer.render(scene, camera);
    };
    animate();
    setReady(true);

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  const handleMouseEnter = () => { if (interactive) hoverRef.current = true; };
  const handleMouseLeave = () => { if (interactive) hoverRef.current = false; };

  return (
    <div
      ref={mountRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "30%",
        overflow: "hidden",
        boxShadow: `
          0 0 ${size * 0.5}px rgba(20,87,214,0.45),
          0 0 ${size * 0.25}px rgba(0,188,212,0.2),
          inset 0 0 ${size * 0.3}px rgba(20,87,214,0.15)
        `,
        transition: "box-shadow 0.4s ease",
        cursor: interactive ? "pointer" : "default",
      }}
    />
  );
}
