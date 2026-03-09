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

//5.reverse an array

// let arr = [2,4,6,8,10]

// let start = 0
// let end = arr.length-1

// while(start <= end){
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
// }

// console.log(arr)

//6.pairs an array

// let arr = [2,4,6,8,10]

// for(let i=0;i<arr.length;i++){
//     let str = ''
//     for(let j=i+1;j<arr.length;j++){
//         str += `(${arr[i]},${arr[j]})` + ' '
//     }
//     console.log(str)
// }

//7.print subarray

// let arr = [2,4,6,8,10]

// let result = []

// for(let i=0;i<arr.length;i++){
//     result.push([arr[i]])
//     let currentIndex = i
//     while(currentIndex != arr.length-1){
//         let temp = []
//         for(let j=i;j<=currentIndex+1;j++){
//             temp.push(arr[j])
//         }
//         result.push(temp)
//         currentIndex++
//     }    
// }
// console.log(result)

//alternate way
// let result = []

// for(let i=0;i<arr.length;i++){
//     let start = i

//     for(let j=i;j<arr.length;j++){
//         let end = j
//         let temp = []
//         for(let k=start;k<=end;k++){
//             temp.push(arr[k])
//         }
//         result.push(temp)
//     }
// }

// console.log(result)

// 8. max subarray sum

// let arr = [1,-2,6,-1,3]

// let max = -Infinity
// let subArray = []

// for(let i=0;i<arr.length;i++){
//     let start = i
//     for(let j=i;j<arr.length;j++){
//         let end = j
//         let temp = []
//         for(let k=start;k<=end;k++){
//             temp.push(arr[k])
//         }

//         let sum = 0

//         for(let val of temp){
//             sum += val
//         }

//         if(sum > max){
//             max = sum
//             subArray = temp
//         }
//     }
// }

// console.log(max,subArray)

//maximum Subarray sum 

// let maxSum = -Infinity

// for(let i=0;i<arr.length;i++){
//     let start = i
//     for(let j=i;j<arr.length;j++){
//         let end = j
//         let currentSum = 0

//         for(let k=start;k<=end;k++){
//             currentSum += arr[k]
//         }

//         if(currentSum > maxSum){
//             maxSum = currentSum
//         }
//     }
// }

// console.log(maxSum)

//max subarray sum alternate way(prefix sum)

// let arr = [1,-2,6,-1,3]


// let prefix = []

// for(let i=0;i<arr.length;i++){
//     if(i == 0){
//         prefix.push(arr[i])
//     }else{
//         prefix.push(prefix[prefix.length-1] + arr[i])
//     }
// }

// let maxSum = -Infinity

// for(let i=0;i<arr.length;i++){
//     let start = i
//     for(let j = i;j<arr.length;j++){
//         let end = j
//         let currentSum = start == 0 ? prefix[end] : prefix[end] - prefix[start-1]
//         if(currentSum > maxSum){
//             maxSum = currentSum
//         }
//     }
// }

// console.log(maxSum)

// kadane's algo

// let arr = [-2,-3,4,-1,-2,1,5,-3]

// let arr = [1,-2,6,-1,3]

// let currentSum = 0
// let max = -Infinity

// for(let i=0;i<arr.length;i++){
//         currentSum += arr[i]
//         if(currentSum < 0){
//             currentSum = 0
//         }
//         max = Math.max(currentSum,max)
// }

// console.log(max)

//9.Trapping rain water problem

// let height = [4,2,0,6,3,2,5]

// if(height.length < 2){
//     console.log(false)
// }

// let leftMaxBoundary = []

// for(let i=0;i<height.length;i++){
//     if(i == 0){
//         leftMaxBoundary[i]=height[i]
//     }else{
//         leftMaxBoundary[i] = (Math.max(leftMaxBoundary[i-1],height[i]))
//     }
// }

// let rightMaxBoundary = []

// for(let i=height.length-1;i>=0;i--){
//     if(i == height.length-1){
//         rightMaxBoundary[i] = height[i]
//     }else{
//         rightMaxBoundary[i] = Math.max(rightMaxBoundary[i+1],height[i])
//     }
// }

// let trappedRainWater = 0

// for(let i=0;i<height.length;i++){
//     trappedRainWater += (Math.min(leftMaxBoundary[i],rightMaxBoundary[i]) - height[i])
// }

// console.log(trappedRainWater)

//10.buy and sell stocks

// let prices = [7,1,5,3,6,4]

// let buyPrice = Infinity
// let maxProfit = 0
// for(let val of prices){
//     if(buyPrice < val){
//         let profit = Math.abs(buyPrice - val)
//         maxProfit = Math.max(profit,maxProfit)
//     }else{
//         buyPrice = val
//     }
// }

// console.log(maxProfit)

//12.given an integer array nums,return true if any value appears at least twice in the array, and return false if every element is distinct.

// let nums = [1,1,1,3,3,4,3,2,4,2]
// let nums = [1,2,3,4]
// let nums = [1,2,3,1]

//my logic

// let freqMap = {}

// for(let val of nums){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// for(let key in freqMap){
//     if(freqMap[key] == 2){
//         console.log(true)
//         return
//     }
// }

// console.log(false)

// using set

// let set = new Set()

// for(let val of nums){
//     if(set.has(val)){
//         console.log(true)
//         return
//     }else{
//         set.add(val)
//     }
// }

// console.log(false)

//13.Return the index of the target element in the array otherwise return false

// my logic

// let nums = [4,5,6,7,0,1,2]
// let target = 1

// for(let i=0;i<nums.length;i++){
//     if(nums[i] == target){
//         console.log(i)
//         return
//     }
// }
// console.log(-1)

//we need to solve it using O(logn) algorithm

// let left = 0
// let right = nums.length-1


// while(left <= right){
//     let mid = Math.floor((left+right)/2)

//     if(nums[mid] == target){
//         console.log(mid)
//         return
//     }

//     if(nums[left] <= nums[mid]){
//         if(target > nums[left] && target <= nums[mid]){
//             right = mid-1
//         }else{
//             left = mid+1
//         }
//     }else{
//         if(target > nums[right] && target <= nums[mid]){
//             left = mid+1
//         }
//         else{
//             right = mid-1
//         }
//     }
// }

// console.log(-1)

//14.stock buy and sell

// let prices = [7,1,5,3,6,4]
// let prices =  [7, 6, 4,  3, 1] 

// let buyPrice = Infinity
// let maxProfit = 0

// for(let val of prices){
//     if(buyPrice < val){
//         let profit = val - buyPrice
//         maxProfit = Math.max(profit,maxProfit)
//     }else{
//         buyPrice = val
//     }
// }

// console.log(maxProfit)

//15. trap after raining

// let height = [0, 1, 0,  2, 1, 0, 1, 3, 2, 1, 2, 1]
// let height = [4, 2, 0, 3, 2, 5]

// let leftMaxBoundary = []
// let rightMaxBoundary = []

// if(height.length < 2){
//     console.log(0)
//     return
// }
// leftMaxBoundary[0] = height[0]

// for(let i=1;i<height.length;i++){
//     leftMaxBoundary[i] = Math.max(leftMaxBoundary[i-1],height[i])
// }

// rightMaxBoundary[height.length-1] = height[height.length-1]

// for(let i=height.length-2;i>=0;i--){
//     rightMaxBoundary[i] = Math.max(rightMaxBoundary[i+1],height[i])
// }

// let trappedRainWater = 0

// for(let i=0;i<height.length;i++){
//     let waterBarLevel = Math.min(leftMaxBoundary[i],rightMaxBoundary[i])
//     trappedRainWater += waterBarLevel - height[i]
// }

// console.log(trappedRainWater)

// 16. Find triplets with zero

// let nums = [-1,0,1,2,-1,-4]
// // output : [[-1,-1,2],[-1,0,1]]

// let result = []
// let check = new Set()
// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         for(let k=j+1;k<nums.length;k++){
//             let sum = nums[i] + nums[j] + nums[k]
//             if(sum == 0){
//                 let arr = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
//                 let tempCheck = arr.join("")
//                 if(check.has(tempCheck)){
//                     continue
//                 }else{
//                     check.add(tempCheck)
//                     result.push(arr)
//                 }
//             }
//         }
//     }
// }

// console.log(result)

// reduce one loop to find the triplets

// let nums = [-1,0,1,2,-1,-4]
// let result = []

// nums.sort((a,b)=>a-b)

// for(let i=0;i<nums.length;i++){   if(i > 0 && nums[i] == nums[i-1]){
//         continue
//     }else{
//         let left = i+1
//         let right = nums.length-1

//         while(left < right){
//             let sum = nums[i] + nums[left] + nums[right]

//             if(sum == 0){
//                 result.push([nums[i],nums[left],nums[right]])

//                 while(left < right && nums[left] == nums[left+1]){
//                     left++
//                 }

//                 while(left < right && nums[right] == nums[right-1]){
//                     right--
//                 }

//                 left++
//                 right--
//             }
//             else if(sum < 0){
//                 left++
//             }
//             else{
//                 right--
//             }
//         }
//     }
// }

// console.log(result)

//spiral matrix

// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

// let spiralArr = []

// let startRow = 0
// let endRow = arr.length-1
// let startCol = 0
// let endCol = arr[0].length-1


// while((startRow <= endRow) && (startCol <= endCol)){
//     //top

//     for(let i=startRow;i<=endRow;i++){
//         spiralArr.push(arr[startRow][i])
//     }

//     //right

//     for(let j=startRow+1;j<=endRow;j++){
//         spiralArr.push(arr[j][endRow])
//     }

//     //bottom

//     for(let k=endCol-1;k>=startCol;k--){
//         if(startRow == endRow){
//             break
//         }
//         spiralArr.push(arr[endRow][k])
//     }

//     //left

//     for(let l=endCol-1;l>=startCol+1;l--){
//         if(startCol == endCol){
//             break
//         }
//         spiralArr.push(arr[l][startCol])
//     }

//     startRow++
//     startCol++
//     endRow--
//     endCol--
// }

// console.log(spiralArr)

//diagonal sum 

//my logic

// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

// let leftDiagonal = []
// let rightDiagonal = []

// let start = 0
// let end = arr[0].length-1

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[0].length;j++){
//         if(i == j){
//             leftDiagonal.push(arr[i][j])
//         }

//         if(i == start && j == end){
//             rightDiagonal.push(arr[start][end])
//         }
//     }
//     start++
//     end--
// }

// let leftDiagonalSum = leftDiagonal.reduce((acc,cur)=>acc+cur)

// let rightDiagonalSum = rightDiagonal.reduce((acc,cur)=>acc+cur)

// let total = leftDiagonalSum + rightDiagonalSum

// console.log(total)

//apna college diagonal sum logic


// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]


// let sum = 0

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[0].length;j++){
//         if(i == j){
//             sum += arr[i][j]
//         }
//         else if(i+j == arr.length-1){
//             sum += arr[i][j]
//         }
//     }
// }

// console.log(sum)

// linear time complexity 

// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

// let sum = 0

// for(let i=0;i<arr.length;i++){
    //pd
    // sum += arr[i][i]

    //sd
    //finding the j index formula 
    // i+j = n-1 
    // j = n - l - i

//     sum += arr[i][arr.length-1-i]
// }

// console.log(sum)

//////////////////////////////////////////////////////////////

//search in sorted matrix

// let arr = [[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]]
// let key = 33

//brute force approach

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[0].length;j++){
//         if(arr[i][j] == key){
//             console.log(true)
//             return
//         }
//     }
// }

// console.log(false)

//using binary search and staircase search

//  let arr = [[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]]

// let key = 33

// let row = 0
// let col = arr[0].length-1

// while(row < arr.length && col >= 0){
//     if(arr[row][col] == key){
//         console.log(true)
//         return
//     }
//     else if(key  < arr[row][col]){
//         col--
//     }
//     else{
//         row++
//     }
// }

// console.log(false)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// print the no of 7 that are in the second array

// let array = [[4,7,8],[8,8,7]]

// let take = array[1]

// let count = 0

// for(let val of take){
//     if(val == 7){
//         count++
//     }
// }

// console.log(count)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// print out the sum of the no in the second row of the nums array.

// let nums = [[1,4,9],[11,4,3],[2,2,3]]

// let take = nums[1]

// let sum = 0

// for(let val of take){
//     sum += val
// }

// console.log(sum)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [[1,2,3],[4,5,6]]

let transpose = []

let row = arr.length
let column = arr[0].length

for(let i=0;i<column;i++){
    let temp = []
    for(let j=0;j<row;j++){
        temp.push(arr[j][i])
    }

    transpose.push(temp)
}

console.log(transpose)