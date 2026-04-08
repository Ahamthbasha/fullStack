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

// class Stack{
//     constructor(){
//         this.stack = []
//     }

//     isEmpty(){
//         return this.stack.length == 0
//     }

//     push(data){
//         this.stack.push(data)
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return
//         }else{
//             let top = this.stack.pop()
//             return top
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return
//         }else{
//             return this.stack[this.stack.length-1]
//         }
//     }

//     print(){
//         console.log(this.stack)
//     }
// }


// class Queue{
//     constructor(){
//         this.s1 = new Stack()
//         this.s2 = new Stack()
//     }

//     isEmpty(){
//         return this.s1.isEmpty() && this.s2.isEmpty()
//     }

//     enqueue(data){
//         if(this.isEmpty()){
//             this.s1.push(data)
//         }else{
//             while(!this.s1.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }

//             this.s1.push(data)

//             while(!this.s2.isEmpty()){
//                 this.s1.push(this.s2.pop())
//             }
//         }
//     }

//     dequeue(){
//         if(this.s1.isEmpty()){
//             console.log("queue is empty")
//             return
//         }else{
//             let val = this.s1.pop()
//             return val
//         }
//     }

//     peek(){
//         if(this.s1.isEmpty()){
//             console.log("queue is empty")
//             return
//         }else{
//             return this.s1.peek()
//         }
//     }

//     print(){
//         this.s1.print()
//     }
// }

// const q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)

// q.print()

// console.log(q.dequeue())

// q.print()

// console.log(q.peek())

// q.print()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack by using two Queues

// based on pop will be O(n)

// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     isEmpty(){
//         return this.queue.length == 0
//     }

//     enqueue(data){
//         this.queue.push(data)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }else{
//             let val = this.queue.shift()
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         else{
//             return this.queue[0]
//         }
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// class Stack{
//     constructor(){
//         this.q1 = new Queue()
//         this.q2 = new Queue()
//     }

//     isEmpty(){
//         return this.q1.isEmpty() && this.q2.isEmpty()
//     }

//     push(data){
//         this.q1.enqueue(data)
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log('stack is empty')
//             return
//         }
//         else{
//             let top = -1

//             while(this.q1.queue.length != 1){
//                 this.q2.enqueue(this.q1.dequeue())
//             }

//             top = this.q1.dequeue()

//             let temp = this.q1
//             this.q1 = this.q2
//             this.q2 = temp

//             return top
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         else{
//             let top = -1
//             while(!this.q1.isEmpty()){
//                 if(this.q1.queue.length == 1){
//                     top = this.q1.queue[0]
//                 }
//                 this.q2.enqueue(this.q1.dequeue())
//             }


//             while(!this.q2.isEmpty()){
//                 this.q1.enqueue(this.q2.dequeue())
//             }

//             return top
//         }
//     }

//     print(){
//         this.q1.print()
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// first non - repeating characters

// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     isEmpty(){
//         return this.queue.length == 0
//     }

//     enqueue(data){
//         this.queue.push(data)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }else{
//             return this.queue.shift()
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         else{
//             return this.queue[0]
//         }
//     }

//     print(){
//         console.log(this.queue)
//     }

//     firstNonReapeatingCharacter(str){
//         let freqMap = {}
//         let tempQueue = new Queue()

//         let result = []

//         for(let i=0;i<str.length;i++){
//             tempQueue.enqueue(str[i])

//             if(freqMap[str[i]]){
//                 freqMap[str[i]]++
//             }else{
//                 freqMap[str[i]]=1
//             }

//             while(!tempQueue.isEmpty()){
//                 let take = tempQueue.peek()

//                 if(freqMap[take] > 1){
//                     tempQueue.dequeue()
//                 }else{
//                     result.push(take)
//                     break
//                 }
//             }

//             if(tempQueue.isEmpty()){
//                 result.push(-1)
//             }
//         }
//         return result
//     }
// }

// const q = new Queue()

// console.log(q.firstNonReapeatingCharacter('aabccxb'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// interleave of 2 halves of a queue(even length)

// input : [1,2,3,4,5,6,7,8,9,10]
// output : [1,6,2,7,3,8,4,9,5,10]


// function interLeaveTwoHalf(arr){
//     let halfSize = Math.floor(arr.length/2)

//     let tempQueue = []

//     for(let i=0;i<halfSize;i++){
//         tempQueue.push(arr.shift())
//     }

//     while(tempQueue.length){
//         arr.push(tempQueue.shift())
//         arr.push(arr.shift())
//     }

//     return arr
// }

// console.log(interLeaveTwoHalf([1,2,3,4,5,6,7,8,9,10]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// queue reversal

// function reverseQueue(arr){
//     let stack = []

//     while(arr.length){
//         stack.push(arr.shift())
//     }

//     while(stack.length){
//         arr.push(stack.pop())
//     }

//     return arr
// }

// console.log(reverseQueue([1,2,3,4,5]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// deque (double ended queue) implementation

// class Deque{
//     constructor(){
//         this.queue = []
//     }

//     isEmpty(){
//         return this.queue.length == 0
//     }

//     addFirst(data){
//         this.queue.unshift(data)
//     }

//     addLast(data){
//         this.queue.push(data)
//     }

//     removeFirst(){
//         if(this.isEmpty()){
//             console.log("deque is empty")
//             return
//         }else{
//             return this.queue.shift()
//         }
//     }

//     removeLast(){
//         if(this.isEmpty()){
//             console.log("deque is empty")
//             return
//         }else{
//             return this.queue.pop()
//         }
//     }

//     getFirst(){
//         if(this.isEmpty()){
//             console.log("deque is empty")
//             return
//         }else{
//             return this.queue[0]
//         }
//     }

//     getLast(){
//         if(this.isEmpty()){
//             console.log("deque is empty")
//             return
//         }else{
//             return this.queue[this.queue.length-1]
//         }
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack build by Deque

// class StackDequeue{
//     constructor(){
//         this.stack = []
//     }

//     isEmpty(){
//         return this.stack.length == 0
//     }

//     addLast(data){
//         this.stack.push(data)
//     }

//     RemoveLast(){
//         if(this.isEmpty()){
//             console.log('empty')
//             return
//         }else{
//             return this.stack.pop()
//         }
//     }

//     getLast(){
//         if(this.isEmpty()){
//             console.log("empty")
//             return
//         }else{
//             return this.stack[this.stack.length-1]
//         }
//     }

//     push(data){
//         this.addLast(data)
//     }

//     pop(){
//         return this.RemoveLast()
//     }

//     peek(){
//         return this.getLast()
//     }

//     print(){
//         console.log(this.stack)
//     }
// }

// const s = new StackDequeue()

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)

// s.print()

// console.log(s.pop())

// s.print()

// console.log(s.peek())

// s.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//queue build by deque

class QueueDeque{
    constructor(){
        this.queue = []
    }

    isEmpty(){
        return this.queue.length == 0
    }

    addLast(data){
        this.queue.push(data)
    }

    removeFirst(){
        if(this.isEmpty()){
            console.log("empty")
            return
        }else{
            return this.queue.shift()
        }
    }

    getFirst(){
        if(this.isEmpty()){
            console.log('empty')
            return
        }else{
            return this.queue[0]
        }
    }

    enqueue(data){
        this.addLast(data)
    }

    dequeue(){
        return this.removeFirst()
    }

    peek(){
        return this.getFirst()
    }

    print(){
        console.log(this.queue)
    }
}

const q = new QueueDeque()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.print()

console.log(q.dequeue())

q.print()

console.log(q.peek())

q.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////