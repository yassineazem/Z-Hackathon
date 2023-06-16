import React from "react"
import { OrbitControls } from "@react-three/drei"

const Box = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  )
}

export default Box
