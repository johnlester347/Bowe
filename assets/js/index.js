history.scrollRestoration = "manual";

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

let readMore = document.querySelectorAll(".team__read-more-btn");
let readLess = document.querySelectorAll(".team__read-less");

let readMoreFade = document.querySelectorAll(".team__read-more-fade");
let itemText = document.querySelectorAll(".team__item-text");

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", (event) => {
    readLess[i].style = "display: block;";
    readMore[i].style = "display: none;";
    readMoreFade[i].style = "display: none;";
    itemText[i].classList.add("isOpen");
  });

  readLess[i].addEventListener("click", (event) => {
    readMore[i].style = "display: block;";
    readLess[i].style = "display: none;";
    readMoreFade[i].style = "display: block;";
    itemText[i].classList.remove("isOpen");
  });
}

let partnersClose = document.querySelector(".partners__accordion-closed");
let partnersOpen = document.querySelector(".partners__accordion-opened");

let partnerAccText = document.querySelector(".partners__accordion_text");

partnersClose.addEventListener("click", (event) => {
  partnersOpen.style = "display: block;";
  partnerAccText.style = "display: block;";
  partnersClose.style = "display: none";
});

partnersOpen.addEventListener("click", (event) => {
  partnersOpen.style = "display: none;";
  partnerAccText.style = "display: none;";
  partnersClose.style = "display: block";
});

let faqOpen = document.querySelectorAll(".faq__accordion-opened");
let faqClose = document.querySelectorAll(".faq__accordion-closed");
let faqAccText = document.querySelectorAll(".faq__accordion_text");

for (let i = 0; i < faqClose.length; i++) {
  faqClose[i].addEventListener("click", (event) => {
    faqAccText[i].style = "display: block;";
    faqOpen[i].style = "display: block;";
    faqClose[i].style = "display: none;";
  });

  faqOpen[i].addEventListener("click", (event) => {
    faqAccText[i].style = "display: none;";
    faqClose[i].style = "display: block;";
    faqOpen[i].style = "display: none;";
  });
}

let sticky = document.querySelector(".sticky");
let initialCoords = sticky.getBoundingClientRect();
let parallax = document.querySelector(".divider__full-img");

window.addEventListener("scroll", (e) => {
  let parLX = window.pageYOffset;
  parallax.style.transform = `scale(1.2) translateY(${parLX * 0.7 + "px"});`;
  if (window.scrollY > initialCoords.top) {
    sticky.classList.add("sticky__active");
  } else {
    sticky.classList.remove("sticky__active");
  }
  //   if (window.pageYOffset >= sticky.offsetTop) {
  //     sticky.classList.add("sticky__active");
  //   } else if (window.pageYOffset <= sticky.offsetTop) {
  //     sticky.classList.remove("sticky__active");
  //   } else {
  //     alert("hi");
  //   }
});

$(".animated").one("inview", function (event, isInView) {
  var _this = $(this);
  var animatedChildren = _this.find(".animated-child");
  if (isInView) {
    if (animatedChildren.length > 0) {
      TweenMax.staggerTo(
        animatedChildren,
        0.4,
        { y: 0, x: 0, opacity: 1, delay: 0.3, ease: Power1.easeOut },
        0.2
      );
    }
  }
});
