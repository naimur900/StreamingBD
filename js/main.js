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


function purchase_price(final_price){
    window.location.href="checkout.html?p="+final_price;
}


