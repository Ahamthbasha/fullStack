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

    heapify(i,size){
        let leftChild = 2 * i + 1
        let rightChild = 2 * i + 2
        let maxIdx = i

        if(leftChild < size && this.arr[leftChild] > this.arr[maxIdx]){
            maxIdx = leftChild
        }

        if(rightChild < size && this.arr[rightChild] > this.arr[maxIdx]){
            maxIdx = rightChild
        }

        if(maxIdx != i){
            [this.arr[i],this.arr[maxIdx]] = [this.arr[maxIdx],this.arr[i]]
            this.heapify(maxIdx,size)
        }
    }


    heapSort(arr){
        this.arr = arr

        let n = arr.length

        // build max heap

        for(let i = Math.floor(n/2); i>=0; i--){
            this.heapify(i,n)
        }

        // push largest at end

        for(let i = n - 1;i>=0;i--){
            [this.arr[i],this.arr[0]] = [this.arr[0],this.arr[i]]
            this.heapify(0,i)
        }
    }

    nearByCars(points,k){
        let result = []
        for(let val of points){
            let [x,y] = val
            result.push((x * x) + (y * y))
        }

        result.sort((a,b)=>a-b)

        console.log(result.slice(0,k))
        return result.slice(0,k)
    }

    connectNRopesGreedy(ropes){
        ropes.sort((a,b)=>a-b)

        let cost = 0

        while(ropes.length != 1){
            let first = ropes.shift()
            let second = ropes.shift()
            let sum = first + second
            cost += sum
            ropes.push(sum)
            ropes.sort((a,b)=>a-b)
        }

        return cost
    }

    connectNRopes(ropes){
        let heap = new MinHeap()

        for(let val of ropes){
            heap.insert(val)
        }

        let cost = 0

        while(heap.arr.length > 1){
            let first = heap.delete()
            let second = heap.delete()
            cost += first + second
            heap.insert(first+second)
        }

        return cost
    }

    weakestSoldier(arr,k){

        let heap = new MinHeap()

        for(let i=0;i<arr.length;i++){
            let count = 0
            for(let j = 0;j<arr[i].length;j++){
                count += arr[i][j] == 1 ? 1 : 0
            }

            heap.insert([count,i])
        }

        let result = []

        for(let i=0;i<k;i++){
            let [soldier,i] = heap.delete()
            result.push(i)
        }

        return result
    }

    slidingWindowMaximum(arr,k){
         let result = []

         for(let i=0;i<arr.length;i++){
            let temp = []
            for(let j=i;j<i+k;j++){
                if(arr[j] != undefined){
                    temp.push(arr[j])
                }
            }

            if(temp.length >= k){                
                result.push(Math.max(...temp))
            }
         }

         return result
    }
}

let heap = new MinHeap()

// heap.insert(10)
// heap.insert(5)
// heap.insert(15)
// heap.insert(2)

// console.log(heap.arr)

// let arr = [1,2,4,5,3]

// heap.heapSort(arr)

// console.log(heap.arr)

// console.log(heap.nearByCars([[3,3],[5,-1],[-2,4]],2))   

// console.log(heap.connectNRopes([4,3,2,6]))

// let arr = [
//     [1,0,0,0],
//     [1,1,1,1],
//     [1,0,0,0],
//     [1,0,0,0,]
// ]

// console.log(heap.weakestSoldier(arr,2))

console.log(heap.slidingWindowMaximum([1,3,-1,-3,5,3,6,7],3))