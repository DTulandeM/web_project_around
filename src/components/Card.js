import { popupOpenImage, closeShowImageButton } from "./utils.js";
export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this.handleCardClick = handleCardClick;
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
  handleOpenCard() {
    this.handleCardClick(this._cardTitle, this._link);
  }

  _setEventListeners() {
    this._buttonLikeCard.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this._handleDeleteBtn();
    });
    this._cardImage.addEventListener("click", () => {
      this.handleOpenCard();
    });
  }

  generateCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
