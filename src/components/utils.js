export const elementContainder = document.querySelector(".elements");
export const popupOpenImage = document.querySelector("#popup-imagen");
export const closeShowImageButton = document.querySelector(
  "#button__close-showimage"
);
export const closeShowDeleteBtn = document.querySelector(
  "#button__close-delete"
);
export const deleteConfirmationBtn = document.querySelector(
  "#button__card-delete"
);
export const profileButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const profileChangeAvatar = document.querySelector(
  ".profile__avatar-circle"
);
export const closeFormButton = document.querySelectorAll(
  ".popup__button-close"
);
export const formList = Array.from(document.querySelectorAll(".form"));
export const saveProfileButton = document.querySelector(".form__button-save");
export const addImageButton = document.querySelector("form__button-addimage");
export const formInputName = document.querySelector("#profile-name");
export const formInputAboutme = document.querySelector("#profile-aboutme");
export const formInputAvatar = document.querySelector("#change-avatar");
export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
