//outlines
// add event listner revesion
// add vs replace : test , test2 example
// light mode vs dark mode , replace vs toggle
// classlist : add , remove , toggle , replace
// dark mode and light mode
// change image on click
// getAttribute , setAttribute => change images on click
// change the image on change from image gallery
// change

// event listenet , event handler
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// add vs replace
// var makeCh = document.getElementById("makeChanges");
// var test = document.getElementById("test");

// makeCh.addEventListener("click", function () {
//   test.classList.add("test2");
// });

// makeCh.addEventListener("click", function () {
//   test.classList.replace("test", "test2");
// });

// replace vs toggle

// var darkModeBtn = document.getElementById("darkModeBtn");
// var darkContainer = document.getElementById("dark");
// darkModeBtn.addEventListener("click", function () {
//   darkContainer.classList.replace("lightMode", "darkMode");
// });

// var darkModeBtn = document.getElementById("darkModeBtn");
// var darkContainer = document.getElementById("dark");
// darkModeBtn.addEventListener("click", function () {
//   darkContainer.classList.toggle("darkMode");
// });

// change image
// var dogImg = document.getElementById("dogImg");
// dogImg.addEventListener("click", function (e) {
//   var x = e.target.src;
//   console.log(x);
//   console.log(dogImg.getAttribute("src"));
//   dogImg.setAttribute("src", "./media/cat.jpg");
// });

// change img from image gallery
// var mainImg = document.getElementById("mainImg");
// var imgGallery = document.querySelectorAll(".imgGallery img");

// console.log(imgGallery);

// for (var i = 0; i < imgGallery.length; i++) {
//   imgGallery[i].addEventListener("click", function (e) {
//     var imgSrc = e.target.src;
//     mainImg.setAttribute("src", imgSrc);
//   });
// }

// select image from cards

// var imgs = document.getElementsByClassName("card-img-top");
// var lightBoxContainer = document.getElementById("lightBoxContainer");
// var lightBoxItem = document.getElementById("lightBoxItem");

// for (var i = 0; i < imgs.length; i++) {
//   imgs[i].addEventListener("click", function (e) {
//     lightBoxContainer.style.display = "flex";
//     var imgSrc = e.target.src;
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
//   });
// }

// var close = document.getElementById("close");

// close.addEventListener("click", closeSlider);

// function closeSlider() {
//   lightBoxContainer.style.display = "none";
// }

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// var makeChanges = document.getElementById("makeChanges");
// var test = document.getElementById("test");
// makeChanges.addEventListener("click", function () {
//   test.classList.replace("test", "test2");
// });

// var btnToggle = document.getElementById("btnToggle");
// var toggleContainer = document.getElementById("toggleContainer");

// btnToggle.addEventListener("click", function () {
//   toggleContainer.classList.toggle("darkMode");
// });

// var imgChange = document.getElementById("imgChange");

// imgChange.addEventListener("click", function (e) {
//   // console.log(e.target);
//   // console.log(e.target.src);
//   // console.log(imgChange.getAttribute("src"));
//   imgChange.setAttribute("src", "./media/dog2.jpg");
// });

// var mainImg = document.getElementById("mainImg");

// var imgGallery = document.querySelectorAll(".imgGallery img");

// console.log(imgGallery);

// for (var i = 0; i < imgGallery.length; i++) {
//   imgGallery[i].addEventListener("click", function (e) {
//     var imgSrc = e.target.src;
//     mainImg.setAttribute("src", imgSrc);
//   });
// }

var sliderImgs = document.getElementsByClassName("card-img-top");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");

for (var i = 0; i < sliderImgs.length; i++) {
  sliderImgs[i].addEventListener("click", function (e) {
    lightBoxContainer.style.display = "flex";
    var imgSrc = e.target.src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

var close = document.getElementById("close");

close.addEventListener("click", function () {
  lightBoxContainer.style.display = "none";
});
