const getUrl = window.location.href;
const price = getUrl.substr(56);
console.log(price)

document.querySelector("#subscription_price").innerHTML = price + "tk";