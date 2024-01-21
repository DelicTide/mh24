// ... previous code

// Reflective Orb
const orbGeometry = new THREE.SphereGeometry(1, 32, 32);
const orbMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555, // Basic color for now
    metalness: 0.5,  // Adjust metalness
    roughness: 0.5   // Adjust roughness
});
const orb = new THREE.Mesh(orbGeometry, orbMaterial);
scene.add(orb);

// ... remaining code
