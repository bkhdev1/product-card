export const productCards = [ 
  {
    image: 'Увлажняющий мусс',
    forSkin: 'для нормальной кожи',
    title: 'Увлажняющий мусс',
    description: 'Глубоко увлажняют кожу лицу, оставляя ее мягкой и гладкой.',
    composition: [
      'активные натуральные комплексы',
      'витамины С, А, РР, В И Е',
      'солнцезащитные компоненты',
    ],
    price: 2750,
  },
  {
    image: 'Увлажняющая маска',
    forSkin: 'для нормальной кожи',
    title: 'Увлажняющая маска',
    description: 'Способствует удерживанию влаги в верхних слоях кожи.',
    composition: [
      'воски',
      'минералы',
      'масла',
    ],
    price: 3500,
  },
  {
    image: 'Гель для умывания',
    forSkin: 'для нормальной кожи',
    title: 'Гель для умывания',
    description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
    composition: [
      'минералы',
      'витамины С, А, РР, В И Е',
      'солнцезащитные компоненты',
    ],
    price: 1650,
  },
  {
    image: 'Подарочный набор №1',
    forSkin: 'для нормальной кожи',
    title: 'Подарочный набор №1',
    description: 'Набор, состоящий из увлажняющего крема и маски.',
    composition: [
      'воски',
      'минералы',
      'масла',
    ],
    price: 4750,
  },
  {
    image: 'Подарочный набор №5',
    forSkin: 'для нормальной кожи',
    title: 'Подарочный набор №5',
    description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
    composition: [
      'воски',
      'минералы',
      'масла',
    ],
    price: 7520,
  }
]


const productTemplate = document.getElementById('product-template')
const productList = document.getElementById('product-list')

productCards.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-card__img').textContent = productCard.image;
  productCardClone.querySelector('.product-card__for-skin').textContent = productCard.forSkin;
  productCardClone.querySelector('.product-card__title').textContent = productCard.title;
  productCardClone.querySelector('.product-card__descr').textContent = productCard.description;
  productCardClone.querySelector('.product-card__composition').textContent = productCard.composition;
  productCardClone.querySelector('.product-card_price').textContent = productCard.price + ' ₽';
  productList.append(productCardClone)
})

console.log(productCards)