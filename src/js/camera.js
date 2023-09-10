import * as THREE from 'three';

import { sizes } from './sizes.js';
import { scene } from './scene.js';

/**
 * Camera
 */
// Base camera
const cameraParams = {
  fov: 75,
  aspect: sizes.width / sizes.height,
  near: 0.1,
  far: 100,
};

const camera = new THREE.PerspectiveCamera(
  cameraParams.fov,
  cameraParams.aspect,
  cameraParams.near,
  cameraParams.far
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1.2;
scene.add(camera);

export { camera };
