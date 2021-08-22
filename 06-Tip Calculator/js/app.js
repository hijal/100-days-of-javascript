var calculateBtn = document.getElementById('calculate-btn');
var each = document.getElementById('each');
var tipContainer = document.getElementById('tip-container');
var tip = document.getElementById('tip');


each.style.display = 'none';
tipContainer.style.display = 'none';

function tipCalculationHandler(e) {
  e.preventDefault();
  var bill = document.getElementById('bill').value;
  var service = document.getElementById('service').value;
  var numberOfPeople = document.getElementById('numberOfPeople').value;

  if (bill === '' || service === '') {
    alert('Please enter required values');
    return;
  }

  if (service === '') {
    alert('Please enter required values');
    return;
  }

  if (numberOfPeople === '' || numberOfPeople <= 1) {
    numberOfPeople = 1;
    each.style.display = 'none';
  }
  var totalAmount = (bill * service) / numberOfPeople;
  totalAmount = Math.round(totalAmount * 100) / 100;
  totalAmount = totalAmount.toFixed(2);
  each.style.display = 'block';
  tipContainer.style.display = 'inline-block';
  tip.style.display = 'block';

  tip.innerHTML = totalAmount;
}

calculateBtn.addEventListener('click', tipCalculationHandler);
