const cardH1Safety = document.querySelector(".card-safety h1")
const safetyUlLi = document.querySelectorAll(".safety-ul li")
let arrow1 = document.querySelector(".fa-arrow-circle-left")
let arrow2 = document.querySelector(".fa-arrow-circle-right")
const square1Safety = document.querySelector(".square1-safety")
const square2Safety = document.querySelector(".square2-safety")
const square3Safety = document.querySelector(".square3-safety")
const contentContainer = document.querySelector(".content-cont")
let firstTransitionedSlide = document.querySelector(".content-cont1")
let secondTransitionedSlide = document.querySelector(".content-cont2")
let thirdTransitionedSlide = document.querySelector(".content-cont3")
let counter = 1
const contentCont = document.querySelector(".overFlow-safety")
arrow2.classList.add("fa-arrow-circle-right-active")
arrow2.addEventListener("click", function () {
  firstTransitionedSlide.classList.add("content-transition-active")
  secondTransitionedSlide.classList.add("content-transition-active")
  thirdTransitionedSlide.classList.add("content-transition-active")
  if (translate.innerText === "عربي") {
    if (counter === 1) {
      counter++
      // contentCont.style.justifyContent = "center";
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      firstTransitionedSlide.style.opacity = "0"
      secondTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.opacity = "0"

      secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
      thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      arrow1.classList.add("fa-arrow-circle-left-active")
      square2Safety.classList.add("active-slide")
      square1Safety.classList.remove("active-slide")
    } else if (counter === 2) {
      // contentCont.style.justifyContent = "flex-end";
      firstTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      secondTransitionedSlide.style.opacity = "0"
      firstTransitionedSlide.style.opacity = "0"
      secondTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.transform = "translateX(-200%)scale(1)"
      counter++
      arrow2.classList.remove("fa-arrow-circle-right-active")
      square3Safety.classList.add("active-slide")
      square2Safety.classList.remove("active-slide")
    }
  } else {
    if (counter === 1) {
    } else if (counter === 3) {
      counter--
      // contentCont.style.justifyContent = "center";
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
      secondTransitionedSlide.style.opacity = "1"
      firstTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      square3Safety.classList.remove("active-slide")
      square2Safety.classList.add("active-slide")
      square1Safety.classList.remove("active-slide")
      //
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.add("fa-arrow-circle-right-active")
    } else if (counter === 2) {
      counter--
      // contentCont.style.justifyContent = "end";
      firstTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      secondTransitionedSlide.style.opacity = "0"
      firstTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.transform = "translateX(-200%)scale(1)"
      square3Safety.classList.remove("active-slide")
      square2Safety.classList.remove("active-slide")
      square1Safety.classList.add("active-slide")
      //
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.remove("fa-arrow-circle-right-active")
    }
    if (counter === -1) {
      counter++
      // contentCont.style.justifyContent = "center";
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.5)"
      firstTransitionedSlide.style.opacity = "0"
      secondTransitionedSlide.style.transform = "translateX(-100%)"
      thirdTransitionedSlide.style.transform = "translateX(-100%)"
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.add("fa-arrow-circle-right-active")
      square2Safety.classList.add("active-slide")
      square3Safety.classList.remove("active-slide")
      square1Safety.classList.remove("active-slide")
    }
  }
})
arrow1.addEventListener("click", function () {
  firstTransitionedSlide.classList.add("content-transition-active")
  secondTransitionedSlide.classList.add("content-transition-active")
  thirdTransitionedSlide.classList.add("content-transition-active")

  if (translate.innerText === "EN") {
    if (counter === 1) {
      counter++
      // contentCont.style.justifyContent = "center";
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
      secondTransitionedSlide.style.opacity = "1"
      firstTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      square3Safety.classList.remove("active-slide")
      square2Safety.classList.add("active-slide")
      square1Safety.classList.remove("active-slide")
      //
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.add("fa-arrow-circle-right-active")
    } else if (counter === 2) {
      // contentCont.style.justifyContent = "flex-end";
      counter++
      firstTransitionedSlide.style.transform = "translateX(0%)scale(1)"
      secondTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      secondTransitionedSlide.style.opacity = "0"
      firstTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      square3Safety.classList.add("active-slide")
      square2Safety.classList.remove("active-slide")
      square1Safety.classList.remove("active-slide")
      //
      arrow1.classList.remove("fa-arrow-circle-left-active")
      arrow2.classList.add("fa-arrow-circle-right-active")
      //
    }
  } else {
    if (counter === 3) {
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-100%)"
      secondTransitionedSlide.style.opacity = "1"
      firstTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      counter--
      arrow2.classList.add("fa-arrow-circle-right-active")
      square3Safety.classList.remove("active-slide")
      square2Safety.classList.add("active-slide")
      square1Safety.classList.remove("active-slide")
    } else if (counter === 2) {
      firstTransitionedSlide.style.transform = "translateX(0%)scale(1)"
      secondTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      secondTransitionedSlide.style.opacity = "0"
      firstTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      counter--
      arrow1.classList.remove("fa-arrow-circle-left-active")
      square3Safety.classList.remove("active-slide")
      square2Safety.classList.remove("active-slide")
      square1Safety.classList.add("active-slide")
    }
  }
})
//!
//?
firstTransitionedSlide.classList.add("content-transition-active")
secondTransitionedSlide.classList.add("content-transition-active")
thirdTransitionedSlide.classList.add("content-transition-active")

square1Safety.addEventListener("click", function () {
  counter = 1
  square1Safety.classList.add("active-slide")
  square2Safety.classList.remove("active-slide")
  square3Safety.classList.remove("active-slide")
  if (translate.innerText === "عربي") {
    firstTransitionedSlide.style.transform = "translateX(0%)scale(1)"
    secondTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
    thirdTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
    firstTransitionedSlide.style.opacity = "1"
    secondTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.opacity = "0"
    arrow2.classList.add("fa-arrow-circle-right-active")
    arrow1.classList.remove("fa-arrow-circle-left-active")
  } else {
    arrow2.classList.remove("fa-arrow-circle-right-active")
    arrow1.classList.add("fa-arrow-circle-left-active")
    firstTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
    secondTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
    thirdTransitionedSlide.style.transform = "translateX(-200%)scale(1)"
    firstTransitionedSlide.style.opacity = "0"
    secondTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.opacity = "1"
  }
})
square2Safety.addEventListener("click", function () {
  counter = 2
  square1Safety.classList.remove("active-slide")
  square2Safety.classList.add("active-slide")
  square3Safety.classList.remove("active-slide")

  arrow2.classList.add("fa-arrow-circle-right-active")
  arrow1.classList.add("fa-arrow-circle-left-active")
  if (translate.innerText === "عربي") {
    arrow2.classList.add("fa-arrow-circle-right-active")
    arrow1.classList.add("fa-arrow-circle-left-active")
    firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
    secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
    thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
    firstTransitionedSlide.style.opacity = "0"
    secondTransitionedSlide.style.opacity = "1"
    thirdTransitionedSlide.style.opacity = "0"
  } else {
    // contentCont.style.justifyContent = "center";
    firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
    secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
    secondTransitionedSlide.style.opacity = "1"
    firstTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
    square3Safety.classList.remove("active-slide")
    square2Safety.classList.add("active-slide")
    square1Safety.classList.remove("active-slide")
    //
    arrow1.classList.add("fa-arrow-circle-left-active")
    arrow2.classList.add("fa-arrow-circle-right-active")
  }
})
square3Safety.addEventListener("click", function () {
  square1Safety.classList.remove("active-slide")
  square2Safety.classList.remove("active-slide")
  square3Safety.classList.add("active-slide")

  if (translate.innerText === "عربي") {
    counter = 3
    arrow2.classList.add("fa-arrow-circle-right-active")
    arrow1.classList.add("fa-arrow-circle-left-active")
    firstTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
    secondTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
    thirdTransitionedSlide.style.transform = "translateX(-200%)scale(1)"
    firstTransitionedSlide.style.opacity = "0"
    secondTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.opacity = "1"
    arrow2.classList.remove("fa-arrow-circle-right-active")
    arrow1.classList.add("fa-arrow-circle-left-active")
  } else {
    counter = 3
    // contentCont.style.justifyContent = "end";
    firstTransitionedSlide.style.transform = "translateX(0%)scale(1)"
    secondTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
    secondTransitionedSlide.style.opacity = "0"
    firstTransitionedSlide.style.opacity = "1"
    thirdTransitionedSlide.style.opacity = "0"
    thirdTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
    square3Safety.classList.add("active-slide")
    square2Safety.classList.remove("active-slide")
    square1Safety.classList.remove("active-slide")
    //
    arrow1.classList.add("fa-arrow-circle-left-active")
    arrow2.classList.remove("fa-arrow-circle-right-active")
  }
})
