$(document).ready(function () {
  $('#generatedNumber').text(`${otpGenerator()}`);

  $('#number-generator').click(function () {
    $('#spinner-add').attr('class', 'spinner-border spinner-border-sm');

    setTimeout(function () {
      $('#spinner-add').removeAttr('class');
      $('#generatedNumber').text(`${otpGenerator()}`);
    }, 500);
  });

  $('#copy-clipboard').click(function (e) {
    let input = document.createElement('textarea');
    input.value = $('#generatedNumber').text();
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    $(e.target).text('copied');
    setTimeout(function () {
      $(e.target).text('copy');
    }, 1500);
  });

  function otpGenerator() {
    let alphaNumeric =
      'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM0987654321';
    let otp = '';

    for (let i = 0; i < 6; i++) {
      otp += alphaNumeric.charAt(
        Math.floor(Math.random() * alphaNumeric.length),
      );
    }
    return otp;
  }
});
