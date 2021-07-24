

const navbar = document.getElementById("nav");
const content = document.querySelector(".items");
const btns = document.querySelectorAll(".btn-filter")
const orderList = document.querySelector('.order');
const item = document.querySelectorAll(".item");
const cartBtns = document.querySelectorAll(".place-order");
const clearBtn = document.querySelector(".clear");
const placeBtn = document.querySelector(".place")
const alertmsg = document.querySelector(".alert");
const totalPrice = document.querySelector(".totalPrice");



window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
})

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('nav-disp');
    }
    else{
        navbar.classList.remove('nav-disp');
    }
    
})



// console.log(menu);


// localStorage.setItem("hi","natraj")
// localStorage.setItem("hi",["natraj","shanmuga"])

// console.log(localStorage.getItem("h1"));