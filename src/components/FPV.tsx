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