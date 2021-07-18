$(document).ready(function () {
  let colorGenerator = document.getElementById('color-generator');
  let copyClipboard = document.getElementById('copy-clipboard');
  let generatedColor = document.getElementById('generated-color');

  function colorGeneratorHandler(e) {
    let haxValues = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];

    let color = '#';

    for (let i = 0; i < 6; i++) {
      let index = Math.round(Math.random() * 14);
      let character = haxValues[index];
      color += character;
    }
    generatedColor.textContent = color;
    generatedColor.style.color = color;
    generatedColor.style.border = `1px solid ${color}`;

    $('.app-header').css('color', 'white');
    $('body').css('background', color);
  }

  function copyClipboardHandler(e) {
    let input = document.createElement('textarea');
    input.value = generatedColor.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    input.remove();

    $(e.target).text('copied');
    setTimeout(function () {
      $(e.target).text('copy');
    }, 1500);
  }

  colorGenerator.addEventListener('click', colorGeneratorHandler);
  copyClipboard.addEventListener('click', copyClipboardHandler);
});
