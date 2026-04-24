//hashmap

// const map = new Map()

// map.set('india',200)
// map.set('china',250)
// map.set('india',2000)
// map.set('usa',300)

// console.log(map.get('indonesia'))

// console.log(map.get('chinese'))

// console.log(map)

// console.log(map.delete('china'))

// console.log(map)

// console.log(map.size)

// console.log(map.has('india'))

// map.clear()

// console.log(map)


// iteration of map

// for(let [key,value] of map){
//     console.log(key,value)
// }

// for(let [key,value] of map.entries()){
//     console.log(key,value)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// implementation hashMap

// class HashMap{
//     constructor(size){
//         this.table = new Array(size).fill(null).map(()=>[])
//         this.size = size
//         this.count = 0
//     }

//     hashKey(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]

//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0] == key){
//                 bucket[i][1] = value
//                 return
//             }
//         }

//         bucket.push([key,value])
//         this.count++

//         if((this.count/this.size) > 0.75){
//             this.rehash()
//         }
//     }

//     rehash(){
//         let oldTable = this.table
//         this.size *= 2
//         this.count = 0
//         this.table = new Array(this.size).fill(null).map(()=>[])

//         for(let bucket of oldTable){
//             for(let [key,value] of bucket){
//                 this.set(key,value)
//             }
//         }
//     }

//     get(key){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]

//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0] == key){
//                 return bucket[i][1]
//             }
//         }

//         return null
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//            if(this.table[i].length != 0){
//             console.log(this.table[i])
//            }
//         }
//     }

//     remove(key){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]

//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0] == key){
//                 bucket.splice(i,1)
//                 this.count--
//                 return true
//             }
//         }

//         return false
//     }
// }

// const h = new HashMap(10)

// h.set('inida',700)
// h.set('china',200)
// h.set('basha',400)
// h.set('bshaa',500)

// console.log('before removing--------------')

// h.print()

// h.remove('basha')

// console.log('after removing------')

// h.print()

// console.log(h.get('china'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//hash table or hashMap linked list based implementation

// class Node{
//     constructor(key,value){
//         this.key = key
//         this.value = value
//         this.next = null
//     }
// }

// class HashMapLL{
//     constructor(size){
//         this.table = new Array(size).fill(null)
//         this.size = size
//         this.count = 0
//     }

//     hashCode(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let bucketIndex = this.hashCode(key)
//         let currentIndex = this.table[bucketIndex]

//         if(currentIndex == null){
//             this.table[bucketIndex] = new Node(key,value)
//             this.count++
//             return
//         }

//         while(currentIndex){
//             if(currentIndex.key == key){
//                 currentIndex.value = value
//                 return
//             }
//             if(currentIndex.next == null){
//                 currentIndex.next = new Node(key,value)
//                 this.count++

//                 return
//             }
//             currentIndex = currentIndex.next
//         }

//         if((this.size/this.count) > 0.75){
//             this.rehash()
//         }
//     }

//     rehash(){
//         let old = this.table
//         this.size *= 2
//         this.count = 0
//         this.table = new Array(this.size).fill(null)

//         for(let head of old){
//             let cur = head
//             while(cur){
//                 this.set(cur.key,cur.value)
//                 cur = cur.next
//             }
//         }
//     }

//     get(key){
//         let bucketIdx = this.hashCode(key)
//         let indexInTable = this.table[bucketIdx]

//         if(indexInTable == null){
//             return null
//         }

//         while(indexInTable){
//             if(indexInTable.key == key){
//                 return indexInTable.value
//             }
//             indexInTable = indexInTable.next
//         }

//         return null
//     }

//     remove(key){
//         let index = this.hashCode(key)
//         let prev = null
//         let currentIndex = this.table[index]

//         while(currentIndex){
//             if(currentIndex.key == key){
//                 if(prev == null){
//                     this.table[index] = currentIndex.next
//                     this.count--
//                 }
//                 else{
//                     prev.next = currentIndex.next
//                     this.count--
//                 }
//                 return true
//             }
//             prev = currentIndex
//             currentIndex = currentIndex.next
//         }
//         return false
//     }

//     print(){
//         let result = []
//         for(let i=0;i<this.table.length;i++){
//             let temp = ''
//             if(this.table[i]){
//                 let current = this.table[i]
//                 while(current){
//                     temp += `(${current.key},${current.value})->`
//                     current = current.next
//                 }
//                 result.push(temp)
//             }
//         }

//         console.log(result)
//     }
// }

// const h = new HashMapLL(50)

// h.set('india',50)
// h.set('america',25)
// h.set('iran',50)

// h.print()

// console.log(h.get("iran"))

// console.log(h.get('australia'))

// console.log(h.remove('america'))

// h.print()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//majority element n/3 times

// let map = new Map()

// // let nums = [1,3,2,5,1,3,1,5,1]
// let nums = [1,2]

// for(let val of nums){
//     if(map.has(val)){
//         map.set(val,map.get(val)+1)
//     }else{
//         map.set(val,1)
//     }
// }

// let result = []

// for(let key of map.entries()){
//     let [no,freq] = key

//     if(freq > Math.floor(nums.length/3)){
//         result.push(no)
//     }
// }

// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//valid anagram

function validAnagram(s,t){
    let map = new Map()

    for(let val of s){
        if(map.has(val)){
            map.set(val,map.get(val)+1)
        }else{
            map.set(val,1)
        }
    }

    for(let val of t){
        if(map.has(val)){
            if(map.get(val) == 1){
                map.delete(val)
            }else{
                map.set(val,map.get(val)-1)
            }
        }else{
            return false
        }
    }
    return map.size == 0
}

console.log(validAnagram("tulip","lipid"))
// console.log(validAnagram('race','care'))

///////////////////////////////////////////////////////////