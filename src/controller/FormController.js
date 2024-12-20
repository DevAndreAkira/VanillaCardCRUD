import { Card, CardsCointainer } from "../component/Card";
import { CardModel } from "../model/CardModel";

export class FormController {
  constructor() {
    this.title = document.querySelector("#titleForm");
    this.desc = document.querySelector("#descForm");
    this.container = document.querySelector("#cardsContainer");
    this.storageCads = localStorage.getItem("cards");
    this.cards = !this.storageCads ? [] : JSON.parse(this.storageCads);
    this.readCard();
    this.renderFunctions();
  }

  submitForm() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.createCard();
      this.cleanForm();
    });
  }

  cleanForm() {
    this.title.value = "";
    this.title.focus();
    this.desc.value = "";
  }

  setLocalStorage(data) {
    const dataConverted = JSON.stringify(data);
    localStorage.setItem("cards", dataConverted);
  }

  renderFunctions() {
    this.updateCard();
    this.deleteCard();
  }

  renderCards(data) {
    this.container.innerHTML = CardsCointainer(data.map((data) => Card(data)));
  }

  //   CRUD
  createCard() {
    console.log("Create");
    const newCard = new CardModel(this.title.value, this.desc.value);

    this.cards.push(newCard);
    this.renderCards(this.cards);
    this.renderFunctions();
    this.setLocalStorage(this.cards);
  }

  readCard() {
    console.log("Read");
    if (this.storageCads) {
      const data = JSON.parse(this.storageCads);
      this.renderCards(data);
    }
  }

  updateCard() {
    const arrayBtn = document.querySelectorAll(".updateButton");
    arrayBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        console.log("Update");
        const newTitle = prompt("Alterar título", this.cards[index].titleCard);
        const newDesc = prompt("Alterar descrição", this.cards[index].descCard);

        this.cards[index].titleCard = newTitle;
        this.cards[index].descCard = newDesc;
        this.renderCards(this.cards);
        this.renderFunctions();
        this.setLocalStorage(this.cards);
      });
    });
  }

  deleteCard() {
    const arrayBtn = document.querySelectorAll(".deleteButton");
    arrayBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        console.log("Delete");
        this.cards.splice(index, 1);
        this.renderCards(this.cards);
        this.renderFunctions();
        this.setLocalStorage(this.cards);
      });
    });
  }
}
