import * as THREE from 'three';

import { scene } from './scene.js';

/**
 * Light
 */

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionLight);



export {ambientLight, directionLight };