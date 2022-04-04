let id = Number(new URLSearchParams(window.location.search).get("productid"));
id--;

if(cartCount === undefined){
    cartCount = 0;
}
let cart = document.getElementById("cart-count");
cart.innerText = cartCount;

let productImage = document.getElementById("product-image");
let img = document.createElement("img");
img.src = productList[id].preview;
productImage.appendChild(img);

let productDetail = document.getElementById("product-detail");

let prodDesc = document.createElement("div");
prodDesc.id = "product-description";
let h1 = document.createElement("h1");
h1.innerHTML = productList[id].name;
prodDesc.appendChild(h1);

let h4 = document.createElement("h4");
h4.innerHTML = productList[id].brand;
prodDesc.appendChild(h4);

let h3 = document.createElement("h3");
let span = document.createElement("span");
span.innerHTML = productList[id].price;
h3.innerHTML = "Price: Rs ";
h3.appendChild(span);
prodDesc.appendChild(h3);

let desc = document.createElement("div");
desc.id = "description";
let h3_1 = document.createElement("h3");
h3_1.innerHTML = "Description";
desc.appendChild(h3_1);

let p = document.createElement("p");
p.innerHTML = productList[id].description;
desc.appendChild(p);

let productPreview = document.createElement("div");
productPreview.id = "product-preview"
let h3_2 = document.createElement("h3");
h3_2.innerHTML = "Product Preview";
productPreview.appendChild(h3_2);

let previewImage = document.createElement("div");
previewImage.id = "preview-image";

let temp = 0;
for( let i of productList[id].photos){
    let img = document.createElement("img");
    img.id = `img${temp++}`;
    img.className = "prev-img"
    img.src = i;
    previewImage.appendChild(img);
}
let setActive = previewImage.firstChild;
setActive.setAttribute("class","prev-img active");
prodDesc.appendChild(desc);
prodDesc.appendChild(productPreview);
prodDesc.appendChild(previewImage);
productDetail.appendChild(prodDesc);

let btn = document.createElement("div");
btn.id = "btn";
let addToCart = document.createElement("button");
addToCart.id = "add-to-cart";
addToCart.innerHTML = "Add to Cart";
btn.appendChild(addToCart);

productDetail.appendChild(btn);

var btns = document.getElementsByClassName("prev-img");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    img.src = this.src;
});
}
let tempCart = {"id":String(id+1),"name":`${productList[id].name}`,"count":1,"amount":`${productList[id].price}`,"preview":`${productList[id].preview}`};
let tempCount = localStorage.getItem("cart-count");
addToCart.onclick = ()=>{
    var flag=1;
    setCartCount.innerHTML = ++tempCount;
    localStorage.setItem("cart-count",`${tempCount}`);
    cartItem = JSON.parse(localStorage.getItem("cart-item"));
    if(cartItem[0] === undefined){
        cartItem.push(tempCart);
    }else{
        for(var i=0;i<cartItem.length;++i){
            if(cartItem[i].id === String(id+1)){
                cartItem[i].count++;
                flag=1;
                break;
            }else{
                flag=0;
            }
        }
        if(flag === 0){
            cartItem.push(tempCart);
        }
    }
    localStorage.setItem("cart-item",JSON.stringify(cartItem));
}