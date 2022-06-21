// Task 2*  Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// Task 2** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

// открываем файл и переводим данные в json
const fs = require('fs')

let raw = fs.readFileSync('/Users/user/git/JS/30/task2.json')
let data = JSON.parse(raw)

// первый вариант
let res = data.reduce((accumulator, currentValue) => {
    if (accumulator.every(item => !(item.name === currentValue.name && item.name === currentValue.name))) accumulator.push(currentValue)
    return accumulator
  }, []);
  
console.log(res);

// второй вариант
let unique = Array.from(new Set(data.map(item => JSON.stringify(item)))).map(item => JSON.parse(item))
console.log(unique)