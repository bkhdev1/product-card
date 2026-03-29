import { comments } from "./comments.js";

// 2. Получение массива чисел, начиная с 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(num => num >= 5);

// 3. Проверка, есть ли в массиве какая-то определенная сущность

const cars = ['BMW', 'Mercedes-Benz', 'Toyota', 'LADA'];
const hasLada = cars.includes('LADA');

// 4. Функция, переворачивающая массив

const getReverseArray = (array) => {
  array.reverse();
}
numbers = getReverseArray(numbers);
numbers = getReverseArray(cars);

// 7. Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentEmails = comments.filter(comment => comment.email.includes('.com'));
console.log(commentEmails);

// 8. Перебор по id

const updatedComments = comments.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1}
});

// 9. Перебор массива так, что бы объекты состояли только из айди и имени

const commentNames = comments.map(comment => {
  return {id: comment.id, name: comment.name};
})

// 10. Добавление объектам свойства isInvalid

const validatedComments = comments.map(comment => {
  return {...comment, isInvalid: comment.body.length > 180};
})

// 11. Вывод массива почт с помощью методов .reduce и .map

const emailsByReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const emailsByMaps = comments.map(comment => comment.email);

// 12. .toString и .join

const toStringEmails = emailsByMaps.toString();
const joinEmails = emailsByMaps.join();