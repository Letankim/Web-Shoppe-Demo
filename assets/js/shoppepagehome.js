// show more

// flash sale
var flash = document.querySelector('.home__flash-sale-wrap');
var nextFlash = document.querySelector('.next-btn-flash-icon');
var prevFlash = document.querySelector('.prev-btn-flash-icon');
// category brand
var translates = document.querySelector('.home__category-wrap');
var next = document.querySelector('.next-btn-icon');
var prev = document.querySelector('.prev-btn-icon');
next.onclick = function() {
    translates.classList.add('active');
}
prev.onclick = function() {
    translates.classList.remove('active');
}
// mall
var controlMall = document.querySelector('.mall__container-wper');
var nextMall = document.querySelector('.next-mall-btn');
var preMall = document.querySelector('.pre-mall-btn');
nextMall.onclick = function() {
    controlMall.classList.add('home__shoppe-mall-main-content-active');
    nextMall.classList.remove('next-mall-active');
    preMall.classList.add('pre-mall-active');
}
preMall.onclick = function() {
    controlMall.classList.remove('home__shoppe-mall-main-content-active');
    nextMall.classList.add('next-mall-active');
    preMall.classList.remove('pre-mall-active');
}
// slide
var slideShow = document.querySelectorAll('.slider-container-item');
var slideShowContainer = document.querySelector('.slider-container');
var slideShowlenght = slideShow.length;
var index = 0;
slideShow.forEach(function(image, index) {
  image.style.left = index*100 + '%';
});
function slideAuto() {
    index++;
    if(index >= slideShowlenght) {
        index = 0;
    }
    // slideClick();
    slideShowContainer.style.left = "-" + index*100 + "%";
    // [...dots].forEach(rm => rm.classList.remove('slideActive'));
    // dots[index].classList.add('slideActive');
}
setInterval(slideAuto, 5000);
// ---------------------------mall
var mallShow = document.querySelectorAll('.home__shoppe-mall-main-show-item');
var mallShowContainer = document.querySelector('.home__shoppe-mall-main-show');
var mallShowlenght = mallShow.length;
var index1 = 0;
slideShow.forEach(function(image1, index1) {
  image1.style.left = index1*100 + '%';
});
function slideAuto1() {
    index1++;
    if(index1 >= mallShowlenght) {
        index1 = 0;
    }
    // slideClick();
    mallShowContainer.style.left = "-" + index1*100 + "%";
    // [...dots].forEach(rm => rm.classList.remove('slideActive'));
    // dots[index].classList.add('slideActive');
}
setInterval(slideAuto1, 5000);
// messager
var message = document.querySelector('.messager');
var messageIcon = document.querySelector('.messager-icon');
messageIcon.onclick = function() {
    message.classList.remove('messager-active');
}
setInterval(function() {
    message.classList.add('messager-active');
}, 30000);
// login
// thêm vào trang item