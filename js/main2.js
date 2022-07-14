const getUrl = window.location.href;
const price = getUrl.substr(38);
console.log(price)

document.querySelector("#subscription_price").innerHTML = price + "tk";