//https://js-homework-autocheck.goit.ua/?token=575be14ff5124d91153d4e6795e6eef3df63a2875b66a2745ea07315e3f6ccd4&block=z01abcd1
//Ex-1
/*Объяви две переменные хранящие название и цену товара name и price.

Присвой переменным следующие характеристики товара (сразу при объявлении)

название: «Генератор защитного поля»
цена: 1000
Используя шаблонную строку и переменные name и price задай новой переменной firstMessage текст:

Выбран «Генератор защитного поля», цена за штуку 1000 кредитов
Присвой товару (price) новую цену - 2000

Используя шаблонную строку и переменные name и price задай новой переменной secondMessage текст:

Выбран «Генератор защитного поля», цена за штуку 2000 кредитов */

//Решение

/*const name = "«Генератор защитного поля»";
let price = 1000;
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

//console.log(secondMessage);

//Ex-2
/*Использование тернарного оператора
Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

Есть переменные

stock = 100. Это количество товаров на складе.
invoice. Эта переменная - количество единиц товара в заказе. Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.
message. Это переменная для текста с ответом на запрос о покупке. Возможно два значения:
"На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
"Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.*/

//Решение
/*const stock = 100;
const invoice = 110;

//let message =
invoice <= stock
  ? "Заказ оформлен, с вами свяжется менеджер"
  : "На складе недостаточно товаров!";

//console.log(message);
//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер' */

//Ex-3
/*Использование if else
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
Используйте if else if else для написания скрипта. */

//Решение
/*const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}

//console.log(message);
//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'*/

//Ex-4
/*Использование if else и арифметических операторов
Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

Переменная credits хранит количество средств - 23580 кредитов.

Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
Вы купили ${} дроидов, на счету осталось ${} кредитов
const ACCESS_DENIED = 'Недостаточно средств на счету!'
Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
А также используйте if else для выбора значений переменной message. */

//Решение
/*
const orderPieces = 7;

const credits = 23580;
const pricePerDroid = 300;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

if (totalPrice >= credits) {
  message = ACCESS_DENIED;
} else if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);

/*console.log(balanceCredit);
console.log(totalPrice);*/
//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

//Ex-5
/*Использование switch, if и методов slice, toUpperCase, toLowerCase
Напиши скрипт имитирующий оформление заказа в избранную страну.

Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной (метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
Доставка в ${} будет стоить ${} кредитов
const NO_DELIVERY = 'В выбранную страну доставка не доступна.
Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.

В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов*/

//Решение
/*
const countryName = null;
const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case CHINA:
      price = 100;
      break;

    case AUSTRALIA:
      price = 170;
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      break;

    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

/*const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();// Write code on this line
  switch (country) {
  // Write code under this line
      case CHINA:
      price = 100;
      break;

    case AUSTRALIA:
      price = 170;
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      break;

      default:
      message = NO_DELIVERY;

  }
}
if (price > 0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message); 
//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'*/
