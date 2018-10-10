function User(firstName, lastName) { // объявляем метод User
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasAccess = false;
    this.isLoggedIn = false;
    this.login = function () {
        if (this.hasAccess === true) {
        this.isLoggedIn = true;
        };
    };
    this.logout = function () {
        this.isLoggedIn = false;
    };
};
module.exports = User; // помечаем функцию User как экспортируемую