function validateAuthor() {
  const authorInput = document.getElementById("author").value.trim();
  const authorWords = authorInput
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const authorInputField = document.getElementById("author");
  const symbolsSpan = document.querySelector(".symbols");
  const wordsSpan = document.querySelector(".words");
  const georgianSpan = document.querySelector(".only-georgian");

  const georgianRegex = /^[\u10D0-\u10FF\s]+$/; // Georgian Unicode range

  let symbolsValid = authorInput.length >= 4;
  let wordsValid = authorWords.length >= 2;
  let georgianValid = georgianRegex.test(authorInput);

  symbolsSpan.style.color = symbolsValid ? "green" : "red";
  wordsSpan.style.color = wordsValid ? "green" : "red";
  georgianSpan.style.color = georgianValid ? "green" : "red";

  authorInputField.style.borderColor =
    symbolsValid && wordsValid && georgianValid
      ? "rgba(20, 216, 28, 1)"
      : "red";
  authorInputField.style.background =
    symbolsValid && wordsValid && georgianValid
      ? "linear-gradient(0deg, rgba(20, 216, 28, 0.1), rgba(20, 216, 28, 0.1)), " +
        "linear-gradient(0deg, rgba(248, 255, 248, 0.1), rgba(248, 255, 248, 0.1))"
      : "linear-gradient(0deg, rgba(234, 25, 25, 0.1), rgba(234, 25, 25, 0.1)), " +
        "linear-gradient(0deg, rgba(250, 242, 243, 0.1), rgba(250, 242, 243, 0.1))";
}

// Function to validate the header input
function validateHeader() {
  const headerInput = document.getElementById("header").value.trim();
  const headerInputField = document.getElementById("header");
  const headerSpan = document.querySelector(".header-min-symnol");

  if (headerInput.length >= 2) {
    headerSpan.style.color = "green";
    headerInputField.style.borderColor = "rgba(20, 216, 28, 1)";
    headerInputField.style.background =
      "linear-gradient(0deg, rgba(20, 216, 28, 0.1), rgba(20, 216, 28, 0.1)), " +
      "linear-gradient(0deg, rgba(248, 255, 248, 0.1), rgba(248, 255, 248, 0.1))";
  } else {
    headerSpan.style.color = "red";
    headerInputField.style.borderColor = "red";
    headerInputField.style.background =
      "linear-gradient(0deg, rgba(234, 25, 25, 0.1), rgba(234, 25, 25, 0.1)), " +
      "linear-gradient(0deg, rgba(250, 242, 243, 0.1), rgba(250, 242, 243, 0.1))";
  }
}

// Event listeners to trigger validation on input change
document.getElementById("author").addEventListener("input", validateAuthor);
document.getElementById("header").addEventListener("input", validateHeader);

function validateDescription() {
  const descriptionInput = document.getElementById("description").value.trim();
  const descriptionSpan = document.querySelector(".description-min-symnol");
  const description = document.getElementById("description");

  if (descriptionInput.length >= 2) {
    descriptionSpan.style.color = "green";
    description.style.borderColor = "green";
    document.getElementById("description").style.background =
      "linear-gradient(0deg, rgba(20, 216, 28, 0.1), rgba(20, 216, 28, 0.1)), " +
      "linear-gradient(0deg, rgba(248, 255, 248, 0.1), rgba(248, 255, 248, 0.1))";
  } else {
    description.style.borderColor = "red";

    descriptionSpan.style.color = "red";
    document.getElementById("description").style.background =
      "linear-gradient(0deg, rgba(234, 25, 25, 0.1), rgba(234, 25, 25, 0.1)), " +
      "linear-gradient(0deg, rgba(250, 242, 243, 0.1), rgba(250, 242, 243, 0.1))";
  }
}

document
  .getElementById("description")
  .addEventListener("input", validateDescription);

/////////////////////////////////////////////////////////

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", function () {
  if (this.value) {
    this.style.borderColor = "rgba(20, 216, 28, 1)";
    this.style.backgroundColor =
      "linear-gradient(0deg, #14D81C, #14D81C), linear-gradient(0deg, #F8FFF8, #F8FFF8)";
  } else {
    this.style.borderColor = "red";
    this.style.backgroundColor = "";
  }
});

function validateEmail() {
  const emailInput = document.getElementById("email").value.trim();
  const emailRegex = /@redberry\.ge$/;
  const validEmail = emailRegex.test(emailInput);
  const email = document.getElementById("email");
  const emailError = document.querySelector(".email-error");

  if (validEmail) {
    email.style.borderColor = "green";
    emailError.style.display = "none";
  } else {
    emailError.style.display = "flex";
    email.style.borderColor = "red";
    overallValidation();
  }
}

document.getElementById("email").addEventListener("input", validateEmail);

function overallValidation() {
  const authorInput = document.getElementById("author").value.trim();
  const headerInput = document.getElementById("header").value.trim();
  const descriptionInput = document.getElementById("description").value.trim();
  const dateInput = document.getElementById("date").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const button = document.querySelector(".button button");

  const authorSymbolsValid = authorInput.length >= 4;
  const authorWordsValid =
    authorInput.split(/\s+/).filter((word) => word.length > 0).length >= 2;
  const authorGeorgianValid = /^[\u10D0-\u10FF\s]+$/.test(authorInput);

  const headerValid = headerInput.length >= 2;
  const descriptionValid = descriptionInput.length >= 2;
  const dateValid = dateInput !== "";
  const emailValid = /@redberry\.ge$/.test(emailInput);

  const allRequirementsMet =
    authorSymbolsValid &&
    authorWordsValid &&
    authorGeorgianValid &&
    headerValid &&
    descriptionValid &&
    dateValid &&
    emailValid;

  if (allRequirementsMet) {
    button.style.backgroundColor = "rgba(93, 55, 243, 1)";
  } else {
    button.style.backgroundColor = "";
  }
}

document.getElementById("author").addEventListener("input", overallValidation);
document.getElementById("header").addEventListener("input", overallValidation);
document
  .getElementById("description")
  .addEventListener("input", overallValidation);
document.getElementById("date").addEventListener("input", overallValidation);

////// focus
// /// /// Function to set border style on focus
function setInputFocusBorder(inputId) {
  const inputField = document.getElementById(inputId);

  inputField.addEventListener("focus", function () {
    this.style.borderColor = "rgba(93, 55, 243, 1)";
  });

  inputField.addEventListener("blur", function () {
    // Reset border color on blur to initial validation state
    validateInput(inputId); // Assuming there's a validation function for individual inputs
  });
}

// Call setInputFocusBorder for each input field
setInputFocusBorder("author");
setInputFocusBorder("header");
setInputFocusBorder("description");
setInputFocusBorder("date");
setInputFocusBorder("email");
// Add more input fields if needed
