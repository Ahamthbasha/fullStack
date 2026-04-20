class MinHeap{
    constructor(){
        this.arr = []
    }

    isEmpty(){
        return this.arr.length == 0
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftchild(index){
        return this.getLeftChildIndex(index) < this.arr.length
    }

    hasRightchild(index){
        return this.getRightChildIndex(index) < this.arr.length
    }

    getParent(index){
        return this.arr[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.arr[this.getLeftChildIndex(index)]
    }

    getRightChild(index){
        return this.arr[this.getRightChildIndex(index)]
    }

    swap(index1,index2){
        [this.arr[index1],this.arr[index2]] = [this.arr[index2],this.arr[index1]]
    }

    insert(data){
        this.arr.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.arr.length-1

        while(this.hasParent(index) && this.getParent(index) > this.arr[index]){
            let parentIndex = this.getParentIndex(index)

            this.swap(parentIndex,index)

            index = parentIndex
        }
    }

    peek(){
        if(this.isEmpty()){
            return []
        }

        return this.arr[0]
    }

    delete(){
        // remove the min element
        // swap first node and last node
        // remove last lement
        // heapifyDown take root and its children which is minimum swap with root node

        let data = this.arr[0]

        if(this.arr.length == 1){
            return this.arr.pop()
        }

        this.arr[0] = this.arr.pop()

        this.heapifyDown()

        return data
    }

    heapifyDown(){
        let index = 0

        while(this.hasLeftchild(index)){
            let smallerIndex = this.getLeftChildIndex(index)

            if(this.hasRightchild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerIndex = this.getRightChildIndex(index)
            }

            if(this.arr[index] <= this.arr[smallerIndex]){
                break
            }

            this.swap(index,smallerIndex)

            index = smallerIndex
        }
    }


}

let heap = new MinHeap()

heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(2)

console.log(heap.arr)