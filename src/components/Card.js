export default class Card {
  constructor(
    data,
    handleCardClick,
    handleCardDelete,
    userId,
    addLike,
    removeLike
  ) {
    this._name = data.name;
    this._link = data.link;
    this.handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._likesTotal = data.likes.length;
    this.handleCardDelete = handleCardDelete;
    this.owner = data.owner;
    this.userId = userId;
    this._cardId = data._id;
    this.addLike = addLike;
    this.removeLike = removeLike;
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
    if (this.owner._id !== this.userId) {
      this._buttonDeleteCard.remove();
    }
    this.likesCount = this._card.querySelector(".element__likes").textContent =
      this._likesTotal;
    if (
      (this.userLike = this._likes.some((like) => like._id === this.userId))
    ) {
      this._buttonLikeCard.classList.add("element__button-like_active");
    } else {
      this._buttonLikeCard.classList.remove("element__button-like_active");
    }
  }

  _handleLikebtn() {
    if (
      this._buttonLikeCard.classList.contains("element__button-like_active")
    ) {
      this.removeLike(this._cardId)
        .then((likes) => {
          this.likesCount = this._card.querySelector(
            ".element__likes"
          ).textContent = likes.likes.length;
          this._buttonLikeCard.classList.remove("element__button-like_active");
        })
        .catch((err) => console.log(err));
    } else {
      this.addLike(this._cardId)
        .then((likes) => {
          this._buttonLikeCard.classList.add("element__button-like_active");
          this.likesCount = this._card.querySelector(
            ".element__likes"
          ).textContent = likes.likes.length;
        })
        .catch((err) => console.log(err));
    }
  }

  handleOpenCard() {
    this.handleCardClick(this._cardTitle, this._link);
  }

  handleDeleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._buttonLikeCard.addEventListener("click", () => {
      this._handleLikebtn();
    });
    this._buttonDeleteCard.addEventListener("click", () => {
      this.handleCardDelete();
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
