const popupProfile = document.querySelector("#popup__profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector(
  ".popup__profile__button-close"
);
const saveProfileButton = document.querySelector(".form__button-save");
const formProfile = document.querySelector("#form-profile");
const overlay = document.querySelector("#cover");
let formProfileName = document.querySelector(".profile__name");
let formProfileAboutme = document.querySelector(".profile__about-me");
let formInputName = document.querySelector("#profile-name");
let formInputAboutme = document.querySelector("#profile-aboutme");

function showPopupProfile() {
  popupProfile.classList.add("popup__profile-show");
  overlay.classList.add("popup__profile-overlay");
  formInputName.value = formProfileName.textContent;
  formInputAboutme.value = formProfileAboutme.textContent;
}
function closePopupProfile() {
  popupProfile.classList.remove("popup__profile-show");
  overlay.classList.remove("popup__profile-overlay");
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formProfileName.textContent = formInputName.value;
  formProfileAboutme.textContent = formInputAboutme.value;
  closePopupProfile();
});

profileButton.addEventListener("click", showPopupProfile);
closeProfileButton.addEventListener("click", closePopupProfile);
