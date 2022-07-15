const boxes = document.querySelectorAll(".box");
const checkBoxes = () => {
    const triggerBotttom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop< triggerBotttom) box.classList.add("show");
        else box.classList.remove("show");
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();


function purchase_price(){
    const init_price = document.getElementById("price").innerText;
    const month = document.getElementById('sl-month').value;
    const final_price = init_price + "*" + month;
    window.location.href="checkout.html?p="+final_price;
}



