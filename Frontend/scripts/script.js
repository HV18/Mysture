let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
};

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grabCursor:true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function toggleForm(formId) {
    var signInForm = document.getElementById('signInForm');
    var signUpForm = document.getElementById('signUpForm');

    if (formId === 'signInForm') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        document.getElementById('signInBtn').classList.add('active');
        document.getElementById('signUpBtn').classList.remove('active');
    } else if (formId === 'signUpForm') {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
        document.getElementById('signUpBtn').classList.add('active');
        document.getElementById('signInBtn').classList.remove('active');
    }
}



let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 2;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for(var i = currentItem; i<currentItem + 2; i++){
        boxes[i].style.display = 'inline-block';
    };
    currentItem+=2;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}