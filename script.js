//GSAP
gsap.to(".nav", {
  backgroundColor: "rgb(0,0,0)",
  paddingTop: 10,
  paddingBottom: 10,
  duration: 0.5,
  ease: Expo.easeInOut,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -5%",
    scrub: true,
  },
});
gsap.to(".main", {
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top-30%",
    end: "top -80%",
    scrub: true,
  },
});
gsap.from(".page7 h1", {
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".page7 h1",
    scrub: true,
    // markers: true,
    start: "top bottom",
  },
});

//Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".tiltslides", {
  spaceBetween: 30,
  loop: true,
  slidesPerView: 5,
});
var swiper = new Swiper(".testimonial", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});

//2D tilt using GSAP
const testimonial = document.querySelector(".testimonial");
testimonial.addEventListener("mousemove", (event) => {
  const rect = testimonial.getBoundingClientRect();

  const deltaX = rect.width / 2 - event.clientX;
  const deltaY = rect.height / 2 - event.clientY;

  gsap.to(".testimonial h2", {
    xPercent: gsap.utils.clamp(-2, 2, deltaX),
    yPercent: gsap.utils.clamp(-2, 2, deltaY),
    duration: 1.5,
    ease: "power2",
  });
});

//3D tilt using VanillaTilt
const imagebox = document.querySelectorAll('.imagebox')
imagebox.forEach(function (element) {
  VanillaTilt.init(element, {
    max: -4,
    perspective: 1000,
    speed: 100,
  });
});

//Customised cursor
function mouseMover(location, id, duration) {
  location.addEventListener("mousemove", function (e) {
    gsap.to(id, {
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
      x: e.clientX,
      y: e.clientY,
      duration: duration,
      ease: Power3,
    });
  });
}
mouseMover(window, "#cursor", 0.6);
mouseMover(window, "#cursorBlur", 1.8);

// Cursor interaction with elements
function cursorChange(queryName) {
  const element = document.querySelector(queryName);
  element.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      width: 80,
      height: 80,
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid white",
    });
    element.style.cursor = "pointer";
  });

  element.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      width: 20,
      height: 20,
      backgroundColor: "#95c11e",
      border: "none",
    });
  });
}
cursorChange(".nav img");
cursorChange("#foodtext h5");
cursorChange("#tiltslides p");
cursorChange("#logo img");
cursorChange("#logo i");
cursorChange("#footer #head h4");

function cursorChangeGroup(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        width: 80,
        height: 80,
        backgroundColor: "rgba(0,0,0,0)",
        border: "2px solid white",
      });
      element.style.cursor = "pointer";
    });

    element.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        width: 20,
        height: 20,
        backgroundColor: "#95c11e",
        border: "none",
      });
    });
  });
}
cursorChangeGroup("imagebox")
cursorChangeGroup("imageboxbottom");
cursorChangeGroup("nav h4");
cursorChangeGroup("tilt-elem");
cursorChangeGroup("page7 #footer #head h3");
cursorChangeGroup("page7 #footer #bottom p");