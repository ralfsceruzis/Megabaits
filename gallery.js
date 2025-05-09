
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.bildes img');
  let currentImageIndex = 0;

  // Hide all images except the first one
  images.forEach((img, index) => {
    if (index !== 0) {
      img.style.display = 'none';
    }
  });

  // Function to show image at given index
  function showImage(index) {
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
  }

  // Handle keyboard events
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    } else if (e.key === 'ArrowLeft') {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    }
  });
});
