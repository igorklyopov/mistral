import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GUI } from 'dat.gui';// helpers

import { scene } from '../js/scene.js';

import rocketModel from '../../public/assets/models/mistral_rocket_compressed.glb';

/**
 * Model
 */
const gui = new GUI();// helpers

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

const rocket = loader.load(
  rocketModel,
  function (gltf) {
    // helpers
    console.log(gltf.scene);
    gltf.scene.rotation._x=90;
    const rocketFolder = gui.addFolder('Rocket');
    rocketFolder.add(gltf.scene.position, 'x', -10, 10);
    rocketFolder.add(gltf.scene.position, 'y', -10, 10);
    rocketFolder.add(gltf.scene.position, 'z', -10, 10);

    rocketFolder.add(gltf.scene.rotation, 'x', 0, 360).name('rotation x');
    rocketFolder.add(gltf.scene.rotation, 'y', 0, 360).name('rotation y');
    rocketFolder.add(gltf.scene.rotation, 'z', 0, 360).name('rotation z');

    rocketFolder.add(gltf.scene.scale, 'x', 0, 10).name('scale x');
    rocketFolder.add(gltf.scene.scale, 'y', 0, 10).name('scale y');
    rocketFolder.add(gltf.scene.scale, 'z', 0, 10).name('scale z');
    // 

    scene.add(gltf.scene);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% model loaded');
  },
  (error) => {
    console.error('Error model loaded: ', error.message);
  }
);

export { rocket };
