import { type MutableRefObject, useEffect, useRef, useState } from 'react';
import type { GlobeMethods } from 'react-globe.gl';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { useTheme } from '~/useTheme';
import data from './countries.json';

const gm = new THREE.MeshPhongMaterial();
const lightColor = new THREE.Color('rgb(57, 153, 142)');
const darkColor = new THREE.Color('rgb(1, 38, 48)');

type GlobeProps = {
  coord: { lat: number; long: number };
};

export const _Globe = ({
  coord: { lat, long },
}: GlobeProps) => {
  const [mode] = useTheme();

  const initCoord = useRef({ lat, long });
  const ref = useRef<GlobeMethods | null>(null);
  const [arc, setArc] = useState<
    Array<{
      startLat: number;
      startLng: number;
      endLat: number;
      endLng: number;
    }>
  >([]);

  useEffect(() => {
    if (!ref.current) return;

    const controls = ref.current.controls();

    controls.enabled = false;

    ref.current.pointOfView({
      altitude: 1.6,
    });
  }, []);

  useEffect(() => {
    // Case 1, initial render where we have no start/end
    if (!arc.length) {
      setArc([
        {
          startLat: initCoord.current.lat,
          startLng: initCoord.current.long,
          endLat: lat,
          endLng: long,
        },
      ]);

      return;
    }

    // Case 2, we have data to swap
    setArc(prev => [
      {
        startLat: prev[0].endLat,
        startLng: prev[0].endLng,
        endLat: lat,
        endLng: long,
      },
    ]);
  }, [lat, long]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.pointOfView({
      lat,
      lng: long,
    }, 750);
  }, [lat, long]);

  useEffect(() => {
    if (mode === 'light') {
      gm.color = lightColor;

      return;
    }

    gm.color = darkColor;
  }, [mode]);

  return (
    <Globe
      // null is preferred and I think React 19 will require it
      ref={ref as MutableRefObject<GlobeMethods | undefined>}
      rendererConfig={{
        antialias: false,
      }}
      width={800}
      height={800}
      waitForGlobeReady
      animateIn
      arcsData={arc}
      arcStroke={() => 1.2}
      arcColor={() => {
        if (mode === 'light') {
          return 'rgb(1, 38, 48)';
        }

        return 'hsla(167, 100%, 51%, 1)';
      }}
      arcsTransitionDuration={500}
      globeMaterial={gm}
      atmosphereAltitude={0.05}
      hexPolygonsData={data.features}
      hexPolygonUseDots={() => true}
      hexPolygonColor={() => {
        if (mode === 'light') {
          return 'rgb(255, 255, 255)';
        }

        return 'rgb(189, 189, 189)';
      }}
      backgroundColor='rgba(0,0,0,0)'
      backgroundImageUrl={null}
    />
  );
};
