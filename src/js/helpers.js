import * as THREE from 'three';

import { scene } from './scene.js';
import { directionLight } from './lights.js';

// for lights
const directionLightHelper = new THREE.DirectionalLightHelper(directionLight);
scene.add(directionLightHelper);

// for


export { directionLightHelper };