// sum of numbers from  1 to N

// function sumOfNumber(n){
//     if(n == 0 || n == 1){
//         return n
//     }

//     return n + sumOfNumber(n-1)
// }

// console.log(sumOfNumber(5))

// reverse a string using recursion


// function revString(str,reversedStr = ''){
//     if(str.length < 2){
//         return str
//     }

//     reversedStr += str[str.length-1]

//     return reversedStr.concat(revString(str.slice(0,str.length-1)))
// }

// console.log(revString('karuppu'))

// without using slice

// function revString(str,reversedStr='',lastCharIndex=str.length-1){
//     if(lastCharIndex == 0){
//         reversedStr += str[lastCharIndex]
//         return reversedStr
//     }

//     reversedStr += str [lastCharIndex]

//     return revString(str,reversedStr,lastCharIndex-=1)
// }

// console.log(revString('karuppu',''))

// 3.count digits in number

// function countDigits(no,count=0){
//     if(no == 0){
//         return count
//     }   

//     return countDigits(Math.floor(no/10),count+=1)
// }

// console.log(countDigits(12345))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //   DAY - II
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. find maximum element in array

// using slice

// function maxElement(arr,max=-Infinity,index=0){
//     if(arr.length < 1){
//         return max
//     }

//     if(arr[0] > max){
//         max = arr[0]
//     }
    
//     return maxElement(arr.slice(index),max,index+1)
// }

// without using slice

// function maxElement2(arr,max=-Infinity,index=0){
//     if(index == arr.length-1){
//         if(arr[index] > max){
//             max = arr[index]
//         }
//         return max
//     }

//     if(arr[index] > max){
//         max = arr[index]
//     }

//     return maxElement2(arr,max,index+1)
// }

// let arr = [4,7,2,9,1]

// console.log(maxElement(arr))
// console.log(maxElement2(arr))

//2.checking array is sorted or not

// function checkArrSort(arr){
//     function ascending(arr){
//         if(arr.length < 1){
//             return true
//         }

//         return arr[0] <= arr[1] && checkArrSort(arr.slice(2))
//     }

//     function descending(arr){
//         if(arr.length < 1){
//             return true
//         }

//         return arr[0] >= arr[1] && descending(arr.slice(2))
//     }
//     return ascending(arr) || descending(arr)
// }

// console.log(checkArrSort([1,2,3,4]))

// console.log(checkArrSort([9,8,7,6]))


// without using slice

// function checkArrSort(arr){
//     function ascending(arr,index=0){
//         if(((arr.length-1) - index) == 2){
//             if(arr[index] <= arr[index+1]){
//                 return true
//             }else{
//                 return false
//             }
//         }

//         return arr[index] <= arr[index+1] && ascending(arr,index+1)
//     }

//     function descending(arr,index=0){
//         if(((arr.length-1) - index) == 2){
//             if(arr[index] >= arr[index+1]){
//                 return true
//             }else{
//                 return false
//             }
//         }

//         return arr[index] >= arr[index+1] && descending(arr,index+1)
//     }

//     return ascending(arr) || descending(arr)
// }
// console.log(checkArrSort([1,2,3,4]))

// 3. find sum of array elements

// function sumOfArray(arr,sum=0){
//     if(arr.length < 1){
//         return sum
//     }

//     return sumOfArray(arr.slice(0,arr.length-1),sum+=arr[arr.length-1])
// }

// console.log(sumOfArray([1,2,3]))

// //without slice

// function sumArray(arr,sum=0,index=0){
//     if(index == arr.length-1){
//         sum += arr[index]
//         return sum
//     }

//     sum += arr[index]

//     return sumArray(arr,sum,index+1)
// }

// console.log(sumArray([1,2,3]))