// Get the cube element
const cube = document.querySelector('.cube');

// Track the rotation angles
let rotateX = 0;
let rotateY = 0;

// Add mousemove event listener to rotate the cube
document.addEventListener('mousemove', (event) => {
  // Calculate the change in mouse position
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  
  // Adjust rotation based on mouse movement
  rotateY = (x - 0.8) * 360; // Horizontal movement
  rotateX = (y - 0.5) * 360; // Vertical movement

  // Apply rotation to the cube
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
