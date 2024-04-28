const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector(
  ".popup-profile__button-close"
);
const saveProfileButton = document.querySelector(".form__button-save");
const formProfile = document.querySelector("#form-profile");
const overlay = document.querySelector("#cover");
let formProfileName = document.querySelector(".profile__name");
let formProfileAboutme = document.querySelector(".profile__about-me");
let formInputName = document.querySelector("#profile-name");
let formInputAboutme = document.querySelector("#profile-aboutme");

function showPopupProfile() {
  popupProfile.classList.add("popup-profile-show");
  overlay.classList.add("popup-profile__overlay");
  formInputName.value = formProfileName.textContent;
  formInputAboutme.value = formProfileAboutme.textContent;
}
function closePopupProfile() {
  popupProfile.classList.remove("popup-profile-show");
  overlay.classList.remove("popup-profile__overlay");
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formProfileName.textContent = formInputName.value;
  formProfileAboutme.textContent = formInputAboutme.value;
  closePopupProfile();
});

profileButton.addEventListener("click", showPopupProfile);
closeProfileButton.addEventListener("click", closePopupProfile);
