// документацию искать со словом mdn

// 1 переменные
// const lastName = 'Slesareva';
// let job = 'x5'
// let age = 28;
// console.log(age)

// 2 мутирование
// const firstName = prompt('Введите фамилию')
// alert(lastName + ' ' + firstName)

// 3 операторы
// const currentYear = 2022
// const birthYear = 1994

// const age = currentYear - birthYear

// console.log(age)

// 4 типы данных
//  const a = true
//  const b = 'Veronika'
//  const c = 28
//  let x

//  console.log(typeof a)
//  console.log(typeof b)
//  console.log(typeof c)
//  console.log(typeof x)
//  console.log(null)

// 5 приоритет операторов
// const fullAge = 26
// const birthYear = 1994
// const currentYear = 2022
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 условные операторы
// const corseStatus = 'pending'

// if (corseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// }
// else if (corseStatus === 'pending') {
//   console.log('Курс пока в процессе разработки')
// } 

// 7 булевая логика
// && и
// || или

// 8 функции
// function calculateAge(year) {
//   console.log('year: ', year);
//   const result = 2022 - year;
//   return result
// }

// const myAge = calculateAge(1994)
// console.log(myAge)

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   console.log('меня зовут '+ name + ' мне '+year);
//   console.log(`меня зовут ${name} мне сейчас ${year}`);
// }
// logInfoAbout('Veronika', 1994)

// 9 массивы
// const cars = ['mazda', 'benz', 'ford']

// 10 циклы
// const cars = ['mazda', 'benz', 'ford', 'bmw the best car'];
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car)
// }

// cars.map((car) => {
//   console.log(car)
// });

// 11 объекты
// const person = {
//   firstName: 'Veronika',
//   lastName: 'Slesareva',
//   year: 1994,
//   langs: ['ru', 'en', 'de'],
//   hello: function() {
//     console.log(`привет, я ${this.firstName} ${this.lastName} 
//     я ${this.year} года рождения`)
//   }
// }
// person.hello()
// console.log(person.langs);