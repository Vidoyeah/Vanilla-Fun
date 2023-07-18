const searchBtn = document.querySelector('.btn');
const textSearch = document.querySelector('.search');
const input = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
  textSearch.classList.toggle('active');
  input.focus();
});

//.focus() metod u startu stavlja kursor za kucanje
