const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btn.forEach((curElem) =>
  curElem.addEventListener("click", (e) => {
    p_btn_clicked = e.target;

    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) =>
      curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
      curElem.classList.remove("p-image-not-active")
    );
  })
);

//hamburger creation

const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const activeBars = document.querySelector(".bars-active");
const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero_section1");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("bars-active");
  header.classList.toggle("nav-active");
});

// sticky navbar creation

const scrollBtn = document.getElementsByClassName("scrolling");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0.2,
  }
);

observer.observe(heroSection);

new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width: 780px)");

myJsmedia(widthSize);

widthSize.addEventListener("change", myJsmedia);
