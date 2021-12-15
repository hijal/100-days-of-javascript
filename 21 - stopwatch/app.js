let seconds = 00;
let milliseconds = 00;

let addSeconds = document.querySelector('.seconds');
let addMilliseconds = document.querySelector('.milliseconds');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let interval;

start.addEventListener('click', function () {
	clearInterval(interval);
	interval = setInterval(startWatch, 10);
});

stop.addEventListener('click', function () {
	clearInterval(interval);
});

reset.addEventListener('click', function () {
	seconds = 00;
	milliseconds = 00;
	addSeconds.innerHTML = seconds;
	addMilliseconds.innerHTML = milliseconds;
	clearInterval(interval);
});

function startWatch() {
	milliseconds++;
	if (milliseconds > 9) {
		addMilliseconds.innerHTML = milliseconds;
	}
	if (milliseconds < 9) {
		addMilliseconds.innerHTML = '0' + milliseconds;
	}
	if (milliseconds > 99) {
		console.log(seconds);
		seconds++;
		addSeconds.innerHTML = '0' + seconds;
		milliseconds = 0;
		addMilliseconds.innerHTML = '0' + 0;
	}

	if (seconds > 9) {
		addSeconds.innerHTML = seconds;
	}
}
