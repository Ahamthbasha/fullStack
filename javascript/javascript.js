// // const name = {
// //     firstName:"ahamathbasha",
// //     alternateName : "arjun sarkar",
// //     get names(){
// //         return `${this.firstName} ${this.alternateName}`
// //     },
// //     set names(name){
// //         [this.firstName,this.alternateName]= name.split(' ')
// //     }
// // }

// // console.log(name.names)

// // name.names = "veerappa karuppu"

// // console.log(name.names)

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // prototype

// // function calculator(){}

// // calculator.prototype.add = function(a,b){
// //     return a + b
// // }

// // const operation = new calculator()

// // console.log(operation.add(5,5))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // prototype chaining

// // function calculate(){}

// // calculate.prototype.add = function(a,b){
// //     return a + b
// // }

// // function scientificCalci(){
// //     calculate.call(this)
// // }

// // scientificCalci.prototype = Object.create(calculate.prototype)

// // scientificCalci.prototype.multi = function(a,b){
// //     return a * b
// // }

// // const operation = new scientificCalci()
// // console.log(operation.multi(1,2))
// // console.log(operation.add(1,3))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // proxy object

// // const obj = {
// //     name:"Ahamath",
// //     age:20
// // }

// // const handler = {
// //     get(target,props){
// //         return props in target ? target[props] :"property does not exist"
// //     },
// //     set(target,props,value){
// //         if(props == 'name'){
// //             target[props] =value
// //             return true
// //         }
// //         else if(props == 'age'){
// //             target[props] = value
// //             return true
// //         }
// //         else{
// //             return false
// //         }
// //     }
// // }


// // const o = new Proxy(obj,handler)

// // console.log(o.name)

// // console.log('object name',obj.name)

// // o.name = "saravanan"

// // console.log(o.name)

// // console.log('object name',obj.name)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //deepCopy


// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }


// // function deepFreeze

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         const value = obj[val]

//         if(value && typeof value == 'object'){
//             return deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// //memoization

// const fact = (n)=>{
//     let fact = 1
//     for(let i=1;i<=n;i++){
//         fact *= i
//     }
//     return fact
// }

// console.log(fact(5))

// function memo(fn){
//     let cache = {}

//     return function(args){
//         if(args in cache){
//             return cache[args]
//         }else{
//             let result = fn(args)
//             cache[args] = result
//             return result
//         }
//     }
// }

// const f = memo(fact)

// console.time()
// console.log(f(5))
// console.timeEnd()

// console.time()
// console.log(f(5))
// console.timeEnd()


const article = [{id:1,name:'basha'},{id:2,name:'ahamathbasha'}];
const videos = [{id:10,name:'abcde',url:"http",articleId:1},{id:20,name:'peddi',url:"https",articleId:2}];


// Expected Output:
// [
//   {
//     article: { id: 1, name: 'basha' },
//     videos: [
//       { id: 10, name: 'abcde', url: 'http', articleId: 1 }
//     ]
//   }
// ]

// let result = []

// for(let value of article){
//     let video = videos.filter((val)=>val.articleId == value.id)
//     result.push({
//         article:value,video
//     }) 
// }

// console.log(result[0].video)

////////////////////////////////////////
const data = {
  users: [
    {id:1, name:"A", details:{age:25, city:"NY"}},
    {id:2, name:"B", details:{age:30, city:"LA"}}
  ]
};


let result = []

for(let key in data){
    for(let val of data[key]){
    }
}