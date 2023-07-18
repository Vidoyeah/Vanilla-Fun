const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();

const initialPlaceholder = textarea.placeholder;

let intervalId;
let elementIndex = 0;
let elementsAll = [];

function changeClasses() {
  setTimeout(() => {
    elementsAll[0].classList.remove('blueTag');
    elementsAll[0].classList.add('tag');
    elementsAll[elementIndex].classList.toggle('tag');
    elementsAll[elementIndex].classList.toggle('blueTag');
  }, 0);

  elementsAll[elementIndex].classList.toggle('tag');
  elementsAll[elementIndex].classList.toggle('blueTag');
  elementIndex = (elementIndex + 1) % elementsAll.length;
}

function stopClassChange() {
  clearInterval(intervalId);
}

function createHandler(e) {
  let textArr = [];
  const inputText = e.target.value;
  textArr = inputText.split(',');
  const textElement = textArr.pop();

  const newEl = document.createElement('div');
  newEl.textContent = textElement;

  if (e.key === ',' && textElement.length > 0) {
    newEl.classList.add('tag');
    tagsEl.appendChild(newEl);
    elementsAll.push(newEl);
  } else if (e.key === 'Enter') {
    const lastArg = e.target.value;
    const comma = lastArg.split(',').pop();

    if (textElement.length === 0 && comma === '') {
      e.preventDefault();
      e.target.value = '';
      textarea.placeholder = initialPlaceholder;
      return;
    } else if (textElement.length > 0) {
      e.preventDefault();
      newEl.classList.add('tag');
      tagsEl.appendChild(newEl);
      elementsAll.push(newEl);
      e.target.value = '';
      textarea.placeholder = initialPlaceholder;
    }
    intervalId = setInterval(() => {
      return changeClasses();
    }, 100);
    setTimeout(stopClassChange, 3000);
  }
}

textarea.addEventListener('keydown', createHandler);
