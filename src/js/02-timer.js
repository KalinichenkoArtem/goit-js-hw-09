import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

btnStart.disabled = true;

const inputDate = new Date(input.value).getTime();
const currentDate = Date.now();

let selectedDates = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            btnStart.disabled = false;
        }
        userDate = selectedDates;
      console.log(selectedDates[0]);
},
};

flatpickr(input, { options });

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
    
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const deltaTime = selectedDates - currentDate;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
        }, 1000);
    },
};

// if (inputDate > currentDate) {
//     alert("Please choose a date in the future");
//     } if (inputDate < currentDate) {
//         btnStart.disabled = false;
// };
    
btnStart.addEventListener('click', () => {
    timer.start();
    btnStart.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};