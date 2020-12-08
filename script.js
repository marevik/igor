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

// --------------Час і Дата

// Существуют методы получения года, месяца и т.д. из объекта Date:

// getFullYear()
// Получить год (4 цифры)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.
// let now = new Date();
// alert( now ); // показывает текущие дату и время

// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );
// // 31 декабря 1969 года
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert( Dec31_1969 );
//

//  В зависимости от того, високосный это год или нет, результатом будет «2 марта» или «1 марта».
//   Нам об этом думать не нужно. Просто прибавляем два дня. Объект Date позаботится об остальном:
// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// alert( date ); // 1 Mar 2016

// Наприклад можна отримати получим дату «спустя 70 секунд с текущего момента»:
// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// alert( date ); // выводит правильную дату

// Этот приём можно использовать для измерения времени:
// let start = Date.now(); // количество миллисекунд с 1 января 1970 года
// // выполняем некоторые действия   ваш код
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = Date.now(); // заканчиваем отсчёт времени
// alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа, а не даты

// // // текущая дата
// let date = new Date();

// // час в вашем текущем часовом поясе
// alert( date.getHours() );
//
//
//let date = new Date("2017-01-26");
// alert(date);
//
// Thu Jan 26 2017 11:00:00 GMT+1100
//
//
//
//

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000000; i++) f(date1, date2);
//   return Date.now() - start;
// }
// alert("Время diffSubtract: " + bench(diffSubtract) + "мс");
// alert("Время diffGetTime: " + bench(diffGetTime) + "мс");

// Метод Date.parse(str) считывает дату из строки.

// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

// YYYY-MM-DD – это дата: год-месяц-день.
// Символ "T" используется в качестве разделителя.
// HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
// Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
//
//
//
//
// //------------виводить дату
// let date = new Date(2012, 1, 20, 03, 12, 0);
// alert(date);
//----------виводить день неділі
// function getWeekDay(date) {
//   let day = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//   return day[date.getDay()];
// }

// let date = new Date(2012, 0, 3); // 3 января 2012 года
// alert(getWeekDay(date));
//
//
//
// //
// //----------------повертає день, що був давніше
// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//
//
//
//
// //-- ----------шукає останнє число місяця
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// alert(getLastDayOfMonth(2012, 0)); // 31
// alert(getLastDayOfMonth(2012, 1)); // 29
// alert(getLastDayOfMonth(2013, 1)); // 28
//
///
//
//
//
//-------------скільки секунд пройшло за сьогодні
// function getSecondsToday() {
//   let time = new Date();
//   return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
// }
// console.log(getSecondsToday());
//
//
// //
// //
// //----------секунд до завтра
// function getSecondsToTomorrow() {
//   let leftTime = new Date();
//   let totalSecondsInADay = 3600 * 24;
//   return (
//     totalSecondsInADay -
//     (leftTime.getHours() * 3600 +
//       leftTime.getMinutes() * 60 +
//       leftTime.getSeconds())
//   );
// }
// console.log(getSecondsToTomorrow());

//
//

//
//--------------------JSON

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);

// alert(typeof json); // мы получили строку!

// alert(json);
// /* выведет объект в формате JSON:
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": false,
//   "courses": ["html", "css", "js"],
//   "wife": null
// }
// */

//
//
// //приклад в строку
// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// alert( JSON.stringify(meetup) );
// /* вся структура преобразована в строку:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */

//
// циклічні ссилки
// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
// /*
// {
//   "title":"Conference",
//   "participants":[{"name":"John"},{"name":"Alice"}],
//   "place":{"number":23}
// }
// */
//
//
//
//
// space- відступи при форматуванні

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// alert(JSON.stringify(user, null, 2));
// /* отступ в 2 пробела:
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
// */

// /* для JSON.stringify(user, null, 4) результат содержит больше отступов:
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }
// */

//parse використовується для декодування з json
//приклад
// // строковый массив
// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// alert( numbers[1] ); // 1
//
//
//приклад з вложеністю
// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// alert( user.friends[1] ); // 1
//
//
//приклад з відновленням дати
//let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });
// alert( meetup.date.getDate() ); // 30 - теперь работает!
//
//
// //
// //приклад 2 з вкладенням
// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });
// alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!
//приклад
// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let user2 = JSON.parse(JSON.stringify(user));
//
//
//
// //приклад 2
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

//,//
// //
// //==================================================рекурсія
//приклад
// function pow(x, n) {
//   let result = 1;
//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// alert(pow(2, 3)); // 8

// ///приклад 2
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// alert(pow(2, 3)); // 8
//
//приклад 3
// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }
// alert(pow(2, 3)); // 8
//
//
// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company)); // 6700

// Вывод односвязного списка в обратном порядке

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printReverseList(list) {

//   if (list.next) {
//     printReverseList(list.next);
//   }

//   alert(list.value);
// }

// printReverseList(list);

// Вывод односвязного списка
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   alert(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }
// }

// printList(list);
// арифметична прогресія через рекурсію
// function sumTo(n) {
//   if (n == 0) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }
// alert(sumTo(100));
//
//
//// арифметична прогресія через цикл
// function sumTo(n) {
//   let result = 0;

//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }

//   return result;
// }
// alert(sumTo(100));
//
//
// //факторіал через цикл
// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result *= i;
//   }
//   return result;
// }
// alert(factorial(5));
//
//
//
//факторіал через рекурсію
// function factorial(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// alert(factorial(5));

//
//
//числа Фібоначі через рекурсію
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// alert(fib(3));
// alert(fib(7));
// //alert(fib(77));

//
//
//числа фібоначі через цикл
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// alert(fib(3));
// alert(fib(7));
// alert(fib(77));

//
// //Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
// Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.
// //... перечисляє всі аргументи
// function sumAll(...args) { // args — имя массива
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6

// В примере ниже первые два аргумента функции станут именем и фамилией, а третий и последующие превратятся в массив titles:

// function showName(firstName, lastName, ...titles) {
//   alert( firstName + ' ' + lastName ); // Юлий Цезарь
//   // Оставшиеся параметры пойдут в массив
//   // titles = ["Консул", "Император"]
//   alert( titles[0] ); // Консул
//   alert( titles[1] ); // Император
//   alert( titles.length ); // 2
// }
// showName("Юлий", "Цезарь", "Консул", "Император");

// //оператор розширення
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// alert( Math.max(...arr1, ...arr2) ); // 8

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];
// let merged = [0, ...arr, 2, ...arr2];
// alert(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)

// let str = "Привет";
// alert( [...str] ); // П,р,и,в,е,т
//
//
// //// функция-конструктор возвращает новый объект
// function User(name) {
//     // методом объекта становится вложенная функция
//     this.sayHi = function () {
//         alert(name);
//     };
// }
// let user = new User("John");
// user.sayHi(); //  "sayHi" ///
///
//
//
//А здесь мы просто создаём и возвращаем функцию «счётчик»:
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }
// let counter = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter()); // 2

//
// //
// //обертання функцій дужкою для виконання
// (function () {
//   let message = "Hello";
//   alert(message); // Hello
// })();
//
//
// інші способи показати , що робота з  функтіон експресіон
// (function () {
//   alert("Скобки вокруг функции");
// })();

// (function () {
//   alert("Скобки вокруг всего");
// })();

// !(function () {
//   alert("Выражение начинается с логического оператора NOT");
// })();

// +(function () {
//   alert("Выражение начинается с унарного плюса");
// })();
//
//
//

// function sum(a) {
//   return function (b) {
//     return a + b; // берёт "a" из внешнего лексического окружения
//   };
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)); // 4

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// //
// //
// //
// //сортування по полю
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(field) {
//   return (a, b) => (a[field] > b[field] ? 1 : -1);
// }
// users.sort(byField("name"));
// users.forEach((user) => alert(user.name)); // Ann, John, Pete
// users.sort(byField("age"));
// users.forEach((user) => alert(user.name)); // Pete, Ann, John
//
//
// Переменные var не имеют блочной области видимости, они ограничены, как минимум, телом функции.
//Объявления (инициализация) переменных varпроизводится в начале исполнения функции (или скрипта для глобальных переменных).

// //оголошення глобальної змінної
// // сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
// window.currentUser = {
//   name: "John",
// };

// // где угодно в коде
// alert(currentUser.name); // John

// // или, если у нас есть локальная переменная с именем "currentUser",
// // получим её из window явно (безопасно!)
// alert(window.currentUser.name); // John

//кількість викликів
// function sayHi() {
//   alert("Hi");

//   // давайте посчитаем, сколько вызовов мы сделали
//   sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение
// sayHi(); // Hi
// sayHi(); // Hi

// alert( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза


//додаткова назва функції

// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest"); // Теперь всё в порядке
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Hello, Guest (вложенный вызов работает)

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
// }
//
//
//
//
//сума з обєктів(примітивів)
//alert( sum(1)(2) ); // 3
//alert( sum(5)(-1)(2) ); // 6
//alert( sum(6)(-1)(-2)(-3) )

// function sum(a) {
//   let currentSum = a;
//   function f(b) { 
//     currentSum += b;
//     return f;
//   }
//   f.toString = function() {
//     return currentSum;
//   };
//   return f;
// }
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15
//
//
//
//Синтаксис "new Function"

//let func = new Function ([arg1, arg2, ...argN], functionBody);
// example 
// let sum = new Function('a', 'b', 'return a + b');

// // alert( sum(1, 2) ); // 3
// Функции, объявленные через new Function, имеют [[Environment]],
//  ссылающийся на глобальное лексическое окружение, а не на родительское. 
//  Поэтому они не могут использовать внешние локальные переменные. 
//  Но это очень хорошо, потому что страхует нас от ошибок.
//  Переданные явно параметры – гораздо лучшее архитектурное решение, которое не вызывает проблем у минификаторов.
//
//
//
//setTimeout
// //function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }
// setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
//
//
//
//setTimeout(() => alert('Привет'), 1000);
//
//
//
//
//
// //let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)
//
//
//
//
// //// повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
//
// //
// ///рекурсивний  setTimeout замість   setInterval
// let timerId = setInterval(() => alert('tick'), 2000);
// */

// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
//
// //
// Приклад функция printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to
// Используем setInterval:

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 10);
// Используем рекурсивный setTimeout:

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 10);
//
//
//
//
// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     alert(`Called with ${x}`);
//     return x;
// }
// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {    // если кеш содержит такой x,
//             return cache.get(x); // читаем из него результат
//         }

//         let result = func(x); // иначе, вызываем функцию

//         cache.set(x, result); // и кешируем (запоминаем) результат
//         return result;
//     };
// }
// slow = cachingDecorator(slow);

// alert(slow(1)); // slow(1) кешируем
// alert("Again: " + slow(1)); // возвращаем из кеша
// alert(slow(2)); // slow(2) кешируем
// alert("Again: " + slow(2)); // возвращаем из кеша

// //
//
//
//приклад
// function sayHi() {
//   alert(this.name);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// // используем 'call' для передачи различных объектов в качестве 'this'
// sayHi.call( user ); // John
// sayHi.call( admin ); // Admin

//
//
// //cal для виклику say
// function say(phrase) {
//   alert(this.name + ': ' + phrase);
// }
// let user = { name: "John" };
// // 'user' становится 'this', и "Hello" становится первым аргументом
// say.call( user, "Hello" ); // John: Hello
//
//
//
//function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }
// let f1000 = delay(alert, 1000);
// f1000("test"); // показывает "test" после 1000 мс
//
//
//
//
//function debounce(f, ms) {

//   let isCooldown = false;
//   return function() {
//     if (isCooldown) return;
//     f.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => isCooldown = false, ms);
//   };
// }
//
//
//
//
//function throttle(func, ms) {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {
//     if (isThrottled) { // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)
//     isThrottled = true;
//     setTimeout(function() {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }
//   return wrapper;
// }

//
//
//
//
//==============Привязка контекста до функції
//функція обгортка
//приклад1
// let user = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
// setTimeout(function() {
//   user.sayHi(); // Привет, Вася!
// }, 1000);

//
//
// // привязка функції за допомогою bind
//приклад1
// let user = {
//   firstName: "Вася"
// };s
// function func() {
//   alert(this.firstName);
// }
// let funcUser = func.bind(user);
// funcUser(); // Вася
//
//
//
//
//приклад2
// let user = {
//   firstName: "Вася"
// };
// function func(phrase) {
//   alert(phrase + ', ' + this.firstName);
// }
// // привязка this к user
// let funcUser = func.bind(user);
// funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)
//
//
//приклад3
// let user = {
//   firstName: "Вася",
//   say(phrase) {
//     alert(`${phrase}, ${this.firstName}!`);
//   }
// };
// let say = user.say.bind(user);
// say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
// say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")

//
//
//
//
// //часткове примінення, щоб не повторятися
// function mul(a, b) {
//   return a * b;
// }
// let double = mul.bind(null, 2);
// alert( double(3) ); // = mul(2, 3) = 6
// alert( double(4) ); // = mul(2, 4) = 8
// alert( double(5) ); // = mul(2, 5) = 10
//
//
//
//
//приклад
// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     return func.call(this, ...argsBound, ...args);
//   }
// }
// // использование:
// let user = {
//   firstName: "Ihor",
//   say(time, phrase) {
//     alert(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };
// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
// user.sayNow("Hello");
// // Что-то вроде этого:
// // [10:00] John: Hello!

//
//
//
//
//-------------стрілкові функції
// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();
//
//
//
//
//



// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//   };
// }

// function sayHi(who) {
//   alert('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
//
//
//
//
//===============властивості обєкту та їх конфігурації
//Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
//let user = {
// name: "John",
//     toString() {
//     return this.name;
// }
// };
// // По умолчанию оба свойства выведутся:
// for (let key in user) alert(key); // name, toString
//
//
////
//let user = {
//   name: "John",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };
// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";
// alert(user.name); // Alice
// alert(user.surname); // Cooper
// //
//
//
//
// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
//   // возраст рассчитывается из текущей даты и дня рождения
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });
// }
// let john = new User("John", new Date(1992, 6, 1));
// alert( john.birthday ); // доступен как день рождения
// alert( john.age );      // ...так и возраст
//
//
//
//
//================прототипи та наслідування
// В JavaScript все объекты имеют скрытое свойство [[Prototype]],
//  которое является либо другим объектом, либо null.
// Мы можем использовать obj.__proto__ для доступа к нему (исторически обусловленный геттер/сеттер,
//     есть другие способы, которые скоро будут рассмотрены).
// Объект, на который ссылается [[Prototype]], называется «прототипом».
// Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj,
//  тогда JavaScript попытается найти его в прототипе.
// Операции записи/удаления работают непосредственно с объектом, они не используют прототип
//  (если это обычное свойство, а не сеттер).
// Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj.
//  Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
// Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы получения ключей/значений 
// работают только с собственными свойствами объекта.
//
//
//приклад
// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };
// rabbit.__proto__ = animal;
//
//приклад 2
// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };
// rabbit.__proto__ = animal; // (*)
// // теперь мы можем найти оба свойства в rabbit:
// alert( rabbit.eats ); // true (**)
// alert( rabbit.jumps ); // true
//
//
//приклад 3 
// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };
// // walk взят из прототипа
// rabbit.walk(); // Animal walk
//
//
//приклад 4
// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };
// let admin = {
//   __proto__: user,
//   isAdmin: true
// };
// alert(admin.fullName); // John Smith (*)
// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname); // Cooper
//
//
//
//приклад 5
// методы animal
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };
// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };
// // модифицирует rabbit.isSleeping
// rabbit.sleep();
// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

//
//
//
// //приклад 6
// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };
// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
//   if (isOwn) {
//     alert(`Our: ${prop}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

//
//
//приклад 7
// let hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach.push(food);
//   }
// };
// let speedy = {
//   __proto__: hamster,
//   stomach: []
// };
// let lazy = {
//   __proto__: hamster,
//   stomach: []
// };
// // Шустрый хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
// // Живот ленивого хомяка пуст
// alert( lazy.stomach ); // <ничего>
//
//
//let animal = {
//   eats: true
// };
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
// alert( rabbit.eats ); // true
//
//
//
//
// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };
// obj.join = Array.prototype.join;
// alert( obj.join(',') ); // Hello,world!
// //
// //
// //
// //
// if (!String.prototype.repeat) { // Если такого метода нет
//   // добавляем его в прототип
//   String.prototype.repeat = function(n) {
//     // повторить строку n раз
//     // на самом деле код должен быть немного более сложным
//     // (полный алгоритм можно найти в спецификации)
//     // но даже неполный полифил зачастую достаточно хорош для использования
//     return new Array(n + 1).join(this);
//   };
// }
// alert( "La".repeat(3) ); // LaLaLa
//
//
//
//
// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };
// function f() {
//   alert("Hello!");
// }
// f.defer(1000); // выведет "Hello!" через 1 секунду
// //
// //
// //
// //
// Function.prototype.defer = function(ms) {
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };
// // check it
// function f(a, b) {
//   alert( a + b );
// }
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//
//
//Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.
// Современные же методы это:
// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]],
//  указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
//
//
//
//let animal = {
//   eats: true
// };
// создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);
// alert(rabbit.eats); // true
// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
//
//
//
// let animal = {
//   eats: true
// };
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });
// alert(rabbit.jumps); // true
//
//
// //
// Ещё методы:
// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых 
// собственных строковых ключей/значений/пар ключ-значение.
// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

//
//
//
// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";
// // apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }
// // список свойств, разделённых запятой, выведен с помощью toString
// alert(dictionary); // "apple,__proto__"
//
///
///
//
//
//
// //========================класи
//
//
//Базовый синтаксис для классов выглядит так:
// class MyClass {
//   prop = value; // свойство
//   constructor(...) { // конструктор
//     // ...
//   }
//   method(...) {} // метод
//   get something(...) {} // геттер
//   set something(...) {} // сеттер
//   [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//   // ...
// }
//
//
///
//
///
//

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }
// // класс - это функция
// alert(typeof User); // function
// // ...или, если точнее, это метод constructor
// alert(User === User.prototype.constructor); // true
// // Методы находятся в User.prototype, например:
// alert(User.prototype.sayHi); // alert(this.name);
// // в прототипе ровно 2 метода
// alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
// //
// //
// //
// //
// //
// //
// class User {
//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("Иван");
// alert(user.name); // Иван
// user = new User(""); // Имя слишком короткое.
//
//
//
//
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

//
//

//
//
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит.`);
//   }
// }
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
//   stop() {
//     super.stop(); // вызываем родительский метод stop
//     this.hide(); // и затем hide
//   }
// }
// let rabbit = new Rabbit("Белый кролик");
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
///
//
// //
// //
// -=========================================================================================//статичні методи
//
//
// Статические методы используются для функциональности, принадлежат классу «в целом»,
//  а не относятся к конкретному объекту класса.
// Например, метод для сравнения двух статей Article.compare(article1, article2) 
// или фабричный метод Article.createTodays().
// В объявлении класса они помечаются ключевым словом static.
// Статические свойства используются в тех случаях, когда мы хотели бы сохранить данные на уровне класса,
//  а не какого-то одного объекта.
// Синтаксис:
// class MyClass {
//   static property = ...;
//   static method() {
//     ...
//   }
// }
// Технически, статическое объявление – это то же самое, что и присвоение классу:
// MyClass.property = ...
// MyClass.method = ...
// Статические свойства и методы наследуются.
// Для class B extends A прототип класса B указывает на A: B.[[Prototype]] = A. Таким образом, если поле не найдено в B, 
// поиск продолжается в A.
//
//
//
//
// //class CoffeeMachine {
//   waterAmount = 0; // количество воды внутри
//   constructor(power) {
//     this.power = power;
//     alert( `Создана кофеварка, мощность: ${power}` );
//   }
// }
// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
// // добавляем воды
// coffeeMachine.waterAmount = 200;
//
//
//
// //
// class User {
//   static staticMethod() {
//     alert(this === User);
//   }
// }
// User.staticMethod(); // true
//
//
// //
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }
// // використання
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1))
// ];
// articles.sort(Article.compare);
// alert( articles[0].title ); // CSS
//
//
//
//
//
// //статичні влативості
// class Article {
//   static publisher = "Илья Кантор";
// }
// alert( Article.publisher ); // Илья Кантор
//
//
//
//
//==================ООП 
// В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.
// Это даёт следующие выгоды:
// Защита для пользователей, чтобы они не выстрелили себе в ногу
// Представьте себе, что есть команда разработчиков, использующая кофеварку. Она была изготовлена компанией 
// «Лучшие Кофеварки» и работает нормально, но защитный кожух был снят. Внутренний интерфейс стал доступен извне.
// Все разработчики культурны – они используют кофеварку по назначению. Но один из них, Джон, решил, что он самый умный, 
// и сделал некоторые изменения во внутренностях кофеварки. После чего кофеварка вышла из строя через два дня.
// Это, конечно, не вина Джона, а скорее человека, который снял защитный кожух и позволил Джону делать свои манипуляции.
// То же самое в программировании. Если пользователь класса изменит вещи, не предназначенные для изменения извне –
//  последствия непредсказуемы.
// Поддерживаемость
// Ситуация в программировании сложнее, чем с реальной кофеваркой, потому что мы не просто покупаем её один раз. 
// Код постоянно подвергается разработке и улучшению.
// Если мы чётко отделим внутренний интерфейс, то разработчик класса сможет свободно менять его внутренние свойства и методы,
//  даже не информируя пользователей…
// Если вы разработчик такого класса, то приятно знать, что приватные методы можно безопасно переименовывать, 
// их параметры можно изменять и даже удалять, потому что от них не зависит никакой внешний код.
// В новой версии вы можете полностью всё переписать, но пользователю будет легко обновиться, если внешний интерфейс
//  остался такой же.
// Сокрытие сложности
// Люди обожают использовать простые вещи. По крайней мере, снаружи. Что внутри – это другое дело.
// Программисты не являются исключением.
// Всегда удобно, когда детали реализации скрыты, и доступен простой, хорошо документированный внешний интерфейс.
//
//
//
//
//
//
// добавим один метод (можно более одного)
// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }
// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty()); // false