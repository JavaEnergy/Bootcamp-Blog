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
