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

### Suelo

- Se crea el componente Ground.tsx

- components/Ground.tsx

```
import { usePlane } from '@react-three/cannon';
import { Plane } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import { Mesh } from 'three';

const Ground = () => {
    const meshRef = useRef<Mesh>(null); // Crea una referencia del Tipo Mesh para la malla

    const [planeRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], // Rotación de la superficie para que esté paralela al plano horizontal
        position: [0, -0.5, 0], // Posición de la superficie en el mundo 3D. La superficie estará centrada en el eje Y (altura -0.5)
    }));

    useEffect(() => {
        // El useEffect se ajusta cada vez que meshRef o planeREf cambian
        if (meshRef.current && planeRef.current) {
            //Verifica que ambas referencias no sean nulas
            meshRef.current.position.copy(planeRef.current.position);
            meshRef.current.rotation.copy(planeRef.current.rotation);
        }
    }, [meshRef, planeRef]);

    return (
        <group>
            <mesh ref={meshRef}>
                {/* Aca dentro se define la geometria y el material de la malla*/}
                <Plane args={[100, 100]} />
                <meshStandardMaterial attach='material' color={'green'} />
            </mesh>
        </group>
    );
}

export { Ground };
```

- Posteriormente se agrega el componente en el canvas, haciendolo hijo de las Physics

### Camara FPV

- Se crea el componente FPV

```
import React from "react";
import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const FPV = () => {

    // Usa el hook useThree para obtener la cámara y el contexto WebGL
    const { camera, gl } = useThree();

    return (
        // Renderiza el componente PointerLockControls, que permite el control de la cámara en primera persona
        <PointerLockControls args={[camera, gl.domElement]} />
    )
}

export { FPV }
```

- Posteriormente se agrega el componente en el canvas.

### Texturas

- Se crea un archivo que tendra al funcion de importar la imagen de la textura, cargar la imagen para crear la textura y exportar.
- /images/textures.ts

```
import { grassImg } from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg.src); // Se carga la textura

// Efecto pixeleado de Minecraft
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;



export { groundTexture };

```

- Se agrega la textura al <meshStandardMaterial attach='material' map={groundTexture}/>, y se agrega un repeat a la textura.
- /components/Ground.tsx

```
import React, { useRef, useEffect } from 'react';
import { usePlane } from '@react-three/cannon';
import { Plane } from '@react-three/drei';
import { Mesh } from 'three';

import { groundTexture } from '@/images/textures';

const Ground = () => {
    const meshRef = useRef<Mesh>(null); // Crea una referencia del Tipo Mesh para la malla

    const [planeRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], // Rotación de la superficie para que esté paralela al plano horizontal
        position: [0, -0.5, 0], // Posición de la superficie en el mundo 3D. La superficie estará centrada en el eje Y (altura -0.5)
    }));

    useEffect(() => {
        // El useEffect se ajusta cada vez que meshRef o planeREf cambian
        if (meshRef.current && planeRef.current) {
            //Verifica que ambas referencias no sean nulas
            meshRef.current.position.copy(planeRef.current.position);
            meshRef.current.rotation.copy(planeRef.current.rotation);
        }
    }, [meshRef, planeRef]);

    groundTexture.repeat.set(100,100); //Para pixelear el suelo.

    return (
        <group>
            <mesh ref={meshRef}>
                {/* Aca dentro se define la geometria y el material de la malla*/}
                <Plane args={[100, 100]}>
                    <meshStandardMaterial attach='material' map={groundTexture}/>
                </Plane>
            </mesh>
        </group>
    );
}

export { Ground };
```
