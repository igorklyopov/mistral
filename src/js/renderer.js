import * as THREE from 'three';

import { canvasRef } from './refs.js';
import { sizes } from './sizes.js';

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvasRef,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


export {renderer}