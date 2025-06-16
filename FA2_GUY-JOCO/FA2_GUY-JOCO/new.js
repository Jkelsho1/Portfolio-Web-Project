document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

 form.addEventListener('submit', function(event) {
  event.preventDefault();
  resetErrorMessages();

  const valid = validateForm();
  console.log('Form valid:', valid);  

  if (valid) {
     const fullName = document.getElementById('fullName').value.trim();
          const email = document.getElementById('email').value.trim();
          const phoneNumber = document.getElementById('phoneNumber').value.trim();
          const gender = document.querySelector('input[name="gender"]:checked').value;
          const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
          const course = document.getElementById('course').value.trim();
          const output =
            `Name: ${fullName}\n` +
            `Email: ${email}\n` +
            `Phone: ${phoneNumber}\n` +
            `Gender: ${gender}\n` +
            `Date of Birth: ${dateOfBirth}\n` +
            `Course: ${course}`;

    alert("Registration Successfully\n\n" + output);
    form.reset();
  }
});

  function validateForm() {
    let isValid = true;

    const fullName = document.getElementById('fullName').value.trim();
    if (!fullName) {
      showError('fullNameError', 'Full Name is required');
      isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
      showError('emailError', 'Valid Email is required');
      isValid = false;
    }

    const password = document.getElementById('password').value.trim();
    if (!password) {
      showError('passwordError', 'Password is required');
      isValid = false;
    }

    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (!isValidPhoneNumber(phoneNumber)) {
      showError('phoneNumberError', 'Valid Phone Number is required');
      isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      showError('genderError', 'Gender is required');
      isValid = false;
    }

    const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
    if (!dateOfBirth) {
      showError('dateOfBirthError', 'Date of Birth is required');
      isValid = false;
    }

    const course = document.getElementById('course').value.trim();
    if (!course) {
      showError('courseError', 'Course is required');
      isValid = false;
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
      showError('termsError', 'Accepting Terms and Conditions is required');
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
  }

  function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage) {
      errorMessage.textContent = '';
    });
  }
});
