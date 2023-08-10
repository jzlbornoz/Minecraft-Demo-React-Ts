import {
    grassImg,
    dirtImg,
    glassImg,
    logImg,
    woodImg
} from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg.src); // Se carga la textura
// Efecto pixeleado de Minecraft
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter; //multiplica los pixeles cercanos

const dirtTexture = new TextureLoader().load(dirtImg.src); // Se carga la textura
dirtTexture.magFilter = NearestFilter; 

const glassTexture = new TextureLoader().load(glassImg.src); // Se carga la textura
glassTexture.magFilter = NearestFilter;

const logTexture = new TextureLoader().load(logImg.src); // Se carga la textura
logTexture.magFilter = NearestFilter;

const woodTexture = new TextureLoader().load(woodImg.src); // Se carga la textura
woodTexture.magFilter = NearestFilter;

export { groundTexture, dirtTexture, glassTexture, logTexture, woodTexture };