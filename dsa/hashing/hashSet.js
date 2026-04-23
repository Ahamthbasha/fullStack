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

// count distinct elements

let nums = [4,3,2,5,6,7,3,4,2,1]

let set = new Set(nums)

console.log(set.size)

//alternate approach

let countSet = new Set()

let count = 0

for(let val of nums){
    if(countSet.has(val)){
       continue 
    }else{
        countSet.add(val)
        count++
    }
}

console.log(count)

//////////////////////////////////////////////////////////

// union and intersection of 2 arrays

let arr1 = [7,3,9]
let arr2 = [6,3,9,2,9,4]

let union = new Set()
let intersection = new Set()

for(let val of arr1){
    union.add(val)
}

for(let val of arr2){
    union.add(val)
}

console.log(union)

let arr2Check = new Set(arr2)

for(let val of arr1){
    if(arr2Check.has(val)){
        intersection.add(val)
    }
}

console.log(intersection)

//////////////////////////////////////////////////////////
