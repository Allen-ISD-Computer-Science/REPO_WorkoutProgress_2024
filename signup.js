//First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

//Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
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
firstNameInput.addEventListener("input", () => {
  if (firstNameInput.value) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

//Last name
lastNameInput.addEventListener("input", () => {
  if (lastNameInput.value) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
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