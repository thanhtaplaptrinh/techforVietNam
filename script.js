let currentIndex = 0;

function moveSlide(direction) {
  const carouselImages = document.getElementById("carousel-images");
  const totalImages = carouselImages.children.length;

  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}
