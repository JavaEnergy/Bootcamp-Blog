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

      navItemsContainer.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

const enterButton = document.getElementById("enterButton");
const logInWindow = document.getElementById("logIn");
const backdrop = document.querySelector(".backdrop");

function enter() {
  logInWindow.style.display = "block";
  backdrop.style.display = "block";
}

enterButton.addEventListener("click", enter);

const xButton = document.querySelector(".x");

function back() {
  logInWindow.style.display = "none";
  backdrop.style.display = "none";
}
xButton.addEventListener("click", back);

const loginButton = document.querySelector(".log-in button");
const emailInput = document.querySelector("#email");
const errorDiv = document.querySelector(".error");

loginButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value;

  const token =
    "230c46a6e9f328daedbbbd55ff31ff2aca13a76e4578c2c0318e30d33b3be796";

  try {
    const response = await axios.post(
      "https://api.blog.redberryinternship.ge/api/login",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const successDiv = document.querySelector(".log-in-success");
    const prevDiv = document.getElementById("logIn");
    successDiv.style.display = "block";
    prevDiv.style.display = "none";
  } catch (error) {
    console.error("Error:", error);

    // Display error message to the user
    errorDiv.style.display = "flex";
    errorDiv.querySelector(".error-p").innerText = "ელ-ფოსტა არ მოიძებნა";
  }
});

const okButton = document.getElementById("okButton");
const closeX = document.getElementById("closeX");

function displayAddBtn() {
  const loginSuccess = document.querySelector(".log-in-success");
  const enterButton = document.getElementById("enterButton");
  const addBlogButon = document.getElementById("addBlogButon");
  const backdrop = document.querySelector(".backdrop");
  const aHref = document.querySelector(".a-to-addBlog");

  loginSuccess.style.display = "none";
  enterButton.style.display = "none";
  addBlogButon.style.display = "block";
  backdrop.style.display = "none";
  aHref.style.display = "block";
}

okButton.addEventListener("click", displayAddBtn);
closeX.addEventListener("click", displayAddBtn);
function fetchAndPopulateBlog() {
  const token =
    "5f733e9b34d7ffcd08bc75c6b9b117d13ae07bd6b4fb53207d3f504d15a07197";
  const id = 1;

  axios
    .get(`https://api.blog.redberryinternship.ge/api/blogs/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const responseData = response.data;
      const blogSection = document.querySelector(".blogs");
      const blogTemplate = `
      <div class="blog">
        <img class="main-img" src="${responseData.image}" alt="" />
        <h2>${responseData.author}</h2>
        <h6>${responseData.publish_date}</h6>
        <h1>${responseData.title}</h1>
        <div class="categories">
          ${responseData.categories
            .map((category) => `<span>${category.title}</span>`)
            .join("")}
        </div>
        <p>${responseData.description}</p>
        <a href="#">სრულად ნახვა</a>
        <img class="arrow pointer" src="./assets/images/Arrow 1.png" alt="" />
      </div>
    `;
      blogSection.innerHTML = blogTemplate;
    })
    .catch((error) => {
      console.error("Error fetching blog data:", error);
      // Handle errors
    });
}

fetchAndPopulateBlog();
