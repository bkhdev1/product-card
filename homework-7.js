import { comments } from "./comments.js";

// 2. Получение массива чисел, начиная с 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(num => num >= 5);

// 3. Проверка, есть ли в массиве какая-то определенная сущность

const cars = ['BMW', 'Mercedes-Benz', 'Toyota', 'LADA'];
const newArray = cars.includes('LADA');

// 4. Функция, переворачивающая массив

const getReverseArray = (array) => {
  return array = array.reverse();
}
numbers = getReverseArray(numbers);
numbers = getReverseArray(cars);

// 7. Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comEmailsComments = comments.filter(comment => comment.email.includes('.com'));
console.log(comEmailsComments);

// 8. Перебор по id

const newComments = comments.map(comment => {
  if (comment.id <= 5) {
    return {...comment, postId: 2};
  } else {
    return {...comment, postId: 1};
  }
});

// 9. Перебор массива так, что бы объекты состояли только из айди и имени

const idNamesOnly = comments.map(comment => {
  return {id: comment.id, name: comment.name};
})

// 10. Добавление объектам свойства isInvalid

const commentsWithInvalid = comments.map(comment => {
  return {...comment, isInvalid: comment.body.length > 180};
})

// 11. Вывод массива почт с помощью методов .reduce и .map

const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const emailsWithMap = comments.map(comment => comment.email);

// 12. .toString и .join

const toStringEmails = emailsWithMap.toString();
const joinEmails = emailsWithMap.join();