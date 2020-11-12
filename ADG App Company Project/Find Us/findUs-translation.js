//!Translation
//
//?Local Storage
let changableLang = localStorage.getItem("lang")
document.addEventListener("DOMContentLoaded", function () {
  if (changableLang === "عربي") {
    ul.classList.add("about-ul-ar-pad")
    ul.classList.remove("about-ul-en-pad")
    svgContA.style.width = "44%"
    svgContA.style.height = "100%"
    developed.innerText = "تصميم و تطوير: ياسين الديب"
    contact.innerText = "للتواصل: 01015157471"
    developed.style.order = "2"
    developed.style.display = "flex"
    developed.style.justifyContent = "flex-end"
    contact.style.display = "unset"
    contact.style.justifyContent = "unset"
    contact.style.order = "1"

    //!
    liS.forEach(function (li) {
      li.classList.add("right-li")
    })
    ul.classList.add("right-after-li")
    //!
    locationTxt.style.alignItems = "flex-end"
    locationTxt1.innerText = "موقعنا"
    locationTxt1.style.margin = "unset"
    locationTxt1.style.marginBottom = "2.5rem"
    locationTxt2.innerHTML =
      "Fiction Apps هذا هو موقع شركة <br />   ADG المطورة لتطبيق"
    locationTxt2.style.textAlign = "end"
    locationTxt.style.display = "flex"
    locationTxt.style.flexDirection = "column"
    locationTxt.style.alignItems = "flex-end"
    locationTxt.style.order = "2"
    downloadBTN.innerText = "التنزيلات"
    ul.style.flex = "99 1 40rem"
    liS[0].innerText = "قواعد السلامة"
    liS[1].innerText = "أين تجدنا؟"
    liS[2].innerText = "تواصل معنا"
    document.querySelector("html").style.fontSize = "71%"

    lang = "عربي"
    changableLang = "عربي"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.add("globalFont-Arabic")
    a.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    li.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h1.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h2.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h3.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    ul.style.flexDirection = "row-reverse"
    Logo.style.order = 2
    Logo.style.display = "flex"
    Logo.style.justifyContent = "flex-end"
    translate.innerText = "EN"
    svgContImg.classList.add("Logo-Translation")
  } else if (changableLang === "EN") {
    ul.classList.add("about-ul-en-pad")
    ul.classList.remove("about-ul-ar-pad")
    svgContA.style.width = "34%"
    svgContA.style.height = "84%"
    developed.innerText = "Designed & Developed by: Yassin Eldeeb"
    contact.innerText = "Contact: 01015157471"
    developed.style.order = "1"
    developed.style.display = "unset"
    developed.style.justifyContent = "unset"
    contact.style.display = "flex"
    contact.style.justifyContent = "flex-end"
    contact.style.order = "2"

    //!
    liS.forEach(function (li) {
      li.classList.remove("right-li")
    })
    ul.classList.remove("right-after-li")
    //!
    locationTxt.style.alignItems = "unset"
    locationTxt1.style.margin = "4rem 0"

    svgContImg.classList.remove("Logo-Translation")

    locationTxt2.style.textAlign = "unset"

    locationTxt1.innerText = "Our Location"
    locationTxt2.innerHTML = `This is where the company that <br /> developed ADG App locates.`
    locationTxt.style.display = "unset"
    locationTxt.style.flexDirection = "unset"
    locationTxt.style.alignItems = "unset"
    locationTxt.style.order = "unset"

    downloadBTN.innerText = "Downloads"
    ul.style.flex = "4 1 40rem"
    liS[0].innerText = "Safety Rules"
    liS[1].innerText = "Find Us"
    liS[2].innerText = "Contact"

    document.querySelector("html").style.fontSize = "71%"

    document.querySelector("html").style.fontSize = "62.5%"

    lang = "EN"
    changableLang = "EN"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.remove("globalFont-Arabic")
    a.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    li.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h1.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h2.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h3.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    document.body.style.fontFamily = "unset"
    ul.style.flexDirection = "unset"
    Logo.style.order = "unset"
    Logo.style.display = "flex"
    Logo.style.justifyContent = "unset"
    translate.innerText = "عربي"
    liBtn.innerText = "Downloads"
  }
})

//
const translate = document.querySelector(".translate")
const liS = document.querySelectorAll(".about-ul a li")
const liBtn = document.querySelector(".about-ul a button")
const heroTitle = document.querySelector(".hero-title")
const subHero = document.querySelector(".hero-sub")
const Logo = document.querySelector(".svgCont")
const heroTxt = document.querySelector(".hero-text")
const ul = document.querySelector(".about-ul")
const a = document.querySelectorAll("a")
const li = document.querySelectorAll("li")
const h1 = document.querySelectorAll("h1")
const h2 = document.querySelectorAll("h2")
const h3 = document.querySelectorAll("h3")
const downloadBTN = document.querySelector(".bubbly-button")
const svgContImg = document.querySelector(".svgCont a svg")
const svgContA = document.querySelector(".svgCont a")
const locationTxt = document.querySelector(".location-text")
const locationTxt1 = document.querySelector(".location-text h1")
const locationTxt2 = document.querySelector(".location-text h3")
const developed = document.querySelector(".developer")
const contact = document.querySelector(".contact-developer")

translate.addEventListener("click", function () {
  if (translate.innerText === "عربي") {
    ul.classList.add("about-ul-ar-pad")
    ul.classList.remove("about-ul-en-pad")
    svgContA.style.width = "44%"
    svgContA.style.height = "100%"
    developed.innerText = "تصميم و تطوير: ياسين الديب"
    contact.innerText = "للتواصل: 01015157471"
    developed.style.order = "2"
    developed.style.display = "flex"
    developed.style.justifyContent = "flex-end"
    contact.style.display = "unset"
    contact.style.justifyContent = "unset"
    contact.style.order = "1"

    //!
    liS.forEach(function (li) {
      li.classList.add("right-li")
    })
    ul.classList.add("right-after-li")
    //!
    locationTxt1.style.margin = "unset"
    locationTxt1.style.marginBottom = "2.5rem"
    svgContImg.classList.add("Logo-Translation")
    locationTxt.style.alignItems = "flex-end"

    locationTxt2.style.textAlign = "end"

    locationTxt1.innerText = "موقعنا"
    locationTxt2.innerHTML =
      "Fiction Apps هذا هو موقع شركة <br />   ADG المطورة لتطبيق"
    locationTxt.style.order = "2"
    locationTxt.style.display = "flex"
    locationTxt.style.flexDirection = "column"
    locationTxt.style.alignItems = "flex-end"

    downloadBTN.innerText = "التنزيلات"
    ul.style.flex = "99 1 40rem"
    liS[0].innerText = "قواعد السلامة"
    liS[1].innerText = "أين تجدنا؟"
    liS[2].innerText = "تواصل معنا"
    document.querySelector("html").style.fontSize = "71%"

    lang = "عربي"
    changableLang = "عربي"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.add("globalFont-Arabic")
    a.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    li.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h1.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h2.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    h3.forEach(function (e) {
      e.classList.add("globalFont-Arabic")
    })
    ul.style.flexDirection = "row-reverse"
    Logo.style.order = 2
    Logo.style.display = "flex"
    Logo.style.justifyContent = "flex-end"
    translate.innerText = "EN"
  } else if (translate.innerText === "EN") {
    ul.classList.add("about-ul-en-pad")
    ul.classList.remove("about-ul-ar-pad")
    svgContA.style.width = "34%"
    svgContA.style.height = "84%"
    developed.innerText = "Designed & Developed by: Yassin Eldeeb"
    contact.innerText = "Contact: 01015157471"
    developed.style.order = "1"
    developed.style.display = "unset"
    developed.style.justifyContent = "unset"
    contact.style.display = "flex"
    contact.style.justifyContent = "flex-end"
    contact.style.order = "2"

    //!
    liS.forEach(function (li) {
      li.classList.remove("right-li")
    })
    ul.classList.remove("right-after-li")
    //!
    locationTxt1.style.margin = "4rem 0rem"
    locationTxt.style.alignItems = "flex-end"
    svgContImg.classList.remove("Logo-Translation")
    locationTxt2.style.textAlign = "unset"
    locationTxt1.innerText = "Our Location"
    locationTxt2.innerHTML = `This is where the company that <br /> developed ADG App locates.`
    locationTxt.style.display = "unset"
    locationTxt.style.flexDirection = "unset"
    locationTxt.style.alignItems = "unset"

    locationTxt.style.order = "unset"

    downloadBTN.innerText = "Downloads"
    ul.style.flex = "4 1 40rem"
    liS[0].innerText = "Safety Rules"
    liS[1].innerText = "Find Us"
    liS[2].innerText = "Contact"

    document.querySelector("html").style.fontSize = "71%"

    document.querySelector("html").style.fontSize = "62.5%"

    lang = "EN"
    changableLang = "EN"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.remove("globalFont-Arabic")
    a.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    li.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h1.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h2.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    h3.forEach(function (e) {
      e.classList.remove("globalFont-Arabic")
    })
    document.body.style.fontFamily = "unset"
    ul.style.flexDirection = "unset"
    Logo.style.order = "unset"
    Logo.style.display = "flex"
    Logo.style.justifyContent = "unset"
    translate.innerText = "عربي"
  }
})
//?Local Storage
//?END
//!Fixing a mobile arabic version Issue
