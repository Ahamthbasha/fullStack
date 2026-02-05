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
// let index = 0

// let character = "abcdEf"

// console.log(character[index] == character[index].toLowerCase())

// 35. write a js program to strip leading and trailing spaces from a string.

// let spacedStr = " hello basha ji "

// console.log(spacedStr.trim())

// 36. write a js program to check if an element exists in an array or not.

// let fruits = ['apple','mango','cherry']

// console.log(fruits.includes("banana"))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part - 4

// 37.Print all odd number from 1 to 15

// for(let i=1;i<=15;i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// 38.print all even number from 2 to 10

// for(let i=2;i<=10;i=i+2){
//     console.log(i)
// }

// 39.print the multiplication table for 5

// for(let i=1;i<=50;i++){
//     console.log(`${i} * ${5} = ${i*5}`)
// }

// 40.Make user guessing the favourite Movie

// let favouriteMovie = "Avatar"
// let guess = prompt("enter my favourite movie")
//     while(guess != favouriteMovie){
//         guess = prompt("Re-enter your favouriteMovie")
//         if(guess == favouriteMovie){
//             alert("you guessed my favouriteMovie")
//             break
//         }
//     }

// 41.create a todo

// let todo = []
// let req = prompt("enter your request")

// while(true){
//     if(req == "quit"){
//         console.log("todo list is quitted")
//         break
//     }
//     else if(req == "add"){
//         req = prompt("enter your task")
//         todo.push(req)
//     }
//     else if(req == "delete"){
//         req = prompt("enter your task you want to delete")
//         let taskIndex = req.indexOf(req)
//         todo.splice(taskIndex,1)
//         alert("task is deleted")
//     }
//     else if(req == "list"){
//         for(let val of todo){
//             console.log(val)
//         }
//     }
//     else{
//         alert("invalid request")
//         break
//     }

//     req = prompt("enter your request")
// }

// 42. write a js program to delete all occurences of element num in a given array.

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1)
//     }
// }

// console.log(arr)

// 43.write a program to find the no of digits in a number

// let number = 287152
// answer: count = 6

// let stringNumber = number.toString().length
// console.log(stringNumber)

// alternative way

// let temp = number
// let count = 0
// while(temp){
//     temp = Math.floor(temp/10)
//     count++
// }

// console.log(count)

// 44.print the factorial of number n

// let fact = 5
// let result = 1
// for(let i=1;i<=5;i++){
//     result *= i
// }

// console.log(result)

// 45.find the largest number in an array with only positive numbers.

// let arr = [1000,2000,20,30000]

// console.log(Math.max(...arr))

// alternative way

// let largest = -Infinity

// for(let val of arr){
//     if(val > largest){
//         largest = val
//     }
// }

// console.log(largest)

// 46.find the sum of digits in a number

// let number = 287152
// ans 25

// let temp = number
// let sum = 0
// while(temp){
//     let remainder = temp % 10
//     sum += remainder
//     temp = Math.floor(temp/10)
// }

// console.log(sum)

// 47.Create an object literal for the properties of thread / twitter post which includes username,content,likes,reposts,tags

// const twitter ={
//     username:"ahamathbasha",
//     content:"I am the best",
//     likes:100,
//     repost:100,
//     tags:["#hello"]
// }

// 48.Add/update value 
// change the city to "Mumbai"
// Add a new property gender:"Female"
// change the marks to "A"

// const student = {
//     name :"Shradha",
//     age:23,
//     marks:94.4,
//     city:"Delhi"
// }

// student.city = "Mumbai"
// student.gender = "female"
// student.marks = "A"

// console.log(student)

// 49.generate a random no between one to ten

// let nums = Math.random()

// nums =Math.floor(nums * 10) + 1

// console.log(nums)

// 50.generate a random no between 1 to 100

// let nums = Math.random()

// nums = Math.floor(nums * 100) + 1
// it will generate the no between 1 to 100 the 1 denotes the start range and 100 denote the end

// console.log(nums)

// 51.generate a random no between 1 to 5

// let nums5 = Math.random()

// nums5 = Math.floor(nums5 * 5) + 1

// console.log(nums5)

// 51.user enters a max number and then tries to guess a random generated number between 1 to max.

// let no = prompt("enter your Max number")
// let number = Math.floor(Math.random() * Number(no)) + 1
// let guessingNo = prompt("guessing number")

// while(true){
//     if(guessingNo == 'quit'){
//         alert("you quit the game")
//         break
//     }
//     if(Number(guessingNo) == number){
//         alert("you guess the number")
//         break
//     }
//     else{
//         if(guessingNo < number){
//             alert("try larger number")
//         }
//         else if(guessingNo > number){
//             alert("go down")
//         }
//         else{
//             alert("try until conquer")
//         }
//         guessingNo = prompt("wrong guess.Please guess again")
//     }
// }

// 52.create a program that generates a random number representing a dice roll.The number should be between 1 to 6

// let num = Math.floor(Math.random() * 6) + 1
// console.log(num)

// 53.create an object representing a car that stores the following properties for the car:name,model,color. Print the car name.

// let carObj = {
//     name:"ferrari",
//     model:2000,
//     color:"red"
// }

// console.log(carObj.name)

// 54.create an object person with their name age and city.Edit their city original value to change it to "NEW YORK".Add  a new property country and set it to the united states.

// const person = {
//     name:"ahamathbasha",
//     age:21,
//     city:"TVM"
// }

// person.city = "New York"

// person.country = "United States"

// console.log(person)

// 55.create a function that prints a poem

// function printPoem(){
//     console.log("twinkle twinkle")
// }

// printPoem()

// 56.create a function to roll a dice and always display the value of the dice(1 to 6)

// function dice(){
//     return Math.floor(Math.random() * 6) + 1
// }

// console.log(dice())

// 57.create a function that gives us the average of 3 numbers

// function no(n1,n2,n3){
//     return (n1+n2+n3)/3
// }

// console.log(no(1,2,3))

// 58.create a function that prints the multiplication table of a number

// function table(no,start,limit){
//     for(let i=start;i<=limit;i++){
//         console.log(`${i} * ${no} = ${i * no}`)
//     }
// }

// table(10,1,10)

// 59.create a function that returns the sum of numbers from 1 to n

// function sumOfNo(n){
//     let sum = 0
//     for(let i=1;i<=n;i++){
//         sum += i
//     }
//     return sum
// }

// console.log(sumOfNo(10))


// 60.create a function that returns the concatenation of all strings in an array.

// function concat(arr){
//     let result = ""

//     for(let val of arr){
//         result += val
//     }

//     return result
// }

// console.log(concat(['hi','hello','basha']))

// 61.What will be the output?

// let greet = "hello"

// function changeGreet(){
//     let greet = "namaste"
//     console.log(greet) //namate
//     function innerGreet(){
//         console.log(greet) //namaste
//     }
// }

// console.log(greet) // ans:hello
// changeGreet()

// 62. write a js function that accepts a list of country names as input and returns the longes country name as output.

// let country = ["Australia","Germany","United States Of America"]

// let largest = ''

// for(let val of country){
//     if(val.length > largest.length){
//         largest = val
//     }
// }

// console.log(largest)

// 63.count vowels in a string argument

// function countVowels(str){
//     let vowels = ['a','e','i','o','u','A','E','I','O','U']
//     let count = 0
//     for(let val of str){
//         if(vowels.includes(val)){
//             count++
//         }
//     }

//     return count
// }

// console.log(countVowels("ahamathbasha"))

// 64.write a js function to extract unique characters from a string.

// function uniqueCharacters(str){
//     let result = ''

//     for(let val of str){
//         if(!result.includes(val)){
//             result += val
//         }
//     }

//     return result
// }

// console.log(uniqueCharacters("ahamathbasha"))

// 65.write a javascript function which generate a random number within a range(start,end)

// function randomNo(start,end){
//     return Math.floor(Math.random() * end) + start
// }

// console.log(randomNo(1,5))

// 66.write a function that returns array elements larger than a number.

// let arr = [8,10,4,4,10,11,12,15,12,11]

// let nums = 5

// let result = []

// for(let val of arr){
//     if(val > nums){
//         result.push(val)
//     }
// }

// console.log(result)

// 67. write an arrow function that returns the square of a number n.

// let square = (n) => n * n
// console.log(square(10))

// 68.Write a function that prints "Hello world" 5 times at intervals of 2s each.

// function print(){
//     let count = 1
//     let ref  
//     ref = setInterval(()=>{
//         console.log("Hello World")
//         if(count == 5){
//             clearInterval(ref)
//         }
//         else{
//             count++
//         }
//     },2000)
// }

// print()

// 69. write an arrow function named array that accepts an array of numbers and returns the average of those numbers.

// let avgArr = (arr)=>{
//     let sum = 0
//     for(let val of arr){
//         sum += val
//     }

//     return sum / arr.length
// }

// console.log(avgArr([1,2,3,4,5]))

// 70.write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

// let isEven = (n) => n % 2 == 0

// console.log(isEven(5))

// 71.what is the output of the following code

// const object = {
//     message : "Hello,world!",
//     logMessage : function(){
//         console.log(this.message)
//     }
// }

// object.logMessage()

// setTimeout(object.logMessage,1000) //here settimeout takes a function as a callback it becomes an arrowfunction. It does not have own this context it takes context from parent so which is window.

// 72. what is the output of the following code

// let length = 4

// function callback(){
//     console.log(this)
//     console.log(this.length)
// }

// const object = {
//     length : 5,
//     method(callback){
//         callback()
//     }
// }

// object.method(callback,1,2)

// 73.Find maximum in an array

// let no = [2,3,4,5,3,4,7,8,1,2]

// let result = no.reduce((acc,cur)=>cur > acc ? cur : acc)

// console.log(result)

// 74.check if all numbers in our array are multiples of 10 or not.

// let arr = [10,20,30,1,3,4,10,7]

// let check = arr.every((val)=>val % 10 == 0)

// console.log(check)

// 75.Create a function to find the min number in an array.

// let arr = [1,2,-1,3,4,5,0]

// let min = arr.reduce((acc,cur)=>cur < acc ? cur : acc)

// console.log(min)

// 76. square and sum the array elements using the arrow function and then find the average of the array.

// let num = [1,2,3,4,5]

// let average = (val)=>{
//     let sum = 0

//     for(let no of val){
//         sum += no * no
//     }

//     return sum/val.length
// }

// console.log(average(num))

// 77.create a new array using the map function whose each element is equal to the original element plus 5

// let fiveNum = num.map((val)=>val+5)

// console.log(fiveNum)

// 78.create a new array whose elements are in uppercase of words present in the original array.

// let strings=["adam","bob","catlyn","donald","eve"];

// strings = strings.map((val)=>val.toUpperCase())

// console.log(strings)

// 79.write a function called doubleAndReturnArgs which accepts an array and a variable no of argument. The function should return a new array with the original array values and all of the additional arguments doubled.

// function doubleAndReturnArgs(arr,...args){
//     let temp = []

//     for(let val of args){
//         temp.push(val * val)
//     }

//     return [...arr,...temp]
// }

// console.log(doubleAndReturnArgs([1,2,3,4,5],6,7,8,9,10))

// 80.write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// function mergeObjects(obj1,obj2){
//     return {...obj1,...obj2}
// }

// console.log(mergeObjects({name:"ahamath"},{age:50}))