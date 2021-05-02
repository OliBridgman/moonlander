import * as React from 'react'
import { Html } from '@react-three/drei';


const Card = ({position, children}) => {
  return (
    <Html
    sprite
    transform
    distanceFactor={2}
    position={position}
    style={{
      background: 'transparent',
      fontSize: '60px',
      color: 'palegreen',
      padding: '20px 80px 80px 40px',
      border: '5px solid palegreen',
    }}
    >
      {children}
    </Html>
  )
}

export default Card