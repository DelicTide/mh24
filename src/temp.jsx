const animate = () => {
  requestAnimationFrame(animate);
  controls.update(); // Only required if controls.enableDamping = true
  renderer.render(scene, camera);
};
