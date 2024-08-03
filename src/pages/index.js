import "./index.css";
import logoSrc from "../images/logo_aroundUSA.svg";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  elementContainder,
  formList,
  profileButton,
  profileAddButton,
  deleteConfirmationBtn,
  settings,
  formInputName,
  formInputAboutme,
  formInputAvatar,
  profileChangeAvatar,
} from "../components/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
const logoImage = document.getElementById("header-logo");
logoImage.src = logoSrc;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "d71d6b20-43e5-4a1a-bc6b-4b351d1b9544",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const userInfo = new UserInfo({
  name: "",
  about: "",
  avatar: "",
  id: "",
});
api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
});
const popupImage = new PopupWithImage("#popup-imagen");
const popupDelete = new PopupWithConfirmation("#popup-delete");
popupImage.setEventListeners();
popupDelete.setEventListeners();

function createdCard(item) {
  const card = new Card(
    item,
    popupImage.handleCardClick,
    () => {
      popupDelete.open();
      popupDelete.setHandleDelete(() => {
        api
          .removeCard(item._id)
          .then(() => {
            card.handleDeleteCard();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            deleteConfirmationBtn.textContent = "Si";
            popupDelete.close();
          });
      });
    },
    userInfo._userId,
    api.addLikeCard.bind(api),
    api.removeLikeCard.bind(api)
  );
  return card;
}

api
  .getInitialCards()
  .then((cards) => {
    const cardList = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = createdCard(item);
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      elementContainder
    );

    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

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

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  api
    .editUserInfo(inputs)
    .then((user) => {
      userInfo.setUserInfo(user);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.close();
    });
});

const popupAddImage = new PopupWithForm("#popup-addimage", (inputs) => {
  api
    .addNewCard(inputs)
    .then((input) => {
      const addCardElement = createdCard(input);
      const cardElement = addCardElement.generateCard();

      elementContainder.prepend(cardElement);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddImage.close();
    });
});

profileButton.addEventListener("click", () => {
  popupProfile.open();

  api
    .getUserInfo()
    .then((user) => {
      userInfo.setUserInfo(user);
      const userValues = userInfo.getUserInfo();
      formInputName.value = userValues.name;
      formInputAboutme.value = userValues.about;
      validationForm();
    })
    .catch((err) => {
      console.log(err);
    });

  toggleButtonForm();
  resetValidationForm();
});
profileAddButton.addEventListener("click", () => {
  popupAddImage.open();
  validationForm();
  toggleButtonForm();
  resetValidationForm();
});
const popupPhotoChange = new PopupWithForm("#popup-change_avatar", (inputs) => {
  api
    .editUserAvatar(inputs)
    .then((user) => {
      formInputAvatar.value = userInfo.setUserAvatar(user);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupPhotoChange.close();
    });
});
profileChangeAvatar.addEventListener("click", () => {
  popupPhotoChange.open();
  validationForm();
  toggleButtonForm();
  resetValidationForm();
});
popupProfile.setEventListeners();
popupAddImage.setEventListeners();
popupPhotoChange.setEventListeners();
