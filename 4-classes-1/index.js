// Написать приложение, которое:
// Считывает products.csv файл;
// Создаёт массив объектов с продуктами;
// Переводит цену продукта в рублях в цену в долларах;
// Записывает файл result.json с финальным массивом объектов;
// Пример вызова приложения:
// $ node index.js
const path = require('path'); // подключаем встроенный модуль  path
const fs = require('fs'); // подключаем встроенный модуль fs

const pathToJSON = path.resolve(__dirname, 'result.json'); //прописываем путь к файлу result.json
const pathToCSV = path.resolve(__dirname, 'products.csv'); //прописываем путь к файлу index.csv

const data = fs.readFileSync(pathToCSV, 'utf8'); //считываем содержимое файла csv и записываем в data (получается просто строка)
const items = data.split(', '); // разделяем значение на строчные элементы массива посрдеством разделителем запятая+пробел и записываем в items (получается массив с элементами)
function Product(str) { // объявление конструктора Product, который может быть применен к какой-то строке
    const value = str.split(' '); // разделяет строку на элементы массива, используя разделитель пробел и записывает в константу value
    this.title = value[1]; // берем второе значение из каждого элемента массива и записываем в свойство title
    this.price = {
        rubles: Number(value[0]), // берем первое значение из каждого элемента массива и записываем в ключ rubles свойства price, переводя из строки в цифру
        dollars: Number(value[0])/60 // приводим каждое рублевое значение в долларовый эквивалент
    }; 
};
const products = items.map(item => new Product(item)); // берет каждый элекмент item массива items и преобразовывает его посредством применения к ним конструктора Product
// console.log(products)
fs.writeFileSync(pathToJSON, JSON.stringify(products), 'utf8'); // записываем результат в файл JSON (если его не было, он создается, если был - перезаписывается полностью)
