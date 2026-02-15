// покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0d00ff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
})

//покраска всех карточек

const greenHashColor = '#00ff40';

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardsButton = document.getElementById('recolor-all-product-cards-button');

recolorAllCardsButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
});

// переход на страницу гугл

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const question = confirm('вы действительно хотите перейти на сайт Google?');

  if (question === true) {
    window.open('https://google.com');
  }
  else {
    console.log('Пользователь отменил переход на гугл')
  }
}

// вывод заголовка в консоль при наведении

const title = document.querySelector('.title__text');
title.addEventListener('mouseover', function() {
  console.log(title.textContent)
})

// добавление кнопки, меняющей цвет при нажатии

const recolorButton = document.querySelector('.recolor-button');
recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('recolor-button__active');
})