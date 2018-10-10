// Написать приложение:
// Состоящее из 3 файлов: user.class.js, admin.class.js, index.js
// В файле user.class.js должен быть описан класс пользователя с ключами firstName (строка), lastName (строка), hasAccess (false), isLoggedIn (false) и методами login, logout
// Метод login должен изменять значение isLoggedIn на true, если ключ hasAccess равен true
// Метод logout должен изменять значение isLoggedIn на false
// В файле admin.class.js должен быть описан класс Admin, наследующий функционал от класса пользователя, но ключ hasAccess должен быть в значении true.
// В файле index.js создать по одному объекту User и Admin вызвать у них метод login и вывести объекты в консоль
// Пример вызова приложения: node index.js
const User = require('./user.class'); // помечаем переменную User как импортируемую из user.class.js
const Admin = require('./admin.class'); // помечаем переменную Admin как импортируемую из admin.class.js
const user = new User('Ivan', 'Ivanov'); // создаем новый объект используя конструктор User и передаем ему аргументы, записываем в user
const admin = new Admin('Petr', 'Petrov'); // создаем новый объект используя конструктор Admin и передаем ему аргументы, записываем в admin
user.login(); // вызываем метод login у созданного объекта user
admin.login(); // вызываем метод login у созданного объекта admin
console.log(user); // выводим содержимое объекта user в консоль
console.log(admin); // выводим содержимое объекта admin в консоль