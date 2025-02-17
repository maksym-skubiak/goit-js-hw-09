const formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

function saveData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.querySelector('.feedback-form').addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  saveData();
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
});
