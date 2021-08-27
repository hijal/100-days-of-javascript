(function () {
  const images = ['image-0', 'image-1', 'image-2', 'image-3', 'image-4'];
  const buttons = document.querySelectorAll('.button');
  const imageContainer = document.querySelector('.container');
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      if (button.classList.contains('fa-caret-square-o-left')) {
        counter--;
        if (counter < 0) {
          counter = images.length - 1;
        }
        imageContainer.style.backgroundImage = `url(./images/${images[counter]}.jpg)`;
      }
      if (button.classList.contains('fa-caret-square-o-right')) {
        counter++;
        if (counter > images.length - 1) {
          counter = 0;
        }
        imageContainer.style.backgroundImage = `url(./images/${images[counter]}.jpg)`;
      }
    });
  });
})();
