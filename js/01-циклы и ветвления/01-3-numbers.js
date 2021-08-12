/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */
// парс выводит только целое число. запинается на первом же НЕчисле
// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);
// // флоат выводит число с его дробной частью. только цифры, без символов
// let elementHeight = '200.74234444px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits) - округление до()
 ч
 */
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

// * - Матрёшки на примере  (читает из глубины вложения)
// console.log(Number(salary.toFixed(2)))
/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
// .
// console.log(Number(quantity));
// console.log(Number(value));
// console.log(Number('5'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('qweqwe'))
// console.log(null);


/*
 * Объект Math - математические операции
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// //  2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// //  3. Возвести введенные данные в степень и вывести
// const result = base ** power;

// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random() - генерация
 * - Math.round() - округляет до целого
 */
// Math.random() * (max - min) + min
const max = 80;
const min = 10;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);
// можно использовать смену цветов для смены цыета фона страницы после каждой перезагрузки
// document.body.style.backgroundColor = color;
