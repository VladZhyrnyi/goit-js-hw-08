import _ from "lodash";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", _.throttle(onFormChange, 500));
form.addEventListener("submit", onFormSubmit);

if (localStorage.getItem("feedback-form-state")) {
  const dataFromStorage = JSON.parse(
    localStorage.getItem("feedback-form-state")
  );

  form.elements.email.value = dataFromStorage.email;
  form.elements.message.value = dataFromStorage.message;
}

function onFormChange(event) {
  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(currentFormDataToObj())
  );
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(currentFormDataToObj());

  event.currentTarget.reset();

  localStorage.removeItem("feedback-form-state");
}

function currentFormDataToObj() {
  const { email, message } = form.elements;
  return { email: email.value, message: message.value };
}
