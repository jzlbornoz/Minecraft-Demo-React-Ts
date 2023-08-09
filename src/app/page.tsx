'use client'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon';

import "./globals.css";
import { Ground } from '@/components/Ground';

export default function Home(): JSX.Element {
  return (
    <Canvas>
      <Sky sunPosition={[100, 25, 0]} />
      <ambientLight intensity={0.5} /> {/*Elemento propio del Canvas*/}
      <Physics>
        <Ground />
      </Physics>
    </Canvas>

  )
}
