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
