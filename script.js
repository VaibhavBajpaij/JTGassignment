
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
}

video.addEventListener("click", togglePlayPause);
playPauseBtn.addEventListener("click", togglePlayPause);


let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const totalSlides = testimonials.length;

function showTestimonial(index) {

  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === index)
  });
  currentSlide = index;
}

setInterval(() => {
  let nextSlide = (currentSlide + 1) % totalSlides;
  showTestimonial(nextSlide);
  },3000);

window.onload = () => showTestimonial(0);

const form = document.getElementById("contactForm");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});


  
