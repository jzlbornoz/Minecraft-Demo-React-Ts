# Minecraft Clon con React y TypeScript

## ThreeJs

- Para realizar este proyecto se utilizaran las siguientes dependencias de ThreeJs, es una libreria que permite construir componentes en 2D y 3D utilizando la API de webGL.
- WebGL es una API de bajo nivel que le permite al navegador acceder a la GPU para graficar en el mismo.

### Dependencias Principales

- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/cannon` --> Fisicas
- `npm i @react-three/fiber @react-three/drei @react-three/cannon -E`

## Proyecto

- El proyecto tiene el index en `./app/page.tsx`, todo el proyecto debe ser hijo del componente Canva.

```
'use client'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import "./globals.css";

export default function Home(): JSX.Element {
  return (
    <Canvas> 
      <Sky /> // Componente del cielo
    </Canvas>

  )
}

```
