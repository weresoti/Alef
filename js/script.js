let more = document.querySelector(".cats__row__more");
let moreBtn = document.querySelector(".cats__more");
let moreSpan = document.querySelector(".cats__more__span");
let lessSpan = document.querySelector(".cats__less__span");
let prices = document.querySelectorAll(".cats__column__price").values;
let messages = document.querySelector(".messages")

document.addEventListener("click", function (e) {
  if (e.target.closest(".cats__column__action__like")) {
    e.target.classList.toggle("cats__column__action__like-active"); // Like
    messages.style.top = '0px'
  }
  if (e.target.closest(".cats__more")) {
    /*moreSpan.classList.toggle("none");
    lessSpan.classList.toggle("active");*/
    e.preventDefault();
  }
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });
  $("#top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 0);
  });
});

document.querySelector(".header-top__burger").onclick = function () {
  document
    .querySelector(".header-top__menu")
    .classList.toggle("header-top__menu-active");
  document.querySelector(".header-top__burger").classList.toggle("active");
  $("body").toggleClass("lock");
};

/* Сортировка  */
let price = document.querySelector(".cats__sort__price")
let age = document.querySelector(".cats__sort__age")

price.onclick = function () {
  this.classList.add('active')
  age.classList.remove('active')
  mySort("data-price");
};
age.onclick = function () {
  this.classList.add('active')
  price.classList.remove('active')
  mySort("data-age");
};

function mySort(sortType) {
  let nav = document.querySelector("#nav");
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute(sortType) >
        +nav.children[j].getAttribute(sortType)
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

/* email */
const form = document.querySelector(".footer-right__form");
const formInput = document.querySelector(".footer-right__form__input");
const error = document.getElementById("error");

form.addEventListener("click", function (event) {
  if (emailTest(formInput)) {
    formInput.style.border = "2px solid red"
    event.preventDefault();
  }
});

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}



