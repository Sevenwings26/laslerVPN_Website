// get toggle id 
const toggleDisplay = document.getElementById('togg-display');

// get modal id 
const modal = document.getElementById('register');
const modalLogin = document.getElementById('login-id');

const closeModal = document.getElementById('close-signup');
let closeModalLogin = document.getElementById('close-login');


function toggle(){
    if (toggleDisplay.style.display = 'none'){
        toggleDisplay.style.display = 'block';
    } 
}

function cancel(){
    toggleDisplay.style.display = 'none';
}


function signup(){
    if (modal.style.display = 'none'){
        modal.style.display = 'block';
    }
}

function login(){
    if (modalLogin.style.display = 'none'){
        modalLogin.style.display = 'block';
    }
};

closeModal.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

closeModalLogin.addEventListener('click', (e) => {
    modalLogin.style.display = 'none';
});



// slider 

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})