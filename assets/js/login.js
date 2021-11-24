// login
var signUp = document.querySelector('.auth__form-sign-up');
var modal = document.querySelector('.modal');
var logIn = document.querySelector('.auth__form-login');
var clicksignUp = document.querySelector('.header__navbar-item-sign-up');
var clicklogin = document.querySelector('.header__navbar-item-login');
var overplay = document.querySelector('.modal__overplay');
var backSignUp = document.querySelector('.form_controls-control-back');
var backLogin = document.querySelector('.back-login');
var star = document.querySelectorAll('.home-product-item-star-empty');
var liked = document.querySelectorAll('.home-product-item-like');
var sinUpMobile = document.querySelector('.menu-item-sign-up');
var loginMobile = document.querySelector('.menu-item-login');
var menuonmobile = document.querySelector('.menu-item-sign-up');
var menuonmobilelogin = document.querySelector('.menu-item-login');
var hello = document.querySelector('.hello-you');
var singupapp = document.querySelector('.sign-up-app');
var signout = document.querySelector('.sign-out-1');
            // singupapp.onclick = function() {
            //     alert('Xin lỗi. Chưa có chức năng đăng kí');
            //     logIn.classList.remove('auth__form-login-active');
            //     signUp.classList.remove('auth__form-sign-up-active');
            //     modal.classList.remove('modal-active');
            //     overplay.classList.remove('overplay-active');
            // }
clicklogin.onclick = function() {
logIn.classList.add('auth__form-login-active');
overplay.classList.add('overplay-active');
modal.classList.add('modal-active');
};
loginMobile.onclick = function() {
logIn.classList.add('auth__form-login-active');
overplay.classList.add('overplay-active');
modal.classList.add('modal-active');
};
clicksignUp.onclick = function() {
signUp.classList.add('auth__form-sign-up-active');
overplay.classList.add('overplay-active');
modal.classList.add('modal-active');
};
sinUpMobile.onclick = function() {
signUp.classList.add('auth__form-sign-up-active');
overplay.classList.add('overplay-active');
modal.classList.add('modal-active');
};
backSignUp.onclick = function() {
logIn.classList.remove('auth__form-login-active');
signUp.classList.remove('auth__form-sign-up-active');
modal.classList.remove('modal-active');
overplay.classList.remove('overplay-active');
};
backLogin.onclick = function() {
logIn.classList.remove('auth__form-login-active');
signUp.classList.remove('auth__form-sign-up-active');
modal.classList.remove('modal-active');
overplay.classList.remove('overplay-active');
};
overplay.onclick = function() {
logIn.classList.remove('auth__form-login-active');
signUp.classList.remove('auth__form-sign-up-active');
modal.classList.remove('modal-active');
overplay.classList.remove('overplay-active');
};
[...liked].forEach(function(item) {
item.onclick = function() {
    this.classList.toggle('home-product-item-liked');
}
});
[...star].forEach(function(item, index) {
item.addEventListener('mousemove', function() {
    item.classList.toggle('home-product-item-star-gold');
    console.log(index);
});
});
document.querySelector('.warm-input-username').style.display = 'none';
document.querySelector('.warm-input-password').style.display = 'none';
function login() {
var user = document.querySelector('.header__navber-user');
var userMail = document.querySelector('.email');
var password = document.querySelector('.password');
var dk = sessionStorage.getItem("newdktk");
var ttkh = JSON.parse(dk);

userMail.onchange = function() {
document.querySelector('.warm-input-username').style.display = 'none';
}
password.onchange = function() {
document.querySelector('.warm-input-password').style.display = 'none';
}
if(userMail.value == '' || password.value == '') {
if(userMail.value == '') {
    document.querySelector('.warm-input-username').style.display = 'block';
    userMail.value = '';
    password.value = '';
} 
if(password.value == '') {
    document.querySelector('.warm-input-password').style.display = 'block';
    userMail.value = '';
    password.value = '';
} 
} else
if(userMail.value == ttkh[0][0] && password.value == ttkh[0][1] ) {
logIn.classList.remove('auth__form-login-active');
signUp.classList.remove('auth__form-sign-up-active');
modal.classList.remove('modal-active');
overplay.classList.remove('overplay-active');
user.classList.add('header__navber-user-active');
clicksignUp.classList.add('none-active');
clicklogin.classList.add('none-active');
menuonmobilelogin.classList.add('none-active');
menuonmobile.classList.add('none-active');
signout.classList.add('hello-active');
hello.classList.add('hello-active');
for(var i = 0; i< ttkh.length; i++) {
    userName = '';
    userName += '<span>'+'Xin chào'+' '+ttkh[i][0] +'</span> '
};
document.querySelector('.hello-you').innerHTML = userName;
document.querySelector('.user-laptop').innerHTML = userName;
alert('Đăng nhập thành công')
} else {
alert('sai rồi nhé');
userMail.value = '';
password.value = '';
}
signout.onclick = function() {
menuonmobilelogin.classList.remove('none-active');
menuonmobile.classList.remove('none-active');
hello.classList.remove('hello-active');
signout.classList.remove('hello-active');
alert('Đăng xuất thành công');
}
}
 //  đăng kí
var newdktk = new Array();
document.querySelector('.warn-dang-ki-pass').style.display = 'none';
document.querySelector('.warn-dang-ki-return-pass').style.display = 'none';
document.querySelector('.warn-dang-ki-name').style.display = 'none';
function signupuser() {
    var sinuppassword = document.querySelector('.sign-up-password');
    var sinupemail = document.querySelector('.sign-up-email');
    var returnpassword = document.querySelector('.return-fill-password');
    sinupemail.onchange = function() {
        document.querySelector('.warn-dang-ki-name').style.display = 'none';
    }
    sinuppassword.onchange = function() {
        document.querySelector('.warn-dang-ki-pass').style.display = 'none';
    }
    if(sinuppassword.value == '' || sinupemail.value == '' || returnpassword.value == '' || returnpassword.value !== sinuppassword.value ) {
         if(sinuppassword.value == '' ) {
            document.querySelector('.warn-dang-ki-pass').style.display = 'block';
            sinuppassword.value = '';
            sinupemail.value = '';
            returnpassword.value = '';
         } else
         if(sinupemail.value == '') {
            document.querySelector('.warn-dang-ki-name').style.display = 'block';
            sinuppassword.value = '';
            sinupemail.value = '';
            returnpassword.value = '';
         } else
         if(returnpassword.value !== sinuppassword.value) {
            document.querySelector('.warn-dang-ki-return-pass').style.display = 'block';
            sinuppassword.value = '';
            sinupemail.value = '';
            returnpassword.value = '';
         }
    } else {
        var dknew = sinuppassword.value;
        var dknewemail = sinupemail.value;
        sinuppassword.value = '';
        sinupemail.value = '';
        returnpassword.value = '';
        var tttk = new Array(dknewemail, dknew);
        newdktk.push(tttk);
        sessionStorage.setItem('newdktk', JSON.stringify(newdktk));
        alert('Đăng kí thành công. Vui lòng đăng nhập');
        logIn.classList.remove('auth__form-login-active');
        signUp.classList.remove('auth__form-sign-up-active');
        modal.classList.remove('modal-active');
        overplay.classList.remove('overplay-active');
        }
}
