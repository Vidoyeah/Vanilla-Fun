const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const container = document.querySelector('.container');

leftSide.addEventListener('mouseover', () => container.classList.add('hover-left'));
leftSide.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

rightSide.addEventListener('mouseover', () => container.classList.add('hover-right'));
rightSide.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

// function mousemove(event) {
//   console.log('pageX: ', event.pageX, 'pageY: ', event.pageY, 'clientX: ', event.clientX, 'clientY:', event.clientY);
// }

// window.addEventListener('mousemove', () => {
//   mousemove;
//   if (mouseMiddle) {
//   }
// });
