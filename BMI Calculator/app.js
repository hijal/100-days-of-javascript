document.querySelector('.form').addEventListener('submit', function (e) {
	e.preventDefault();
	let weight = document.querySelector('#weight').value;
	let height = document.querySelector('#height').value;

	if (weight > 0 && height > 0) {
		let bmi = weight / ((height * height) / 1000);
		let result = document.querySelector('.result');
		result.innerHTML = bmi;
	} else {
		let result = document.querySelector('.result');
		result.classList.remove('show');
		result.innerHTML = 'Please enter a valid number';
	}
});
