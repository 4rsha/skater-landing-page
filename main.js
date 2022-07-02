// طراحی و کدنویسی توسط: شهریار صدری
// Designed and Coded by: Shahriyar Sadri
// Website: shahriyars.com
// Instagram: shahreeyaar
// email: shahriyarsadrii@gmail.com / mail@shahriyar.com
// github: 4rsha

// لطفا از بازنشر این پروژه در اینستاگرام، گیت و سایر پلتفرم ها به اسم خود، خود داری نمایید!
// سپاس

// dear user, this template is completely free to use. but please do not Redistribute it without credits on your instagram, github or any other platforms.
// Thank You

const switchMode = document.querySelector(".switch-mode");
const skaterImage = document.querySelector(".skater-img");
const skaterImage2 = document.querySelector(".skater-img-2");
const featureIcons = document.querySelectorAll(".feature-icon");
const skateFeatures = document.querySelectorAll(".skate-feature");
const orderText = document.querySelector(".order").children;

switchMode.onclick = function changeBackground() {
  switchMode.classList.toggle("active");
  skaterImage.classList.toggle("hidden");
  skaterImage2.classList.toggle("show");
  for (let i = 0; i < featureIcons.length; i++) {
    featureIcons[i].classList.toggle("mode-changed");
    skateFeatures[i].classList.toggle("mode-animate")
  }
  orderText[0].classList.toggle("order-mode-changed");
  
  if(switchMode.classList.contains("active")) {
    document.body.style.background = "#f5f5fd";
    document.querySelector(".skate-color").innerHTML = "سبز";  
    document.querySelector(".skate-weight").innerHTML = "6 کیلوگرم";  
    document.querySelector(".skate-dimensions").innerHTML = "30.21 × 7.98";  
  } else {
    document.body.style.background = "#fffcf7";
    document.querySelector(".skate-color").innerHTML = "بنفش"
    document.querySelector(".skate-weight").innerHTML = "7 کیلوگرم"
    document.querySelector(".skate-dimensions").innerHTML = "31.87 × 8.25"
  }
}