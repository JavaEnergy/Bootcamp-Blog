// Get drop area, file input, and uploadedFile element
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const uploadedFile = document.getElementById("uploadedFile");
const fileList = document.getElementById("UploadedfileName");

[
  // Prevent default behavior on dragover and dragenter to enable drop
  ("dragover", "dragenter"),
].forEach((eventName) => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    dropArea.classList.add("highlight");
  });
});

// Remove highlighting on dragleave and drop
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, () => {
    dropArea.classList.remove("highlight");
  });
});

// Handle file drop
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
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

  // Optionally, clear the file input to prepare for a new upload
  fileInput.value = "";
});
/////////////////////////////////////////////////////

// const dropArea = document.getElementById("drop-area");
// const fileInput = document.getElementById("fileInput");
// const uploadedFilesList = document.createElement("ul");

// // Handle drag-and-drop events
// dropArea.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   dropArea.classList.add("dragover");
// });

// dropArea.addEventListener("dragleave", () => {
//   dropArea.classList.remove("dragover");
// });

// dropArea.addEventListener("drop", (event) => {
//   event.preventDefault();
//   dropArea.classList.remove("dragover");
//   handleFiles(event.dataTransfer.files);
// });

// // Handle file selection from the input
// fileInput.addEventListener("change", (event) => {
//   handleFiles(event.target.files);
// });

// function handleFiles(files) {
//   for (const file of files) {
//     const fileName = file.name;

//     // Display feedback to the user
//     const listItem = document.createElement("li");
//     listItem.textContent = fileName;
//     uploadedFilesList.appendChild(listItem);
//     dropArea.appendChild(uploadedFilesList);

//     // Process the file (e.g., upload to server)
//     // You'll need to implement this part based on your requirements
//     console.log("File uploaded:", fileName);
//   }
// }

// fetch("https://api.blog.redberryinternship.ge/api/categories")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((jsonData) => {
//     const navItemsContainer = document.querySelector(".nav-items");

//     jsonData.data.forEach((item, index) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = item.title;
//       listItem.style.color = item.text_color;
//       listItem.style.backgroundColor = item.background_color;

//       navItemsContainer.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// Function to handle category click
function handleCategoryClick(event) {
  const clickedItem = event.target;
  const categoryInput = document.getElementById("category");

  // Create a span element to hold the clicked category text and image
  const categorySpan = document.createElement("span");
  categorySpan.textContent = clickedItem.textContent;
  categorySpan.style.color = clickedItem.style.color;
  categorySpan.style.backgroundColor = clickedItem.style.backgroundColor;
  categorySpan.style.borderRadius = "30px";
  categorySpan.style.padding = "8px 16px";
  categorySpan.style.marginRight = "5px"; // Adjust spacing between categories

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

// Fetch categories from API
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
