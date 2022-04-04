//function to create a product card dynamically
function createElement(key) {
    var card = document.createElement("div");//main div
    card.id = productList[key].id;//main div id
    card.className = "card";//class name for cards
    var a = document.createElement("a");//anchor tag
    a.href = `product.html?productid=${productList[key].id}`;//anchor tag hyperlink
    card.appendChild(a);//pushing anchor tag to main div
    var div1 = document.createElement("div");//inner div to store preview image
    div1.className = "img";
    var img = document.createElement("img");//image tag
    img.src = productList[key].preview;//image tag source
    div1.appendChild(img);//pushing image tag to first div inside card
    a.appendChild(div1);//pushing first div to anchor tag
    var div2 = document.createElement("div");//inner div to store product details
    div2.className = "details"
    var h3 = document.createElement("h3")//h3 tag to display product name
    h3.innerHTML = productList[key].name;//taking product name from array and assigning it to h3 tag
    var h4 = document.createElement("h4");//h4 tag to display product's brand name
    h4.innerHTML = productList[key].brand;//taking brand name from array and assigning it to h4 tag
    var h5 = document.createElement("h5");//h5 tag to display product's price
    h5.innerHTML = `Rs ${productList[key].price}`;//taking product's price from array then concatinating it with string 'Rs' and assigning it to h5 tag
    div2.appendChild(h3);//pushing h3 to second div inside card
    div2.appendChild(h4);//pushing h4 to second div inside card
    div2.appendChild(h5);//pushing h5 to second div inside card
    a.appendChild(div2);//pushing second inner div to anchor tag
    card.appendChild(a);//finally pushing anchor tag to main div/card
    return card;//returning the new card
}


for (var i = 0; i < productList.length; ++i) {//loop to get all required details to create card from productList array
    if(productList[i].isAccessory === false)//checking whether it belongs to accessory or cloth
    document.getElementById("clothingCard").appendChild(createElement(i));//if cloth then calling function to create card and pushing new card to clothing section
    else
    document.getElementById("accessoriesCard").appendChild(createElement(i));//else accessory then calling function to create card and pushing new card to accessory section
}

//slick slider-------------------
$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});
