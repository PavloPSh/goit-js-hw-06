function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');



changeColorBtn.addEventListener('click', changeColor);


function changeColor (event) {

  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;

}