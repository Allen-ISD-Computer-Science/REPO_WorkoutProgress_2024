//First name
let firstInput = document.getElementById("first-input");
let firstError = document.getElementById("first-error");
let emptyFirstError = document.getElementById("empty-first-name");

//Last name
let lastInput = document.getElementById("last-input");
let lastError = document.getElementById("last-error");
let emptyLastNameError = document.getElementById("empty-last-name");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// First name verification
const firstVerify = (input) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(input);
};

// Last name verification
const lastVerify = (input) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(input);
};

// Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

//Password Verification
const passwordVerify = (password) => {
  const regex =
    /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 8;
};

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

//First input
firstInput.addEventListener("input", () => {
  if (firstVerify(firstInput.value)) {
    firstError.classList.add("hide");
    validInput(firstInput);
  } else {
    errorUpdate(firstInput, firstError);
    emptyUpdate(firstInput, emptyFirstError, firstError);
  }
});

//Last name
lastInput.addEventListener("input", () => {
  if (lastVerify(lastInput.value)) {
    lastError.classList.add("hide");
    validInput(lastInput);
  } else {
    errorUpdate(lastInput, lastError);
    emptyUpdate(lastInput, emptyLastNameError, lastError);
  }
});

//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

//Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});

//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length === 4 && invalidClasses.length === 0) {
    alert("Welcome " + firstInput.value + " ! " + ", you are now logged in!");
      window.open("https://www.codermerlin.academy/users/kyle-hernandez/Digital%20Portfolio/REPO_WorkoutProgress_2024/workout.html");
  } else {
    alert("Log In Failed, please fill out the fields!");
  }
});
