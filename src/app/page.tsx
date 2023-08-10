'use client'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon';
import {FPV as Fpv} from "../components/FPV";

import "./globals.css";
import { Ground } from '@/components/Ground';

export default function Home(): JSX.Element {
  return (
    <Canvas>
      <Sky sunPosition={[100, 25, 0]} />
      <ambientLight intensity={0.7} /> {/*Elemento propio del Canvas*/}
      <Fpv />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>

  )
}
