$(document).ready(function () {
  let counter = 0,
    plusBtnClickCounter = 0,
    minusBtnClickCounter = 0;

  let result = document.getElementById('result');
  let plusBtn = document.getElementById('plus-btn');
  let minusBtn = document.getElementById('minus-btn');
  let plusBtnClicked = document.getElementById('plus-btn-clicked');
  let minusBtnClicked = document.getElementById('minus-btn-clicked');

  function status(counter) {
    if (counter >= 0) {
      result.style.color = 'green';
      result.innerHTML = counter + ' &#128522;'; //happy emoji!
    } else {
      result.style.color = 'red';
      result.innerHTML = counter + ' &#9785;'; //sad emoji!
    }
  }
  function addHandler(e) {
    e.preventDefault();
    counter++;
    plusBtnClickCounter++;

    status(counter);
    plusBtnClicked.textContent = plusBtnClickCounter;
  }

  function minusHandler(e) {
    e.preventDefault();
    counter--;
    minusBtnClickCounter++;

    status(counter);
    minusBtnClicked.textContent = minusBtnClickCounter;
  }

  plusBtn.addEventListener('click', addHandler);
  minusBtn.addEventListener('click', minusHandler);
});
