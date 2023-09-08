import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import { scene } from '../js/scene.js'

import rocketModel from '../../public/assets/models/mistral_rocket_compressed.glb';

/**
 * Model
 */

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

const rocket = loader.load(
  rocketModel,
  function (gltf) {
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
