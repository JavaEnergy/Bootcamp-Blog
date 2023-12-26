const loginButton = document.querySelector(".log-in button");
const emailInput = document.querySelector("#email");
const errorDiv = document.querySelector(".error");

const emailRegex = /@redberry\.ge$/;

loginButton.addEventListener("click", async () => {
  const email = emailInput.value;

  if (!emailRegex.test(email)) {
    errorDiv.style.display = "flex";
    return; // Prevent the request if email is invalid
  } else {
    errorDiv.style.display = "none";
  }

  const token =
    "230c46a6e9f328daedbbbd55ff31ff2aca13a76e4578c2c0318e30d33b3be796";

  axios
    .post(
      "https://api.blog.redberryinternship.ge/api/login",

      email,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
