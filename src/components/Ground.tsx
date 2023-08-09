import { usePlane } from '@react-three/cannon'
import { Plane } from '@react-three/drei';
import React, { useRef } from 'react'

const Ground = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    /* usePlane(): Este hook crea una superficie plana en el mundo 3D y devuelve una referencia al objeto 3D 
    y sus propiedades físicas. */
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], // Rotación de la superficie para que esté paralela al plano horizontal.
        position: [0, -0.5, 0], // Posición de la superficie en el mundo 3D. La superficie estará centrada en el eje Y (altura -0.5).
    }));

    /*El hook usePlane devuelve la referencia "ref" que se utiliza para adjuntar la superficie plana al mundo 3D.
    La referencia "ref" se aplicará al objeto 3D creado por el hook usePlane para renderizar la superficie plana en la escena.
    
    El componente <mesh>: Este componente representa una malla 3D en la escena.
    */
    return (
        <mesh ref={meshRef} {...ref}>
            {/* Aca dentro se define la geometria y el material de la malla*/}
            <Plane args={[10, 10]} />
            <meshStandardMaterial attach='material' color={'green'} />
        </mesh>
    )
}

export { Ground }