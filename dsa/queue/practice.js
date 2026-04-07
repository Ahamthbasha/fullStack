//  // queue implementation based on array

//  class Queue{
//     constructor(size){
//         this.queue = []
//         this.size = size
//         this.rear = -1
//     }

//     isEmpty(){
//         return this.rear == -1
//     }

//     isFull(){
//         return this.rear == this.size-1
//     }

//     enqueue(data){
//         if(this.isFull()){
//             console.log('queue is full')
//             return
//         }else{
//             this.queue[this.rear+1] = data
//             this.rear++
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }else{
//             let front = this.queue.shift()
//             this.rear--
//             return front 
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }else{
//             return this.queue[0]
//         }
//     }

//     print(){
//         console.log(this.queue)
//     }
//  }

//  const q = new  Queue(5)

//  q.enqueue(10)
//  q.enqueue(20)
//  q.enqueue(30)
//  q.enqueue(40)
//  q.enqueue(50)
//  q.enqueue(60)
//   q.enqueue(70)
//  q.print()

//  console.log(q.dequeue())

//  q.print()

//  console.log(q.peek())

//  q.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// queue implementation based on array (circular queue) it makes remove operation in O(1)


// class CircularQueue{
//     constructor(size){
//         this.queue = []
//         this.size = size
//         this.rear = -1
//         this.front = -1
//     }

//     isEmpty(){
//         return this.rear == -1 && this.front == -1
//     }

//     isFull(){
//         return (this.rear+1)%this.size == this.front 
//     }

//     enqueue(data){
//         if(this.isFull()){
//             console.log('queue is full')
//             return
//         }
//         else{
//             if(this.front == -1){
//                 this.front = 0
//             }
//             this.rear = (this.rear + 1) % this.size
//             this.queue[this.rear] = data
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         else{
//             let top = this.queue[this.front]
//             if(this.front == this.rear){
//                 this.rear = -1
//                 this.front = -1
//             }else{
//                 this.front = (this.front+1) % this.size
//             }

//             return top
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }else{
//             return this.queue[this.front]
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }

//         let i = this.front
//         let result = []
//         while(true){
//             result.push(this.queue[i])
//             if(i == this.rear){
//                 break
//             }
//             i = (i+1)%this.size
//         }

//         console.log(result)
//     }
// }


// const q = new CircularQueue(5)

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// q.enqueue(6)
// q.enqueue(7)

// q.print()

// console.log(q.dequeue())

// q.print()

// console.log(q.peek())

// q.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// queue using linkedList

//My logic

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class QueueLL{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     enqueue(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("nothing to remove")
//             return
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next != null){
//                 temp = temp.next
//             }

//             let val = temp.next.data
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log(`queue is empty`)
//             return
//         }else{
//             return this.head.data
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         else{
//             let temp = this.head

//             let list = ''

//             while(temp){
//                 list += temp.data + '->'
//                 temp = temp.next
//             }

//             list += 'nul'

//             console.log(list)
//         }
//     }
// }

// const q = new QueueLL()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)

// q.print()

// console.log(q.dequeue())

// q.print()

// console.log(q.peek())

////// correct logic ///

// class Node{
//     constructor(val){
//         this.data = val
//         this.next = null
//     }
// }

// class QueueLL{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     enqueue(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }else{
//             let val = this.head.data
//             this.head = this.head.next
//             this.size--

//             if(this.head == null){
//                 this.tail = null
//             }

//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         else{
//             return this.head.data
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         else{
//             let temp = this.head
//             let list = ''

//             while(temp){
//                 list += temp.data + '->'
//                 temp = temp.next
//             }

//             list += 'null'

//             console.log(list)
//         }
//     }
// }
// const q = new QueueLL()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.print()
// // Expected: 10 -> 20 -> 30 -> null

// console.log(q.dequeue()) // 10
// console.log(q.dequeue()) // 20
// q.print()
// // Expected: 30 -> null

// console.log(q.peek()) // 30

// q.enqueue(100)
// q.print()
// // Expected: 100 -> null

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// QUEUE USING TWO STACKS

class Queue{
    
}