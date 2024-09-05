import { Canvas, useThree } from '@react-three/fiber';
import { ReactElement, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Dots } from './Dots.client';
import { Sphere } from './Sphere.client';

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl],
  );

  return null;
};

export const Globe = ({
  active,
}: {
  active: [number, number];
}): ReactElement => {
  return (
    <Canvas
      camera={{
        aspect: window.innerWidth / window.innerHeight,
        fov: 75,
        near: 1,
        far: 2000,
        position: new THREE.Vector3(0, 0, 9),
      }}
    >
      <CameraController />
      {
        /* <ambientLight intensity={0.1} />
      <directionalLight color='#ffffff' position={[0, 0, 5]} /> */
      }
      
      <Suspense fallback={null}>
        <Sphere />
      </Suspense> 
      
      <Suspense fallback={null}>
        <Dots active={active} />
      </Suspense>
    </Canvas>
  );
};
