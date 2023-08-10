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