import './style.css';

import { camera } from './js/camera';
import { sizes } from './js/sizes.js';
import { renderer } from './js/renderer.js';
import { tick } from './js/animate.js';
import { rocket } from './js/models.js';
import helpers from './js/helpers';

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
