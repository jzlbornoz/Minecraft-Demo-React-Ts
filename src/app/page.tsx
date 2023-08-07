'use client'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import "./globals.css";

export default function Home(): JSX.Element {
  return (
    <Canvas>
      <Sky />
    </Canvas>

  )
}
