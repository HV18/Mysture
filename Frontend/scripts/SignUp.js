function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}


function validatePassword(password) {
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}


function comparePasswords(password, confirmPassword) {
  return password === confirmPassword;
}

document.addEventListener('DOMContentLoaded', function () {

  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const formData = new FormData(this);
      const userData = {
        username: formData.get('username'),
        email: formData.get('email_address'),
        phone: formData.get('phone'),
        occupation: formData.get('occupation'),
        password: formData.get('Pwd'),
        confirmPassword: formData.get('ConfPwd'),
        captchaValue: grecaptcha.getResponse()
      };

      if (!validateEmail(userData.email)) {
        alert('Please enter a valid email address.');
      }

      if (!validatePhoneNumber(userData.phone)) {
        alert('Please enter a valid phone number.');
      }

      if (!validatePassword(userData.password)) {
        alert('Password must be at least 8 characters long and contain a special character.');
      }

      if (!comparePasswords(userData.password, userData.confirmPassword)) {
        alert('Passwords do not match.');
        return;
      }

      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        if (response.ok) {
          // Parse the response body as JSON
          const responseData = await response.json();
          console.log('Registration successful');
          alert(responseData.successMessage);
        } else {
          // If the response is not successful, handle the error
          throw new Error('Failed to register user: ' + response.statusText);
        }
      } catch (error) {
        console.error('Error registering user:', response.error);
      }
    });
  } else {
    console.error('Element with ID "signUpForm" not found.');
  }

  // const signInForm = document.getElementById('signInForm');
  // if (signInForm) {
  //   signInForm.addEventListener('submit', async function (event) {
  //     event.preventDefault();
  //     const formData = new FormData(this);
  //     const existingUserData = {
  //       email: formData.get('emailAddress'),
  //       password: formData.get('password'),
  //     };

  //     try {
  //       const response = await fetch('/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(existingUserData)
  //       });

  //       if (response.ok) {
  //         const responseData = await response.json();
  //         console.log('Login successful:', responseData.message);
  //         alert(responseData.message);
  //       } else {
  //         throw new Error('Failed to log in user: ' + response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error logging in user:', error);
  //       alert(error);
  //     }
  //   });
  // } else {
  //   console.error('Element with ID "signInForm" not found.');
  // }

});
