// Function to save form data to localStorage
function saveFormData() {
  const form = document.getElementById("form");

  // Event listener for input fields
  form.addEventListener("input", function (event) {
    // Get input values
    const authorValue = document.getElementById("author").value;
    const headerValue = document.getElementById("header").value;
    const descriptionValue = document.getElementById("description").value;
    const dateValue = document.getElementById("date").value;
    const categoryValue = document.getElementById("category").innerText;
    const emailValue = document.getElementById("email").value;

    // Create an object with the form data
    const formData = {
      author: authorValue,
      header: headerValue,
      description: descriptionValue,
      date: dateValue,
      category: categoryValue,
      email: emailValue,
    };

    // Store form data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
  });
}

// Function to load form data from localStorage
function loadFormData() {
  const formData = localStorage.getItem("formData");

  if (formData) {
    // Parse the stored data back into an object
    const storedData = JSON.parse(formData);

    // Set input values from localStorage
    document.getElementById("author").value = storedData.author;
    document.getElementById("header").value = storedData.header;
    document.getElementById("description").value = storedData.description;
    document.getElementById("date").value = storedData.date;
    document.getElementById("category").innerText = storedData.category;
    document.getElementById("email").value = storedData.email;
  }
}

// Call functions to save and load form data
saveFormData();
loadFormData();
