$(document).ready(function () {
	$('#addToCart').click(function () {
		let button = $('#addToCart');
		let cart = $('#cart');
		let totalItem = cart.attr('data-total');
		let sum = +totalItem + 1;

		button.addClass('sendToCart');
		setTimeout(function () {
			button.removeClass('sendToCart');
			cart.addClass('shake').attr('data-total', sum);
			setTimeout(function () {
				cart.removeClass('shake');
			}, 500);
		}, 1000);
	});
});
