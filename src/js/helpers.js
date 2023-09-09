import * as THREE from 'three';
import { GUI } from 'dat.gui';

import { scene } from './scene.js';
import { ambientLight, directionLight } from './lights.js';
import { camera } from './camera.js';

const gui = new GUI();

// for lights

const ambientLightParams = {
  color: 0xffffff,
};
const ambientLightFolder = gui.addFolder('ambientLight');
ambientLightFolder.addColor(ambientLightParams, 'color').onChange(function () {
  ambientLight.color.set(ambientLightParams.color);
});
ambientLightFolder.add(ambientLight, 'intensity', 0, 10);
ambientLightFolder.open();

// directionLight ;
const directionLightHelper = new THREE.DirectionalLightHelper(directionLight);
scene.add(directionLightHelper);

const directionLightParams = {
  color: 0xffffff,
};
const directionLightFolder = gui.addFolder('directionLight');
directionLightFolder
  .addColor(directionLightParams, 'color')
  .onChange(function () {
    directionLight.color.set(directionLightParams.color);
  });
directionLightFolder.add(directionLight, 'intensity', 0, 100);
directionLightFolder.add(directionLight.position, 'x', -10, 10);
directionLightFolder.add(directionLight.position, 'y', -10, 10);
directionLightFolder.add(directionLight.position, 'z', -10, 10);
directionLightFolder.open();

// for camera
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -10, 10);
cameraFolder.add(camera.position, 'y', -10, 10);
cameraFolder.add(camera.position, 'z', -10, 10);
cameraFolder.add(camera, 'fov', 0, 360);
cameraFolder.add(camera, 'aspect', 0, 10);
cameraFolder.add(camera, 'near', 0, 1);
cameraFolder.add(camera, 'far', 0, 2000);
cameraFolder.open();


// for model