/*
 * Приведение к булю на примере Boolean(value)
 */
// 1. все есть TRUE
// 2. кроме FALSE 6 шт:
console.log(Boolean(5));
console.log(Boolean('qwe'));

console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
// 
/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */
// console.log(5 && 'hello');
// console.log(false && "hello");
// const num = 20;
// console.log(num > 10 && num < 30);
// console.log(5 && 4 && 7 && 'mango');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

console.log(!true);
