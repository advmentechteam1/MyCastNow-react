import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroOrnament() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 6;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(2.1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0x7C3AED, wireframe: true, transparent: true, opacity: 0.3 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const geo2 = new THREE.IcosahedronGeometry(1.3, 0);
    const mat2 = new THREE.MeshBasicMaterial({ color: 0x2563EB, wireframe: true, transparent: true, opacity: 0.35 });
    const mesh2 = new THREE.Mesh(geo2, mat2);
    scene.add(mesh2);

    let raf;
    const animate = () => {
      mesh.rotation.y += 0.003;
      mesh.rotation.x += 0.0015;
      mesh2.rotation.y -= 0.004;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w2 = el.clientWidth, h2 = el.clientHeight;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      geo2.dispose();
      mat2.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0" style={{ pointerEvents: 'none' }} />;
}
