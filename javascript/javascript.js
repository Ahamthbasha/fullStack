// // // const name = {
// // //     firstName:"ahamathbasha",
// // //     alternateName : "arjun sarkar",
// // //     get names(){
// // //         return `${this.firstName} ${this.alternateName}`
// // //     },
// // //     set names(name){
// // //         [this.firstName,this.alternateName]= name.split(' ')
// // //     }
// // // }

// // // console.log(name.names)

// // // name.names = "veerappa karuppu"

// // // console.log(name.names)

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // prototype

// // // function calculator(){}

// // // calculator.prototype.add = function(a,b){
// // //     return a + b
// // // }

// // // const operation = new calculator()

// // // console.log(operation.add(5,5))

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // prototype chaining

// // // function calculate(){}

// // // calculate.prototype.add = function(a,b){
// // //     return a + b
// // // }

// // // function scientificCalci(){
// // //     calculate.call(this)
// // // }

// // // scientificCalci.prototype = Object.create(calculate.prototype)

// // // scientificCalci.prototype.multi = function(a,b){
// // //     return a * b
// // // }

// // // const operation = new scientificCalci()
// // // console.log(operation.multi(1,2))
// // // console.log(operation.add(1,3))

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // proxy object

// // // const obj = {
// // //     name:"Ahamath",
// // //     age:20
// // // }

// // // const handler = {
// // //     get(target,props){
// // //         return props in target ? target[props] :"property does not exist"
// // //     },
// // //     set(target,props,value){
// // //         if(props == 'name'){
// // //             target[props] =value
// // //             return true
// // //         }
// // //         else if(props == 'age'){
// // //             target[props] = value
// // //             return true
// // //         }
// // //         else{
// // //             return false
// // //         }
// // //     }
// // // }


// // // const o = new Proxy(obj,handler)

// // // console.log(o.name)

// // // console.log('object name',obj.name)

// // // o.name = "saravanan"

// // // console.log(o.name)

// // // console.log('object name',obj.name)

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // //deepCopy


// // function deepCopy(obj){
// //     if(obj == null || typeof obj != 'object'){
// //         return obj
// //     }

// //     const copy = Array.isArray(obj) ? [] : {}

// //     for(let key in obj){
// //         copy[key] = deepCopy(obj[key])
// //     }

// //     return copy
// // }


// // // function deepFreeze

// // function deepFreeze(obj){
// //     let propNames = Object.getOwnPropertyNames(obj)

// //     for(let val of propNames){
// //         const value = obj[val]

// //         if(value && typeof value == 'object'){
// //             return deepFreeze(value)
// //         }
// //     }

// //     return Object.freeze(obj)
// // }

// // //memoization

// // const fact = (n)=>{
// //     let fact = 1
// //     for(let i=1;i<=n;i++){
// //         fact *= i
// //     }
// //     return fact
// // }

// // console.log(fact(5))

// // function memo(fn){
// //     let cache = {}

// //     return function(args){
// //         if(args in cache){
// //             return cache[args]
// //         }else{
// //             let result = fn(args)
// //             cache[args] = result
// //             return result
// //         }
// //     }
// // }

// // const f = memo(fact)

// // console.time()
// // console.log(f(5))
// // console.timeEnd()

// // console.time()
// // console.log(f(5))
// // console.timeEnd()

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // const article = [{id:1,name:'basha'},{id:2,name:'ahamathbasha'}];
// // const videos = [{id:10,name:'abcde',url:"http",articleId:1},{id:20,name:'peddi',url:"https",articleId:2}];


// // Expected Output:
// // [
// //   {
// //     article: { id: 1, name: 'basha' },
// //     videos: [
// //       { id: 10, name: 'abcde', url: 'http', articleId: 1 }
// //     ]
// //   }
// // ]

// // let result = []

// // for(let value of article){
// //     let video = videos.filter((val)=>val.articleId == value.id)
// //     result.push({
// //         article:value,video
// //     }) 
// // }

// // console.log(result[0].video)

// // ////////////////////////////////////////
// // const data = {
// //   users: [
// //     {id:1, name:"A", details:{age:25, city:"NY"}},
// //     {id:2, name:"B", details:{age:30, city:"LA"}}
// //   ]
// // };


// // let result = []

// // for(let key in data){
// //     for(let val of data[key]){
// //       let obj = {}
// //       for(let objKey in val){
// //         if(typeof val[objKey] == 'object'){
// //           for(let nestedObj in val[objKey]){
// //             obj[nestedObj] = val[objKey][nestedObj]
// //           }
// //         }else{
// //           obj[objKey] = val[objKey]
// //         }
// //       }
// //       result.push(obj)
// //     }
// // }

// // console.log(result)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // const products = [
// //   {name:"apple", qty:2},
// //   {name:"banana", qty:3},
// //   {name:"apple", qty:4}
// // ];


// // // [{name:"apple",qty:6},{name:"banana",qty:3}]

// // let freqMap = {}

// // for(let val of products){
// //   if(freqMap[val.name]){
// //     freqMap[val.name] += val.qty
// //   }else{
// //     freqMap[val.name] = val.qty
// //   }
// // }

// // console.log(freqMap)

// // let result = []

// // for(let key in freqMap){
// //   result.push({name:key,qty:freqMap[key]})
// // }

// // console.log(result)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 1. Group Employees by Department

// const employees = [
//   {id:1, name:"John", dept:"IT"},
//   {id:2, name:"Sam", dept:"HR"},
//   {id:3, name:"David", dept:"IT"},
//   {id:4, name:"Sara", dept:"HR"}
// ];

// // Expected Output
// // {
// //   IT: [
// //     {id:1, name:"John", dept:"IT"},
// //     {id:3, name:"David", dept:"IT"}
// //   ],
// //   HR: [
// //     {id:2, name:"Sam", dept:"HR"},
// //     {id:4, name:"Sara", dept:"HR"}
// //   ]
// // }

// // let groupDept = {}

// // for(let val of employees){
// //   if(groupDept[val.dept]){
// //     groupDept[val.dept].push(val)
// //   }else{
// //     groupDept[val.dept] = [val]
// //   }
// // }

// // console.log(groupDept)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 2. Flatten Nested Array

// // const arr = [1, [2, 3], [4, [5, 6]], 7];

// // console.log(arr.flat(Infinity))

// // // output: [1,2,3,4,5,6,7]

// // function flat(arr,result=[]){
// //   for(let val of arr){
// //     if(typeof val == 'object'){
// //       flat(val,result)
// //     }else{
// //       result.push(val)
// //     }
// //   }
// //   return result
// // }

// // console.log(flat(arr))

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 3.Find Duplicate Elements Count

// const data = ["apple", "banana", "apple", "orange", "banana", "apple"];

// // Expected Output
// // {
// //   apple: 3,
// //   banana: 2,
// //   orange: 1
// // }

// // let count = {}

// // for(let val of data){
// //   if(count[val]){
// //     count[val]++
// //   }else{
// //     count[val]=1
// //   }
// // }

// // console.log(count)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 4. Merge Users with Orders

// const users = [
//   {id:1, name:"A"},
//   {id:2, name:"B"}
// ];

// const orders = [
//   {id:101, product:"Laptop", userId:1},
//   {id:102, product:"Phone", userId:1},
//   {id:103, product:"Watch", userId:2}
// ];


// let result =  []

// for(let value of users){
//   result.push({
//     user:value,
//     orders:orders.filter((val)=>val.userId == value.id)
//   })
// }

// console.log(result)

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nums = [1,2,3,5,6,7]

// let check = new Set(nums)

// for(let i=1;i<=nums.length;i++){
//   if(!check.has(i)){
//     console.log(i)
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const str = "aabbcddeff"

// let freqMap = {}

// for(let val of str){
//   if(freqMap[val]){
//     freqMap[val]++
//   }else{
//     freqMap[val]=1
//   }
// }

// for(let key in freqMap){
//   if(freqMap[key] == 1){
//     console.log(key)
//     return
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const students = [
//   { name: "John", grade: "A" },
//   { name: "Sam", grade: "B" },
//   { name: "David", grade: "A" },
//   { name: "Sara", grade: "C" }
// ];

// let groupByGrade = {}

// for(let val of students){
//   if(groupByGrade[val.grade]){
//     groupByGrade[val.grade].push(val)
//   }else{
//     groupByGrade[val.grade]=[val]
//   }
// }

// console.log(groupByGrade)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const nums = [1,2,4,6,7,9];

// let min = Math.min(...nums)
// let max = Math.max(...nums)

// let check = new Set(nums)
// let result = []

// for(let i=min;i<=max;i++){
//   if(!check.has(i)){
//     result.push(i)
//   }
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const sentence = "hello world hello javascript world";

// let s = sentence.split(' ')

// let freqMap = {}

// for(let val of s){
//   if(freqMap[val]){
//     freqMap[val]++
//   }else{
//     freqMap[val]=1
//   }
// }

// console.log(freqMap)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const arr = [1,2,3,4,5]
const k = 2

let i = 0

while(i != k){
  let last = arr.pop()
  arr.unshift(last)
  i++
}

console.log(arr)