import * as React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Moon() {
  const mesh = React.useRef()
  const {nodes} = useLoader(GLTFLoader, "moon.glb");

  useFrame(() => (mesh.current.rotation.y += 0.0002));
  return (
    <mesh ref={mesh}
      visible
      geometry={nodes.Cube008.geometry}
      material={nodes.Cube008.material}
      scale={0.01}
    />
     
  )
}
