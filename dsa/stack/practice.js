//stack based on array

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     push(data){
//         this.items.push(data)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }
//         let val = this.items[this.items.length-1]
//         this.items.pop()
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty'
//         }

//         return this.items[this.items.length-1]
//     }

//     print(){
//         return this.items
//     }
// }

// const s = new Stack()

// s.push(1)
// s.push(2)
// s.push(3)

// console.log(s.peek())

// console.log(s.print())

// console.log(s.pop())

// console.log(s.peek())

// console.log(s.print())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack based on linkedlist

//  class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
//  }

//  class Stackll{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(data){
//         const node = new Node(data)

//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'nothing to remove'
//         }
//         else if(this.getSize() == 1){
//             let val = this.head.data
//             this.head = null
//             this.tail = null
//             this.size--
//             return val
//         }
//         else{
//             let val = this.head.data
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'nothing in the top'
//         }
//         else{
//             return this.head.data
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("empty")
//         }
//         else{
//             let temp = this.head
//             let list = ''

//             while(temp){
//                 list += temp.data +'->'
//                 temp = temp.next
//             }

//             list += 'null'

//             console.log(list)
//         }
//     }
//  }

//  const s = new Stackll()

//  s.push(3)
//  s.push(2)
//  s.push(1)

// s.print()

// console.log(s.pop())

// s.print()

// console.log(s.peek())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question1: push at the bottom of the stack

class Stack{
    constructor(){
        this.data = []
    }

    isEmpty(){
        return this.data.length == 0
    }

    push(data){
        this.data.push(data)
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        else{
            return this.data.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }else{
            return this.data[this.data.length-1]
        }
    }

    print(){
        return this.data
    }

    pushAtBottom(data){
        let temp = new Stack()

        while(!this.isEmpty()){
            temp.push(this.pop())
        }

        this.push(data)

        while(!temp.isEmpty()){
            this.push(temp.pop())
        }
    }

    pushAtBottomRecursion(data){
        if(this.isEmpty()){
            this.push(data)
            return
        }

        let top = this.pop()
        this.pushAtBottomRecursion(data)
        this.push(top)
    }

    reverseString(str){
        let tempStack = new Stack()

        for(let val of str){
            tempStack.push(val)
        }


        let reversedStr = ''

        while(!tempStack.isEmpty()){
            reversedStr += tempStack.pop()
        }

        return reversedStr
    }

    //inbuild method
    reverseStack(){
        return this.data.reverse()
    }

    //by Using another stack
    reverseStackusingAnotherStack(){
        let temp = new Stack()

        while(!this.isEmpty()){
            temp.push(this.pop())
        }

        this.data = temp.data

    }

    reverseStackByUsingRecursion(){
        if(this.isEmpty()){
            return
        }

        let top = this.pop()
        this.reverseStackByUsingRecursion()
        this.pushAtBottomRecursion(top)
    }

    stockSpanProblem(arr){
        //span : max no of consecutive days price is less than todays price
        // span = i - prevHigh
        let stack = []
        let span = []
        for(let i=0;i<arr.length;i++){
            while(stack.length && arr[stack[stack.length-1]] <= arr[i]){
                stack.pop()
            }

            if(i == 0){
                span.push(i+1)
            }else{
                span[i] = i - stack[stack.length-1]
            }

            stack.push(i)
        }

        return span
    }

    nextGreaterElement(arr){
        let result = []
        let stack = new Stack()

        for(let i=arr.length-1;i>=0;i--){
            while(!stack.isEmpty() && arr[stack.peek()] <= arr[i]){
                stack.pop()
            }

            if(stack.isEmpty()){
                result[i] = -1
            }else{
                result[i] = arr[stack.peek()]
            }

            stack.push(i)
        }

        return result
    }

    validParentheses(arr){
        let bracketMap = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        }

        let stack = new Stack()

        for(let val of arr){
            if(bracketMap[val]){
                stack.push(val)
            }else{
                if(stack.isEmpty()){
                    return false
                }
                let top = stack.pop()
                if(bracketMap[top] != val){
                    return false
                }
            }
        }

        return stack.isEmpty()
    }

    duplicateParentheses(arr){
        let stack = new Stack()
        for(let i=0;i<arr.length;i++){
            if(arr[i] == ')'){
                let count = 0
                while(!stack.isEmpty() && stack.peek() != "("){
                    stack.pop()
                    count++
                }

                if(stack.isEmpty()){
                    return false
                }

                if(count < 1){
                    return true
                }else{
                    stack.pop()
                }
            }
            else{
                stack.push(arr[i])
            }
        }

        return false
    }

    maxAreaHistogram(arr){
        let nextSmallerLeft = []
        let nextSmallerRight  = []
        //next smaller Left
        let leftStack = new Stack()
        for(let i=0;i<arr.length;i++){
            while(!leftStack.isEmpty() && arr[leftStack.peek()] >= arr[i]){
                leftStack.pop()
            }

            if(leftStack.isEmpty()){
                nextSmallerLeft[i] = -1 
            }else{
                nextSmallerLeft[i] = leftStack.peek()
            }

            leftStack.push(i)
        }
        
        //next Smaller Right
        let rightStack = new Stack()
        for(let i=arr.length-1;i>=0;i--){
            while(!rightStack.isEmpty() && arr[rightStack.peek()] >= arr[i]){
                rightStack.pop()
            }

            if(rightStack.isEmpty()){
                nextSmallerRight[i] = arr.length
            }else{
                nextSmallerRight[i] = rightStack.peek()
            }
            rightStack.push(i)
        }

        let maxArea = 0
        for(let i=0;i<arr.length;i++){
            let height = arr[i]
            let width = nextSmallerRight[i] - nextSmallerLeft[i] - 1
            let area = height * width
            maxArea = Math.max(maxArea,area)
        }
        return maxArea
    }
}

const s = new Stack()

// s.push(1)
// s.push(2)
// s.push(3)

// console.log(s.print())

// console.log(s.pop())

// console.log(s.print())

// console.log(s.peek())

// s.pushAtBottom(0)

// console.log(s.print())

// s.pushAtBottomRecursion(0)

// console.log(s.print())

// console.log(s.reverseString('abcd'))

// s.reverseStackByUsingRecursion()

// console.log(s.print())

// s.reverseStackusingAnotherStack()

// console.log(s.print())

// console.log(s.nextGreaterElement([6,8,0,1,3]))

// console.log(s.validParentheses("()[]{}"))

// let result = s.duplicateParentheses("((a))") 

// console.log(result ? "duplicate exist" : "duplicate not exist")

console.log(s.maxAreaHistogram([2,1,5,6,2,3]))