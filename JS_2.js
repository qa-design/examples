// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

console.log(2 ** 10)

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function exponentiation(ex){
    console.log(2 ** ex)
}

exponentiation(10)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

s = ":)"

for (let i=1; i<=5; i++){
    console.log(s.repeat(i))
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function rep(str, rows)
{
    for (let i=1; i<=rows; i++){
        console.log(str.repeat(i))
    }
}

rep(":)", 10)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Checklist'

words = ["case", "Case", "Checklist"]

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(`В слове ${words[0]} гласных ${countVowels('case')}, согласных ${words[0].length-countVowels('case')}`);
console.log(`В слове ${words[1]} гласных ${countVowels('case')}, согласных ${words[1].length-countVowels('case')}`);
console.log(`В слове ${words[2]} гласных ${countVowels('case')}, согласных ${words[2].length-countVowels('case')}`);

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

strings = ["abba", "Abba"]

function isPalindrom(...stings){
    count = 1
    strings.forEach(string => {
        for (let i = 0; i < string.length / 2; i++){
            if (string[i] != string[string.length-count]){
                console.log(`${string} - Не палиндром`)
                break
            }
            if (i == (string.length/2)-1){
                console.log(`${string} - Палиндром`)
            }
            count++
        }
    });
}

isPalindrom(strings)