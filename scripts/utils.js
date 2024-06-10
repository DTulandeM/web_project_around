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
export const overlay = document.querySelector("#cover");
export const popupProfile = document.querySelector("#popup-profile");
export const popupAddImage = document.querySelector("#popup-addimage");
export const profileButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const closeProfileButton = document.querySelector(
  "#button__close-profile"
);
export const closeAddImageButton = document.querySelector(
  "#button__close-addimage"
);
export const formList = Array.from(document.querySelectorAll(".form"));
export const saveProfileButton = document.querySelector(".form__button-save");
export const addImageButton = document.querySelector("form__button-addimage");
export const formProfile = document.querySelector("#form-profile");
export const formAddImage = document.querySelector("#form-addimage");
export const formProfileName = document.querySelector(".profile__name");
export const formProfileAboutme = document.querySelector(".profile__about-me");
export const formInputName = document.querySelector("#profile-name");
export const formInputAboutme = document.querySelector("#profile-aboutme");
export const formImageInputName = document.querySelector("#addimage-name");
export const formImageInputLink = document.querySelector("#addimage-link");
export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
