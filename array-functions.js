let cities = ['Berlin', 'Beijing', 'Bangkok', 'Budapest']
let countries = ['Germany', 'France', 'Italy', 'Spain']

// forEach
// countries.forEach(function(el, index, arr) {
//     console.log(index, el, arr.length)
// })
console.log('')

// map
const startCharArr = cities.map(function(el, index, arr) {
    return el[0]
})

// console.log(startCharArr) // ['B', 'B', 'B', 'B']

let numArr = [2, 4, 5]
let newNum = numArr.map(function(el, index, arr) {
    return 2 ** el
})

// find
const numbers = [1, 15, 23, 24]

let evenNumber = numbers.find(function(el, index, arr) {
    if (el % 2 === 0) {
        return true
    }
})

// console.log(numbers.find((el, index, array) => el % 3 === 0 || el % 2 === 0))

cities = [
    {
        name: 'Los Angeles',
        country: 'U.S.',
    },
    {
        name: 'Toronto',
        country: 'Canada',
    },
    {
        name: 'Montreal',
        country: 'Canada',
    },
    {
        name: 'Ciudad de Mexico',
        country: 'Mexico',
    },
    {
        name: 'Miami',
        country: 'U.S.',
    },
    {
        name: 'New York',
        country: 'U.S.',
    },
    {
        name: 'Tijuana',
        country: 'Mexico',
    },
    {
        name: 'Vancouver',
        country: 'Canada',
    },
]

const newArray2 = cities
    .filter(cityObject => cityObject.country === 'Canada')
    .map(cityObject => cityObject.name)
console.log(newArray2)

cities.sort(function(a, b) {
    return a.country.localeCompare(b.country)
})

cities.sort((a, b) => a.country.localeCompare(b.country))

console.log('cities :', cities)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.sort((a, b) => {
    if (a % 2 === b % 2) return 0
    else if (a % 2 < b % 2) return -1
    else return 1
})

nums.sort((a, b) => {
    return b - a
}).sort(function(a, b) {
    if (a % 2 === b % 2) return 0
    else if (a % 2 < b % 2) return -1
    else return 1
})

// const a = condition ? true : false

console.log('nums :', nums)
// [1,3,5,7,9,2,4,6,8,10]

// nums = [1, 2, 3, 4, 5, 6, 99]

const sum = nums.reduce((acc, val) => {
    return acc + val
}, 0)

// const lengthSums = cityStrings.reduce((acc, value) => {
//     return acc + value.length
// }, cityStrings.length)

/* eslint-disable */
const cityStrings = ['Barcelona', 'Berlin', 'Madrid']
Array.prototype.customReduce = function(cb, startValue) {
    const array = this
    let accumulatedValue = startValue
    for (let i = 0; i < this.length; i++) {
        accumulatedValue = cb(accumulatedValue, array[i], i, array)
    }

    return accumulatedValue
}

console.log(
    cityStrings.customReduce(function(acc, value, index, array) {
        return acc + value.length
    }, 0)
)
