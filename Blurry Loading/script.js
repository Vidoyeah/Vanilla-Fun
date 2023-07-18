const pic = document.querySelector('.bg');
const loadingTxt = document.querySelector('.loading-text');

let i = 100;

let int = setInterval(showPic, 20);

function showPic() {
  if (i == -1) {
    clearInterval(int);
  }
  pic.style.filter = `blur(${i}px)`;
  i--;
}

let int1 = setInterval(count, 20);

let n = 0;

function count() {
  if (n > 100) {
    loadingTxt.remove('loading-text');
  } else {
    loadingTxt.innerText = `${n}%`;
    n++;
  }
}

//pogledati za opacity!!!! Cool fora
