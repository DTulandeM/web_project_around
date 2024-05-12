const popupProfile = document.querySelector("#popup-profile");
const popupAddImage = document.querySelector("#popup-addimage");
const profileButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const closeProfileButton = document.querySelector("#button__close-profile");
const closeAddImageButton = document.querySelector("#button__close-addimage");
const saveProfileButton = document.querySelector(".form__button-save");
const addImageButton = document.querySelector("form__button-addimage");
const formProfile = document.querySelector("#form-profile");
const formAddImage = document.querySelector("#form-addimage");
const overlay = document.querySelector("#cover");
const elementContainder = document.querySelector(".elements");
let formProfileName = document.querySelector(".profile__name");
let formProfileAboutme = document.querySelector(".profile__about-me");
let formInputName = document.querySelector("#profile-name");
let formInputAboutme = document.querySelector("#profile-aboutme");
let formImageInputName = document.querySelector("#addimage-name");
let formImageInputLink = document.querySelector("#addimage-link");
const initialCards = [
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
  formImageInputName.value = "";
  formImageInputLink.value = "";
}

function addCards(name, link) {
  const cardTemplate = document.querySelector("#template-elements").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const buttonDeleteCard = cardElement.querySelector(".element__button-trash");
  const buttonLikeCard = cardElement.querySelector(".element__button-like");
  buttonDeleteCard.addEventListener("click", function () {
    cardElement.remove();
  });
  buttonLikeCard.addEventListener("click", function () {
    buttonLikeCard.classList.toggle("element__button-like_active");
  });

  cardImage.src = link;
  cardImage.alt = "Fotografia de " + name;
  cardTitle.textContent = name;
  return cardElement;
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  formProfileName.textContent = formInputName.value;
  formProfileAboutme.textContent = formInputAboutme.value;
  closePopup();
});

formAddImage.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const addCardElement = addCards(
    formImageInputName.value,
    formImageInputLink.value
  );
  elementContainder.prepend(addCardElement);
  closePopup();
});

initialCards.forEach(function (item) {
  const newCardElement = addCards(item.name, item.link);
  elementContainder.append(newCardElement);
});
profileButton.addEventListener("click", showPopupProfile);
profileAddButton.addEventListener("click", showPopupAddImage);
closeProfileButton.addEventListener("click", closePopup);
closeAddImageButton.addEventListener("click", closePopup);
