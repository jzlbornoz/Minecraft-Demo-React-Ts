import { grassImg } from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg.src); // Se carga la textura

// Efecto pixeleado de Minecraft
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;



export { groundTexture };