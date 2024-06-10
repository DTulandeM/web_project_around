import { popupOpenImage, overlay, closeShowImageButton } from "./utils.js";
export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector("#template-elements")
      .content.querySelector(".element")
      .cloneNode(true);

    return this._cardElement;
  }

  _setProperties() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(".element__image");
    this._cardImage.alt = `Fotografia de ${this._name}`;
    this._cardImage.src = this._link;
    this._cardTitle = this._card.querySelector(".element__title").textContent =
      this._name;
    this._buttonLikeCard = this._card.querySelector(".element__button-like");
    this._buttonDeleteCard = this._card.querySelector(".element__button-trash");
  }

  _handleLikeBtn() {
    this._buttonLikeCard.classList.toggle("element__button-like_active");
  }
  _handleDeleteBtn() {
    this._card.remove();
  }
  _handleOpenPopup() {
    this._showImage = document.querySelector(".popup-imagen__review");
    this._showSubtitle = document.querySelector(".popup-imagen__subtitle");
    this._showImage.alt = `Fotografia de ${this._name}`;
    this._showImage.src = this._link;
    this._showSubtitle.textContent = this._name;
    popupOpenImage.classList.add("popup-show");
    overlay.classList.add("popup__overlay");
  }
  handleClosePopup() {
    popupOpenImage.classList.remove("popup-show");
    overlay.classList.remove("popup__overlay");
  }

  _setEventListeners() {
    this._buttonLikeCard.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this._handleDeleteBtn();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    closeShowImageButton.addEventListener("click", () => {
      this.handleClosePopup();
    });
    overlay.addEventListener("click", () => {
      this.handleClosePopup();
    });
  }

  generateCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
