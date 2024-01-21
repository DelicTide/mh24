import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

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

        // At the top of your component, after importing THREE
        const textureLoader = new THREE.TextureLoader();
        // Inside your useEffect, before creating the orbMaterial
        const texture = textureLoader.load('src/assets/textures/lm01.jpg');

        // orb Orb
        const orbGeometry = new THREE.SphereGeometry(1, 32, 32);
        const orbMaterial = new THREE.MeshStandardMaterial({
            color: 0x555555,
            envMap: texture, // Reflect skybox
            metalness: 1.0,
            roughness: 0.5
        });
        const orb = new THREE.Mesh(orbGeometry, orbMaterial);
        scene.add(orb);

        // Camera Position
        camera.position.z = 5;

        // Resize Listener
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            // Update orb rotation or other animations here
            renderer.render(scene, camera);
        };
        animate();

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
