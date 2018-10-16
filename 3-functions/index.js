// Написать приложение, которое:
// Считывает JSON файл index.json;
// Выводит в консоль количество пользователей;
// Выводит в консоль среднее аримфетическое по возрасту пользователей;
// Выводит в консоль массив данных в формате: 32 Petr Vasin, 45 Yuichiro Ando, 33 Giuseppe Abbati, ...;
// Выводит в консоль пользователей с навыком Paint;
// Пример вызова приложения:
// $ node index.js
// Соответственно, результат выполнения программы должен выглядеть следующим образом:
// $ node index.js
// $ Количество пользователей: 30
// $ Средний возраст пользователей: 27
// $ 32 Petr Vasin, 45 Yuichiro Ando, 33 Giuseppe Abbati, ...
// $ [Domenico Alfani, "Jacopo Bassano", "Giovanni di Paolo", "Ulvi Liegi"]
const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json'); //прописываем путь к файлу index.json
const data = fs.readFileSync(pathToJSON, 'utf8'); //считываем содержимое файла json и записываем в data
const users = JSON.parse(data); //парсим data и записываем в users
const names = users.map(user => user.name); // переделываем массив users в массив с именами по ключу names
console.log('Количество пользователей: ' + names.length)

const ages = users.map(user => user.age); // переделываем массив users в массив с возрастами по ключу age
let sum = ages.reduce((acc, n) => acc + n, 0) //проходимся по каждому элементу массива ages и просизводим после каждого перебора суммирование следующего элемента и записываем в acc
console.log('Средний возраст пользователей: ' + sum/ages.length)

let longName = users.map(long => long.age + ' ' + long.name); // переделываем массив users в массив с новыми именами = возраст + имя
let newMassive = longName.join(', '); // объединяем массив в строку посредством добавления запятых и пробелов
console.log(newMassive);

let painters = users.filter(key => key.skills.includes('Paint')).map(key => key.name);
console.log(painters)

