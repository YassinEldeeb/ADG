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
    svgContImg.classList.add("Logo-Translation")

    formBtn.style.padding = "0.6vw calc(2rem + 1vw)"
    formBtn.innerText = "إرسال"
    formBtn.classList.add("globalFont-Arabic")
    contactLabel1.style.fontWeight = "400"
    contactLabel2.style.fontWeight = "400"
    contactH1.innerText = "تواصل معنا"
    contactLabel1.innerText = ": الأسم"
    contactLabel2.innerText = ": البريد الألكتروني"
    contactLabel1.classList.add("globalFont-Arabic")
    contactLabel2.classList.add("globalFont-Arabic")

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
    svgContImg.classList.remove("Logo-Translation")

    formBtn.style.padding = "1vw calc(2rem + 1vw)"

    formBtn.classList.remove("globalFont-Arabic")
    formBtn.innerText = "Submit"
    contactLabel1.style.fontWeight = "bold"
    contactLabel2.style.fontWeight = "bold"
    contactH1.innerText = "Contact Us"
    contactLabel1.innerText = "Name:"
    contactLabel2.innerText = "Email:"
    contactLabel1.classList.remove("globalFont-Arabic")
    contactLabel2.classList.remove("globalFont-Arabic")
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
//
const contactH1 = document.querySelector(".contact form h1")
const contactLabel1 = document.querySelector(".name-cont label")
const contactLabel2 = document.querySelector(".email-cont label")
const formBtn = document.querySelector("form button")
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
    svgContImg.classList.add("Logo-Translation")

    formBtn.style.padding = "0.6vw calc(2rem + 1vw)"

    formBtn.classList.add("globalFont-Arabic")
    formBtn.innerText = "إرسال"
    contactH1.innerText = "تواصل معنا"
    contactLabel1.innerText = ": الأسم"
    contactLabel2.innerText = ": البريد الألكتروني"
    contactLabel1.classList.toggle("globalFont-Arabic")
    contactLabel2.classList.toggle("globalFont-Arabic")
    contactLabel1.style.fontWeight = "400"
    contactLabel2.style.fontWeight = "400"
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
    svgContImg.classList.remove("Logo-Translation")
    formBtn.style.padding = "1vw calc(2rem + 1vw)"
    formBtn.classList.remove("globalFont-Arabic")
    formBtn.innerText = "Submit"
    contactLabel1.style.fontWeight = "bold"
    contactLabel2.style.fontWeight = "bold"
    contactH1.innerText = "Contact Us"
    contactLabel1.innerText = "Name:"
    contactLabel2.innerText = "Email:"
    contactLabel1.classList.remove("globalFont-Arabic")
    contactLabel2.classList.remove("globalFont-Arabic")
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
