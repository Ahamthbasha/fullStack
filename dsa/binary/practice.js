// // binary and

// console.log(5 & 6) 

// // binary or

// console.log(5 | 6)

// // binary xor

// console.log(5 ^ 6)

// // binary one's complement

// console.log(~5)

// //binary left shift (<<)

// console.log(5 << 2)

// //binary right shift (>>)

// console.log(5 >> 2)

// // check the no is even or odd

// function evenOrOdd(n){
//     if((n & 1) == 0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// }

// console.log(evenOrOdd(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//operations
//get ith bit,set ith bit,clear ith bit


// get ith bit

//logic (n && (1 << i))


// function getIthBit(n,i){
//     let bitMask = 1 << i
//     if((n & bitMask) == 0){
//         return 0
//     }else{
//         return 1
//     }
// }

// console.log(getIthBit(5,2))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //set i th bit

// function setIthBit(n,i){
//     let bitMask = 1 << i
//     return n | bitMask
// }

// console.log(setIthBit(10,2))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//clear i th bit


// function clearIthBit(n,i){
//     let bitMask = ~(1<<i)
//     return n & bitMask
// }

// console.log(clearIthBit(4,2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//update i th bit

// function updateIthBit(n,i,newBit){
//     if(newBit == 0){
//         return clearIthBit(n,i)
//     }else{
//         return setIthBit(n,i)
//     }
// }

// console.log(updateIthBit(5,1,0))


//alternative 

// function clearIthBit(n,i){
//     let bitMask = ~(1 << i)
//     return n & bitMask
// }

// function updateIthBit(n,i,newBit){
//     n = clearIthBit(n,i)
//     let bitMask = newBit << i
//     return n | bitMask
// }

// console.log(updateIthBit(10,2,1))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//clear last ith bit

// function clearLastIthBit(n,i){
//     let bitMask = (~0) << i
//     return n & bitMask
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//clear range i th and jth bit

// function clearRangeIthAndJthBit(n,i,j){
//     let a = (~0) << (j+1)
//     let b = (1 << i) - 1
//     let bitMask = a | b
//     return n & bitMask
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// check if a number is a power of 2 or not

// function powerOfTwo(n){
//     return (n & (n-1)) == 0
// }
// console.log(powerOfTwo(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// count set bit

// function countBit(n){
//     let count = 0
//     while(n > 0){
//         if((n & 1) != 0){
//             count++
//         }
//         n = n >> 1
//     }
//     return count
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fast exponentiation
 
//  function fastExponentiation(n,times){
//     let ans = 1

//     while(times > 0){ 
//         if((times & 1) != 0){
//             ans = ans * n
//         }
//         n = n * n
//         times = times >> 1
//     }
//     return ans
//  }

//  console.log(fastExponentiation(2,2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// what is the value of x ^ x for any value of x?

// it will zero

// console.log(5 ^ 5)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//swap two numbers without using any third variable.

// let a = 5
// let b = 6

// a = a ^ b
// b = a ^ b
// a = a ^ b

// console.log(a,b)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Add 1 to an integer using bit manipulation.(Hint: try using bitwise not operator)

// let n = 10
// n = -(~n)

// console.log(n)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//This question is based on a trick, please directly look at the solution. Convert uppercase characters to lowercase using bits.

//logic 1 - > incase of convert uppercase to lowercase we use OR

//logic 2 - > incase of convert lowercase to uppercase we use AND

//logic 3 - > incase of convert viceverse we use ^

// let str = "Label"

// let result = ""

// for(let val of str){
//     result += String.fromCharCode(val.charCodeAt(0) ^ 32)
// }

// console.log(result)