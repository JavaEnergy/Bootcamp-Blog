function fetchAndPopulateBlog() {
  const token =
    "d74bdc613d9bb82292c47558b64a59b82db56ca5ade0eaf52966a41d5d046da9"; // Your token goes here

  axios
    .get(`https://api.blog.redberryinternship.ge/api/blogs`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const responseData = response.data;

      const blogSection = document.querySelector(".blogs");

      responseData.data.forEach((blogEntry) => {
        const blogTemplate = `
              <div class="blog">
                <img class="main-img" src="${blogEntry.image}" alt="" />
                <h2>${blogEntry.author}</h2>
                <h6>${blogEntry.publish_date}</h6>
                <h1>${blogEntry.title}</h1>
                <div class="categories">
                  ${blogEntry.categories
                    .map(
                      (category) => `
                        <span style="background-color: ${category.background_color}; color: ${category.text_color};">${category.title}</span>
                      `
                    )
                    .join("")}
                </div>
                <p>${blogEntry.description}</p>
                <div class="full">
                <a href="#">სრულად ნახვა</a>
                <img class="arrow pointer"  src="./assets/images/Arrow 1.png" alt="" /> </div>
              </div>
            `;
        blogSection.innerHTML += blogTemplate;
        console.log(blogEntry.categories);
      });
    })
    .catch((error) => {
      console.error("Error fetching blog data:", error);
      // Handle errors
    });
}

fetchAndPopulateBlog();

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

loginButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value;

  const token =
    "d74bdc613d9bb82292c47558b64a59b82db56ca5ade0eaf52966a41d5d046da9";

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
