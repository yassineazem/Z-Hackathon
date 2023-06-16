import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { folder, useControls } from 'leva';

const Earth = () => {
  const { position, color, visible } = useControls({
    earth: folder({
      position: {
        value: { x: 0, y: 0, z: 0 },
        min: -2,
        max: 2,
        step: 0.01,
        joystick: 'invertY',
      },
      color: 'rgb(255, 0, 0)',
      visible: true,
    }),
  });

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        position-x={position.x}
        position-y={position.y}
        position-z={position.z}
        visible={visible}
      >
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default Earth;
