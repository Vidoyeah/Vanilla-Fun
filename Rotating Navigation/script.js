const con = document.querySelector('.container');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', showModal);
close.addEventListener('click', hideModal);

function showModal() {
  con.classList.add('show-nav');
}

function hideModal() {
  con.classList.remove('show-nav');
}
