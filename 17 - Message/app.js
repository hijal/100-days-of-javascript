(function () {
	const form = document.querySelector('#form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const message = document.querySelector('.message');
		const invalid = document.querySelector('.invalid');
		const content = document.querySelector('.message-content');

		if (message.value.trim() === '') {
			invalid.classList.add('show');

			setTimeout(() => {
				invalid.classList.remove('show');
			}, 3000);
		} else {
			content.textContent = `"${message.value}" that is your message is delivered.`;
			message.value = '';
		}
	});
})();
