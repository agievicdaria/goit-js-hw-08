var throttle = require('lodash.throttle');

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

formRef.addEventListener("input", throttle(onSetInform, 500));
formRef.addEventListener("submit", onSubmitInform);

const STORAGE_KEY = "feedback-form-state";

function onSetInform() {
  const objectWithInfo = {email: emailRef.value, message: messageRef.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectWithInfo));
}

function onSubmitInform(e) {
  e.preventDefault();
  console.log({ email: emailRef.value, message: messageRef.value });
  formRef.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checksTheValue(key) {
    try {
      const objectValue = localStorage.getItem(key);
      return objectValue === null ? null : JSON.parse(objectValue);
    } catch (error) {
      console.error(error);
    }
  }

const storagedObject = checksTheValue(STORAGE_KEY);
if (storagedObject) {
  emailRef.value = storagedObject.email;
  messageRef.value = storagedObject.message;
}

