const rotators = document.querySelectorAll("[data-hero-rotator]");

rotators.forEach((rotator) => {
  const slides = Array.from(rotator.querySelectorAll("[data-hero-slide]"));
  if (slides.length < 2) {
    return;
  }

  let index = 0;
  const interval = Number.parseInt(rotator.dataset.interval, 10) || 4500;
  let timerId = null;

  const showSlide = (nextIndex) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("opacity-100", idx === nextIndex);
      slide.classList.toggle("opacity-0", idx !== nextIndex);
      slide.classList.toggle("pointer-events-auto", idx === nextIndex);
      slide.classList.toggle("pointer-events-none", idx !== nextIndex);
    });
  };

  const goTo = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    showSlide(index);
  };

  const startAuto = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(() => {
      goTo(index + 1);
    }, interval);
  };

  showSlide(index);
  startAuto();

  rotator.addEventListener("click", (event) => {
    const prev = event.target.closest("[data-hero-prev]");
    const next = event.target.closest("[data-hero-next]");
    if (!prev && !next) {
      return;
    }
    event.preventDefault();
    if (prev) {
      goTo(index - 1);
    }
    if (next) {
      goTo(index + 1);
    }
    startAuto();
  });
});
