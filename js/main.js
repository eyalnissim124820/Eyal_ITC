const GITHUB_URL = "https://api.github.com/users/eyalnissim124820";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    // updating profileImage
    profileImage.src = data.avatar_url;
    profileImage.alt = data.name;

    // updating profileName
    const tempName = data.name;
    document.getElementById("profile-name").innerHTML = tempName;
  });