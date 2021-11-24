var myCart = new Array();
var colorProduct = document.querySelectorAll('.product__desc-details-right-name-color');
colorProduct.forEach(function(itemColor) {
    itemColor.onclick = function() {
        var colorActive = document.querySelector('.color-active');
        colorActive.classList.remove('color-active');
        this.classList.toggle('color-active');
    }
});
    
function addToCart() {
    var addTocart = document.querySelector('.add__now-product');
    var colorProductcart = document.querySelector('.color-active').innerText;
    var imgProduct = document.querySelector('.product__img').children[0].src;
    var nameProduct = document.querySelector('.prodcut__desc-name').children[1].innerText;
    var priceProduct = document.querySelector('.prodcut__desc-price-current').innerText;
    var howmuchProduct = parseInt(document.querySelector('.product__desc-details-input').value);
    var cart = new Array(imgProduct, nameProduct, priceProduct, howmuchProduct, colorProductcart);
   
    var check = 0;
    for(var i = 0; i < myCart.length; i++) {
       if(myCart[i][1] == nameProduct) {
            check = 1;
            howmuchProduct += parseInt(myCart[i][3]);
            myCart[i][3] = parseInt(howmuchProduct);
            break;
        }
    }
    if(check == 0) {
        myCart.push(cart);
    }
    sessionStorage.setItem("myCart", JSON.stringify(myCart));
    showMyCart();
}




function showMyCart() {
    var gh = sessionStorage.getItem("myCart");
    var myNewCart = JSON.parse(gh);
    ttgh = "";
    tongsp = 0;
    thanhtien = 0;
    noticeCart = 0;
    for(var i = 0; i < myNewCart.length; i++) {
        noticeCart += parseInt(myNewCart[i][3]);
        tongsp +=parseInt(myNewCart[i][3]);
        thanhtien += parseInt(myNewCart[i][3])*parseInt(myNewCart[i][2]);
        ttgh += '<ul class="header-cart-list">' +
        '<li class="header-cart-item">' +
            '<img src="'+ myNewCart[i][0] +'" alt="" class="header-cart-img">' +
            '<div class="header-cart-item-info">' +
                '<div class="header-cart-item-head">' +
                    '<h5 class="header-cart-item-name">'+ myNewCart[i][1] +'</h5>' +
                    '<div class="header-cart-item-right">' +
                        '<span class="header-cart-item-price">'+ myNewCart[i][2] +'</span>' +
                        '<span class="header-cart-item-multiply">x</span>' +
                        '<span class="header-cart-item-qnt">'+ myNewCart[i][3] +'</span>' +
                    '</div>' +
                '</div>' +
                '<div class="header-cart-item-body">' +
                    '<span class="header-cart-item-desc">Phân loại hàng: '+ myNewCart[i][4] +'</span>' +
                    '<div class="header-cart-item-right">' +
                        '<span class="header-cart-item-romove" onclick = "removeProduct(this)">Xóa</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</li>' +
    '</ul>' 
    }
    ttgh += '<div class="sum-product-and-sum-cost">' +
    '<div class="sum-wrap">' +
        '<span class="sum-product-and-sum-cost-title">Thanh toán</span>' +
        '<span class="sum-product-and-sum-cost-number"></span>' +
    '</div>' +
    '<div class="sum-wrap">' +
         '<span class="sum-product-title">Số lượng:</span>' +
         '<span class="sum-product-number">'+tongsp+'</span>' +
    '</div> ' +
    '<div class="sum-wrap">' +
        '<span class="sum-cost-content-title">Thành tiền</span>' +
        '<span class="sum-cost-content-number">'+thanhtien+" "+"000"+"VND"+'</span>' +
    '</div> ' +
    '</div>' +
    '<a href="" class="header-cart-view-cart btn btn-primary">Xem giỏ hàng</a>' 

    document.querySelector('.header-cart-info').innerHTML = ttgh;              
    document.querySelector('.header-cart-notice').innerHTML = noticeCart;
}

