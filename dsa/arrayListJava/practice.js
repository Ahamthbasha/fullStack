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

//  let height = [1,8,6,2,5,4,8,3,7]

//  let left = 0
//  let right = height.length-1
//  let max = 0

//  while(left < right){
//     let heightPair = Math.min(height[left],height[right])
//     let width = right - left
//     max = Math.max(max,(heightPair * width))

//     if(left < right){
//         left++
//     }
//     else{
//         right--
//     }
//  }

//  console.log(max)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//pair sum - 1

//Find if any pair in a sorted arrayList has a target sum.
// time complexity : O(n*n)

// let list = [1,2,3,4,5,6]
// let target = 5

// let result = []
// for(let i=0;i<list.length;i++){
//     for(let j=i+1;j<list.length;j++){
//         if((list[i]+list[j]) == target){
//             result.push([list[i],list[j]])
//         }
//     }
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//time complexity:O(n)

// let list = [1,2,3,4,5,6]
// let target = 5

// function pairSum(list,target){
//     let start = 0
//     let end = list.length - 1
    
//     while(start != end){
//         if((list[start]+list[end]) == target){
//             return true
//         }
    
//         if((list[start]+list[end]) < target){
//             start++
//         }else{
//             end--
//         }
//     }
//     return false
// }

// console.log(pairSum(list,target))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PAIR SUM - 2

// Find if any pair in a sorted and rotated arraylist has a target sum.

// let list = [11,15,6,8,9,10]
// let target = 16

//brute force approach

// function pairSum2(list,target){
//     for(let i=0;i<list.length;i++){
//         for(let j=i+1;j<list.length;j++){
//             if((list[i] + list[j]) == target){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(pairSum2(list,target))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//two pointer approach O(n)

// let list = [11,15,6,8,9,10]
// let target = 16

// function pairSum2(list,target){
//     let start
//     let end
//     for(let i=0;i<list.length-1;i++){
//         if(list[i] > list[i+1]){
//             start = i+1
//             end = i
//             break
//         }
//     }

//     while(start != end){
//         if((list[start]+list[end]) == target){
//             return true
//         }

//         if((list[start]+list[end]) < target){
//             start = (start+1)%list.length
//         }
//         else{
//             end = (list.length+end-1)%list.length
//         }
//     }

//     return false
// }

// console.log(pairSum2(list,target))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// check the given array is monotonic or not. Monotonic means an array should be ascending or descending.

// let nums = [1,2,2,3]
// output : true
// let nums = [6,5,4,4]
// output : true
// let nums = [1,3,2]
// output : false


// function ascending(nums){
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] > nums[i+1]){
//             return false
//         }
//     }
//     return true
// }

// function descending(nums){
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] < nums[i+1]){
//             return false
//         }
//     }
//     return true
// }

// let result = nums[0] <= nums[1] ? ascending(nums) : descending(nums)

// console.log(result)

// optimized solution

// function isMonotonic(nums){
//     let ascending = true
//     let descending = true

//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] < nums[i+1]){
//             ascending = false
//         }


//         if(nums[i] > nums[i+1]){
//             descending = false
//         }
//     }

//     return (ascending || descending)
// }

// console.log(isMonotonic([1,2,2,3]))
// console.log(isMonotonic([6,5,4,4]))
// console.log(isMonotonic([1,3,2]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. lonely numbers in arrayList

// you are given an array nums. A number x is lonely when it appears only one and no adjacent numbers (x+1,x-1) appears in arrayList.Return all lonely numbers in nums. You may return the answer in any order.

// let nums1 = [10,6,5,8]
// //output:[10,8]

// let nums2 = [1,3,5,3]
// //output:[1,5]
 

// function lonelyNumber(nums){
//     let freqMap = {}

//     for(let val of nums){
//         if(freqMap[val]){
//             freqMap[val]++
//         }else{
//             freqMap[val]=1
//         }
//     }

//     let finalArr = []
//     for(let key in freqMap){
//         if(freqMap[key] == 1){
//             finalArr.push(Number(key))
//         }
//     }

//     let result = new Set()
//     let check = new Set(nums)

//     for(let val of finalArr){
//         let before = val - 1
//         let after = val + 1
//             if((!check.has(before)) && (!check.has(after))){
//                 result.add(val)
//             }
//     }

//     return [...result]
// }

// console.log(lonelyNumber(nums1))
// console.log(lonelyNumber(nums2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Most frequent number following key

//you are given array nums. You are also given an integer key, which is present in nums. For every unique integer target in nums, count the number of times target immediately follows an occurence of key in nums. In other words, count the no of indices i. Return the target with the maimum count.

// let nums1 = [1,100,200,1,100]
// let key1 = 1

// let nums2 = [2,2,2,2,3]
// let key2 = 2

// function mostFrequentNumberFollowingKey(nums,key){
//     let freqMap = {}
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] == key){
//             let target = nums[i+1]
//             if(freqMap[target]){
//                 freqMap[target]++
//             }else{
//                 freqMap[target]=1
//             }
//         }
//     }

//     let max = -Infinity
//     let element = null
//     for(let key in freqMap){
//         if(freqMap[key] > max){
//             max = freqMap[key]
//             element = Number(key)
//         }
//     }

//     return element
// }

// console.log(mostFrequentNumberFollowingKey(nums1,key1))
// console.log(mostFrequentNumberFollowingKey(nums2,key2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Beatiful array

// An array of size n beautiful if:

// nums is a perutation of the integers in the range [1,n].
// For every 0<=i<j<n, there is no idex k with i<k<j where 2*nums.get(k) == nums.get(i) + nums.get(j).
//Given the integer n, return any beautiful array nums of size n. There will be at least one valid answer for the given n.

let n1 = 4
//output : [2,1,4,3]

let n2 = 5
//output : [3,1,2,5,4]

function permutationArr(n){
    let result = []

    for(let i=1;i<=n;i++){
        result.push(i)
    }
    
    return result
}

console.log(permutationArr(n1))
console.log(permutationArr(n2))