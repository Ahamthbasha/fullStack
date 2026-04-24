// let set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(5)

// console.log(set.has(3))

// console.log(set.delete(2))

// console.log(set.size)

// console.log(set)

////////////////////////////////////////////////////////////
// iteration of hashset

// // a.

// let data = [...set]

// console.log(data)

// //b. foreach

// set.forEach((val)=>{
//     console.log(val)
// })

///////////////////////////////////////////////////////////

// // count distinct elements

// let nums = [4,3,2,5,6,7,3,4,2,1]

// let set = new Set(nums)

// console.log(set.size)

// //alternate approach

// let countSet = new Set()

// let count = 0

// for(let val of nums){
//     if(countSet.has(val)){
//        continue 
//     }else{
//         countSet.add(val)
//         count++
//     }
// }

// console.log(count)

//////////////////////////////////////////////////////////

// union and intersection of 2 arrays

// let arr1 = [7,3,9]
// let arr2 = [6,3,9,2,9,4]

// let union = new Set()
// let intersection = new Set()

// for(let val of arr1){
//     union.add(val)
// }

// for(let val of arr2){
//     union.add(val)
// }

// console.log(union)

// let arr2Check = new Set(arr2)

// for(let val of arr1){
//     if(arr2Check.has(val)){
//         intersection.add(val)
//     }
// }

// console.log(intersection)

//////////////////////////////////////////////////////////


// find itinerary from tickets

// let arr = [['chennai','bengaluru'],['mumbai','delhi'],['goa','chennai'],['delhi','goa']]

// output : mumbai - delhi - goa - chennai - bengaluru

// let map = new Map()

// for(let val of arr){
//     let [journey,destination] = val
//     map.set(journey,destination)
// }

// console.log(map)

// function getStart(map){
//     let revMap = new Set()

//     for(let [key,value] of map){
//         revMap.add(value)
//     }

//     for(let [key,value] of map){
//         if(!revMap.has(key)){
//             return key
//         }
//     }

//     return null
// }

// let start = getStart(map)

// let result = start

// while(map.has(start)){
//     start = map.get(start)
//     result += `->${start}`
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// larget subArray with 0 sum

// let arr = [15,-2,2,-8,1,7,10]

// let len = 0
// let sum = 0

// let map = new Map()

// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
//     if(sum == 0){
//         len = i + 1
//     }
//     if(map.has(sum)){
//         let prevIndex = map.get(sum)
//         len = Math.max(len,i-prevIndex)
//     }else{
//         map.set(sum,i)
//     }
// }
// console.log(len)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// subarray sum equal to k

let arr = [1,2,3]
let k = 3

let sum = 0
let map = new Map()
map.set(0,1)
let ans = 0
for(let val of arr){
    sum += val

    if(map.has(sum - k)){
        ans += map.get(sum-k)
    }

    map.set(sum,(map.get(sum)|| 0)+ 1)
}

console.log(ans)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////