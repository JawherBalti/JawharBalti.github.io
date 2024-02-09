const year = new Date().getFullYear();
const footer = document.querySelector(".footer");
var text = document.createTextNode(" " + year);
footer.appendChild(text);

const slides = document.querySelector(".slides");
const scrollUp = document.querySelector(".scroll__up");

const aboutMeLink = document.querySelector("#link__aboutme");
const projectsLink = document.querySelector("#link__projects");
const skillsLink = document.querySelector("#link__skills");
const contactLink = document.querySelector("#link__contact");

const navBar = document.querySelector("nav");
const firstPage = document.querySelector(".info__container");
const navLinksSmall = document.querySelector(".nav__links");
const aboutMeLinkSmall = document.querySelector("#link__aboutme--small");
const projectsLinkSmall = document.querySelector("#link__projects--small");
const skillsLinkSmall = document.querySelector("#link__skills--small");
const contactLinkSmall = document.querySelector("#link__contact--small");
const navLinksBtn = document.querySelector(".bars");

const slidesLength = 5;

let activeSlideIndex = 0;

let isMenuHidden = true;

navLinksBtn.addEventListener("click", () => {
  if (isMenuHidden) {
    navLinksSmall.classList.add("show__menu");
    navLinksSmall.classList.remove("hide__menu");
    isMenuHidden = false;
  } else {
    navLinksSmall.classList.remove("show__menu");
    navLinksSmall.classList.add("hide__menu");
    isMenuHidden = true;
  }
});

var ts;
var te;

let touching = false;
var touchTimer = false;
window.addEventListener("touchstart", function (e) {
  ts = e.touches[0].clientY;
  console.log(e.touches[0].clientY);
});
window.addEventListener("touchmove", function (e) {
  te = e.touches[0].clientY;
  if (!touching) {
    if (ts > te + 15) changeSlide("down");
    if (ts < te - 15) changeSlide("up");
    touching = true;
  }
  window.clearInterval(touchTimer);
  touchTimer = this.window.setTimeout(function () {
    touching = false;
  }, 100);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

aboutMeLinkSmall.addEventListener("click", () => {
  navLinksSmall.classList.remove("show__menu");
  navLinksSmall.classList.add("hide__menu");
  isMenuHidden = true;
});

projectsLinkSmall.addEventListener("click", () => {
  navLinksSmall.classList.remove("show__menu");
  navLinksSmall.classList.add("hide__menu");
  isMenuHidden = true;
});

skillsLinkSmall.addEventListener("click", () => {
  navLinksSmall.classList.remove("show__menu");
  navLinksSmall.classList.add("hide__menu");
  isMenuHidden = true;
});

contactLinkSmall.addEventListener("click", () => {
  navLinksSmall.classList.remove("show__menu");
  navLinksSmall.classList.add("hide__menu");
  isMenuHidden = true;
});

  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("about__show");
      } else {
        entry.target.classList.remove("about__show");
      }
    });
  });

  const aboutElement = document.querySelectorAll(".about");
  aboutElement.forEach((el) => aboutObserver.observe(el));

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("skill__show");
      } else {
        entry.target.classList.remove("skill__show");
      }
    });
  });

  const skillElement = document.querySelectorAll(".skill__container");
  skillElement.forEach((el) => skillObserver.observe(el));

  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("contact__show");
      } else {
        entry.target.classList.remove("contact__show");
      }
    });
  });

  const contactElement = document.querySelectorAll(".contact__info");
  contactElement.forEach((el) => contactObserver.observe(el));

  const projectsSwiper = new Swiper(".projects__swiper", {
    // Optional parameters
    effect: "cards",
    centeredSlides: true,
    slidesPreView: "auto",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const SkillsSwiper = new Swiper(".skills__swiper", {
    // Optional parameters
    effect: "coverflow",
    centeredSlides: true,
    slidesPreView: "auto",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
