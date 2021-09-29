var endDate = document.querySelector('#date');
var clock = document.querySelector('.clock');

let timeInterval;
let timeStop = true;

var savedValue = localStorage.getItem('countdown') || false;

if (savedValue) {
  startClock(savedValue);
  var inputValue = new Date(savedValue);
  endDate.valueAsDate = inputValue;
}

endDate.addEventListener('change', function (e) {
  e.preventDefault();
  clearInterval(timeInterval);
  var selectedDate = new Date(endDate.value);
  localStorage.setItem('countdown', selectedDate);
  startClock(selectedDate);
  timeStop = true;
});

function startClock(date) {
  function updateCounter() {
    var timeLeft = timeRemaining(date);
    if (timeLeft.total <= 0) {
      timeStop = false;
    }

    for (prop in timeLeft) {
      var element = clock.querySelector('.' + prop);
      if (element) {
        element.innerHTML = timeLeft[prop];
      }
    }
  }
  updateCounter();

  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

function timeRemaining(date) {
  var currentDate = new Date();
  var today = Date.parse(date) - Date.parse(currentDate);
  var seconds = Math.floor((today / 1000) % 60);
  var minutes = Math.floor((today / 1000 / 60) % 60);
  var hours = Math.floor((today / (1000 * 60 * 60)) % 24);
  var days = Math.floor(today / (1000 * 60 * 60 * 24));
  return {
    total: today,
    days: days,
    hours,
    minutes,
    seconds
  };
}
