//reverse a string

// let str = 'lingam'
// console.log(str.split('').reverse().join(''))

// reverse a number

// let a = 10
// console.log(Number(a.toString().split('').reverse().join('')))

// palindrome Number

// let a = 101
// let copya = a
// console.log(Number(copya.toString().split('').reverse().join('')) == a)

// palindrome string

// let str = 'malayalam'
// let reversedStr = str
// console.log(reversedStr.split('').reverse().join('') == str)

// armstrong number

// let a = 101

// let armstrongNumber = 0

// let copyA = a.toString()

// for(let i=0;i<copyA.length;i++){
//     armstrongNumber += Math.pow(10,i)
// }

// console.log(armstrongNumber == a)

//prime number

// function isPrime(num){
//     if(num < 2){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num % i == 0){
//             return false
//         }
//     }

//     return true
// }

// console.log(isPrime(3))


// for(let i=1;i<=100;i++){
//     let count = 0
//     for(let j=1;j<=100;j++){
//         if(i % j == 0){
//             count++
//         }
//     }

//     if(count == 2){
//         console.log(i)
//     }
// }

// another way

// for(let i=2;i<=100;i++){
//     let isPrime = true

//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i % j == 0){
//             isPrime = false
//             break
//         }
//     }

//     if(isPrime){
//         console.log(i)
//     }
// }

// fibonocci

// function fibonocciSeries(n){
//     let a = 0
//     let b = 1

//     console.log(a)
//     console.log(b)

//     for(let i=2;i<=n;i++){
//         let c = a + b
//         a = b
//         b = c
//         console.log(c)
//     }
// }

// fibonocciSeries(5)

// //////////

// function factorial(n){
//     let fact = 1
//     for(let i=1;i<=n;i++){
//         fact *= i
//     }

//     return fact
// }

// console.log(factorial(5))

// swap two numbers

// let a = 10
// let b = 20

// let temp = a
// a = b
// b = temp

// console.log(a,b)

// count digits

// let no = 10000
// let count = 0
// while(no){
//     no = Math.floor(no/10)
//     count++
// }

// console.log(count)

// sum of digits

// let no = 123

// let copy = no
// let sum = 0
// while(copy){
//     let remainder = copy % 10
//     sum += remainder
//     copy = Math.floor(copy/10)
// }

// console.log(sum)

// let a = 10
// let b = 20
// let c = 30

// if((a > b) && (a > c)){
//     console.log(a)
// }
// else if((b > a) && (b > c)){
//     console.log(b)
// }
// else{
//     console.log(c)
// }

//even odd

// let no = 100

// console.log(no % 2 == 0 ? 'even' : 'odd')

// leap year

// let year = 2026

// console.log(year % 4 == 0 ? 'leap Year' : 'not leap year')

// for(let i=2001;i<=2026;i++){
//     if(((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)){
//         console.log(i)
//     }
// }

//bubble sort

// function bubbleSort(arr){
//     let swapped = true

//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] < arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([1,2,100,3,500,4,6,0]))


// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// console.log(selectionSort([100,1,2,3,4,5,0,-1,-100]))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i - 1

//         while((j >= 0) && (cur < arr[j])){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
        
//     }

//     return arr
// }

// console.log(insertionSort([100,1,2,3,4,5,0,-1,-100]))

// linear search

// let arr = [7,100,1,2,3,4,5,6]
// let no  = 100

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == no){
//         console.log(i)
//     }
// }

// binary search

// let arr = [1,2,3,4,5,6]
// let target = 4
// let start = 0
// let end = arr.length-1

// while(start <= end){
//     let mid = Math.floor((start+end)/2)

//     if(arr[mid] == target){
//         console.log(mid)
//         break
//     }
//     else if(arr[mid] < target){
//         start++
//     }else{
//         end--
//     }
// }

//duplicateElements

// let set1 = new Set()

// let arr = [1,2,3,4,5,6,1]

// let duplicate = []

// for(let val of arr){
//     if(set1.has(val)){
//         duplicate.push(val)
//     }else{
//         set1.add(val)
//     }
// }

// console.group(duplicate)

// remove duplicates

// let arr = [1,1,1,1,2,3,3,5,1]

// arr = [...new Set(arr)]

// console.log(arr)

//second largestNumber

// let arr = [12,2,3,100,1000,10000]

// function largestNumbers(arr){
//     let no = arr.reduce((acc,cur)=>{
//         if(cur > acc.first){
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.second){
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.third){
//             acc.first = cur
//         }
//         return acc
//     },{first:-Infinity,second:-Infinity,third:-Infinity})

//     return no
// }

// console.log(largestNumbers(arr).second)

// freq chara

// let str = 'ababab'

// let freqMap = {}

// for(let val of str){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// console.log(freqMap)

//  count vowels

// let vowels = new Set(['A','E','I','O','U','a','e','i','o','u'])

// let word = 'dilwale dil duniya le jayenge'

// let vowelCount = 0

// for(let val of word){
//     console.log(val)
//     if(vowels.has(val)){
//         vowelCount++
//     }
// }

// console.log(vowelCount)

// count words

// let word = "123 456 789"

// let result = []
// let temp = ''
// for(let val of word){
//     if(val == ' '){
//         if(temp.length != 0){
//             result.push(temp)
//             temp = ''
//         }
//     }else{
//         temp += val
//     }
// }

// if(temp.length != 0){
//     result.push(temp)
// }

// console.log(result)
// console.log(result.length)

// reverse Word

// let word = "I Love JavaScript"

// word = word.split(" ").map((val)=>{
//     return val.split('').reverse().join('')
// }).join(' ')

// console.log(word)

// rotate array

// let arr = [1,2,3,4,5]
// let k = 2
// let count = 0
// while(count != k){
//     let last = arr.pop()
//     arr.unshift(last)
//     count++
// }

// console.log(arr)

// merget array

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let result = [...arr1,...arr2].sort((a,b)=>a-b)

// console.log(result)

// move zeroes

// let nums = [0, 1, 0, 3, 12]

// let index = 0

// for(let i=0;i<nums.length;i++){
//     if(nums[i] > 0){
//         nums[index] = nums[i]
//         index++
//     }
// }

// for(let j=index;j<nums.length;j++){
//     nums[j] = 0
// }

// console.log(nums)

// let nums = [3, 3]
// let target = 6

// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if((nums[i]+nums[j]) == target){
//             console.log([i,j])
//         }
//     }
// }

// 
// function anagram(str1,str2){
//     return str1.split("").sort().join("") == str2.split("").sort().join("")
// }

// console.log(anagram(str1,str2))

// let str1 = "Triangle"
// let str2 = "Integral"

// function anagram(str1,str2){
//     if(str1.length != str2.length){
//         return false
//     }
    
//     let strMap = {}

//     for(let val of str1){
//         if(strMap[val.toLowerCase()]){
//             strMap[val.toLowerCase()]++
//         }else{
//             strMap[val.toLowerCase()]=1
//         }
//     }

//     console.log(strMap)

//     for(let val of str2){
//         if(strMap[val.toLowerCase()]){
//             strMap[val.toLowerCase()]--
//             if(strMap[val.toLowerCase()] <= 0){
//                 delete strMap[val.toLowerCase()]
//             }
//         }
//         else{
//         return false
//         }
//     }


//     return true
// }

// console.log(anagram(str1,str2))

// let word = "swiss"

// let freq = {}

// for(let val of word){
//     if(freq[val]){
//         freq[val]++
//     }else{
//         freq[val]=1
//     }
// }

// for(let key in freq){
//     if(freq[key] == 1){
//         console.log(key)
//         break
//     }
// }

// remove spaces

let word = "Hello World"
word = word.split(" ").join("")
console.log(word)