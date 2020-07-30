//Ex1
/*const name = "«Генератор защитного поля»";
let price = 1000;
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

//console.log(secondMessage);

//Ex2
const stock = 100;
const invoice = 110;

//let message =
invoice <= stock
  ? "Заказ оформлен, с вами свяжется менеджер"
  : "На складе недостаточно товаров!";

//console.log(message);

//Ex3
const userPassword = "jqueryismyjam";

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

//Ex4
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

//Ex5

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

console.log(message); */
