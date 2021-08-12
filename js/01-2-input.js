/*
 * - Ввод пользовователя
 * - Методы window.confirm() и window.prompt()
 */
// минимальное взаимодействие с пользователем: вопрос на который можно ответить да или нет
const shouldRenew = confirm('Хотите продлить подписку?');
console.log(shouldRenew);
// минимальный отклик от  пользователя, ввести хоть что-нибудь..
let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);

