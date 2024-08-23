$('#passwordToggler').click(function (e) { 
  e.preventDefault();
  
  $(this).text() == 'Show' ? $(this).text('Hide') : $(this).text('Show');

  $('input#password').attr('type') == 'password' ? $('input#password').attr('type', 'text') : $('input#password').attr('type', 'password');
});

function showPasswordToggler() {
  if ($('input#password').val().length > 0) {
    $('#passwordToggler').removeClass('hide');
  }
}

function hidePasswordToggler() {
  $('#passwordToggler').addClass('hide');
}

$('input#password').focus(function (e) { 
  e.preventDefault();
  showPasswordToggler();
});

$('input#password').keyup(function (e) { 
  e.preventDefault();
  showPasswordToggler();
});

$('input#password').click(function (e) { 
  e.stopPropagation();
  e.preventDefault();
});

window.onclick = function (e) { 
  if (e.target.id != 'passwordToggler') {
    hidePasswordToggler();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const otpInputs = document.querySelectorAll('.otp-inputs input');

  otpInputs.forEach((input, index) => {
    input.addEventListener('keydown', function (e) {
      // Handle navigation to next input field on number entry
      if (e.key >= 0 && e.key <= 9) {
        input.value = ''; // clear the current field value before entering the new digit
        setTimeout(() => {
          if (index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
          }
        }, 10);
      }
      // Handle backspace to move to the previous field
      else if (e.key === 'Backspace') {
        if (index > 0 && input.value === '') {
          setTimeout(() => {
            otpInputs[index - 1].focus();
          }, 10);
        }
      }
    });

    // Move to the next input on pasting
    input.addEventListener('input', function () {
      if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
      }
      if (index < otpInputs.length - 1 && input.value !== '') {
        otpInputs[index + 1].focus();
      }
    });
  });
});
