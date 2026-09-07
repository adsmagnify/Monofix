const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const count = slides.length;

let index = 0;
let timer;
let busy = false;

const HOLD = 3500;
const FADE_MS = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? 1
  : 1100;

function setDots(i) {
  dots.forEach((dot, n) => {
    const on = n === i;
    dot.classList.toggle("is-active", on);
    dot.setAttribute("aria-current", on ? "true" : "false");
  });
}

function go(next) {
  const target = ((next % count) + count) % count;
  if (busy || target === index) return;

  busy = true;
  const current = slides[index];
  const incoming = slides[target];

  incoming.classList.remove("is-leaving", "is-active");
  incoming.classList.add("is-prepare");
  void incoming.offsetWidth;

  incoming.classList.remove("is-prepare");
  incoming.classList.add("is-active");
  current.classList.remove("is-active");
  current.classList.add("is-leaving");

  index = target;
  setDots(index);

  window.setTimeout(() => {
    current.classList.remove("is-leaving");
    busy = false;
    scheduleNext();
  }, FADE_MS);
}

function scheduleNext() {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => go(index + 1), HOLD);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    window.clearTimeout(timer);
    go(Number(dot.dataset.go));
  });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) window.clearTimeout(timer);
  else scheduleNext();
});

scheduleNext();
