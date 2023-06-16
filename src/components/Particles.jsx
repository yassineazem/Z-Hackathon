import { Sparkles } from '@react-three/drei';
import { folder, useControls } from 'leva';
import React from 'react';

const Particles = () => {
  const { size, scale, position, speed, count } = useControls({
    particles: folder({
      size: 2,
      scale: [4, 2, 4],
      position: { value: { x: 0, y: 0.06, z: 0 }, min: -2, max: 2, step: 0.01 },
      speed: 0,
      count: 100,
    }),
  });
  return (
    <>
      {/* Particles */}
      <Sparkles
        size={size}
        scale={scale}
        position-x={position.x}
        position-y={position.y}
        position-z={position.z}
        speed={speed}
        count={count}
      />
    </>
  );
};

export default Particles;
