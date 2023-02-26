const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  const body = document.body;

  const changeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log("Start color change");
});

btnStop.addEventListener('click', () => {
   btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(changeColor);
  console.log("Stop color change");
});