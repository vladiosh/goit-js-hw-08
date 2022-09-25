const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {};

initPage();

const onFormInput = evt => {
  const { name, value } = evt.target;
  formData[name] = value;

  try {
    const stringifyData = JSON.stringify(formData);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
  } catch (error) {
    console.log(error);
  }
};

formRef.addEventListener('input', onFormInput);

function initPage() {
  const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  try {
    const parceData = JSON.parse(saveData);

    Object.entries(parceData).forEach(item => {
      console.log(item);
    });
  } catch (error) {
    console.log(error);
  }
}