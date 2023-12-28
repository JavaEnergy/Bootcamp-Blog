const categoryDiv = document.getElementById("category");

categoryDiv.removeAttribute("contenteditable");

document.getElementById("author").addEventListener("input", validateAuthor);
document.getElementById("header").addEventListener("input", validateHeader);
document
  .getElementById("description")
  .addEventListener("input", validateDescription);

const dateInput = document.getElementById("date");
dateInput.addEventListener("input", function () {
  if (this.value) {
    this.style.borderColor = "green";
    this.style.backgroundColor =
      "linear-gradient(0deg, #14D81C, #14D81C), linear-gradient(0deg, #F8FFF8, #F8FFF8)";
    fullValidation();
  } else {
    this.style.borderColor = "red";
    this.style.backgroundColor = "";
  }
});

///// Function to validate the auhor input
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
    symbolsValid && wordsValid && georgianValid ? "green" : "red";
  authorInputField.style.background =
    symbolsValid && wordsValid && georgianValid
      ? "linear-gradient(0deg, rgba(20, 216, 28, 0.1), rgba(20, 216, 28, 0.1)), " +
        "linear-gradient(0deg, rgba(248, 255, 248, 0.1), rgba(248, 255, 248, 0.1))"
      : "linear-gradient(0deg, rgba(234, 25, 25, 0.1), rgba(234, 25, 25, 0.1)), " +
        "linear-gradient(0deg, rgba(250, 242, 243, 0.1), rgba(250, 242, 243, 0.1))";
  fullValidation();
}

///// Function to validate the header input
function validateHeader() {
  const headerInput = document.getElementById("header").value.trim();
  const headerInputField = document.getElementById("header");
  const headerSpan = document.querySelector(".header-min-symnol");

  if (headerInput.length >= 2) {
    headerSpan.style.color = "green";
    headerInputField.style.borderColor = "green";
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
  fullValidation();
}
/////// Function to validate the description input

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
  fullValidation();
}

document.getElementById("email").addEventListener("input", validateEmail);

///// Function to validate the mail input
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
  }
  fullValidation();
}

// Get the category container and the input field
const categoryInput = document.getElementById("category");

// Add an event listener to track changes
categoryInput.addEventListener("input", validateCategory);

function validateCategory() {
  const categoryContainer = document.getElementById("category");
  const categoryList = categoryContainer.querySelectorAll("span");
  const categoryValid = categoryList.length > 0;
  categoryContainer.style.borderColor = categoryValid ? "green" : "red";
  // Check if at least one li element exists
  if (categoryList.length > 0) {
    categoryContainer.style.borderColor = "green";
  } else {
    categoryContainer.style.borderColor = "red";
  }
}

// /// /// Function to set border style on focus
function setInputFocusBorder(inputId) {
  const inputField = document.getElementById(inputId);

  inputField.addEventListener("focus", function () {
    this.style.borderColor = "rgba(93, 55, 243, 1)";
  });
}

// Call setInputFocusBorder for each input field

["author", "header", "description", "date", "email", "category"].forEach(
  setInputFocusBorder
);

/////   add image code-start

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const uploadedFile = document.getElementById("uploadedFile");
const fileList = document.getElementById("UploadedfileName");
const array = [];

["dragover", "dragenter"].forEach((eventName) => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop propagation to prevent further handling
    dropArea.classList.add("highlight");
  });
});

// Remove highlighting on dragleave and drop
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop propagation to prevent further handling
    dropArea.classList.remove("highlight");

    if (eventName === "drop") {
      const files = e.dataTransfer.files;
      handleFiles(files);
    }
  });
});

// Handle file drop
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Stop propagation to prevent further handling
  const files = e.dataTransfer.files;
  handleFiles(files);
});

// Handle selected files from input
fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  handleFiles(files);
});

// Function to handle uploaded files
function handleFiles(files) {
  for (const file of files) {
    displayFileInfo(file);
    // uploadFile(file);

    // Hide drop area and show uploadedFile
    dropArea.style.display = "none";
    uploadedFile.style.display = "block";
    fullValidation();
  }
}

// Function to display uploaded file info
function displayFileInfo(file) {
  const fileNameDiv = document.createElement("div");
  fileNameDiv.textContent = `${file.name}`;
  fileList.textContent = `${file.name}`;
}

function uploadFile(file) {
  console.log(`Uploading ${file.name}...`);
}

const deleteImage = document.getElementById("deleteImage");

// Add event listener for deleting the image
deleteImage.addEventListener("click", () => {
  // Clear file name display
  fileList.textContent = "";

  // Hide uploadedFile and show drop area
  uploadedFile.style.display = "none";
  dropArea.style.display = "block";

  fileInput.value = "";
});

/////   add image code-end

///////////////////////////////////////////////////////////////////////

///// category

function handleCategoryClick(event) {
  const clickedItem = event.target;
  const itemId = clickedItem.getAttribute("data-item-id"); // Get the item.id

  // Push the item.id into the array
  array.push(itemId);
  function checkBorder() {
    if (array.length > 0) {
      categoryDiv.style.borderColor = "green";
    }
  }
  checkBorder();
  fullValidation();

  const categoryInput = document.getElementById("category");

  // Create a span element to hold the clicked category text and image
  const categorySpan = document.createElement("span");
  categorySpan.textContent = clickedItem.textContent;
  categorySpan.style.color = clickedItem.style.color;
  categorySpan.style.backgroundColor = clickedItem.style.backgroundColor;
  categorySpan.style.borderRadius = "30px";
  categorySpan.style.padding = "8px 16px";
  categorySpan.style.marginRight = "5px";

  // Adjust spacing between categories

  // Append the image to the category span
  categorySpan.appendChild(clickedItem.querySelector("img"));

  // Make the image visible and add the click listener
  categorySpan.querySelector("img").style.display = "block";
  categorySpan.querySelector("img").addEventListener("click", handleImageClick);

  // Append the span element to the input field
  categoryInput.appendChild(categorySpan);

  // Clear the clicked item's text content
  clickedItem.textContent = "";

  // Hide the clicked item instead of removing it
  clickedItem.style.display = "none";
  // console.log(array);
}

function handleImageClick(event) {
  const clickedImg = event.target;
  const categorySpan = clickedImg.parentElement;
  const navItemsContainer = document.querySelector(".nav-items");

  // Create a new list item to hold the category
  const listItem = document.createElement("li");
  listItem.textContent = categorySpan.textContent;
  listItem.style.color = categorySpan.style.color;
  listItem.style.backgroundColor = categorySpan.style.backgroundColor;

  // Append the image to the list item (but keep it hidden)
  listItem.appendChild(clickedImg);
  clickedImg.style.display = "none"; // Hide the image

  // Add a click listener to the list item
  listItem.addEventListener("click", handleCategoryClick);

  // Append the list item to the nav items
  navItemsContainer.appendChild(listItem);

  // Remove the category span from the input field
  categorySpan.remove();
}

////// Fetch categories from API
fetch("https://api.blog.redberryinternship.ge/api/categories")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((jsonData) => {
    const navItemsContainer = document.querySelector(".nav-items");

    jsonData.data.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      listItem.style.color = item.text_color;
      listItem.style.backgroundColor = item.background_color;
      listItem.setAttribute("data-item-id", item.id);

      listItem.addEventListener("click", handleCategoryClick); // Event listener added here

      navItemsContainer.appendChild(listItem);
      // Create the image element (initially hidden)
      const img = document.createElement("img");
      img.src = "../images/white-x.png";
      img.alt = "Close icon";
      img.style.width = "16px";
      img.style.height = "16px";
      img.style.marginLeft = "5px";
      img.style.display = "none"; // Hide the image initially

      listItem.appendChild(img);

      listItem.addEventListener("click", handleCategoryClick);

      navItemsContainer.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
////// Fetch categories from API end

/////  arrow down button

const arrowDownButton = document.getElementById("arrow-down");
const navDiv = document.querySelector(".nav");

arrowDownButton.addEventListener("click", () => {
  function hideOrShowCategories() {
    if (navDiv.style.display === "none") {
      navDiv.style.display = "block";
    } else {
      navDiv.style.display = "none";
    }
  }

  hideOrShowCategories();
});

///// make posts

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const author = document.getElementById("author").value;
  const header = document.getElementById("header").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const email = document.getElementById("email").value;
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append("title", header);
  formData.append("description", description);
  formData.append("image", file);
  formData.append("author", author);
  formData.append("publish_date", date);
  formData.append("categories", JSON.stringify(array));
  formData.append("email", email);

  const token =
    "d74bdc613d9bb82292c47558b64a59b82db56ca5ade0eaf52966a41d5d046da9";

  axios
    .post("https://api.blog.redberryinternship.ge/api/blogs", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      console.log(data);
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

///// make posts - end

////// validate button

function fullValidation() {
  const button = document.querySelector(".button button");

  if (
    document.getElementById("author").style.borderColor == "green" &&
    document.getElementById("header").style.borderColor == "green" &&
    document.getElementById("description").style.borderColor == "green" &&
    document.getElementById("date").style.borderColor == "green" &&
    document.getElementById("email").style.borderColor == "green" &&
    document.getElementById("uploadedFile").style.display == "block" &&
    array.length > 0
  ) {
    button.style.backgroundColor = "rgba(93, 55, 243, 1)";
  }
}
