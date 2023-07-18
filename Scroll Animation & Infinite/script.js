const boxes = document.querySelectorAll('.box');

let boxesArr = [...boxes];

let currElNum = 6;

function fromTop() {
  let yCoord = boxesArr[boxesArr.length - 1].getBoundingClientRect().top;
  console.log(yCoord);
  return yCoord;
}

function fromTopAll() {
  let yCoordAll = boxesArr[boxesArr.length - 1].getBoundingClientRect().top;
  console.log(yCoordAll);
  return yCoordAll;
}

function addBoxes() {
  if (fromTop() < document.documentElement.clientHeight + 150) {
    const newEl = document.createElement('div');
    currElNum++;
    newEl.textContent = `Content ${currElNum}`;
    newEl.classList.add('box');
    document.body.appendChild(newEl);
    boxesArr.push(newEl);
    // let obj = {
    //   scrollY: window.scrollY,
    //   clientHeight: document.documentElement.clientHeight,
    //   scrollHeight: document.documentElement.scrollHeight,
    //   lastElement: boxesArr[boxesArr.length - 1].getBoundingClientRect().top,
    // };
    // console.log(obj);
  }
}

function removeBoxes() {
  let lastChild = boxesArr[boxesArr.length - 1];

  document.body.removeChild(lastChild);
  boxesArr.pop();
  currElNum--;
}

window.addEventListener('scroll', function () {
  if (fromTop() > 2000) {
    removeBoxes();
  } else {
    addBoxes();
  }
});

//////////////////////////////////////////////////////////////////////
// window.addEventListener('scroll', checkBoxes);

// checkBoxes();

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }
