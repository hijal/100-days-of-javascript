let date = new Date();

let dayNumber = date.getDay();

let theDayIs, quote;

switch (dayNumber) {
  case 0:
    theDayIs = 'Sunday';
    quote = 'Time to chillax..';
    break;
  case 1:
    theDayIs = 'Monday';
    quote = 'Monday morning blues..';
    break;
  case 2:
    theDayIs = 'Tuesday';
    quote = 'Taco Time..';
    break;
  case 3:
    theDayIs = 'Wednesday';
    quote = 'Two more days to the weekend..';
    break;
  case 4:
    theDayIs = 'Thursday';
    quote = 'The weekend is almost here..';
    break;
  case 5:
    theDayIs = 'Friday';
    quote = 'Weekend is here..';
    break;
  default:
    theDayIs = 'Saturday';
    quote = 'Time to party..';
}

let weekDayEl = document.getElementById('weekday');
let quoteEL = document.getElementById('quote');

weekDayEl.innerText = theDayIs;
quoteEL.innerText = quote;
