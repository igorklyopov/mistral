import * as THREE from 'three';

import { scene } from './scene.js';

/**
 * Light
 */

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// top
const directionLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionLight.castShadow = true;
directionLight.position.set(0, 1, 0);
scene.add(directionLight);

// key
const directionLight_1 = new THREE.DirectionalLight(0xffffff, 1);
directionLight_1.castShadow = true;
directionLight_1.position.set(1.5, 0, 1);
scene.add(directionLight_1);

// rim
const directionLight_2 = new THREE.DirectionalLight(0xffffff, 2);
directionLight_2.castShadow = true;
directionLight_2.position.set(-1.5, 0, -1);
scene.add(directionLight_2);

// fill
const directionLight_3 = new THREE.DirectionalLight(0xffffff, 1);
directionLight_3.castShadow = true;
directionLight_3.position.set(-1.5, 0, 1);
scene.add(directionLight_3);

export {
  ambientLight,
  directionLight,
  directionLight_1,
  directionLight_2,
  directionLight_3,
};
