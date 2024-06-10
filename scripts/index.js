import Card from "./Card.js";
import FormValidator from "./formValidator.js";
import {
  initialCards,
  elementContainder,
  overlay,
  popupProfile,
  popupAddImage,
  closeProfileButton,
  closeAddImageButton,
  formAddImage,
  formProfile,
  formList,
  profileButton,
  profileAddButton,
  settings,
  formInputName,
  formInputAboutme,
  formProfileName,
  formProfileAboutme,
  formImageInputName,
  formImageInputLink,
} from "./utils.js";

//Generación de Cartas iniciales
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  elementContainder.append(cardElement);
});

//Cierre de los popups con la tecla "ESC"
function keyHandlerClose(evt) {
  if (evt.key === "Escape") {
    const closeCard = new Card();
    closeCard.handleClosePopup();
    closePopup();
  }
}

function showPopupProfile() {
  popupProfile.classList.add("popup-show");
  overlay.classList.add("popup__overlay");
  validationForm();
  formInputName.value = formProfileName.textContent;
  formInputAboutme.value = formProfileAboutme.textContent;
  toggleButtonForm();
}

function showPopupAddImage() {
  popupAddImage.classList.add("popup-show");
  overlay.classList.add("popup__overlay");
  validationForm();
  toggleButtonForm();
}
function closePopup() {
  popupProfile.classList.remove("popup-show");
  popupAddImage.classList.remove("popup-show");
  overlay.classList.remove("popup__overlay");
  resetValidationForm();
  formImageInputName.value = "";
  formImageInputLink.value = "";
}
function validationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.enableValidation();
  });
}
function resetValidationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.resetValidation();
  });
}
function toggleButtonForm() {
  formList.forEach((formElement) => {
    const toggleButton = new FormValidator(formElement, settings);
    toggleButton._toggleButtonState();
  });
}
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formProfileName.textContent = formInputName.value;
  formProfileAboutme.textContent = formInputAboutme.value;
  closePopup();
});

formAddImage.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const addCardElement = new Card(
    formImageInputName.value,
    formImageInputLink.value
  );
  const cardElement = addCardElement.generateCard();
  elementContainder.prepend(cardElement);
  closePopup();
});
document.addEventListener("keydown", keyHandlerClose);
profileButton.addEventListener("click", showPopupProfile);
profileAddButton.addEventListener("click", showPopupAddImage);
closeProfileButton.addEventListener("click", closePopup);
closeAddImageButton.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
