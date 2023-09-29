//First Name
let firstInput = document.getElementById("first-input");
let firstError = document.getElementById("first-error");
let emptyFirstError = document.getElementById("empty-first-name");

//Last name
let lastInput = document.getElementById("last-input");
let lastError = document.getElementById("last-error");
let emptyLastNameError = document.getElementById("empty-last-name");

// Fitness goal
let fitnessGoalInput = document.getElementById("fitness-goal-input");
let fitnessGoalError = document.getElementById("fitness-goal-error");
let emptyFitnessGoalError = document.getElementById("empty-fitness-goal");

// Fitness level
let fitnessLevelInput = document.getElementById("fitness-level-input");
let fitnessLevelError = document.getElementById("fitness-level-error");
let emptyFitnessLevelError = document.getElementById("empty-fitness-level");

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
fitnessGoalInput.addEventListener("input", () => {
  if (fitnessGoalInput.value) {
    fitnessGoalError.classList.add("hide");
    validInput(fitnessGoalInput);
  } else {
    errorUpdate(fitnessGoalInput, fitnessGoalError);
    emptyUpdate(fitnessGoalInput, emptyFitnessGoalError, fitnessGoalError);
  }
});

// Fitness level
fitnessLevelInput.addEventListener("input", () => {
  if (fitnessLevelInput.value) {
    fitnessLevelError.classList.add("hide");
    validInput(fitnessLevelInput);
  } else {
    errorUpdate(fitnessLevelInput, fitnessLevelError);
    emptyUpdate(fitnessLevelInput, emptyFitnessLevelError, fitnessLevelError);
  }
});

// Diet
dietInput.addEventListener("input", () => {
  if (dietInput.value) {
    dietError.classList.add("hide");
    validInput(dietInput);
  } else {
    errorUpdate(dietInput, dietError);
    emptyUpdate(dietInput, emptyDietError, dietError);
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
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});
