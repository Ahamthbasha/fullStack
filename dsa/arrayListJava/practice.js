// reverse the arr 

// let list = [2,5,9,3,6]

// for(let i=list.length-1;i>=0;i--){
//     console.log(list[i])
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// find maximum

// let list = [2,5,9,3,6]

// console.log(Math.max(...list))

//alternative 

// let max = -Infinity

// for(let val of list){
//     if(val > max){
//         max = val
//     }
// }

// console.log(max)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// swap 2 numbers

// let list = [2,5,9,3,6]
// let idx1 = 1
// let idx2 = 3


// let temp = list[idx1]
// list[idx1] = list[idx2]
// list[idx2] = temp

// console.log(list)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sorting 

// let list = [2,5,9,3,6]

// //builtIn sort
// list.sort((a,b)=>a-b)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// container with most water

// for a given n lines on x-axis use 2 lines to form a container such that it holds maximum water.

//Brute force O(n*n)

// let height = [1,8,6,2,5,4,8,3,7]

// let max = 0

//  for(let i=0;i<height.length;i++){
//     for(let j=i+1;j<height.length;j++){
//         let heightPair = Math.min(height[i],height[j])
//         let width = j - i
//         max = Math.max(max,(heightPair * width))
//     }
//  }

//  console.log(max)

 //Two Pointer Approach O(n)

 let height = [1,8,6,2,5,4,8,3,7]

 let left = 0
 let right = height.length-1
 let max = 0

 while(left < right){
    let heightPair = Math.min(height[left],height[right])
    let width = right - left
    max = Math.max(max,(heightPair * width))

    if(left < right){
        left++
    }
    else{
        right--
    }
 }

 console.log(max)