// 3.1. функция для вывода температуры

function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`)
}

showTemperature('России', 'минус 12');

// 3.2. стрелочная функция для вывода температуры

const showTemperatureImproved = (city, temperature) => {
  return (`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`)
}

console.log(showTemperatureImproved('России', 'минус 12'));

// 4. функция для определения какая скорость перед нами

const speedOfLight = 299792458;

const compareSpeed = speed => {
  result = speed === speedOfLight 
  ? result = 'Скорость света' 
  : speed > speedOfLight 
    ? result = 'Сверхсветовая скорость' 
    : result = 'Субсветовая  скорость'
  return result;
}

// 5. функция проверки средств для покупки

let moisturizingMousse = 'Увлажняющий мусс';
let moisturizingMoussePrice = 2750;
const hasMoney = budget => {
  result = budget >= moisturizingMoussePrice
  ? result = `${moisturizingMousse} приобретен. Спасибо за покупку!`
  : result = `Вам не хватает ${moisturizingMoussePrice - budget} $, пополните баланс`;
  return result;
}

// 6. функция определяющая, является ли число положительным

const isPositive = number =>{
  result = number > 0 
  ? 'Число положительное' 
  : 'число не положительное';
  return result;
}

// 7. три переменные

let lemonadePrice = 150;
const EQUATORIAL_EARTH_RADIUS = 6378;
let firstName = 'Булат';





