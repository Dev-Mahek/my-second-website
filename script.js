let main = document.querySelector("#main");
const scroll = new LocomotiveScroll({
  el: main,
  smooth: true,
});

let pointer = document.querySelector("#minicircle");
window.addEventListener("mousemove", function (dets) {
  pointer.style.left = dets.x + "px";
  pointer.style.top = dets.y + "px";
});

function firstPageAnime() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnime();

document.querySelectorAll(".elem").forEach(function (el) {
  let rotate = 0;
  let diffrot = 0;

  el.addEventListener("mouseleave", function (dets) {
    const img = el.querySelector("img");
    gsap.to(img, {
      opacity: 0,
      duration: 0.25,
      ease: "power1.out",
    });
  });

  el.addEventListener("mousemove", function (dets) {
    const img = el.querySelector("img");
    let diff = dets.clientY - el.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(img, {
      opacity: 1,
      duration: 0.25,
      ease: "power1.out",
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });
});
