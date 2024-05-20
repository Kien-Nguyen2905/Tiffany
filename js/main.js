$(document).ready(function () {
  $(".carousel__main").slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: $(".slick-slider-dots"),
    nextArrow:
      "<i class='bi bi-caret-right a-left control-c prev slick-next'></i>",
    prevArrow:
      "<i class='bi bi-caret-left a-right control-c next slick-prev'></i>",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
function handleHeader() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var header = document.querySelector("header");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0px";
    } else {
      if (currentScrollPos > header.offsetHeight) {
        header.style.top = "-100px";
      }
    }
    prevScrollpos = currentScrollPos;
  };
}
handleHeader();
function progressbar() {
  progress = document.querySelector(".progressbar");
  window.addEventListener("scroll", () => {
    let Y = window.scrollY;
    let percent =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percent}%`;
  });
}
progressbar();
navigattion = () => {
  const btn = document.querySelector(".btnmenu");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
  });
};
navigattion();

validateSignIn = () => {
  const btnSubmit = document.querySelector(".btn-authen");
  const email = document.querySelector(".input-email");
  const password = document.querySelector(".input-password");
  const emailError = document.querySelector(".text-email-error");
  const passwordError = document.querySelector(".text-password-error");

  btnSubmit?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (email.value.trim() == "") {
      email.classList.toggle("active");
      emailError.classList.toggle("active");
    }
    if (password.value.trim() == "") {
      password.classList.toggle("active");
      passwordError.classList.toggle("active");
    }
  });
};
validateSignIn();

backToTop = (e) => {
  const backToTop = document.querySelector(".backToTop");
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > document.body.offsetHeight / 2) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
backToTop();
