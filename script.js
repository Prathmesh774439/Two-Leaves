  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const cards = document.querySelector(".cards");

document.querySelector(".right").onclick = () => {
  cards.scrollBy({ left: 400, behavior: "smooth" });
};

document.querySelector(".left").onclick = () => {
  cards.scrollBy({ left: -400, behavior: "smooth" });
};

const slider = document.querySelector(".cards");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 0.8;

  slider.scrollLeft = scrollLeft - walk;
});