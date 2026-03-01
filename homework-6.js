// 3. Создание объекта на основе моих данных

const user = {
  firstName: 'Булат',
  lastName: 'Халиков',
  mail: 'halikovbulat2001@gmail.com',
  job: 'student',
  age: 19,
  country: 'Russia',
  city: 'Saratov',
  relationshipStatus: 'unmaried',
  ethnicity: 'tatar'
};

// 4. Создание объекта, хранящего данные об автомобиле

const car = {
  make: 'Toyota',
  model: 'Camry S-Edition',
  yearOfManufacture: 2020,
  color: 'white',
  transmission: 'automatic'
};

car.owner = user;

// 5. Создание функции которая аргументом будет принимать объект, описанный в пункте №4

const checkMaxSpeed = car => {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 90
  } 
  else {
    return
  }
}

// 6. Создание функции которая аргументом будет принимать первым аргументом  — объект, а вторым аргументом — свойство объекта

const showProperty = (object, property) => {
  console.log(property);
}

// 7. Массив с продуктами

const shopList = ['meat', 'bread', 'cheese'];

// 8. Массив, состоящий из объектов, где объект представляет собой книгу

const footballers = [
  {
    name: 'Lionel Messi', 
    age: 38,
    nationalTeam: 'Argentina',
    club: 'Inter Miami'
  },
  {name: 'Cristiano Ronaldo',
    age: 41,
    nationalTeam: 'Portugal',
    club: 'Al-Nassr'
  },
  {
    name: 'Kylian Mbappe',
    age: 27,
    nationalTeam: 'France',
    club: 'Real Madrid'
  },
  {
    name: 'Erling Haaland',
    age: 25,
    nationalTeam: 'Norway',
    club: 'Manchester City'
  },
  {
    name: 'Robert Lewandowski',
    age: 37,
    nationalTeam: 'Poland',
    club: 'Barcelona'
  }
];

// 9. Слияние массивов с помощью оператора spread

const basketballPlayers = [
  {
    name: 'LeBron James',
    age: 40,
    nationalTeam: 'USA',
    club: 'Los Angeles Lakers'
  },
  {
    name: 'Stephen Curry',
    age: 37,
    nationalTeam: 'USA',
    club: 'Golden State Warriors'
  },
  {name: 'Giannis Antetokounmpo',
    age: 30,
    nationalTeam: 'Greece',
    club: 'Milwaukee Bucks'
  },
  {
    name: 'Kevin Durant',
    age: 36,
    nationalTeam: 'USA',
    club: 'Phoenix Suns'
  },
  {
    name: 'Luka Dončić',
    age: 26,
    nationalTeam: 'Slovenia',
    club: 'Los Angeles Lakers'
  }
];

const athletes = [...footballers, ...basketballPlayers]

// 10. Использование метода map

const isYoung = athletes => {
  athletes.map(athlete => {
    athlete.isYoung = athlete.age < 30}
  )
  return athletes;
}