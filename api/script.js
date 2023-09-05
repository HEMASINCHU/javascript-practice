const generateUserBtn = document.getElementById("generate-user");
const loadingDiv = document.getElementById("loading");
const userInfoDiv = document.getElementById("user-info");
const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");

function fetchRandomUser() {
  loadingDiv.style.display = "block";
  userInfoDiv.style.display = "none";

  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const user = data.results[0];
        setTimeout(() => {
          resolve(user);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        loadingDiv.style.display = "none";
        userInfoDiv.textContent = "Failed to load user data.";
        reject(error);
      });
  });
}

function displayUserData(user) {
  userPhoto.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.textContent = user.email;
  loadingDiv.style.display = "none";
  userInfoDiv.style.display = "block";
}

generateUserBtn.addEventListener("click", () => {
  fetchRandomUser()
    .then((user) => {
      displayUserData(user);
    })
    .catch((error) => {
      console.error("Error generating random user:", error);
    });
});
