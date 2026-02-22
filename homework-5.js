// 3.1. функция для вывода температуры

function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`);
}

showTemperature('России', 'минус 12');

// 3.2. стрелочная функция для вывода температуры

const showTemperatureImproved = (city, temperature) => {
  return (`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`);
}

console.log(showTemperatureImproved('России', 'минус 12'));

// 4. функция для определения какая скорость перед нами

const SPEED_OF_LIGHT = 299792458;

const compareSpeed = speed => {
  let result = '';
  if (speed === SPEED_OF_LIGHT) {
    result = 'Скорость света';
  } 
  else if (speed > SPEED_OF_LIGHT) {
    result = 'Сверхсветовая скорость';
  }
  else {
    result = 'Субсветовая  скорость';
  }
  return result;
}

// 5. функция проверки средств для покупки

let moisturizingMousse = 'Увлажняющий мусс';
let moisturizingMoussePrice = 2750;
const buyProduct = budget => {
  let result = budget >= moisturizingMoussePrice
  ? `${moisturizingMousse} приобретен. Спасибо за покупку!`
  : `Вам не хватает ${moisturizingMoussePrice - budget} $, пополните баланс`;
  return result;
}

// 6. функция определяющая, является ли число положительным

const checkIfPositive = number =>{
  let result = number > 0 
  ? 'Число положительное' 
  : 'число не положительное';
  return result;
}

// 7. три переменные

let lemonadePrice = 150;
const EQUATORIAL_EARTH_RADIUS = 6378;
let firstName = 'Булат';