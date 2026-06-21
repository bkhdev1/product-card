//форма подписки
const testEmailForm = document.querySelector('#subscribe-form');

testEmailForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const emailInput = form.querySelector('input[name="email"]');
  if (!emailInput.checkValidity()) {
    alert('Введите корректный email');
    return;
  }

  console.log(data);
  form.reset();
});

//модальное окно
const btn = document.getElementById('register-btn');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close');
const form = document.getElementById('reg-form');

const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeatPassword');

let user = null;

btn.addEventListener('click', () => {
  modalWindow.classList.add('modal-showed');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden'; 
});

function closeModal() {
  modalWindow.classList.remove('modal-showed');
  overlay.classList.remove('show');
  document.body.style.overflow = ''; 
  form.reset(); 
}

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!form.checkValidity()) {
    alert('Регистрация отклонена! Проверьте данные.');
    return;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert('Регистрация отклонена! Пароли не совпадают.');
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  data.createdOn = new Date();
  user = data;
  console.log('Регистрация успешна!', user);
  closeModal();
});