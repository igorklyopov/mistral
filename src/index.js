import './style.css';
import * as THREE from 'three';

import { canvasRef } from './js/refs';
import { scene } from './js/scene';
import { camera } from './js/camera';
import { sizes } from './js/sizes.js';
import { ambientLight, directionLight } from './js/lights';
import { renderer } from './js/renderer.js';
import { tick } from './js/animate.js';
import { rocket } from './js/models.js';
import { orbitControls } from './js/controls';
import { directionLightHelper } from './js/helpers';

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

tick();
