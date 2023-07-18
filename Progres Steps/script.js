const cir = document.querySelectorAll('.circle');
const prog = document.querySelector('.progress');
const prevBtn = document.querySelector('#preview');
const nextBtn = document.querySelector('#next');

function fullCircle() {
  for (let i = 0; i < cir.length; i++) {
    if (cir[i].classList.contains('active') !== true) {
      cir[i].classList.add('active');
      prevBtn.disabled = false;
      break;
    }
  }
}

function emptyCircle() {
  for (let i = cir.length - 1; i > 0; i--) {
    if (cir[i].classList.contains('active') === true) {
      cir[i].classList.remove('active');
      break;
    }
  }
}

let sum = 0;
function progressBar(a = 99.9) {
  if (sum <= a) {
    prog.style.width = `${sum + 33.3}` + '%';
  } else {
    return (sum = 100);
  }
  sum += 33.33333333333333;
}

function progressBarNeg(a = 0.01) {
  if (sum >= a) {
    prog.style.width = `${sum - 33.3}` + '%';
  } else if (sum < 33) {
    prevBtn.disabled = true;
  } else {
    return (sum = 0);
  }
  sum -= 33.33333333333333;
}

nextBtn.addEventListener('click', () => {
  fullCircle();
  progressBar();
});

prevBtn.addEventListener('click', () => {
  emptyCircle();
  progressBarNeg();
});
