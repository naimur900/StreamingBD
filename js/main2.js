let urlString = window.location.href;
len = urlString.length;
price = ""
for(let i=len-1; i>=0 ; i--){
    if(urlString[i] == "="){
        break;
    }
    price = urlString[i]+price;
}

document.querySelector("#subscription_price").innerHTML = parseInt(price)  + " tk";
// let price = document.getElementById('subscription_price').innerText;
document.getElementById("price-form").value = eval(price) ;


