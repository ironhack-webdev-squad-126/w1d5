// 1. Variable Declaration

const a = 5
let b = 10
b++

// 2. Data Types
const str = 'Hello'
const number = 123
const array = [1, 2, 3]
const object = {
    a: 1,
    b: 2,
}
const boolean = true
const nullVariable = null

// 3. Conditionals

if (false) {
    // NOT GOING TO DO THAT HERE
} else if (boolean) {
    console.log('YESS')
} else {
}

// 3. converting to booleans / falsy & truthy values
const truthyString = 'Hello'
if (!!truthyString) {
    console.log('THIS WILL LOG')
}

const falsyValue = 0
if (!!falsyValue) {
    console.log('WILL NOT LOG')
} else if (!falsyValue) {
    console.log('THIS WILL LOG', falsyValue)
}

// 4. For loop
const myArr = ['a', 'b', 'c']
for (let i = 0; i < myArr.length; i++) {
    const currentElement = myArr[i]
}

// 4.1 for in loop
for (let index in myArr) {
    const currentElement = myArr[index]
}

// 4.2 for of loop
for (let currentElement of myArr) {
}

// 5. Objects
const myObj = {
    name: 'Lukas',
    age: 25,
    location: 'Berlin',
    bestTeacher: true,
}

myObj.name // Lukas

// 5.1 Get Object keys
Object.keys(myObj) // ['name', 'age', 'location', 'bestTeacher']

// 5.2 Get Object values
Object.values(myObj) // ['Lukas', 25, 'Berlin', true]

// 5.2 Accessing Object properties based on dynamic key stored in a variable
const keyVar = 'name'
myObj[keyVar] // Lukas

// 5.2 Accessing Object properties with something other than a string key
const specialObj = {
    '%': 'Berlin',
    $: 'Amsterdam',
}
myObj['%'] // Berlin

// 6. functions
// 6.1 function declaration
function myFunction(paramOne, paramTwo) {
    console.log(paramOne)
    console.log(paramTwo)
}

// 6.2 function invocation (call a function)
myFunction('a', 'b') // a, b

// 6.3 arrow functions
const myFirstArrowFunction = (paramOne, paramTwo) => {
    // DO SOMETHING WITH paramOne & paramTwo
}

// 7. Array functions

// 7.1 Array.forEach
const citiesArray = ['Berlin', 'Barcelona', 'Montreal']
citiesArray.forEach(function(currentElement, index, citiesArray) {
    console.log(index, currentElement)
})

// 7.2 Array.map (returns a new array based on your input array)
let nums = [1, 2, 3]
const multipliedNums = nums.map(function(el, index, arr) {
    return el * 2
})

// 7.3 Array.find (returns one element)
nums = [1, 3, 4, 5, 8]
const firstEvenNumber = nums.find(function(el, index, array) {
    return el % 2 === 0
})

// 7.4 Array.filter (returns an array with a subset of the input array)
nums = [1, 2, 3, 4, 5, 6]
const evenNumbers = nums.filter(function(el, index, array) {
    return el % 2 === 0
})

// 7.5. Array.sort
nums = [1, 9, 8, 3, 5, 6, 4, 2, 7]
nums.sort(function(a, b) {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
})
// 7.6 Array.reduce
const sum = [1, 2, 3, 4].reduce((acc, val) => {
    return acc + val
}, 0)
