const slike = document.querySelectorAll('.panel');
console.log(slike);

slike.forEach(el => {
  el.addEventListener('click', () => {
    removeActive(); //uklanjamo klasu, pre nego sto nastavimo dalje
    el.classList.add('active');
  });
});

//da ponistimo active class
function removeActive() {
  slike.forEach(le => le.classList.remove('active'));
}

//Ako koristimo klasu
// class Slike {
//   static photos = document.querySelectorAll('.panel');
//   static p = Slike.pogledati();

//   static pogledati() {
//     this.photos.forEach(el =>
//       el.addEventListener('click', () => {
//         this.removeActive(); //uklanjamo klasu, pre nego sto nastavimo dalje
//         el.classList.add('active');
//       })
//     );
//   }

//   static removeActive() {
//     this.photos.forEach(le => le.classList.remove('active'));
//   }
// }
