import { useEffect, useRef, useState } from 'react';
import { Wrapper } from './index.style';
import * as THREE from 'three';
import liv from '@assets/pattern/liv.png';
import lug from '@assets/pattern/lug.png';
import livlug from '@assets/pattern/livlug.png';
import block from '@assets/pattern/block.png';
import v from '@assets/pattern/v.png';
import bedeching from '@assets/pattern/bedeching.png';
import { useParams } from 'react-router';
import { ResultData } from '@api/result.types';
import { Result } from '@api/result';

function Preview() {
  const { id } = useParams();
  const [result, setResult] = useState<ResultData>();
  const mountRef = useRef<HTMLDivElement>(null);
  const image = [liv, lug, livlug, block, v, bedeching];

  useEffect(() => {
    const getData = async () => {
      const resultData = await Result.read(id ?? '');
      setResult(resultData);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff);
    renderer.setSize(700, 500);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image[result?.pattern.id ?? 0 - 1]);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.center.set(0.5, 0.5);
    texture.rotation = Math.PI / 2;
    texture.offset.set(0, 0);
    texture.repeat.set(2, 8);

    const tireGeometry = new THREE.TorusGeometry(6, 2, 16, 150);
    const tireMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const tire = new THREE.Mesh(tireGeometry, tireMaterial);
    tire.rotation.y = Math.PI / 2;
    scene.add(tire);

    camera.position.z = 15;

    const animate = function () {
      requestAnimationFrame(animate);
      tire.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // 컴포넌트 언마운트 시 클린업 로직
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [result]);

  return <Wrapper ref={mountRef} className="preview" />;
}

export default Preview;
