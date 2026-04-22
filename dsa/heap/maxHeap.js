class MaxHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    leftChildIndex(index){
        return 2 * index + 1
    }

    rightChildIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftchild(index){
        return this.heap[this.leftChildIndex(index)]
    }

    getRightchild(index){
        return this.heap[this.rightChildIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.leftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.rightChildIndex(index) < this.heap.length
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.heap[0]
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(this.hasParent(index) && this.getParent(index)[0] < this.heap[index][0]){
            let parentIndex =  this.getParentIndex(index)
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }

    remove(){
        let data = this.heap[0]

        if(this.heap.length == 1){
            return this.heap.pop()
        }

        this.heap[0] = this.heap.pop()
        this.heapifyDown()

        return data
    }

    heapifyDown(){
        let index = 0

        while(this.hasLeftChild(index)){
            let largestIndex = this.leftChildIndex(index)

            if(this.hasRightChild(index) && this.getRightchild(index)[0] > this.getLeftchild(index)[0]){
                largestIndex = this.rightChildIndex(index)
            }

            if(this.heap[index][0] >= this.heap[largestIndex][0]){
                break
            }

            this.swap(index,largestIndex)

            index = largestIndex
        }
    }

    slidingWindowMaximum(arr,k){
        let result = []
        let temp = new MaxHeap()

        for(let i = 0;i<arr.length;i++){
            temp.insert([arr[i],i])

            while(temp.peek()[1] <= i-k){
                temp.remove()
            }
    
            if(i >= k-1){
                result.push(temp.peek()[0])
            }
        }

        
        return result
    }
}

const h = new MaxHeap()

console.log(h.slidingWindowMaximum([1,3,-1,-3,5,3,6,7],3))