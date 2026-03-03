//linear search

// let arr = [2,4,6,8,10,12,14,16]

// let key = 10

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == key){
//         console.log(i)
//         return
//     }
// }

// console.log(-1)

//2.Find largest value

// let arr = [2,10,100,1000,300,3000,20,300000]

// let max = -Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max)

//3.minimum element in the array

// let min = Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log(min)

//4.binary search

// let arr = [2,4,6,8,10,12,14,16]

// let key = 10

// let start = 0
// let end = arr.length-1

// while(start <= end){
//     let mid = Math.floor((start + end)/2)

//     if(arr[mid] == key){
//         console.log(mid)
//         return
//     }
//     else if(key < arr[mid]){
//        end = mid -1
//     }
//     else{
//         start = mid+1
//     }
// }

// console.log(-1)