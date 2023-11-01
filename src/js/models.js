import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GUI } from 'dat.gui'; // helpers

import { scene } from '../js/scene.js';

import rocketModel from '../../public/assets/models/mistral_rocket.glb';
import launcherRocketModel from '../../public/assets/models/mistral_launcher_rocket.glb';
import mistralComplex from '../../public/assets/models/mistral_complex.glb';

/**
 * Model
 */
const gui = new GUI(); // helpers

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

const rocket = loader.load(
  mistralComplex,
  function (gltf) {
    // helpers
    // console.log(gltf.scene);

    // const rocketFolder = gui.addFolder('Rocket');
    // rocketFolder.add(gltf.scene.position, 'x', -10, 10);
    // rocketFolder.add(gltf.scene.position, 'y', -10, 10);
    // rocketFolder.add(gltf.scene.position, 'z', -10, 10);

    // rocketFolder.add(gltf.scene.rotation, 'x', 0, 360).name('rotation x');
    // rocketFolder.add(gltf.scene.rotation, 'y', 0, 360).name('rotation y');
    // rocketFolder.add(gltf.scene.rotation, 'z', 0, 360).name('rotation z');

    // rocketFolder.add(gltf.scene.scale, 'x', 0, 10).name('scale x');
    // rocketFolder.add(gltf.scene.scale, 'y', 0, 10).name('scale y');
    // rocketFolder.add(gltf.scene.scale, 'z', 0, 10).name('scale z');
    //
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        const m = child;
        m.receiveShadow = true;
        m.castShadow = true;

        // try to rotate stabilizer
        // console.log(m.name, m);
        // const r = 90 * (Math.PI / 180);

        // switch (m.name) {
        //   case 'stabilisator_front_1':
        //     m.rotation.set(0, 0, 90 * (Math.PI / 180));
        //     break;

        //   case 'stabilisator_front_2':
        //     // m.rotation.set(90 * (Math.PI / 180),0 , 0);
        //     break;

        //   case 'stabilisator_front_3':
        //     m.rotation.set(0, 0, -90 * (Math.PI / 180));
        //     break;

        //   case 'stabilisator_front_4':
        //     m.rotation.set(0, 0, -r);
        //     break;

        //   default:
        //     break;
        // }
        // END try to rotate stabilizer
      }
    });
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
