import * as React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Moon from './Moon'
import { OrbitControls, Stars, Html, Text } from '@react-three/drei';
import PostProcessing from './PostProcessing';
import Card from './Card';

const Fallback = () => <Text fontSize={1}>Triangulating...</Text>

export default function App({
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(10, 10, 10),
  controls = true,
  lights = true,
  ...restProps
}) {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
      <Canvas shadows camera={{ position: cameraPosition, fov: cameraFov }} dpr={window.devicePixelRatio} {...restProps}>
      <Html
        sprite
        transform
        distanceFactor={20}
        position={[0, 10, 0]}
        style={{
          background: 'palegreen',
          fontSize: '50px',
          padding: '10px 18px',
          border: '2px solid black',
        }}
      >
        Moon Lander
      </Html>
        <React.Suspense fallback={<Fallback />}>
          <Moon />
        </React.Suspense>
        <Stars radius={100} />
        {lights && (
          <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
          </>
        )}
        {controls && <OrbitControls maxDistance={20} minDistance={10} />}
        <Card position={[10, 0, 0]}>
          <a href="https://moonlander.bandcamp.com/track/another-world" target="__blank">Another world</a>
        </Card>
        <Card  position={[-10, 0, 0]}>
          <a href="https://moonlander.bandcamp.com/track/she-cant-sleep" target="__blank">She can't sleep</a>
        </Card>
        <React.Suspense fallback={null}>
          <PostProcessing />
        </React.Suspense>
      </Canvas>
    </div>
  )
}
