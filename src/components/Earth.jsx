import React from 'react';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { folder, useControls } from 'leva';
import Particles from './Particles';

const Earth = () => {
  const { nodes } = useGLTF('./models/earth/scene.gltf');
  const diffuseTexture = useTexture('./models/earth/textures/Material.002_diffuse.jpeg');
  diffuseTexture.flipY = false;
  const { position, visible, rotation } = useControls({
    earth: folder({
      position: {
        value: { x: 0, y: 0, z: 0 },
        min: -2,
        max: 2,
        step: 0.01,
        joystick: 'invertY',
      },
      visible: true,
      rotation: {
        value: { x: -1.29, y: -0.2, z: -2.03 },
        min: -5,
        max: 5,
        step: 0.01,
        joystick: 'invertY',
      },
    }),
  });

  return (
    <>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={1} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} />

      <Particles />

      <mesh
        position-x={position.x}
        position-y={position.y}
        position-z={position.z}
        visible={visible}
        geometry={nodes.Sphere_Material002_0.geometry}
        rotation-x={rotation.x}
        rotation-y={rotation.y}
        rotation-z={rotation.z}
      >
        <meshStandardMaterial map={diffuseTexture} />
      </mesh>
    </>
  );
};

export default Earth;
