const User = require('./user.class'); // помечаем переменную User как импортируемую из user.class.js
function Admin() { // объявляем метод Admin
    User.apply(this, arguments); // применяем apply к User и дублируем все его аргументы в Admin
    this.hasAccess = true; // меняем одно свойство из тех, что перенесли от User
};
module.exports = Admin; // помечаем функцию Admin как экспортируемую