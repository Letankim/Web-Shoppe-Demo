var itemProduct = new Array();
var rendal = document.querySelectorAll('.home-product-item');
function rendalProduct(x) {
    // đường dẫn
var srcProduct = x.children[0].children[4].children[0].innerText;
var srcProductdetails = x.children[0].children[4].children[1].innerText;

    // main product
var productImg = x.children[0].children[0].children[0].src;
var productImg1 = x.children[0].children[0].children[1].src;
var productImg2 = x.children[0].children[0].children[2].src;
var productImg3 = x.children[0].children[0].children[3].src;
var productImg4 = x.children[0].children[0].children[4].src;
var productImg5 = x.children[0].children[0].children[5].src;
var productName = x.children[0].children[1].innerText;
var productOld = x.children[0].children[2].children[0].innerText;
var productCurrent = x.children[0].children[2].children[1].innerText;
var productSold = x.children[0].children[3].children[1].children[1].children[0].innerText;
var productPecent = x.children[0].children[6].children[0].innerText;
var sp = new Array(productImg, productImg1, productImg2, productImg3, productImg4, productImg5, productName, productOld, productCurrent, productSold, productPecent, srcProductdetails, srcProduct);
   itemProduct.push(sp);
   console.log(sp);
    sessionStorage.setItem('itemProduct', JSON.stringify(itemProduct));
}

function showProduct() {
    var sanpham = sessionStorage.getItem('itemProduct');
    var productRandel = JSON.parse(sanpham);
    console.log(productRandel);
    var imgproduct = "";
    imgproductdesc = "";
    sanphamnew = "";
    daban = "";
    price = "";
    productsrc = "";
    for (var i = 0; i < productRandel.length; i++) {   
        sanphamnew += '<span class="prodcut__desc-name-title">Yêu thích+</span>'+
        '<h4>'+productRandel[i][6]+'</h4>'
    }
    document.querySelector('.prodcut__desc-name').innerHTML = sanphamnew;
    for (var i = 0; i < productRandel.length; i++) {
        imgproduct += ' <img src="'+productRandel[i][0]+'" alt="" class="product__img-main">'
    }
    document.querySelector('.product__img').innerHTML = imgproduct;
    for (var i = 0; i < productRandel.length; i++) {
        imgproductdesc += '<div class="product__img-desc-item col l-2-5 m-2-5 s-2-5">'+
        '<img src="'+productRandel[i][1]+'" alt="">' +
    '</div>' +
    '<div class="product__img-desc-item col l-2-5 m-2-5 s-2-5">' +
        '<img src="'+productRandel[i][2]+'" alt="">' +
    '</div>' +
    '<div class="product__img-desc-item col l-2-5 m-2-5 s-2-5">' +
        '<img src="'+productRandel[i][3]+'" alt="">' +
    '</div>' +
    '<div class="product__img-desc-item col l-2-5 m-2-5 s-2-5">' +
        '<img src="'+productRandel[i][4]+'" alt="">' +
    '</div>' +
    '<div class="product__img-desc-item col l-2-5 m-2-5 s-2-5">' +
        '<img src="'+productRandel[i][5]+'" alt="">' +
    '</div>'
    }
    document.querySelector('.product__img-desc').innerHTML = imgproductdesc;
    for (var i = 0; i < productRandel.length; i++) {
        daban += '<span class="product__desc-ranking-sold">'+productRandel[i][9]+'</span>' +
        '<span class="product__desc-ranking-sold">Đã bán</span>'
    }
    document.querySelector('.product__desc-ranking-item').innerHTML = daban;
    for (var i = 0; i < productRandel.length; i++) {
        price += '<span class="prodcut__desc-price-old">'+productRandel[i][7]+'</span>' +
        '<span class="prodcut__desc-price-current">'+productRandel[i][8]+'</span>' +
        '<span class="prodcut__desc-price-percent-sale">'+productRandel[i][10]+'</span>'
    }
    document.querySelector('.price-on-laptop-and-tablet').innerHTML = price;
    document.querySelector('.price-on-mobile').innerHTML = price;
    for (var i = 0; i < productRandel.length; i++) {
        productsrc += ' <li class="pageitem__link-item">' +
        '<a href="./pagehome.html" class="pageitem__link-item-link">Shoppe</a>' +
        '<i class="pageitem__link-item-link-icon fas fa-angle-right"></i>' +
    '</li>' +
    '<li class="pageitem__link-item">' +
        '<a href="" class="pageitem__link-item-link">'+productRandel[i][11]+'</a>' +
        '<i class="pageitem__link-item-link-icon fas fa-angle-right"></i>' +
    '</li>' +
    '<li class="pageitem__link-item">' +
        '<a href="" class="pageitem__link-item-link">'+productRandel[i][12]+'</a>' +
        '<i class="pageitem__link-item-link-icon fas fa-angle-right"></i>' +
    '</li>'
    }
    document.querySelector('.pageitem__link-list').innerHTML = productsrc;
}

                                