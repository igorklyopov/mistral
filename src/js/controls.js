import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { camera } from './camera';
import { canvasRef } from './refs';

// Controls
const orbitControls = new OrbitControls(camera, canvasRef);
orbitControls.enableDamping = true;
orbitControls.minDistance = 1.3;
orbitControls.maxDistance = 5;
orbitControls.enablePan = false;

console.log(orbitControls);

export { orbitControls };
