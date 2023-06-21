// for scroll action
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;
//   console.log(scrollY);

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id");
//     console.log(sectionId);

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(`<a href='#${sectionId}' />`)
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector("a[href*=#" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

// for scrollreveal
ScrollReveal({
  origin: "left",
  duration: 2000,
  scale: 0.5,
  reset: true,
}).reveal(".scroll-left", {
  interval: 100,
});

ScrollReveal({
  origin: "right",
  duration: 2000,
  scale: 0.5,
  reset: true,
}).reveal(".scroll-right", {
  interval: 100,
});

ScrollReveal({
  origin: "bottom",
  duration: 2000,
  scale: 0.5,
  reset: true,
}).reveal(".scroll-bottom", {
  interval: 100,
});

ScrollReveal({
  origin: "top",
  duration: 2000,
  reset: true,
}).reveal(".scroll-top", {
  interval: 100,
});
