// Простые методы массивов.
// Задание Nº1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
let arr = ["dlrow", "olleH"];
arr = arr.map((str) => str.split("").reverse().join(""));
arr.reverse();
console.log(arr);

// Задание Nº2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let arr2 = ["а", "б", "в"];
let arr22 = [2, 3, 5, 5];
arr2.push(...arr22);
console.log(arr2);

// Задание Nº3
// Дан массив ["Apple", "Orange", "Pinapple","Cherry"]. Удалите сначала первый элемен"Apple" и этот же элемент подставтье после "Pineapple" .
let arr3 = ["Apple", "Orange", "Pinapple", "cherry"];
let firstElement = arr3.shift();
let index = arr3.indexOf("Pinapple");
if (index !== -1) {
  arr3.splice(index + 1, 0, firstElement);
}
console.log(arr3);

// Задание Nº4
// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
let arr4 = [18, -7, -21, 44, 31];
arr4.sort((a, b) => b - a);
let maxNumber = arr4[0];
console.log("Наибольшее число в массиве:", maxNumber);
