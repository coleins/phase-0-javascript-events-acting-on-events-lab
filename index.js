// Function to move the DODGER to the left
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let currentPosition = parseInt(dodger.style.left);
    let newPosition = currentPosition - 4; // Adjust the speed of movement as needed
  
    // Ensure the new position is within the bounds
    if (newPosition >= 0) {
      dodger.style.left = `${newPosition}px`;
    }
  }
  
  // Function to move the DODGER to the right
  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let currentPosition = parseInt(dodger.style.left);
    let newPosition = currentPosition + 4; // Adjust the speed of movement as needed
  
    // Ensure the new position is within the bounds
    if (newPosition <= 360) {
      dodger.style.left = `${newPosition}px`;
    }
  }
  
