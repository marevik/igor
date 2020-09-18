// function Calculator() {

//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//-------------------------------------------------------------

// let users = [ //масив з якого берться дані
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// let user = users.find((item) => item.id == 1);// шукає item.id і потім прирівнює його до значення

// alert(user.name); // Вася
//-----------------------------------------------------------------
// метод arr.filter(fn). передбачений для того якщо елементів пошуку може бути багато,
//і він повертає масив з усіх підходящих результатів

// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Петя" },
//   { id: 4, name: "Петя" },
//   { id: 1, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter((item) => item.id < 4); // шукає елементи з id менше 4

// alert(someUsers.length); // кількість елементів менше 4

//--------------------------------------------------------------------

// map- використовується, щоб виконати функцію для кожного елементу масиву
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length); //міряє довжину кожного елементу масиву
// alert(lengths); // 5,7,6
//--------------------------------------------------------------------

// let arr = [1, 32, 12, 44, 6665, 3455, 22345, 667, 2, 15, 32, 44, 76, 128];

// arr.sort(function (a, b) {//метод сортування елементів
//   return a - b;
// });

// alert(arr); // 1, 2, 15....
//-----------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();           //метод що міняє порядок розстановки елементів на протилежний

// alert(arr); // 5,4,3,2,1
//---------------------------------------------------------------------------
// let names = "Вася, Петя, Маша, плрьавш, оаптшв, тапшгтвш"; //дані

// let arr = names.split(", "); //метод спліт перетворює дані в елементи масиву

// for (let name of arr) {
//   //цикл для кожного імені буде виводититсь настурне повідомлення
//   alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
// }

// let str = "тест вася рпвл";

// alert(str.split("")); // т,е,с,т//розбиває по буквах

//--------------------------------------------------

// let arr = ['Вася', 'Петя', 'Маша'];//масив

// let str = arr.join(';'); // объединить массив в строку через ;//створює строку з масиву

// alert(str); // Вася;Петя;Маша
//---------------------------------------------------------

// коли потрібно перебрати масив використовуємо forEach,
//але якщо також потрібно повернути якісь дані для кожного елемента,  використовуємо map

// Reduce- метод який з усіх елементів масиву робить щось одне
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);// рахує суму //0 - початкове значечння сум -сума  current-значення попередніх додавань
// //
// sum	current	result
// первый вызов	0	1	1
// второй вызов	1	2	3
// третий вызов	3	3	6
// четвёртый вызов	6	4	10
// пятый вызов	10	5	15
// Здесь отчётливо видно, как результат предыдущего вызова передаётся в первый

// alert(result); // 15

//-----------------------------------------------------------------------------------
// let army = {
//   minAge: 18, //мінімальни вік
//   maxAge: 27, //максимальний вік
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge; //перевірка умови по віку
//   },
// };

// let users = [
//   //масив з якого беруться дані
//   { age: 16 },
//   { age: 20 },
//   { age: 23 },
//   { age: 26 },
//   { age: 25 },
//   { age: 30 },
// ];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army); //викликаємо з масиву  і проводимо перевірку

// alert(soldiers.length); // кількість що підпадають під критерій
// alert(soldiers[0].age); // 20//результат після того як фільтр відібрав зп умовою віку
// alert(soldiers[1].age); // 23
//---------------------------------------------------------------------------------
// Шпаргалка по методах для масиву
// Шпаргалка по методам массива:

// Для добавления / удаления элементов:

// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end(не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.Если какой - то из items является массивом, тогда берутся его элементы.
// Для поиска среди элементов:

// indexOf / lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или - 1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find / filter(func) – фильтрует элементы через функцию и отдаёт первое / все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента.Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split / join – преобрфкказует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
//                     Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.

// let names = "Вася, Петя, Маша, плрьавш, оаптшв, тапшгтвш"; / / дані

// let arr = names.split(", "); //метод спліт перетворює дані в елементи масиву

// function camelize() {
//   //написати функцію що "my-short-string" переводить в myShortString
//   let str = "my-short-string"; //початковий рядок
//   let arr = str.split("-"); // переводим в масив
//   let arr1 = arr.map(
//     (word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)) //переводимо перші літери в великі
//   );
//   let finalStr = arr1.join(); //переводимо з масиву знову в рядок
//   console.log(finalStr); //вивід результату
// }
// camelize();

// function filterRange(arr, a, b) {
//   // оголошуємо функцію
//   return arr.filter((item) => a < item && item < b); //умови що фільтруємо по значенню що менше b і більше а
// }
// let arr = [1, 2, 3, 4, 5, 6]; //масив даних
// let a = 3; //найменше значення
// let b = 6; //найбільше значення
// let filter = filterRange(arr, a, b); //фільтр (з якого масиву фільтруємо , між якими значеннями)
// console.log(filter); //виводимо дані після фільтрування
// alert(arr);

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [1, 2, 3, 5, 7, 8, 9, 75, 3];
// let a = 1;
// let b = 5;
// filterRangeInPlace(arr, a, b);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);//сортування з більшого до меншого

// alert(arr); // 8, 5, 2, 1, -10

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted + "gkuygohiui"); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)

// У вас есть массив объектов user, и в каждом из них есть user.name.Напишите код, который преобразует их в массив имён.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];//масив імен

// let names = users.map((item) => item.name);// переводимо в масив імен

// alert(names); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };//масив даних юзерів
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];//масив імен

// let usersMapped = users.map((item) => item.name + " " + item.surname);
// let usersMapped = users.map((user) => ({
//   fullName: `${user.name}  ${user.surname}`,// визначаємо імя та прізвище юзера та записуємо разом
//   id: user.id,//обозначаємо id для нового масиву даних
// }));
// console.log(usersMapped[0]);//попередній вивід в консоль
// /*
//     usersMapped = [
//       { fullName: "Вася Пупкин", id: 1 },
//       { fullName: "Петя Иванов", id: 2 },
//       { fullName: "Маша Петрова", id: 3 }
//     ]
//     */

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

//--------------Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];
// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }
// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
//------- випадково посортувати масив
// function shuffle(Array) {
//   arr.sort(() => Math.random() - 0.5);
// }
// let arr = [3, 1, 2];
// shuffle(Array);

// console.log(arr);

//=-----------------получити середній вік

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(arr) {
//   return (
//     arr.reduce((previouslyAge, user) => previouslyAge + user.age, 0) /
//     arr.length
//   );
// }

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//-----------повертає тільки унікальні слова---------------------
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// alert(unique(strings)); // кришна, харе, :-O

//-------------------перебираємі обєкти------------------------------

// Объекты, которые можно использовать в цикле for..of, называются итерируемыми.

// Технически итерируемые объекты должны иметь метод Symbol.iterator.
// Результат вызова obj[Symbol.iterator] называется итератором.Он управляет процессом итерации.
// Итератор должен иметь метод next(), который возвращает объект { done: Boolean, value: any },
//  где done: true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.

// let range = {
//     from: 1,
//     to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function () {

//     // ...она возвращает объект итератора:
//     // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//     return {
//         current: this.from,
//         last: this.to,

//         // 3. next() вызывается на каждой итерации цикла for..of
//         next() {
//             // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// // теперь работает!
// for (let num of range) {
//     alert(num); // 1, затем 2, 3, 4, 5
// }

// //============строки перербираються за допомогою for..of
// for (let char of "test") {
//     // срабатывает 4 раза: по одному для каждого символа
//     alert(char); // t, затем e, затем s, затем t
// }
// И он работает корректно даже с суррогатными парами!

// let str = '𝒳😂';
// for (let char of str) {
//     alert(char); // 𝒳, а затем 😂
// }

// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// // while (true) {
// //   let result = iterator.next();
// //   if (result.done) break;
// //   alert(result.value); // выводит символы один за другим
// // }

// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.

// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.
//===============Array.from==дозволяє з псевдомасиву або ітерируючого обєкту зробити масив
// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// let arr = Array.from(arrayLike); // (*)
// alert(arr);
// alert(arr.pop()); // World (метод работает)

// range взят из примера выше

// возводим каждое число в квадрат
// let arr = Array.from(range, num => num * num);

// alert(arr); // 1,4,9,16,25
//
//
//
//

// let str = "𝒳😂";
// // разбивает строку на массив её элементов
// let chars = Array.from(str);
// alert(chars[0]); // 𝒳
// alert(chars[1]); // 😂
// alert(chars.length); // 2

// // та сама задача тільк розписана покроково
// let str = '𝒳😂';

// let chars = []; // Array.from внутри себя выполняет тот же цикл
// for (let char of str) {
//     chars.push(char);
// }
// alert(chars);
//
//
//
//приклад використання slice
// function slice(str, start, end) {
//   return Array.from(str).slice(start, end).join("");
// }
// let str = "𝒳😂y";
// alert(slice(str, 1, 3)); // 😂y

//-------------------------Map-------------------------

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"

// alert(map.size); // 3
//
//
//
// //-----------використання обєкту джон як ключа в мар
// let john = { name: "John" };
// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();
// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 12345);
// alert(visitsCountMap.get(john)); // 12345
//
//
//
//
// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
// Наприклад

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable); // огурец, помидор, лук
// }
// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//   alert(entry); // огурец,500 (и так далее)
// }
//
//
//

// //Мар має встроєний метод  forEach, наприклад
// recipeMap.forEach((value, key, map) => {
//   alert(`${key}: ${value}`); // огурец: 500 и так далее
// });
//
//
//
// //-------------якщо в нас є обєкт і ми хочемо створити мар, то поможе (Object.entries(obj)--
// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));
// //Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ].

// //
// //
// //є метод Object.fromEntries, который робить зворотнє: получив масив пар виду [ключ, значение], он створює з них обєкт:
// //
// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// // now prices = { banana: 1, orange: 2, meat: 4 }
// alert(prices.orange); // 2
// // приклад 2
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);//мар
// let obj = Object.fromEntries(map.entries()); // робить звичайний обєкт
// // obj = { banana: 1, orange: 2, meat: 4 }
// alert(obj.orange); // 2
//
//
//
//
//------------------------------------set ---------------
// це множина де кожен аргумент може бути тільки один раз
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// приклад
// let set = new Set(); //визначаємо множину
// let john = { name: "John" };//обєкти людей
// let pete = { name: "Pete" };//обєкти людей
// let mary = { name: "Mary" };//обєкти людей
// // считаем гостей, некоторые приходят несколько раз
// set.add(john);//обєкти які прийшли
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// // set хранит только 3 уникальных значения
// alert(set.size); // 3//визначає обєкти тільки один раз, якщо двічі, то повторні рази не зараховує
// //
// for (let user of set) {//виводить ітеруємі обєкти
//   alert(user.name); // John (потом Pete и Mary)
// }
//
//
//
// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:

// let set = new Set(["апельсин", "яблоко", "банан"]);
// for (let value of set) alert(value);
// // то  саме з forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });
//
//
// Set имеет те же встроенные методы, что и Map:

// set.keys() – возвращает перебираемый объект для значений,
// set.values() – то же самое, что и set.keys(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.
//
//
//
//
//
//-----------функция unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr
// function unique(arr) {
//   return Array.from(new Set(arr));//створення списку Set з масиву values
// }
// let values = [    //масив
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// alert(unique(values)); // Hare, Krishna, :-O

//
//
//---------- відсортувати анаграми
// function aclean(arr) {
//   //функція
//   let map = new Map(); // створюємо мар
//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     // (*)let sorted = arr[i] // PAN
//     //   .toLowerCase() // pan//зменшуємо
//     //   .split("") // ["p","a","n"]//посимвольно
//     //   .sort() // ["a","n","p"]сортуємо
//     //   .join(""); // anp//зєднюємо
//     map.set(sorted, word); //поміщаємо в мар і коли слова повторяються то буде тільки одне
//   }
//   return Array.from(map.values()); //повертає кінцевий результат
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]; //початковий масив
// alert(aclean(arr)); //вивід масиву
// //**то саме через масиви */
// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr));

// //=============пушим в мар----------------
// let map = new Map();
// map.set("name", "John");

// let keys = map.keys();
// let arr = Array.from(map.keys());
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// arr.push("more");
// alert(arr);

// //-----------------******************************WeakMap*********************----------------------------

// WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.
// В WeakMap присутствуют только следующие методы:
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// // 📁 visitsCount.js
// let visitsCountMap = new WeakMap(); // map: пользователь => число визитов
// //приклад
// // увеличиваем счётчик
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// //приклад

// // 📁 cache.js
// let cache = new Map();
// // вычисляем и запоминаем результат
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* тут какие-то вычисления результата для объекта */ obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
// // Теперь используем process() в другом файле:
// // 📁 main.js
// let obj = {/* допустим, у нас есть какой-то объект */};
// let result1 = process(obj); // вычислен результат
// // ...позже, из другого места в коде...
// let result2 = process(obj); // ранее вычисленный результат взят из кеша
// // ...позже, когда объект больше не нужен:
// obj = null;
// alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)

// //-------------------------------------------------

// WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
// //

// //приклад
// let visitedSet = new WeakSet();

// let john = { name: "John" };
// // let pete = { name: "Pete" };
// // let mary = { name: "Mary" };
// // visitedSet.add(john); // John заходил к нам
// // visitedSet.add(pete); // потом Pete
// // visitedSet.add(john); // John снова
// // // visitedSet сейчас содержит двух пользователей
// // // проверим, заходил ли John?
// // alert(visitedSet.has(john)); // true
// // // проверим, заходила ли Mary?
// // alert(visitedSet.has(mary)); // false
// // john = null;
// // // структура данных visitedSet будет очищена автоматически
// //приклад Хранение отметок "не прочитано"
// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];
// let readMessages = new WeakSet();
// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента
// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента
// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true
// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
// //
// //
// //Приклад  Для хранения даты мы можем использовать WeakMap:

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];
// let readMap = new WeakMap();
// readMap.set(messages[0], new Date(2017, 1, 1));
// //
// //
// //
// //
// //
// //
//
// Объект Date мы рассмотрим позднее
////
//
//
// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

// let user = {
//   name: "John",
//   age: 30
// };
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

// //приклад
// Вот пример использования Object.values ​​для перебора значений свойств в цикле:

// let user = {
//   name: "John",
//   age: 30
// };
// // перебор значений
// for (let value of Object.values(user)) {
//   alert(value); // John, затем 30
// }

// //приклад
// Например, у нас есть объект с ценами, и мы хотели бы их удвоить:

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8

// //приклад
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
// Например:
// function sumSalaries(salaries) {
//   //функція
//   let sum = 0; //оголошення сум
//   for (let salary of Object.values(salaries)) {
//     //цикл перебору елементів з масиву
//     sum += salary; //додає вартість з елем. масиву
//   }
//   return sum; //повертає суму
// }
// let salaries = {
//   //масив
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// alert(sumSalaries(salaries)); // 650
//приклад рахує кількість властивостей. в обєкті
// let user = {
//   //обєкт
//   name: "John",
//   age: 30,
// };
// function count(obj) {
//   return Object.keys(obj).length; //рахує довжину ключів в обєкті
// }
// alert(count(user)); // 2
//
//
//-----------------------Деструктурирующее присваивание---------------------------

// Деструктуризация массива
// Пример деструктуризации массива:

// // у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"]

// // деструктурирующее присваивание
// // записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor

// приклад
// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);
// //
// //
// //---приклад
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// alert(user.name); // Ilya

// //---приклад
// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for (let [key, value] of user) {
//   alert(`${key}:${value}`); // name:John, затем age:30
// }

// // приклад для обєкта
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

// //приклад
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200

// //приклад
// let title, width, height;

// // сейчас всё работает
// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// alert( title ); // Menu

// //приклад
// // мы передаём объект в функцию
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...и она немедленно извлекает свойства в переменные
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – взято из options,
//   // width, height – используются значения по умолчанию
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// }

// showMenu(options);

// //приклад
// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert( `${title} ${width} ${height}` );
// }

// showMenu(); // Menu 100 200
//приклад
// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user
// let { name: name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;

//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }
