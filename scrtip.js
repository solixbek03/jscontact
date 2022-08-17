let elForm = document.querySelector(".hero__form");
let elInputName = elForm.querySelector(".hero__input-firstname");
let elInputSurename = elForm.querySelector(".hero__input-surename");
let elInputEmail = elForm.querySelector(".hero__input-email");
let elInputTel = elForm.querySelector(".hero__input-tel");
let elInputDate = elForm.querySelector(".hero__input-date");

let elResultF = document.querySelector(".hero__resultF")
let elResultEmail = document.querySelector(".hero__result-email")
let elResultTel = document.querySelector(".hero__result-tel")
let elResultDate = document.querySelector(".hero__result-date")


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();


  let InputNameVall = elInputName.value;
  let InputSurenameVall = elInputSurename.value;
  let InputEmailVall = elInputEmail.value;
  let InputTelVall = elInputTel.value;
  let InputDateVall = elInputDate.value;

  let contacts = {
    name: InputNameVall,
    sureName: InputSurenameVall,
    email: InputEmailVall,
    tel: InputTelVall,
    date: InputDateVall
  }


  elResultF.textContent = `${contacts.name} ${contacts.sureName}`;
  elResultEmail.textContent = contacts.email;
  elResultTel.textContent = contacts.tel;
  elResultDate.textContent = contacts.date;
})

// let contact = {
//   name:
// }


// contacts.forEach(function (contact) {
//   console.log(contact.ism, contact.familiya);
// })