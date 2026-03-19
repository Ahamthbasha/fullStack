//merge sort

// function merge(leftArr,rightArr){
//     let temp = []

//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             temp.push(leftArr.shift())
//         }else{
//             temp.push(rightArr.shift())
//         }
//     }

//     return temp.concat(leftArr,rightArr)
// }

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr =  merge(arr.slice(0,mid))
//     let rightArr = merge(arr.slice(mid))

//     return merge(leftArr,rightArr)
// }

// quick sort

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
//         }
//         else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// search in rotated sorted array

// function searh(arr,target){
//     return arr.indexOf(target)
// }


// function search(arr,target,s,e){
//     if(s > e){
//         return -1
//     }

//     let mid = Math.floor((s+e)/2)

//     if(arr[mid] == target){
//         return mid
//     }

//     if(arr[s] <= arr[mid]){
//         if((arr[s] <= target) && (target <= arr[mid])){
//             return search(arr,target,s,mid-1)
//         }else{
//             return search(arr,target,mid+1,e)
//         }
//     }else{
//         if((arr[mid] <= target) && (target <= arr[end])){
//             return search(arr,target,mid+1,e)
//         }else{
//             return search(arr,target,s,mid-1)
//         }
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// apply merge sort to sort an array of string

// let arr = ['sun','earth','mars','mercury']

// //output: ['sun','mars','earth','mercury']

// function merge(leftArr,rightArr){
//     let temp = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0].length < rightArr[0].length){
//             temp.push(leftArr.shift())
//         }else{
//             temp.push(rightArr.shift())
//         }
//     }
//     return temp.concat(leftArr,rightArr)
// }

// function mergeSortString(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = mergeSortString(arr.slice(0,mid))
//     let rightArr = mergeSortString(arr.slice(mid))

//     return merge(leftArr,rightArr)
// }

// console.log(mergeSortString(arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// find the majority element

// let nums = [2,2,1,1,1,2,2]

// let freqMap = {}

// for(let val of nums){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// let length = nums.length

// for(let key in freqMap){
//     if(freqMap[key] > (length/2)){
//         console.log(Number(key))
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// find the invertion count

let n = 5
let arr = [2,3,4,5,6]
let count = 0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((i < j) && (arr[i] > arr[j])){
            count++
            console.log(arr[i],arr[j])
        }
    }
}

console.log(count)