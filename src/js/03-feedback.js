import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

initPage();

const onFormInput = evt => {
  const { name, value } = evt.target;

  let saveData = load(LOCAL_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;
  save(LOCAL_STORAGE_KEY, saveData);
};

formRef.addEventListener('input', throttle(onFormInput, 500));

function initPage() {
  const saveData = load(LOCAL_STORAGE_KEY);

  if (!saveData) {
    return;
  }

  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

const handleSubmit = evt => {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  console.log({ email: email.value, message: message.value });

  evt.currentTarget.reset();
  remove(LOCAL_STORAGE_KEY);
};

formRef.addEventListener('submit', handleSubmit);
