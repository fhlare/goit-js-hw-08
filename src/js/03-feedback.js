import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form');

const KEY_STORAGE = "feedback-form-state";
let currentData = {};
form.addEventListener ('input', throttle(onInput, 500)) ;
const currentLocalData = JSON.parse(localStorage.getItem(KEY_STORAGE));

if (currentLocalData) {
  form.email.value = currentLocalData.email;
  form.message.value = currentLocalData.message;
};
  
  function onInput() {
    currentData = {
      email: form.email.value,
      message: form.message.value,
    };
  
    localStorage.setItem(KEY_STORAGE, JSON.stringify(currentData));
  };

  
  form.addEventListener('submit', onSubmit);
  function onSubmit(e) {
    e.preventDefault();
    console.log(currentData);
    localStorage.removeItem(KEY_STORAGE);
    e.currentTarget.reset();
};