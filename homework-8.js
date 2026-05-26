import { productCards } from "./products-8.js";

const productTemplate = document.getElementById('product-template')
const productList = document.getElementById('product-list')

productCards.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);
   const img = productCardClone.querySelector('.product-card__img');
  img.src = productCard.image;
  img.alt = productCard.imageText;

  productCardClone.querySelector('.product-card__for-skin').textContent = productCard.forSkin;
  productCardClone.querySelector('.product-card__title').textContent = productCard.title;
  productCardClone.querySelector('.product-card__descr').textContent = productCard.description;
  const ul = productCardClone.querySelector('.product-card__composition');
  productCard.composition.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('product-card__item');
    li.textContent = item;
    ul.append(li);
  });
  productCardClone.querySelector('.product-card_price').textContent = productCard.price + ' ₽';
  productList.append(productCardClone)
})

// 4. Используя метод .reduce(), 
// получить массив объектов, 
// где ключем является название 
// продукта, а значением - его описание
const descr = productCards.reduce((acc, product) => {
  acc.push({
    [product.title]: product.description
  });
  return acc;
}, []);
console.log(descr)
console.log(productCards)