let items = JSON.parse(localStorage.getItem("cart-item"));

function createCartElement(key){
    var card = document.createElement("div");
    card.className = "item";
    var img = document.createElement("img");
    img.src =  items[key].preview;
    card.appendChild(img);
    var div = document.createElement("div");
    div.className = "detail";
    var h3 = document.createElement("h3");
    h3.innerHTML = items[key].name;
    var p1 = document.createElement("p");
    p1.innerHTML = `x${items[key].count}`;
    var p2 = document.createElement("p");
    p2.innerHTML = `Amount: ${items[key].amount}`;
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    card.appendChild(div);
    return card;
}

var totalAmount = 0;
if(items[0] !==undefined){
for(var i=0;i<items.length;++i){
    totalAmount += (items[i].count*items[i].amount);
    document.getElementById("cart-item-container").appendChild(createCartElement(i));
}
document.getElementById("total-amount").innerHTML = totalAmount;
}     

document.getElementById("place-order-btn").addEventListener("click",()=>{
    var cart = [];
    localStorage.setItem("cart-count","0");
    localStorage.setItem("cart-item",JSON.stringify(cart));
})