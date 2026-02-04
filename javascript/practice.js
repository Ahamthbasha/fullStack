// 1. what is the value of age after this code runs?

// let age = 23

// age + 2 // 25

// console.log(age)

// 2.what is the value of avg after this code runs?

// let hindi = 80
// let eng = 90
// let math = 100
// let avg = (hindi + eng + math)/3
// answer will be 90
// console.log(avg)

// 3.what is the value of each variable in each line of code?

// let num = 5
// let newNum = num++ //5
// console.log(newNum)
// newNum = ++num //7
// console.log(newNum)

// console.log(num)

// 4.Find the error in the following code?

// a)

// let 1age = 5
// let 2age = 10

// it should avoid no in start variable

// b)

// let marks = 75
// let isPass = True

// It should be true

// c)
// let isPass = 'true'

//It should not be string value


// 5.Find the typeof

// let name = "ahamathbasha"
// console.log(typeof name)
// console.log(typeof name.length)

// let abcd = null
// console.log(abcd)

// 6.declare your name as a string and print its length in js

// let name = "ahamathbasha"
// console.log(name.length)

// 7.declare your first name as a string and prints its first character

// let first = "ahamathbasha"
// console.log(first[0])

// 8.declare your first name as a string and prints its last character.

// let firstName = "ahamathbasha"
// console.log(firstName[firstName.length-1])

// 9.what s the output of following code "apnacollege"+123
// "apnacollege123"

// 10.what are the length of empty string and single space?
// empty string length will be zero
// single space string length will be one.

// null == undefined -> true
// null === undefined -> false

// 11.create a traffic light system that shows what to do based on color.

// let color 

// if(color == 'red'){
//     console.log("stop")
// }
// else if(color == "yellow"){
//     console.log("ready")
// }
// else if(color == "green"){
//     console.log("go")
// }
// else{
//     console.log("unknown")
// }

// 12.create a system to calculate popcorn prices based on the size customer asked for:

// if(size == "XL"){
//     console.log(`250 rupees`)
// }
// else if(size == "L"){
//     console.log(`200 rupees`)
// }
// else if(size == "M"){
//     console.log(`100 rupees`)
// }
// else if(size == "S"){
//     console.log(`50 rupees`)
// }
// else{
//     console.log(`size is unknown`)
// }

// 13. A good string is a string that starts with the letter a and has a length which is greater than 3. Write a program to find if a string is good or not.

// let string = "ahamathbasha"

// if(string[0] == "a" && string.length > 3){
//     console.log("good string")
// }
// else{
//     console.log("bad string")
// }

// 14.predict the output of following code

// resuult will be safe

// let num = 12

// if((num%3 == 0) && ((num+1 == 15) || (num-1 == 1))){
//     console.log("safe")
// }
// else{
//     console.log("unsafe")
// }

//15. use switch statement to print the day of the week using a number variable day with values 1 to 7

// let day = 1

// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("saturday")
//         break
//     case 7:
//         console.log("sunday")
//         break
//     default:
//         console.log("wrong day entered")
// }


//16.alert

// alert("hello basha bhai")

//17.prompt

// let firstName = prompt("enter your first name") 
// let lastName = prompt("enter your last name")
// let msg = `welcom ${firstName} ${lastName}`
// alert(msg)

//18.create a number variable num with some value.Now print "good" if the number is divisible by 10 and print "bad" if it is not.

// let num = 100

// if(num % 10 == 0){
//     console.log("good")
// }
// else{
//     console.log("bad")
// }

//19.Take user name and age as input using prompts.

// let name = prompt("enter your name")
// let age = prompt("enter your age")
// alert(`${name} is ${age} years old`)

// 20. print months in quarter.

// Months in quarter1 : January,February,March
// Months in quarter2 : April,May,June
// Months in quarter3 : July,August,September
// Months in quarter4 : October,November,December

// let month = 3

// switch(month){
//     case 1:
//         console.log('January,February,March')
//         break
//     case 2:
//         console.log("April,May,June")
//         break
//     case 3:
//         console.log("July,August,September")
//         break
//     case 4:
//         console.log("October,November,Decemeber")
//         break
//     default:
//         console.log("Month need to be 4")
// }

// 21.A string is a golden string if it starts with character A or a and has a total length greater than 5.

// let str = "hello basha"

// if((s[0] == "A" || s[0] == "a") && s.length > 5){
//     console.log("golden string")
// }
// else{
//     console.log("not a golden string")
// }

// 22. write a program to find the largest of 3 numbers.

// let arr = [1,1,2,100,1000,200,2200,3000]
// let largest = arr.reduce((acc,cur)=>{
//     if(acc.first == cur || acc.second == cur || acc.third == cur){
//         return acc
//     }

//     if(cur > acc.first){
//         acc.third = acc.second
//         acc.second = acc.first
//         acc.first = cur
//     }
//     else if( cur > acc.second){
//         acc.third = acc.second
//         acc.second = cur
//     }
//     else if(cur > acc.third){
//         acc.third = cur
//     }
//     return acc

// },{first:-Infinity,second:-Infinity,third:-Infinity})

// console.log(largest)


// 23. write a program to check if 2 numbers have the same last digit.

// ex: 32 and 47852

// let no1 = 32
// let no2 = 4782

// let no1String = no1.toString()
// let no2String = no2.toString()

// console.log(no1String[no1String.length-1] == no2String[no2String.length-1])

//alternative way

// let no1Last = no1 % 10
// let no2Last = no2 % 10
// console.log(no1Last == no2Last)

// 24. trim it and convert it to uppercase

// let msg = "help!"

// msg = msg.trim().toUpperCase()

// console.log(msg)

// 25.For the string let name = "ApnaCollege" predict the output for following

// name.slice(4,9) // "Colle"
// name.indexOf("na") //2
// name.replace("Apna","Our") //"Our College"

// 26. separate the college part l with t

// let name = "ApnaCollege"
// name = name.replaceAll("l","t")
// console.log(name)

// 27.array checking

// let arr = []

// arr[0] = "basha"

// arr[10] = "super duper hit"

// console.log(arr)

// arr[5] = "ahamath"

// console.log(arr)

// arr.push(100)
// console.log(arr)

//28. change the state of an arry to final form 

// let start = ["january","july","march","august"]

// let final = ["july","june","march","august"]

// start[0] = "july"
// start[1] = "june"

// console.log(start)

//29.Return the index of the javascript from the given array, it it was reversed.

// let arr = ['c','c++','html','javascript','python','java','c#','sql']

// console.log(arr.indexOf('javascript'))


// 30. create a nested array to show the following tic-tac-toe game state.

// let ticTaeToe = [['x',null,'O'],[null,'x',null],['o',null,'x']]

// ticTaeToe[0][1] = 0

// 31. Write a js program to get the first n element of an array.

// let arr = [7,9,0,-2]
// let n = 3
// console.log(arr.slice(0,n))

// 32.Write a JavaScript program to get the last n elements of an array.[n can be any positive number].

// console.log(arr.slice(-n))

// 33.Write a javascript program to check whether a string is blank or not

// let str = ''

// if(str.length == 0){
//     console.log('blank')
// }else{
//     console.log("not blank")
// }

// 34.write a js program to test whether the character at the index is lowercase
let index = 0

let character = "abcdEf"

console.log(character[index] == character[index].toLowerCase())

// 35. write a js program to strip leading and trailing spaces from a string.

// let spacedStr = " hello basha ji "

// console.log(spacedStr.trim())

// 36. write a js program to check if an element exists in an array or not.

// let fruits = ['apple','mango','cherry']

// console.log(fruits.includes("banana"))