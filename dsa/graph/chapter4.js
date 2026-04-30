class MinHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }
    
    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(this.hasParent(index) && this.getParent(index).cost > this.heap[index].cost){
            let parentIndex = this.getParentIndex(index)
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }

    remove(){
        if(this.heap.length == 0){
            return null
        }

        if(this.heap.length == 1){
            return this.heap.pop()
        }

        let data = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return data
    }

    heapifyDown(){
        let index = 0

        while(this.hasLeftChild(index)){
            let smallerIndex = this.getLeftChildIndex(index)

            if(this.hasRightChild(index) && this.getRightChild(index).cost < this.getLeftChild(index).cost){
                smallerIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index].cost <= this.heap[smallerIndex].cost){
                break
            }
            else{
                this.swap(index,smallerIndex)
            }

            index = smallerIndex
        }
    }
}

class Graph{
    constructor(){
        this.mapGraph = {}
        this.arrayGraph = {}
    }

    addVertex(vertex){
        if(!this.mapGraph[vertex]){
            this.mapGraph[vertex] = new Map()
        }
    }

    addEdge(vertex1,vertex2,weight){
        if(!this.mapGraph[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.mapGraph[vertex2]){
            this.addVertex(vertex2)
        }

        this.mapGraph[vertex1].set(vertex2,weight)
        this.mapGraph[vertex2].set(vertex1,weight)
    }

    addArrVertex(vertex){
        if(!this.arrayGraph[vertex]){
            this.arrayGraph[vertex] = []
        }
    }

    addArrEdge(v1,v2,weight){
        if(!this.arrayGraph[v1]){
            this.addArrVertex(v1)
        }

        if(!this.arrayGraph[v2]){
            this.addArrVertex(v2)
        }

        this.arrayGraph[v1].push({node:v2,weight})
        this.arrayGraph[v2].push({node:v1,weight})
    }

    addDirectedArrayEdge(v1,v2,weight){
        if(!this.arrayGraph[v1]){
            this.addArrVertex(v1)
        }

        if(!this.arrayGraph[v2]){
            this.addArrVertex(v2)
        }

        this.arrayGraph[v1].push({node:v2,weight})
    }

    addDirectedMapEdge(v1,v2,weight){
        if(!this.mapGraph[v1]){
            this.addVertex(v1)
        }

        if(!this.mapGraph[v2]){
            this.addVertex(v2)
        }

        this.mapGraph[v1].set(v2,weight)
    }

    bellmanFordAlgo(src){
        if(!this.arrayGraph[src]){
            console.log("source not found")
            return null
        }
        let distance = {}

        for(let vertex in this.arrayGraph){
            distance[vertex] = Infinity
        }

        distance[src] = 0

        let vertices = Object.keys(this.arrayGraph)

        for(let i=0;i<vertices.length-1;i++){
            let updated = false
            for(let u of vertices){
                for(let neighbor of this.arrayGraph[u]){
                    let v = neighbor.node
                    let weight = neighbor.weight

                    if( distance[u] != Infinity && distance[u]+weight < distance[v]){
                        distance[v] = distance[u] + weight
                        updated = true
                    }
                }
            }

            if(!updated){
                break
            }
        }

        for(let u of vertices){
            for(let neighbor of this.arrayGraph[u]){
                let v = neighbor.node
                let weight = neighbor.weight
                if(distance[u] != Infinity && distance[u]+weight < distance[v]){
                    console.log("negative cycle detected")
                    return
                }
            }
        }
        return distance
    }

    primsAlgo(src){
        if(!this.arrayGraph[src]){
            console.log("nothing")
            return
        }
        let minHeap = new MinHeap()
        let finalCost = 0
        let visitedNode = new Set()

        minHeap.insert({node:src,cost:0})

        while(!minHeap.isEmpty()){
            let {node,cost} = minHeap.remove()

            if(visitedNode.has(node)){
                continue
            }

            visitedNode.add(node)
            finalCost += cost

            for(let neighbor of this.arrayGraph[node]){
                if(!visitedNode.has(neighbor.node)){
                    minHeap.insert({node:neighbor.node,cost:neighbor.weight})
                }
            }
        }
        return finalCost
    }
}