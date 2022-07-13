// function toNetflix(){
//     document.getElementById("netflix")
//     window.location.href = "netflix.html";
// }

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



p = document.getElementById("nt-p1")