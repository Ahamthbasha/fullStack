// 1.Print numbers from n to 1(Decreasing order)


// function decreasingNo(n){
//     if(n == 1){
//         console.log(n)
//         return 
//     }

//     console.log(n)
    
//     decreasingNo(n-1)
// }

// decreasingNo(10)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. print numbers from 1 to n (Increasing order)

// function increasingNo(start,n){
//     if(n == start){
//         console.log(n)
//         return
//     }

//     console.log(start)

//     increasingNo(start+1,n)

// }

// increasingNo(1,10)

//alternative

// function increasingNoApnaCollege(n){
//     if(n == 1){
//         console.log(1)
//         return
//     }
//     increasingNoApnaCollege(n-1)
//     console.log(n)
// }

// increasingNoApnaCollege(5)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.print factorial of a number n

// function factorial(n){
//     if(n == 0){
//         return 1
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Print sum of first n natural numbers

// function sumOfNaturalNo(n){
//     if(n == 1){
//         return 1
//     }

//     return n + sumOfNaturalNo(n-1)
// }

// console.log(sumOfNaturalNo(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Print nth fibonacci number

// function nthFibNo(n){
//     if(n == 0 || n == 1){
//         return n
//     }

//     return nthFibNo(n-1) + nthFibNo(n-2)
// }

// console.log(nthFibNo(5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. check if a given array is sorted or not

// function checkArrSorted(arr){
//     if(arr.length < 2){
//         return true
//     }

//     if(arr[0] <= arr[1]){
//         return checkArrSorted(arr.slice(1))
//     }else{
//         return false
//     }
// }

// console.log(checkArrSorted([1,2,7,4,6]))

// alternative approach

// function checkSortedArr(arr,i=0){

//     if(arr.length == 1){
//         return true
//     }

//     if(i >= arr.length-1){
//         return true
//     }

//     if(arr[i] <= arr[i+1]){
//         return checkSortedArr(arr,i+1)
//     }
//     else{
//         return false
//     }
// }

// console.log(checkSortedArr([1,2,3,4,5]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. write a function to find the first occurence of an element in an array.

// function firstOccurence(arr,i=0,x){
//     if(i == arr.length-1){
//         return -1
//     }

//     if(arr[i] == x){
//         return i
//     }

//     return firstOccurence(arr,i+1,x)
// }

// console.log(firstOccurence([1,2,3,4,5],0,6))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. write a function to find the last occurence of an element in an array.

// function lastOccurence(arr,i,key){
//     if(i < 0){
//         return -1
//     }

//     if(arr[i] == key){
//         return i
//     }

//     return lastOccurence(arr,i-1,key)
// }

// let arr = [1,2,3,4,5,6,7,8,5]

// console.log(lastOccurence(arr,arr.length-1,5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9.print x^n

// My Logic

// function printNoPowerofn(no,power,result = 1,start){
//     if(power == start){
//         return result
//     }

//     result *= no

//     return printNoPowerofn(no,power,result,start+1)
// }

// console.log(printNoPowerofn(5,3,1,0))

// alternative

// function power(x,n){
//     if(n == 0){
//         return 1
//     }

//     return x * power(x,n-1)
// }

// console.log(power(2,10))

// optimized version O(logn)

//  function optimizedPower(x,n){
//     if(n == 0){
//         return 1
//     }

//     let halfPower = optimizedPower(x,Math.floor(n/2))
//     let halfSquare = halfPower * halfPower

//     if(n % 2 != 0){
//         halfSquare = x * halfSquare
//     }

//     return halfSquare
//  }

//  console.log(optimizedPower(2,5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 10.Tiling Problem

//Given a "2*n" board and tiles of size "2*1", count the number of ways to tile the given board using the 2 * 1 tiles.(A tile can either be placed horizontally or vertically)

//  function tilingProblem(n){
//     if(n == 0 || n== 1){
//         return 1
//     }

//     let vertical = tilingProblem(n-1)
//     let horizontal = tilingProblem(n-2)
//     let totalWays = vertical + horizontal
//     return totalWays
//  }

//  console.log(tilingProblem(4))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11 . Remove Duplicates in a String

// "appnnacollege"

// function removeDuplicates(str,start,result='',check=new Set()){
//     if(str.length == start){
//         return result
//     }

//     if(!check.has(str[start])){
//         check.add(str[start])
//         result += str[start]
//     }

//     return removeDuplicates(str,start+1,result,check)
// }

// let str = "appnnacollege"

// console.log(removeDuplicates(str,0))

// alternative apna college version


// function removeDuplicates(str,idx,result='',map=[]){
//     if(idx == str.length){
//         return result
//     }
//     let current = str[idx]
//     let mapIndex = current.charCodeAt(0) - 'a'.charCodeAt(0)
//     if(map[mapIndex]){
//         return removeDuplicates(str,idx+1,result,map)
//     }else{
//         map[mapIndex] = true
//         result += str[idx]
//         return removeDuplicates(str,idx+1,result,map)
//     }
// }

// let string = "appnnacollege"

// console.log(removeDuplicates(string,0))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12.Friends pairing problem

// given n friends, each one can remain single or can be paired up with some other friend. Each friend can be paired only once. find out the total number of ways in which friends can remain single or can be paired up.


// function pairingProblem(n,lastPlace,result=''){
//     if(n == 0 || n == 1){
//         return n
//     }

//     let single = pairingProblem(n-1)
//     let pair = pairingProblem(n-2)
//     let pairCount = (n-1) * pair

//     return single + pairCount
// }

// console.log(pairingProblem(5))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. print the binary string until it reaches the size it should not form consecutive ones.

// function binaryString(n,lastPlace,result=''){
//     if(n == 0){
//         console.log(result)
//         return
//     }

//     binaryString(n-1,0,result+'0')

//     if(lastPlace == 0){
//         binaryString(n-1,1,result+'1')
//     }
// }

// binaryString(3,0)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14.For a given integer array of size N. You have to find all the occurences (indices) of a given element(key) and print them. Use a recursive function to solve this problem.

// let arr = [3,2,4,5,6,2,7,2,2]
// let key = 2

// function indices(arr,key,idx,result=[]){
//     if(idx == arr.length){
//         return result
//     }

//     if(arr[idx] == key){
//         result.push(idx)
//     }

//     return indices(arr,key,idx+1,result)
// }

// console.log(indices(arr,key,0))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15.You are given a number (eg:2019) convert it into strning of english like two zero one nine. Use a recursive function to solve this problem.

//Note: The digits of the number will only be in the range of 0-9 and the last digit of a number can be zero

//sample Input : 1947

//sample output : one nine four seven

//code:

// function countDigit(no){
//     let copy = no
//     let count = 0
//     while(copy != 0){
//         copy = Math.floor(copy/10)
//         count++
//     }

//     return count-1
// }

// function noToEnglish(no,countDigit,result=''){

//     if(no <= 0){
//         return result.trim()
//     }

//     let mapNoToEnglish = {
//         0 : 'zero',
//         1 : 'one',
//         2 : 'two',
//         3 : 'three',
//         4 : 'four',
//         5 : 'five',
//         6 : 'six',
//         7 : 'seven',
//         8 : 'eight',
//         9 : 'nine'
//     }

//     let divisor = Math.pow(10,countDigit)

//     let number = Math.floor(no/divisor)

//     if(mapNoToEnglish[number]){
//         result += mapNoToEnglish[number] + ' '
//     }

//     return noToEnglish(no%divisor,countDigit-1,result)

// }

// let digit = 1947
// let digitCount = countDigit(digit)

// console.log(noToEnglish(1947,digitCount))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a program to find the length of a string using recursion

// function findLength(str,idx=0,count=0){
//     if(str[idx] == undefined){
//         return count
//     }

//     return findLength(str,idx+1,count+1)
// }

// console.log(findLength("basha",0,0))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. we are given a string S, we need to find the count of all contiguous substrings starting and ending with the same character.

//input : S= "abcab"
// outpu : 7


// let s = "abcab"

// function generateSubstring(s,i,j){
//     if(i == s.length){
//         return 0
//     }

//     if(j == s.length){
//         return generateSubstring(s,i+1,i+1)
//     }

//     let count = (s[i] == s[j]) ? 1 : 0

//     return count + generateSubstring(s,i,j+1)
// }

// console.log(generateSubstring(s,0,0))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 15. Tower of hanoi


function towerOfHanoi(n,source,helper,destination){
    if(n == 1){
        console.log(`move disk from ${source} to ${destination}`)
        return
    }

    towerOfHanoi(n-1,source,destination,helper)

    console.log(`move disk from ${source} to ${destination}`)

    towerOfHanoi(n-1,helper,source,destination)
}

console.log(towerOfHanoi(3,'A','B','C'))