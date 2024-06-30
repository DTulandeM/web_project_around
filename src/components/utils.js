export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
export const elementContainder = document.querySelector(".elements");
export const popupOpenImage = document.querySelector("#popup-imagen");
export const closeShowImageButton = document.querySelector(
  "#button__close-showimage"
);
export const profileButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const closeFormButton = document.querySelectorAll(
  ".popup__button-close"
);
export const formList = Array.from(document.querySelectorAll(".form"));
export const saveProfileButton = document.querySelector(".form__button-save");
export const addImageButton = document.querySelector("form__button-addimage");
export const formInputName = document.querySelector("#profile-name");
export const formInputAboutme = document.querySelector("#profile-aboutme");
export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
