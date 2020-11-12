//Fancy-Btn
var animateButton = function (e) {
  e.preventDefault
  //reset animation
  e.target.classList.remove("animate")

  e.target.classList.add("animate")
  setTimeout(function () {
    e.target.classList.remove("animate")
  }, 700)
}

var bubblyButtons = document.getElementsByClassName("bubbly-button")

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false)
}
//!
//?Burger-Menu
const burger = document.querySelector(".burger")
const sliderUL = document.querySelector(".about-ul")
const linkBtn = sliderUL.querySelector(".bubbly-button")
const links = sliderUL.querySelectorAll("li")
burger.addEventListener("click", function () {
  sliderUL.classList.toggle("slider")
  document.body.classList.toggle("body-lockScroll")
})
//?Media Querie for repairing a bug----
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    sliderUL.classList.add("sliderUL-mobile")
    links.forEach(function (e) {
      e.classList.add("link-mobile")
    })
    linkBtn.classList.add("linkBtn-mobile")
  } else {
    sliderUL.classList.remove("sliderUL-mobile")
    links.forEach(function (e) {
      e.classList.remove("link-mobile")
    })
    linkBtn.classList.remove("linkBtn-mobile")
  }
}
var x = window.matchMedia("(max-width: 941px)")
myFunction(x)
x.addListener(myFunction)
//?Fixed Bug.

//?Btn & nav animation
let isClosed = false
$("document").ready(function () {
  var trigger = $("#hamburger")

  trigger.click(function () {
    const spanscontainer = document.querySelector(".burger-container")
    const spans = spanscontainer.querySelectorAll("span")
    const ringSVG = document.querySelector(".svg-ring path")
    spanscontainer.classList.toggle("open-path")
    ringSVG.classList.toggle("path-open")
    spans.forEach(function (e) {
      e.classList.toggle("openspan")
    })
    //
    burgerTime()
  })

  function burgerTime() {
    if (isClosed == false) {
      trigger.removeClass("is-closed")
      trigger.addClass("is-open")
      isClosed = true
    } else {
      trigger.removeClass("is-open")
      trigger.addClass("is-closed")
      isClosed = false
    }
  }
})
//?Ooops it's Done Too XD---
if (sliderUL.classList.contains("sliderUL-mobile")) {
  //!Fixing an issue
  linkBtn.addEventListener("click", function () {
    sliderUL.classList.toggle("slider")
    document.body.classList.toggle("body-lockScroll")

    //!
    $("document").ready(function () {
      var trigger = $("#hamburger")

      const spanscontainer = document.querySelector(".burger-container")
      const spans = spanscontainer.querySelectorAll("span")
      const ringSVG = document.querySelector(".svg-ring path")
      spanscontainer.classList.toggle("open-path")
      ringSVG.classList.toggle("path-open")
      spans.forEach(function (e) {
        e.classList.toggle("openspan")
      })
      //
      burgerTime()

      function burgerTime() {
        if (isClosed == false) {
          trigger.removeClass("is-closed")
          trigger.addClass("is-open")
          isClosed = true
        } else {
          trigger.removeClass("is-open")
          trigger.addClass("is-closed")
          isClosed = false
        }
      }
    })
    //!
  })
  links.forEach(function (e) {
    e.addEventListener("click", function () {
      sliderUL.classList.toggle("slider")
      document.body.classList.toggle("body-lockScroll")
      //!
      $("document").ready(function () {
        var trigger = $("#hamburger")

        const spanscontainer = document.querySelector(".burger-container")
        const spans = spanscontainer.querySelectorAll("span")
        const ringSVG = document.querySelector(".svg-ring path")
        spanscontainer.classList.toggle("open-path")
        ringSVG.classList.toggle("path-open")
        spans.forEach(function (e) {
          e.classList.toggle("openspan")
        })
        //
        burgerTime()

        function burgerTime() {
          if (isClosed == false) {
            trigger.removeClass("is-closed")
            trigger.addClass("is-open")
            isClosed = true
          } else {
            trigger.removeClass("is-open")
            trigger.addClass("is-closed")
            isClosed = false
          }
        }
      })
      //!
    })
  })

  //!
}
//!Yeah Done----
//?Mouse over drop Box
const dropLinks = document.querySelectorAll(".drop a")
const drop = document.querySelector(".drop")
dropLinks.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    drop.classList.add("drop-hovering-delay")
    window.setTimeout(function () {
      drop.classList.remove("drop-hovering-delay")
    }, 1000)
  })
})
//?Done---
//Local Storage
if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "EN")
}
//!Mobile Browsers 100vh solution
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`)
//
//?PreLoader
const circle = document.querySelector(".circle")
const downloadBtn = document.querySelectorAll(".downloads-icons div")

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == "interactive") {
    document.body.classList.add("activePreloader")
    document.querySelector("#Loader-Simulator").style.animation =
      "rotationSimulation 1.5s infinite ease-in-out"
    const mob = document.querySelector("#loader-mob")
    mob.style.transform = "scale(1)"
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive")
      document
        .getElementById("preloader")
        .classList.add("loader-transition-ending")

      setTimeout(() => {
        document.body.classList.remove("activePreloader")
        document.querySelector("#Loader-Simulator").style.animation = "unset"
      }, 600)
      changableLang = localStorage.getItem("lang")
      Bigcircle = document.querySelector(".circle")
      if (Bigcircle) {
        const android = document.querySelector("#reveal-android")
        const iphone = document.querySelector("#reveal-iphone")
        const box123 = document.querySelector("#reveal-android-box")
        const downloadIphone = document.querySelector("#downloadIOSBtn")
        const downloadAndroid = document.querySelector("#downloadAndroidBtn")
        downloadIphone.style.pointerEvents = "none"
        downloadAndroid.style.pointerEvents = "none"
        setTimeout(() => {
          downloadIphone.style.pointerEvents = "all"
          downloadAndroid.style.pointerEvents = "all"
        }, 2000)
        box123.style.transition = "0.5s ease-in-out 1.5s"
        box123.style.pointerEvents = "none"
        box123.style.opacity = 0
        android.style.transition = "0.5s ease-in-out 1.5s"
        iphone.style.transition = "0.5s ease-in-out 1.5s"
        android.style.pointerEvents = "none"
        iphone.style.pointerEvents = "none"
        android.style.opacity = 0
        iphone.style.opacity = 0
        if (changableLang === "عربي") {
          Bigcircle.style.transformOrigin = "right"
          Bigcircle.style.transform = "scale(0) translate(-50%, -60%)"
          Bigcircle.style.animation =
            "animsadaldkaFake 1s ease-in-out forwards 0.2s"
          Bigcircle.style.right = "0"
          Bigcircle.style.left = "unset"
        } else {
          Bigcircle.style.transformOrigin = "left"
          Bigcircle.style.animation =
            "animsadaldka 1.2s ease-in-out forwards 0.2s"
          Bigcircle.style.transform = "scale(0) translate(50%, 60%)"
          Bigcircle.style.right = "unset"
          Bigcircle.style.left = "0px"
        }
      }
      downloadBtn.forEach((btn) => {
        btn.style.animation = "downloadBtns 0.5s ease-in-out forwards 0.9s"
      })
    }, 500)
  }
}
//!

//!
//!//!
//Footer

//
//
//
//
//
