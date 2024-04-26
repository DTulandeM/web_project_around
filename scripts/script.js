const popupProfile = document.querySelector("#menupopup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector(".menupopup__button-close");

function showPopupProfile() {
  popupProfile.classList.add("menupopup__profile-show");
}
function closePopupProfile() {
  popupProfile.classList.remove("menupopup__profile-show");
}

profileButton.addEventListener("click", showPopupProfile);
closeProfileButton.addEventListener("click", closePopupProfile);
