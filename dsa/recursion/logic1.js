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

function revString(str,reversedStr='',lastCharIndex=str.length-1){
    if(lastCharIndex == 0){
        reversedStr += str[lastCharIndex]
        return reversedStr
    }

    reversedStr += str [lastCharIndex]

    return revString(str,reversedStr,lastCharIndex-=1)
}

console.log(revString('karuppu',''))

// 3.count digits in number

// function countDigits(no,count=0){
//     if(no == 0){
//         return count
//     }   

//     return countDigits(Math.floor(no/10),count+=1)
// }

// console.log(countDigits(12345))