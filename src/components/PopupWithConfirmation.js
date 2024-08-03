import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.deleteConfirmationBtn = document.querySelector("#button__card-delete");
  }

  close() {
    super.close();
  }
  setHandleDelete(handleDelete) {
    this.handleDelete = handleDelete;
  }
  setEventListeners() {
    super.setEventListeners();
    this.deleteConfirmationBtn.addEventListener("click", () => {
      this.deleteConfirmationBtn.textContent = "Guardando...";
      this.handleDelete();
    });
  }
}
