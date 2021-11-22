let navbar = document.querySelector('.header__navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.header__search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let cartItem = document.querySelector('.header__cart-items-container');
document.querySelector('#cart-btn').onclick= () =>{
    cartItem.classList.toggle('active');
}
