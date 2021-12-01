var clock = document.getElementById('digital-clock');

setInterval(function () {
	let date = new Date();
	clock.innerHTML = date.toLocaleTimeString();
}, 1000);
