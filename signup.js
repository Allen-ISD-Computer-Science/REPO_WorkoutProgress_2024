//First Name
let firstInput = document.getElementById("first-input");
let firstError = document.getElementById("first-error");
let emptyFirstError = document.getElementById("empty-first-name");

//Last name
let lastInput = document.getElementById("last-input");
let lastError = document.getElementById("last-error");
let emptyLastNameError = document.getElementById("empty-last-name");

// Fitness goal
let fitGoalInput = document.getElementById("fit-goal-input");
let fitGoalError = document.getElementById("fit-goal-error");
let emptyFitGoalError = document.getElementById("empty-fit-goal");

// Fitness level
let fitLevelInput = document.getElementById("fit-level-input");
let fitLevelError = document.getElementById("fit-level-error");
let emptyFitLevelError = document.getElementById("empty-fit-level");

// Diet
let dietInput = document.getElementById("diet-input");
let dietError = document.getElementById("diet-error");
let emptyDietError = document.getElementById("empty-diet");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

//Password Verification
const passwordVerify = (password) => {
  const regex =
    /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 8;
};

// Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

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

// Fit level verification
const fitLevelVerify = (input) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(input);
};

// Fit goal verification
const fitGoalVerify = (input) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(input);
};

// Diet verification
const dietVerify = (input) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(input);
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

//First name
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

// Fitness goal
fitGoalInput.addEventListener("input", () => {
  if (fitGoalVerify(fitGoalInput.value)) {
    fitGoalError.classList.add("hide");
    validInput(fitGoalInput);
  } else {
    emptyUpdate(fitGoalInput, emptyFitGoalError);
  }
});

// Fitness level
fitLevelInput.addEventListener("input", () => {
  if (fitLevelVerify(fitLevelInput.value)) {
    fitLevelError.classList.add("hide");
    validInput(fitLevelInput);
  } else {
    emptyUpdate(fitLevelInput, emptyFitLevelError);
  }
});

// Diet
dietInput.addEventListener("input", () => {
  if (dietVerify(dietInput.value)) {
    dietError.classList.add("hide");
    validInput(dietInput);
  } else {
    emptyUpdate(dietInput, emptyDietError);
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

//Verify password
verifyPasswordInput.addEventListener("input", () => {
  if (verifyPasswordInput.value === passwordInput.value) {
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});

//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 8 || invalidClasses.length == 0) {
    window.open("http://127.0.0.1:5500/workout.html");
  } else {
    alert("Please make sure all fields are valid!");
  }
});
