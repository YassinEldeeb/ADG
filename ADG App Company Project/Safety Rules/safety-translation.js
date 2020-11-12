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
    contentCont1.style.transform = "translateX(-200%)"
    contentCont2.style.transform = "translateX(-200%)"
    contentCont3.style.transform = "translateX(-200%)"
    developed.innerText = "تصميم و تطوير: ياسين الديب"
    contact.innerText = "للتواصل: 01015157471"
    developed.style.order = "2"
    developed.style.display = "flex"
    developed.style.justifyContent = "flex-end"
    contact.style.display = "unset"
    contact.style.justifyContent = "unset"
    contact.style.order = "1"
    arrow1.classList.add("fa-arrow-circle-left-active")
    arrow2.classList.remove("fa-arrow-circle-right-active")
    barOfRect.style.flexDirection = "row-reverse"
    btmBar.style.justifyContent = "flex-start"
    h1BigSafety[2].innerText = "كيف يمكنني إتمام عملية البيع بأمان؟"
    h1BigSafety.forEach((e) => {
      e.style.fontSize = "calc(2.2rem + 1vw)"
    })
    liBigSafety.forEach((e) => {
      e.style.padding = "calc(1vw - 0.3rem ) 0"
    })
    liBigSafety[0].innerText =
      " أعلم المشتري بأي عيوب في السلعة، وذلك تجنباً لأن يتهمك بالخداع"
    liBigSafety[1].innerText =
      " في حال استمرّ المشتري في تغيير مكان اللقاء أو يُهاتفك من رقم مختلف في كلّ مرة، تجنّب التعامل معه "
    liBigSafety[2].innerText =
      " إتّفق مع المشتري على استخدام وسائل الدفع المألوفة والسهلة، ونحن نُفضّل الدفع نقداً"
    liBigSafety.forEach((e) => {
      e.style.listStyle = "none"
      e.style.textAlign = "end"
    })

    //
    h1BigSafety[1].innerText = "كيف يمكنني إتمام عملية الشراء بأمان؟"
    h1BigSafety[1].style.fontSize = "calc(2.2rem + 1vw)"
    liBigSafety[3].innerText =
      " إحرص على لقاء البائع في مناطق آمنة على غرار محطة المترو أو مراكز التسوق أو أي مكان عام"
    liBigSafety[4].innerText =
      " تفقّد السلعة قبل إتمام الصفقة، إذ تتمكن بهذه الطريقة من تجنب الغش والاحتيال. ينطبق هذا أيضاً على استئجار الوحدات السكنية"
    liBigSafety[5].innerText =
      " لا تقع في فخ الأسعار الأدنى مما هي في العادة. قارن الأسعار المعروضة مع الأسعار الموجودة في السوق"

    //
    h1BigSafety[0].innerText = "كيف يمكنني الحفاظ على أمان حسابي؟"
    h1BigSafety[2].style.fontSize = "calc(2.2rem + 1vw)"
    liBigSafety[6].innerText =
      " إختر كلمة سرّ صعبة، تتألّف من 6 حروف وأرقام وعلامات ترقيم على الأقلّ"
    liBigSafety[7].innerText =
      "إذا لاحظت أنّ أحداً يعرف كلمة السر الخاصة بك، سارع إلى تغييرها"
    liBigSafety[8].innerText =
      "لا تُشارك معلومات تسجيل الدخول إلى حسابك مع أحد."

    //!
    liS.forEach(function (li) {
      li.classList.add("right-li")
    })
    ul.classList.add("right-after-li")
    //!
    document.querySelector("html").style.fontSize = "71%"
    downloadBTN.innerText = "التنزيلات"
    ul.style.flex = "99 1 40rem"
    liS[0].innerText = "قواعد السلامة"
    liS[1].innerText = "أين تجدنا؟"
    liS[2].innerText = "تواصل معنا"

    lang = "عربي"
    changableLang = "عربي"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.add("globalFont-Arabic")
    svgContImg.classList.add("Logo-Translation")
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

    arrow1.classList.remove("fa-arrow-circle-left-active")
    arrow2.classList.add("fa-arrow-circle-right-active")
    liBigSafety.forEach((e) => {
      e.style.padding = "calc(0.3rem + 1vw) 0"
    })
    barOfRect.style.flexDirection = "unset"
    btmBar.style.justifyContent = "flex-end"
    h1BigSafety[0].innerText = "How to sell safely?"
    h1BigSafety.forEach((e) => {
      e.style.fontSize = "calc(2.8rem + 1vw)"
    })
    liBigSafety[0].innerText =
      "Make sure to inform the buyer of any defects in the item you are selling."
    liBigSafety[1].innerText =
      "Don’t deal with buyers who keep on constantly changing the meeting place or calling from different mobile numbers."
    liBigSafety[2].innerText =
      "Use only simple payment methods that you trust and are familiar with, especially cash payments."
    liBigSafety.forEach((e) => {
      e.style.listStyle = "unset"
      e.style.textAlign = "unset"
    })
    //
    h1BigSafety[1].innerText = "How to buy safely?"
    h1BigSafety[1].style.fontSize = "calc(2.8rem + 1vw)"
    liBigSafety[3].innerText =
      "Always meet the seller at a safe location such as Metro stations, shopping malls or any famous meeting point."
    liBigSafety[4].innerText =
      "Don’t forget to inspect the item before purchasing. Following this one rule will help you avoid most scams. This also applies for house rentals."
    liBigSafety[5].innerText =
      "Avoid items that have suspiciously lower prices than what is offered in the market."
    //
    h1BigSafety[2].innerText = "How to secure your account?"
    h1BigSafety[2].style.fontSize = "calc(2.8rem + 1vw)"
    liBigSafety[6].innerText =
      "Never reveal your login and password of your account."
    liBigSafety[7].innerText =
      "Think of a difficult password, consisting of minimum 6 characters, including at least one digit."
    liBigSafety[8].innerText =
      "If you feel that someone knows your password - change it to a new one."
    //!
    liS.forEach(function (li) {
      li.classList.remove("right-li")
    })
    ul.classList.remove("right-after-li")
    //!
    downloadBTN.innerText = "Downloads"
    ul.style.flex = "4 1 40rem"
    liS[0].innerText = "Safety Rules"
    liS[1].innerText = "Find Us"
    liS[2].innerText = "Contact"
    lang = "EN"
    changableLang = "EN"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.remove("globalFont-Arabic")
    svgContImg.classList.remove("Logo-Translation")
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
    document.querySelector("html").style.fontSize = "62.5%"
  }
})

//
const translate = document.querySelector(".translate")
const liS = document.querySelectorAll(".about-ul a li")
const liBtn = document.querySelector(".about-ul a button")
// const heroTitle = document.querySelector(".hero-title");
// const subHero = document.querySelector(".hero-sub");
const Logo = document.querySelector(".svgCont")
// const heroTxt = document.querySelector(".hero-text");
const ul = document.querySelector(".about-ul")
const a = document.querySelectorAll("a")
const li = document.querySelectorAll("li")
const h1 = document.querySelectorAll("h1")
const h2 = document.querySelectorAll("h2")
const h3 = document.querySelectorAll("h3")
const downloadBTN = document.querySelector(".bubbly-button")
const svgContImg = document.querySelector(".svgCont a svg")
const svgContA = document.querySelector(".svgCont a")
const title = document.querySelector(".subHero-title")
const subtitle = document.querySelector(".subHero-sub")
const subHeroText = document.querySelector(".subHero-text")
const subHeroSVG = document.querySelector(".sub-hero-svg")
const h1BigSafety = document.querySelectorAll(".content-cont h1")
const liBigSafety = document.querySelectorAll(".safety-ul li")
const btmBar = document.querySelector(".arrrow-cont")
const barOfRect = document.querySelector(".squeres-cont")
const developed = document.querySelector(".developer")
const contact = document.querySelector(".contact-developer")
let contentCont1 = document.querySelector(".content-cont1")
let contentCont2 = document.querySelector(".content-cont2")
let contentCont3 = document.querySelector(".content-cont3")

translate.addEventListener("click", function () {
  if (translate.innerText === "عربي") {
    ul.classList.add("about-ul-ar-pad")
    ul.classList.remove("about-ul-en-pad")
    if (counter === 1) {
      arrow2.classList.remove("fa-arrow-circle-right-active")
      arrow1.classList.add("fa-arrow-circle-left-active")
      firstTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-200%)scale(0.6)"
      thirdTransitionedSlide.style.transform = "translateX(-200%)scale(1)"
      firstTransitionedSlide.style.opacity = "0"
      secondTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "1"
    } else if (counter === 2) {
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
    } else if (counter === 3) {
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
    }
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

    liBigSafety.forEach((e) => {
      e.style.padding = "calc(1vw - 0.2rem ) 0"
    })
    barOfRect.style.flexDirection = "row-reverse"
    btmBar.style.justifyContent = "flex-start"
    h1BigSafety[2].innerText = "كيف يمكنني إتمام عملية البيع بأمان؟"
    h1BigSafety.forEach((e) => {
      e.style.fontSize = "calc(2.2rem + 1vw)"
    })
    liBigSafety[0].innerText =
      " أعلم المشتري بأي عيوب في السلعة، وذلك تجنباً لأن يتهمك بالخداع"
    liBigSafety[1].innerText =
      " في حال استمرّ المشتري في تغيير مكان اللقاء أو يُهاتفك من رقم مختلف في كلّ مرة، تجنّب التعامل معه "
    liBigSafety[2].innerText =
      " إتّفق مع المشتري على استخدام وسائل الدفع المألوفة والسهلة، ونحن نُفضّل الدفع نقداً"
    liBigSafety.forEach((e) => {
      e.style.listStyle = "none"
      e.style.textAlign = "end"
    })

    //
    h1BigSafety[1].innerText = "كيف يمكنني إتمام عملية الشراء بأمان؟"
    h1BigSafety[1].style.fontSize = "calc(2.2rem + 1vw)"
    liBigSafety[3].innerText =
      " إحرص على لقاء البائع في مناطق آمنة على غرار محطة المترو أو مراكز التسوق أو أي مكان عام"
    liBigSafety[4].innerText =
      " تفقّد السلعة قبل إتمام الصفقة، إذ تتمكن بهذه الطريقة من تجنب الغش والاحتيال. ينطبق هذا أيضاً على استئجار الوحدات السكنية"
    liBigSafety[5].innerText =
      " لا تقع في فخ الأسعار الأدنى مما هي في العادة. قارن الأسعار المعروضة مع الأسعار الموجودة في السوق"

    //
    h1BigSafety[0].innerText = "كيف يمكنني الحفاظ على أمان حسابي؟"
    h1BigSafety[2].style.fontSize = "calc(2.2rem + 1vw)"
    liBigSafety[6].innerText =
      " إختر كلمة سرّ صعبة، تتألّف من 6 حروف وأرقام وعلامات ترقيم على الأقلّ"
    liBigSafety[7].innerText =
      "إذا لاحظت أنّ أحداً يعرف كلمة السر الخاصة بك، سارع إلى تغييرها"
    liBigSafety[8].innerText =
      "لا تُشارك معلومات تسجيل الدخول إلى حسابك مع أحد."

    //!
    liS.forEach(function (li) {
      li.classList.add("right-li")
    })
    ul.classList.add("right-after-li")
    //!
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
    svgContImg.classList.add("Logo-Translation")
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
    if (counter === 3) {
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
    } else if (counter === 2) {
      arrow2.classList.add("fa-arrow-circle-right-active")
      arrow1.classList.add("fa-arrow-circle-left-active")
      firstTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      secondTransitionedSlide.style.transform = "translateX(-100%)scale(1)"
      thirdTransitionedSlide.style.transform = "translateX(-100%)scale(0.6)"
      firstTransitionedSlide.style.opacity = "0"
      secondTransitionedSlide.style.opacity = "1"
      thirdTransitionedSlide.style.opacity = "0"
    } else if (counter === 1) {
      firstTransitionedSlide.style.transform = "translateX(0%)scale(1)"
      secondTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      thirdTransitionedSlide.style.transform = "translateX(0%)scale(0.6)"
      firstTransitionedSlide.style.opacity = "1"
      secondTransitionedSlide.style.opacity = "0"
      thirdTransitionedSlide.style.opacity = "0"
      arrow2.classList.add("fa-arrow-circle-right-active")
      arrow1.classList.remove("fa-arrow-circle-left-active")
    }
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

    arrow1.classList.remove("fa-arrow-circle-left-active")
    arrow2.classList.add("fa-arrow-circle-right-active")
    if (square2Safety.classList.contains("active-slide")) {
      counter = 2
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.add("fa-arrow-circle-right-active")
    }
    if (square3Safety.classList.contains("active-slide")) {
      counter = 3
      arrow1.classList.add("fa-arrow-circle-left-active")
      arrow2.classList.remove("fa-arrow-circle-right-active")
    }
    liBigSafety.forEach((e) => {
      e.style.padding = "calc(0.3rem + 1vw) 0"
    })
    barOfRect.style.flexDirection = "unset"
    btmBar.style.justifyContent = "flex-end"
    h1BigSafety[0].innerText = "How to sell safely?"
    h1BigSafety.forEach((e) => {
      e.style.fontSize = "calc(2.8rem + 1vw)"
    })
    liBigSafety[0].innerText =
      "Make sure to inform the buyer of any defects in the item you are selling."
    liBigSafety[1].innerText =
      "Don’t deal with buyers who keep on constantly changing the meeting place or calling from different mobile numbers."
    liBigSafety[2].innerText =
      "Use only simple payment methods that you trust and are familiar with, especially cash payments."
    liBigSafety.forEach((e) => {
      e.style.listStyle = "unset"
      e.style.textAlign = "unset"
    })
    //
    h1BigSafety[1].innerText = "How to buy safely?"
    h1BigSafety[1].style.fontSize = "calc(2.8rem + 1vw)"
    liBigSafety[3].innerText =
      "Always meet the seller at a safe location such as Metro stations, shopping malls or any famous meeting point."
    liBigSafety[4].innerText =
      "Don’t forget to inspect the item before purchasing. Following this one rule will help you avoid most scams. This also applies for house rentals."
    liBigSafety[5].innerText =
      "Avoid items that have suspiciously lower prices than what is offered in the market."
    //
    h1BigSafety[2].innerText = "How to secure your account?"
    h1BigSafety[2].style.fontSize = "calc(2.8rem + 1vw)"
    liBigSafety[6].innerText =
      "Never reveal your login and password of your account."
    liBigSafety[7].innerText =
      "Think of a difficult password, consisting of minimum 6 characters, including at least one digit."
    liBigSafety[8].innerText =
      "If you feel that someone knows your password - change it to a new one."
    //!

    //!
    liS.forEach(function (li) {
      li.classList.remove("right-li")
    })
    ul.classList.remove("right-after-li")
    //!
    downloadBTN.innerText = "Downloads"
    ul.style.flex = "4 1 40rem"
    liS[0].innerText = "Safety Rules"
    liS[1].innerText = "Find Us"
    liS[2].innerText = "Contact"
    document.querySelector("html").style.fontSize = "62.5%"
    lang = "EN"
    changableLang = "EN"
    localStorage.setItem("lang", changableLang)
    downloadBTN.classList.remove("globalFont-Arabic")
    svgContImg.classList.remove("Logo-Translation")
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
window.addEventListener("scroll", function () {
  let header = document.querySelector("header")
  if (header) {
    header.classList.toggle("active-scroll-header", window.scrollY > 0)
  }
})
if (window.scrollY > 0) {
  let header = document.querySelector("header")
  if (header) {
    header.classList.toggle("active-scroll-header")
  }
}

let btn = document.querySelector(".hero-nav-btn")
if (btn) {
  btn.classList.add("scrolling-nav-btn")
}

window.addEventListener("scroll", function () {})
