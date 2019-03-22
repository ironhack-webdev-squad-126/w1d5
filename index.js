// 1. function that logs a string
// function logString(str) {
//     console.log(str)
// }

// logString('Hello')
// logString('Berlin')
// logString('Ironhack')

// 2. function that takes in a number and outputs the number times two
// function multNumber(n) {
//     return n * 2
// }

// console.log(multNumber(2)) // 4
// console.log(multNumber(16)) // 32

// 2. function that takes in two numbers. One base number and one exponent and returns the exponentiation result

// function expNum(x, y) {
//     var result = x ** y
//     return result
// }

// console.log(expNum(2, 2)) // 4
// console.log(expNum(4, 2)) // 16
// console.log(expNum(3, 4)) // 81
// console.log(expNum(5, 3)) // 125

// 3. function that takes in an array and logs every element
// function logArrElements(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

// function logArrElements(array) {
//     array.forEach(function(el) {
//         console.log(el)
//     })
// }

// logArrElements(['A', 'B', 'C'])
// // A
// // B
// // C

// logArrElements([1, 2, 3])
// // 1
// // 2
// // 3

// 4. function that takes in an array of characters and returns a string of those characters
// function arrToString(arr) {
//     let newString = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             newString += arr[i].toUpperCase()
//         } else {
//             newString += arr[i].toLowerCase()
//         }
//     }
//     return newString
// }

// function arrToString(arr) {
//     const caseArray = arr.map(function(el, i) {
//         if (i % 2 === 0) return el.toUppercase()
//         else return el.toLowerCase()
//     })

//     return caseArray.join('')
// }

// console.log(arrToString(['B', 'E', 'R', 'l', 'i', 'N'])) // BeRlIn

// 5. function that takes one array of strings and returns
// the sum of the strings' lengths combined with the array length

// let sumLengths = function(array) {
//     let combinedStrings = array.join('')
//     return array.length + combinedStrings.length
// }

// const sumLengths = arr => {
//     let combinedLengths = 0
//     combinedLengths += arr.length

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index]
//         combinedLengths += element.length
//     }
//     return combinedLengths
// }

// function sumLengths(arr) {
//     return arr.reduce((acc, value) => {
//         return acc + value.length
//     }, arr.length)
// }

// console.log(sumLengths(['abc', 'def'])) // 8
// console.log(sumLengths(['Berlin', 'Barcelona'])) // 17
// console.log(sumLengths(['Berlin', 'Barcelona', 'Madrid'])) // 24
