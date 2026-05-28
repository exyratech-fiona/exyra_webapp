"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function NeuralNetwork({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 8;

    const COUNT = 55;
    type Node = { pos: THREE.Vector3; vel: THREE.Vector3 };
    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      ),
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.004
      ),
    }));

    // Node dots
    const nodePos = new Float32Array(COUNT * 3);
    const nodeGeo = new THREE.BufferGeometry();
    const nodePosAttr = new THREE.BufferAttribute(nodePos, 3);
    nodeGeo.setAttribute("position", nodePosAttr);
    const nodeMat = new THREE.PointsMaterial({ size: 0.09, color: 0x00bcd4, transparent: true, opacity: 0.85, sizeAttenuation: true });
    scene.add(new THREE.Points(nodeGeo, nodeMat));

    // Edge lines
    const maxEdges = COUNT * COUNT;
    const linePos = new Float32Array(maxEdges * 6);
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePos, 3);
    lineGeo.setAttribute("position", linePosAttr);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00bcd4, transparent: true, opacity: 0.2 });
    const lineSegs = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegs);

    const THRESHOLD_SQ = 16;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      nodes.forEach((n) => {
        n.pos.add(n.vel);
        if (Math.abs(n.pos.x) > 8) n.vel.x *= -1;
        if (Math.abs(n.pos.y) > 4) n.vel.y *= -1;
        if (Math.abs(n.pos.z) > 2.5) n.vel.z *= -1;
        nodePos[nodes.indexOf(n) * 3] = n.pos.x;
        nodePos[nodes.indexOf(n) * 3 + 1] = n.pos.y;
        nodePos[nodes.indexOf(n) * 3 + 2] = n.pos.z;
      });
      nodePosAttr.needsUpdate = true;

      let idx = 0;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = nodes[i].pos.x - nodes[j].pos.x;
          const dy = nodes[i].pos.y - nodes[j].pos.y;
          const dz = nodes[i].pos.z - nodes[j].pos.z;
          if (dx * dx + dy * dy + dz * dz < THRESHOLD_SQ) {
            linePos[idx * 6] = nodes[i].pos.x;
            linePos[idx * 6 + 1] = nodes[i].pos.y;
            linePos[idx * 6 + 2] = nodes[i].pos.z;
            linePos[idx * 6 + 3] = nodes[j].pos.x;
            linePos[idx * 6 + 4] = nodes[j].pos.y;
            linePos[idx * 6 + 5] = nodes[j].pos.z;
            idx++;
          }
        }
      }
      // Zero out unused slots
      for (let k = idx * 6; k < maxEdges * 6; k++) linePos[k] = 0;
      linePosAttr.needsUpdate = true;
      lineGeo.setDrawRange(0, idx * 2);

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
