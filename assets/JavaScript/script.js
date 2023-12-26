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

const emailRegex = /@redberry\.ge$/;

loginButton.addEventListener("click", async () => {
  const email = emailInput.value;

  if (!emailRegex.test(email)) {
    errorDiv.style.display = "flex";
    return;
  } else {
    errorDiv.style.display = "none";
  }

  const token =
    "230c46a6e9f328daedbbbd55ff31ff2aca13a76e4578c2c0318e30d33b3be796";

  axios
    .post(
      "https://api.blog.redberryinternship.ge/api/login",
      {
        email: email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    .then((data) => {
      const successDiv = document.querySelector(".log-in-success");
      const prevDiv = document.getElementById("logIn");
      successDiv.style.display = "block";
      prevDiv.style.display = "none";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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
