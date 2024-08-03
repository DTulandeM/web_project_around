export default class UserInfo {
  constructor({ name, about, avatar, id }) {
    this._userName = name;
    this._userAboutme = about;
    this._userAvatar = avatar;
    this._userId = id;
    this.profileName = document.querySelector(".profile__name");
    this.profileAbout = document.querySelector(".profile__about-me");
    this.profileAvatar = document.querySelector(".profile__avatar");
    this.userValues = { name: "", about: "" };
  }
  getUserInfo() {
    this.userValues.name = this.profileName.textContent;
    this.userValues.about = this._userAboutme;
    return this.userValues;
  }
  setUserInfo(data) {
    this._userName = data.name;
    this.profileName.textContent = data.name;
    this._userAboutme = data.about;
    this.profileAbout.textContent = data.about;
    this._userAvatar = data.avatar;
    this.profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    this._userId = data._id;
  }
  setUserAvatar(data) {
    this.profileAvatar.style.backgroundImage = `url(${data.avatar})`;
  }
}
