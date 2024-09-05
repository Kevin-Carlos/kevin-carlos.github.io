import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import mapImage from '~/common/assets/images/map.png';
import { useTheme } from '~/useTheme';
extend({});

const centerVector = new THREE.Vector3(0, 0, 0);

const globeRadius = 6;

const getDistance = (circlePosition: THREE.Vector3Like) => {
  const distance = new THREE.Vector3();
  distance.subVectors(centerVector, circlePosition).normalize();
  const { x, y, z } = distance;
  const cordX = 1 - (0.5 + Math.atan2(z, x) / (2 * Math.PI));
  const cordY = 0.5 + Math.asin(y) / Math.PI;
  return new THREE.Vector2(cordX, cordY);
};

const getAlpha = (
  { x, y }: Omit<THREE.Vector3Like, 'z'>,
  imgData: ImageData,
) => {
  const { width, height } = imgData;
  const index = 4 * Math.floor(x * width) +
    Math.floor(y * height) * (4 * width);
  // 4 because r, g, b, a stored against each pixel
  return imgData.data[index + 3];
};

const getImageData = (imageEl: HTMLImageElement) => {
  const ctx = document.createElement('canvas');
  ctx.width = imageEl.width;
  ctx.height = imageEl.height;
  const canvas = ctx.getContext('2d');

  if (!canvas) {
    return;
  }

  canvas.drawImage(imageEl, 0, 0);

  return canvas.getImageData(0, 0, ctx.width, ctx.height);
};

export function Dots({ count = 20000, pointSize = 0.06, active }: {
  active: [number, number];
  count?: number;
  pointSize?: number;
}) {
  const [mode] = useTheme();
  const points = useRef<THREE.Points | null>(null);

  const mapElement = useLoader(THREE.ImageLoader, mapImage);
  const positions = useMemo(() => {
    const imageData = getImageData(mapElement);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const positions: any[] = [];

    if (!imageData) {
      return positions;
    }

    for (let b = 0; b < count; b++) {
      const phi = Math.acos(-1 + (2 * b) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const { x, y, z } = new THREE.Vector3(0, 0, 0).setFromSphericalCoords(
        globeRadius,
        phi,
        theta,
      );

      if (getAlpha(getDistance({ x, y, z }), imageData)) {
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [mapElement, count]);

  useFrame(() => {
    if (!points.current) return;

    const [lat, long] = active;

    const phi   = (90-lat)*(Math.PI/180),
          theta = (-long+180)*(Math.PI/180),
          x = -((6) * Math.sin(phi)*Math.cos(theta)),
          z = ((6) * Math.sin(phi)*Math.sin(theta)),
          y = ((6) * Math.cos(phi));

// return new THREE.Vector3(x,y,z);

    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, x, 0.1);
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, y, 0.1);
    points.current.rotation.z = THREE.MathUtils.lerp(points.current.rotation.z, z, 0.1);

    // points.current.rotation.x = THREE.MathUtils.lerp(
    //   points.current.rotation.x,
    //   lat * Math.PI / 180,
    //   0.1,
    // );
    // points.current.rotation.y = THREE.MathUtils.lerp(
    //   points.current.rotation.y,
    //   long * Math.PI / 180,
    //   0.1,
    // );
    // points.current.rotation.z = 0;
    // points.current.rotation.order = 'XYZ';
  });

  return (
    <points ref={points} castShadow>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          key={count}
          attach='attributes-position'
          // @ts-expect-error figure this out
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach='material'
        color={mode === 'light' ? '#000000' : '#FFFFFF'}
        size={pointSize}
        sizeAttenuation
        transparent={false}
      />
    </points>
  );
}
