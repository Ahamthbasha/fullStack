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

 function optimizedPower(x,n){
    if(n == 0){
        return 1
    }

    let halfPower = optimizedPower(x,Math.floor(n/2))
    let halfSquare = halfPower * halfPower

    if(n % 2 != 0){
        halfSquare = x * halfSquare
    }

    return halfSquare
 }

 console.log(optimizedPower(2,5))