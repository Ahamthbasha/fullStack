// // bubble sort

// function bubbleSort(arr){
//     let swapped = true
//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }
//     return arr
// }

// // selection sort

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex] > arr[j]){
//                 minIndex = j
//             }
//         }
//         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//     }
//     return arr
// }

// //insertion sort

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let j = i - 1
//         let cur = arr[i]

//         while(j >= 0 && cur < arr[j]){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }
//     return arr
// }

// //quick Sort

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }


// //merge sort

// function merge(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return mergeSort(merge(leftArr),merge(rightArr))
// }

// function mergeSort(leftArr,rightArr){
//     let sortedArr = []

//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return sortedArr.concat(leftArr,rightArr)
// }

// let arr = [5,3,8,4,2]

// console.log(bubbleSort([...arr]))
// console.log(selectionSort([...arr]))
// console.log(insertionSort([...arr]))
// console.log(quickSort([...arr]))
// console.log(merge([...arr]))

//counting sort

// let arr = [1,4,1,3,2,4,3,7]

// let maxLength = Math.max(...arr)

// let array = new Array(maxLength+1).fill(0)

// for(let nums of arr){
//     array[nums]++
// }

// let index = 0

// for(let i=0;i<array.length;i++){
//     while(array[i] > 0){
//         arr[index] = i
//         index++
//         array[i]--
//     }
// }

// console.log(arr)

// let arr = [3,3,2,1,2,3,4]

// //Find the number that appears the most

// let count = Math.max(...arr)
// let array = new Array(count+1).fill(0)

// for(let nums of arr){
//     array[nums]++
// }
// let maxValue = -Infinity
// let value = null

// for(let i=0;i<arr.length;i++){
//     if(array[i] > maxValue){
//         maxValue = array[i]
//         value = i
//     }
// }

// console.log(value)

