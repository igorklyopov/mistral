import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


import { camera } from './camera';
import { canvasRef } from './refs';

// Controls
const orbitControls = new OrbitControls(camera, canvasRef);
orbitControls.enableDamping = true;


export {orbitControls}