// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(data){
//         const node = new Node(data)

//         if(this.getSize() == 0){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(data){
//         const node = new Node(data)

//         if(this.getSize() == 0){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     insert(index,data){
//         if(index < 0 || index > this.getSize()){
//             return 'invalid index'
//         }
//         if(index == 0){
//             this.prepend(data)
//         }
//         else if(index == this.getSize()){
//             this.append(data)
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             const node = new Node(data)
//             let tempo = temp.next
//             temp.next = node
//             node.next = tempo
//             this.size++
//         }
//     }


//     removeFirst(){
//         if(this.getSize() == 0){
//             return 'no node exist'
//         }
//         else if(this.getSize() == 1){
//             let val = this.head.data
//             this.head = null
//             this.tail = null
//             this.size = 0
//             return val
//         }
//         else{
//             let val = this.head.data
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     removeLast(){
//         if(this.getSize() == 0){
//             return 'no node exist'
//         }
//         else if(this.getSize() == 1){
//             let val = this.head.data
//             this.head = null
//             this.tail = null
//             this.size = 0
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next != null){
//                 temp = temp.next
//             }

//             let val = temp.next.data
//             temp.next = null
//             this.tail = temp
//             this.size--
//             return val
//         }
//     }

//     search(key){
//         let temp = this.head
//         let count = 0
//         while(temp){
//             if(temp.data == key){
//                 return count
//             }
//             temp = temp.next
//             count++
//         }

//         return -1
//     }

//     //apna college logic
//     // recursiveSearch(key){
//     //     return this.recursiveSearchHelper(this.head,key)
//     // }

//     // recursiveSearchHelper(node,key){
//     //     if(node == null){
//     //         return -1
//     //     }

//     //     if(node.data == key){
//     //         return 0
//     //     }

//     //     let idx = this.recursiveSearchHelper(node.next,key)

//     //     if(idx == -1){
//     //         return -1
//     //     }

//     //     return idx+1
//     // }

//     // myLogic for recursiveSearch

//     recursiveSearch(key){
//         return this.recursiveSearchHelper(this.head,key)
//     }

//     recursiveSearchHelper(head,key,count=0){
//         if(head == null){
//             return -1
//         }

//         if(head.data == key){
//             return count
//         }

//         return this.recursiveSearchHelper(head.next,key,count=count+1)
//     }

//     reverse(){
//         let prev = null
//         let cur = this.tail = this.head
//         let next

//         while(cur != null){
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }

//     findAndRemovNthNodeFromEnd(n){
//        if(n <= 0 || n > this.size){
//         return 'invalid n'
//        }

//        if(n == this.getSize()){
//         return this.removeFirst()
//        }

//        let size = this.getSize()
//        let prev = this.head
//        for(let i=0;i<size-n-1;i++){
//         prev = prev.next
//        }

//        let val = prev.next.data

//        if(prev.next == this.tail){
//         this.tail = prev
//        }

//        prev.next = prev.next.next
//        this.size--
//        return val
//     }

//     //slow fast approach
//     findMid(){
//         let slow = this.head
//         let fast = this.head

//         while(fast != null && fast.next != null){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     palindromeChecker(){
//         // step1 -> find the mid node
//         let midNode = this.findMid()

//         // step2 -> reverse the second half
        
//         let prev = null
//         let cur = midNode
//         let next 

//         while(cur != null){
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         let right = prev
//         let left = this.head

//         // step3 check left and right half

//         while(right != null){
//             if(left.data != right.data){
//                 return false
//             }
//             left = left.next
//             right = right.next
//         }

//         return true
//     }

//     detectLoopCycle(){
//         let slow = this.head
//         let fast = this.head

//         while(fast != null && fast.next != null){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 return true
//             }
//         }

//         return false
//     }

//     removeCycle(){
//         //step1 : detectCycle

//         let slow = this.head
//         let fast = this.head
//         let cycle = false
//         while(fast != null && fast.next != null){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 cycle = true
//                 break    
//             }
//         }

//         if(cycle == false){
//             return 'no cycle'
//         }

//         //step2 : find meeting point

//         slow = this.head
//         let last = null
//         while(slow != fast){
//             last =  fast
//             slow = slow.next
//             fast = fast.next
//         }

//         //step3 : assign last node to null

//         last.next = null
//     }

//     findMiddleForMergeSort(head){
//         let slow = head
//         let fast = head.next

//         while(fast != null && fast.next != null){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     mergeSort(head){
//         if(head == null || head.next == null){
//             return head
//         }

//         let middle = this.findMiddleForMergeSort(head)
//         let rightHalf = middle.next
//         middle.next = null

//         let left = this.mergeSort(head)
//         let right = this.mergeSort(rightHalf)
//         return this.merge(left,right)
//     }

//     merge(left,right){
//         let mergedList = new Node(-1)
//         let temp = mergedList

//         while(left != null && right != null){
//             if(left.data <= right.data){
//                 temp.next = left
//                 left = left.next
//             }else{
//                 temp.next = right
//                 right = right.next
//             }
//             temp = temp.next
//         }

//         if(left){
//             temp.next = left
//         }

//         if(right){
//             temp.next = right
//         }

//         return mergedList.next
//     }

//     zigzag(){
//         // find mid

//         let slow = this.head
//         let fast = this.head.next

//         while(fast != null && fast.next != null){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         let mid = slow

//         //reverse second half

//         let prev = null
//         let cur = mid.next
//         mid.next = null
//         let next

//         while(cur != null){
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         let left = this.head
//         let right = prev
//         let nextLeft
//         let nextRight

//         while(left != null && right != null){
//             nextLeft = left.next
//             left.next = right
//             nextRight = right.next
//             right.next = nextLeft
//             left = nextLeft
//             right = nextRight
//         }
//     }

//     print(){
//         if(this.getSize() == 0){
//             console.log("list is empty")
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

// const ll = new LinkedList()

// ll.prepend(3)
// ll.prepend(2)
// ll.prepend(1)

// ll.append(4)
// ll.append(5)

// ll.print()

// ll.insert(1,10)

// ll.print()

// ll.removeFirst()

// ll.print()

// ll.removeLast()

// ll.print()

// console.log(ll.search(11))
// console.log(ll.search(2))

// console.log(ll.recursiveSearch(3))
// console.log(ll.recursiveSearch(10))

// ll.reverse()

// ll.print()


// ll.findAndRemovNthNodeFromEnd(3)

// ll.print()

// console.log(ll.palindromeChecker())

// const ll2 = new LinkedList()

// ll2.append(1)
// ll2.append(2)
// ll2.append(2)
// ll2.append(1)

// ll2.print()

// console.log(ll2.palindromeChecker())

// const ll3 = new LinkedList()
// ll3.append(1)
// ll3.append(2)
// ll3.append(3)
// ll3.append(4)

// ll3.tail.next = ll3.head.next

// console.log(ll3.detectLoopCycle())

// ll3.removeCycle()

// console.log(ll3.detectLoopCycle())

// const ll = new LinkedList()

// ;[4,2,1,3].forEach(x => ll.append(x))

// ll.head = ll.mergeSort(ll.head)

// ll.print()  // expected: 1 -> 2 -> 3 -> 4

// const ll = new LinkedList()
// ;[1,2,3,4,5].forEach(x => ll.append(x))

// console.log("Before:")
// ll.print()

// ll.zigzag()

// console.log("After:")
// ll.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// doubly linked list //

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    addFirst(data){
        const node = new Node(data)

        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    removeFirst(){
        if(this.size == 0){
            return 'nothing to remove'
        }
        else if(this.size == 1){
            let val = this.head.data
            this.head = null
            this.tail = null
            this.size--
            return val
        }else{
            let val = this.head.data
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return val
        }
    }

    //addLast
    //removeLast

    reverse(){
        let prev = null
        let cur = this.head
        let next

        while(cur != null){
            next = cur.next
            cur.next = prev
            cur.prev = next
            prev = cur
            cur = next
        }

        this.head = prev
    }

    print(){
        if(this.size == 0){
            console.log("empty")
        }else{
            let temp = this.head

            let list = ''

            list += 'null' + '<->'

            while(temp){
                list += temp.data +'<->'
                temp = temp.next
            }

            list += 'null'

            console.log(list)
        }
    }
}

const dll = new DLL()

// dll.addFirst(1)
// dll.addFirst(2)
// dll.addFirst(3)
// dll.addFirst(4)

// dll.print()

// dll.removeFirst()

// dll.print()

dll.addFirst(1)
dll.addFirst(2)
dll.addFirst(3)

dll.print()

dll.reverse()

dll.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// circular linked list //