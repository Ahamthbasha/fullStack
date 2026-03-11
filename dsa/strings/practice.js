// let str1 = "racecar"
// let str2 = "noon"
// let str3 = "madam"

// function palindrome(str){
//     let start = 0
//     let end = str.length - 1

//     while(start <= end){
//         if(str[start] != str[end]){
//             return false
//         }
//         start++
//         end--
//     }

//     return true
// }

// console.log(palindrome(str1))
// console.log(palindrome(str2))
// console.log(palindrome(str3))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// given a route containing 4 directions(E,W,N,S), find the shortest path to reach destination.

// let str = "WNEENESENNN"

// let x = 0
// let y = 0

// for(let val of str){
//     if(val == "N"){
//         y++
//     }
//     else if(val == "S"){
//         y--
//     }
//     else if(val == "W"){
//         x--
//     }
//     else{
//         x++
//     }
// }

//as per the formula

// square root of x2 - x1 the whole square + y2 -y1 whole square

// let x1 = 0
// let y1 = 0

// let sum = Math.sqrt(Math.pow(x-x1,2) + Math.pow(y-y1,2))

// console.log(sum) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str1 = "Tony" 
// let str2 = "Tony"
// let str3 =  new String("Tony")

// console.log(str1 == str2)
// console.log(str1 == str3)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //substring

//  let str = "hello world"

//  function substring(str,start,end){
//     let final = ''

//     for(let i=start;i<end;i++){
//         final += str[i]
//     }

//     return final
//  }

//  console.log(substring(str,0,5))

 //built in method

//  console.log(str.substring(0,5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//for a given set of strings, print the largest string.

// let words = ["apple","mango","banana"]

// let largestWord = ''

// for(let val of words){
//     if(val.length > largestWord.length){
//         largestWord = val
//     }
// }

// console.log(largestWord)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//find the lexicographically largest word

let words = ['apple','mango','banana']

// one approach
// words.sort()

// console.log(words[words.length-1])

//second approach

// words.sort((a,b)=>b.localeCompare(a))
// console.log(words[0])

//third approach

// let largest = ''

// for(let val of words){
//     if(val.localeCompare(largest) > 0){
//         largest = val;
//     }
// }

// console.log(largest)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for a given string convert each the first letter of each word to uppercase

//my logic

// let word = 'hi, i am basha'

// word = word.split(' ').map((val)=>val[0].toUpperCase()+val.slice(1)).join(" ")

// console.log(word)

//apna college logic

// let word = 'hi, i am basha'

// function makeFirstLetterUppercase(str){
//     let char = ''
//     char += str[0].toUpperCase()

//     for(let i=1;i<str.length;i++){
//         if(str[i] == ' '){
//             char += str[i]
//             i++
//             char += str[i].toUpperCase()
//         }else{
//             char += str[i]
//         }
//     }

//     return char
// }

// console.log(makeFirstLetterUppercase(word))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//string compression

// let str = "aaabbcccdd"
// let str = 'abc'
//output : a3b2c3d2

// incase of abc output should be abc
// let strMap = {}

// for(let val of str){
//     if(strMap[val]){
//         strMap[val]++
//     }else{
//         strMap[val]=1
//     }
// }

// let newStr = ''

// for(let key in strMap){
//     if(strMap[key] == 1){
//         newStr += key
//     }else{
//         newStr +=key+strMap[key]
//     }
// }

// console.log(newStr)

// ALTERNATE APPROACH

// let str = "aaabbcccdd"

// let newStr = ''

// for(let i=0;i<str.length;i++){
//     let character = str[i]
//     let count = 1
//     while(i < str.length && character == str[i+1]){
//         count++
//         i++
//     }

//     newStr += character

//     if(count>1){
//         newStr += count
//     }
// }

// console.log(newStr)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// count how many times lowercase vowels occurred in a String entered by the user.

// let string = "AhamathBasha The best" 

// let count = 0

// let vowels = new Set(['a','a','e','i','o','u'])

// for(let val of string){
//     if(vowels.has(val)){
//         count++
//     }
// }

// console.log(count)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// what will be the output?

// let str = "ahamathbasha"
// let str1 = "ahamathbashaCollege"
// let str2 = "ahamathbasha"

// console.log(str == str1 + ' ' + str == str2) // false

// console.log((str == str1)+ ' ' + (str == str2)) // false true


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// what will be the ouput?

// let str = "apnaCollege"

// str = str.replace('l',"")

// console.log(str)

//apnaColege

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// determine two strings are anagram

// function checkAnagram(word1,word2){
//     let freqMap = {}

//     for(let val of word1){
//         if(freqMap[val]){
//             freqMap[val]++
//         }else{
//             freqMap[val]=1
//         }
//     }

//     for(let val of word2){
//         if(freqMap[val] > 0){
//             freqMap[val]--
//         }else{
//             return false
//         }
//     }

//     return true
// }

// console.log(checkAnagram("listen","silent"))


