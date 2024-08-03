import {
  closeFormButton,
  closeShowImageButton,
  closeShowDeleteBtn,
} from "../components/utils.js";
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._overlay = document.querySelector("#cover");
  }
  open() {
    this._popupElement.classList.add("popup-show");
    this._overlay.classList.add("popup__overlay");
  }
  close() {
    this._popupElement.classList.remove("popup-show");
    this._overlay.classList.remove("popup__overlay");
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._overlay.addEventListener("click", () => {
      this.close();
    });
    closeFormButton.forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        this.close();
      });
    });
    closeShowImageButton.addEventListener("click", () => {
      this.close();
    });
    closeShowDeleteBtn.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
