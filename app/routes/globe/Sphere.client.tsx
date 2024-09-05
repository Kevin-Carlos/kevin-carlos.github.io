import { ReactElement } from 'react';

export const Sphere = (): ReactElement => {
  return (
    <mesh>
      <sphereGeometry attach='geometry' args={[5.9, 32, 32]} />
      <meshPhongMaterial
        attach='material'
        color='#006C87'
      />
    </mesh>
  );
};
