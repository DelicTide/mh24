import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';


const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Set up PointerLockControls
        const controls = new PointerLockControls(camera, document.body);

        // Event listener to lock pointer on click
        document.addEventListener('click', () => controls.lock());

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        scene.add(directionalLight);

        // GLTF Loader
        const loader = new GLTFLoader();
        loader.load('src/assets/3dobjects/Night+Sky+Futuristic.glb', (gltf) => {
            console.log("Model loaded successfully", gltf);
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error("Error loading model: ", error);
        });

        // Camera Position
        camera.position.z = 5;

        // Create a starfield
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const starsVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000); // spread in x
            const y = THREE.MathUtils.randFloatSpread(2000); // spread in y
            const z = THREE.MathUtils.randFloatSpread(2000); // spread in z
            starsVertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        //   // Add OrbitControls
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true; // Optional, but this gives a smoother control feel
        // controls.dampingFactor = 0.1;


        // // Inside your useEffect, before creating the orbMaterial
        // const texture = textureLoader.load('src/assets/textures/lm01.jpg');

        // // orb Orb
        // const orbGeometry = new THREE.SphereGeometry(1, 32, 32);
        // const orbMaterial = new THREE.MeshStandardMaterial({
        //     color: 0x555555,
        //     envMap: texture, // Reflect skybox
        //     metalness: 1.0,
        //     roughness: 0.5
        // });
        // const orb = new THREE.Mesh(orbGeometry, orbMaterial);
        // scene.add(orb);

        // // Resize Listener, replaced w/ #'handle resize'
        // const onWindowResize = () => {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        // };
        // window.addEventListener('resize', onWindowResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            // controls.update(); // Only required if controls.enableDamping = true
            // Update orb rotation or other animations here
            renderer.render(scene, camera);
        };
        animate();

          // Handle resize
          window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            mountRef.current.removeChild(renderer.domElement);
            // Perform additional cleanup if necessary
        };
    }, []);

    return <div ref={mountRef} style={{ height: '100vh' }} />;
};

export default ThreeScene;
