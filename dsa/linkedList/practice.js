class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    prepend(data){
        const node = new Node(data)

        if(this.getSize() == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(data){
        const node = new Node(data)

        if(this.getSize() == 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(index,data){
        if(index < 0 || index > this.getSize()){
            return 'invalid index'
        }
        if(index == 0){
            this.prepend(data)
        }
        else if(index == this.getSize()){
            this.append(data)
        }
        else{
            let temp = this.head

            for(let i=0;i<index-1;i++){
                temp = temp.next
            }

            const node = new Node(data)
            let tempo = temp.next
            temp.next = node
            node.next = tempo
            this.size++
        }
    }


    removeFirst(){
        if(this.getSize() == 0){
            return 'no node exist'
        }
        else if(this.getSize() == 1){
            let val = this.head.data
            this.head = null
            this.tail = null
            this.size = 0
            return val
        }
        else{
            let val = this.head.data
            this.head = this.head.next
            this.size--
            return val
        }
    }

    removeLast(){
        if(this.getSize() == 0){
            return 'no node exist'
        }
        else if(this.getSize() == 1){
            let val = this.head.data
            this.head = null
            this.tail = null
            this.size = 0
            return val
        }
        else{
            let temp = this.head

            while(temp.next.next != null){
                temp = temp.next
            }

            let val = temp.next.data
            temp.next = null
            this.tail = temp
            this.size--
            return val
        }
    }

    search(key){
        let temp = this.head
        let count = 0
        while(temp){
            if(temp.data == key){
                return count
            }
            temp = temp.next
            count++
        }

        return -1
    }

    //apna college logic
    // recursiveSearch(key){
    //     return this.recursiveSearchHelper(this.head,key)
    // }

    // recursiveSearchHelper(node,key){
    //     if(node == null){
    //         return -1
    //     }

    //     if(node.data == key){
    //         return 0
    //     }

    //     let idx = this.recursiveSearchHelper(node.next,key)

    //     if(idx == -1){
    //         return -1
    //     }

    //     return idx+1
    // }

    // myLogic for recursiveSearch

    recursiveSearch(key){
        return this.recursiveSearchHelper(this.head,key)
    }

    recursiveSearchHelper(head,key,count=0){
        if(head == null){
            return -1
        }

        if(head.data == key){
            return count
        }

        return this.recursiveSearchHelper(head.next,key,count=count+1)
    }

    reverse(){
        let prev = null
        let cur = this.tail = this.head
        let next

        while(cur != null){
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }

    findAndRemovNthNodeFromEnd(n){
       if(n <= 0 || n > this.size){
        return 'invalid n'
       }

       if(n == this.getSize()){
        return this.removeFirst()
       }

       let size = this.getSize()
       let prev = this.head
       for(let i=0;i<size-n-1;i++){
        prev = prev.next
       }

       let val = prev.next.data

       if(prev.next == this.tail){
        this.tail = prev
       }

       prev.next = prev.next.next
       this.size--
       return val
    }

    //slow fast approach
    findMid(){
        let slow = this.head
        let fast = this.head

        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    palindromeChecker(){
        // step1 -> find the mid node
        let midNode = this.findMid()

        // step2 -> reverse the second half
        
        let prev = null
        let cur = midNode
        let next 

        while(cur != null){
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        let right = prev
        let left = this.head

        // step3 check left and right half

        while(right != null){
            if(left.data != right.data){
                return false
            }
            left = left.next
            right = right.next
        }

        return true
    }

    print(){
        if(this.getSize() == 0){
            console.log("list is empty")
        }
        else{
            let temp = this.head

            let list = ''

            while(temp){
                list += temp.data + '->'
                temp = temp.next
            }

            list += 'null'
            console.log(list)
        }
    }
}

const ll = new LinkedList()

ll.prepend(3)
ll.prepend(2)
ll.prepend(1)

ll.append(4)
ll.append(5)

ll.print()

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

ll.print()

console.log(ll.palindromeChecker())

const ll2 = new LinkedList()

ll2.append(1)
ll2.append(2)
ll2.append(2)
ll2.append(1)

ll2.print()

console.log(ll2.palindromeChecker())