const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStop.disabled = true;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onBtnStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  const body = document.body;
  
  changeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log("Start color change");
};

function onBtnStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(changeColor);
  console.log("Stop color change");
};