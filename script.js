let searchBtn = document.querySelector('#search-btn');
let searchBtn = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.search-bar-container');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});