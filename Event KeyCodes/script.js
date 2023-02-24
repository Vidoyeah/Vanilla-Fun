const mainKey = document.getElementById('main');

const eventKey = document.getElementById('key1');
const eventKeyCode = document.getElementById('key2');
const eventCode = document.getElementById('key3');

function removeNastyChildren() {
  if (eventKey.classList.contains('keystroke')) {
    eventKey.removeChild(eventKey.lastChild);
    eventKeyCode.removeChild(eventKeyCode.lastChild);
    eventCode.removeChild(eventCode.lastChild);
  }
}

removeNastyChildren();

window.addEventListener('keydown', event => {
  removeNastyChildren();

  mainKey.style.visibility = 'hidden';

  eventKey.classList = 'keystroke';
  eventKeyCode.classList = 'keystroke';
  eventCode.classList = 'keystroke';

  const p = document.createElement('p');
  p.textContent = event.key;
  eventKey.appendChild(p);

  const pTwo = document.createElement('p');
  pTwo.textContent = event.keyCode;
  eventKeyCode.appendChild(pTwo);

  const pThree = document.createElement('p');
  pThree.textContent = event.code;
  eventCode.appendChild(pThree);
});

// Refactoring with innerhtml

// window.addEventListener('keydown', event => {
//   removeNastyChildren();

//   mainKey.style.visibility = 'hidden';

//   eventKey.classList = 'keystroke';
//   eventKeyCode.classList = 'keystroke';
//   eventCode.classList = 'keystroke';

//   eventKey.innerHTML += `<p>${event.key}</p>`;
//   eventKeyCode.innerHTML += `<p>${event.keyCode}</p>`;
//   eventCode.innerHTML += `<p>${event.code}</p>`;
// });
