const offset = 200;
const scrollUp = document.querySelector(".scroll-up");

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
    if (getTop() > offset) {
        scrollUp.classList.add("active");
    } else {
        scrollUp.classList.remove("active");
    }
});

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


let popup = document.querySelector(".window");
let popup1 = document.querySelector(".window1");

let flash = document.querySelector(".open-window");
let flash1 = document.querySelector(".open-window1");

let close = document.querySelector(".close-window");
let close1 = document.querySelector(".close-window1");

flash.onclick = function () {
    popup.style.display = "block";
}

close.onclick = function () {
    popup.style.display = "none";
}

flash1.onclick = function () {
    popup1.style.display = "block";
}

close1.onclick = function () {
    popup1.style.display = "none";
}


document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})