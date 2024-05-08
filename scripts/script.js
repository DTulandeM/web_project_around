const popupProfile = document.querySelector("#popup-profile");
const popupAddImage = document.querySelector("#popup-addimage");
const profileButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const closeProfileButton = document.querySelector("#button__close-profile");
const closeAddImageButton = document.querySelector("#button__close-addimage");
const saveProfileButton = document.querySelector(".form__button-save");
const madeImageButton = document.querySelector("form__button-addimage");
const formProfile = document.querySelector("#form-profile");
const formAddImage = document.querySelector("#form-addimage");
const overlay = document.querySelector("#cover");
let formProfileName = document.querySelector(".profile__name");
let formProfileAboutme = document.querySelector(".profile__about-me");
let formInputName = document.querySelector("#profile-name");
let formInputAboutme = document.querySelector("#profile-aboutme");

function showPopupProfile() {
  popupProfile.classList.add("popup-show");
  overlay.classList.add("popup__overlay");
  formInputName.value = formProfileName.textContent;
  formInputAboutme.value = formProfileAboutme.textContent;
}

function showPopupAddImage() {
  popupAddImage.classList.add("popup-show");
  overlay.classList.add("popup__overlay");
}
function closePopup() {
  popupProfile.classList.remove("popup-show");
  popupAddImage.classList.remove("popup-show");
  overlay.classList.remove("popup__overlay");
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formProfileName.textContent = formInputName.value;
  formProfileAboutme.textContent = formInputAboutme.value;
  closePopup();
});

profileButton.addEventListener("click", showPopupProfile);
profileAddButton.addEventListener("click", showPopupAddImage);
closeProfileButton.addEventListener("click", closePopup);
closeAddImageButton.addEventListener("click", closePopup);
