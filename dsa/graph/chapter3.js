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

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
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

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.heap[0]
    }

    push(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1

        while(this.hasParent(index) && this.getParent(index).dist > this.heap[index].dist){
            let parentIndex = this.getParentIndex(index)
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }

    remove(){
        if(this.isEmpty()){
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

            if(this.hasRightChild(index) && this.getRightChild(index).dist < this.getLeftChild(index).dist){
                smallerIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index].dist <= this.heap[smallerIndex].dist){
                break
            }

            this.swap(index,smallerIndex)

            index = smallerIndex
        }
    }
}

class Graph{
    constructor(){
        this.arrayGraph = {}
        this.mapGraph = {}
    }

    addVertex(vertex){
        if(!this.mapGraph[vertex]){
            this.mapGraph[vertex] = new Map()
        }
    }

    addEdges(vertex1,vertex2,weight){
        if(!this.mapGraph[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.mapGraph[vertex2]){
            this.addVertex(vertex2)
        }

        this.mapGraph[vertex1].set(vertex2,weight)
        this.mapGraph[vertex2].set(vertex1,weight)
    }

    addDirectedEdge(vertex1,vertex2,weight){
        if(!this.mapGraph[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.mapGraph[vertex2]){
            this.addVertex(vertex2)
        }

        this.mapGraph[vertex1].set(vertex2,weight)
    }

    addArrayVertex(vertex){
        if(!this.arrayGraph[vertex]){
            this.arrayGraph[vertex] = []
        }
    }

    addArrayEdge(vertex1,vertex2,weight){
        if(!this.arrayGraph[vertex1]){
            this.addArrayVertex(vertex1)
        }

        if(!this.arrayGraph[vertex2]){
            this.addArrayVertex(vertex2)
        }

        this.arrayGraph[vertex1].push({node:vertex2,weight})
        this.arrayGraph[vertex2].push({node:vertex1,weight})
    }

    addArrDirectedEdge(vertex1,vertex2,weight){
        if(!this.arrayGraph[vertex1]){
            this.addArrayVertex(vertex1)
        }

        if(!this.arrayGraph[vertex2]){
            this.addArrayVertex(vertex2)
        }

        this.arrayGraph[vertex1].push({node:vertex2,weight})
    }

    topologicalSort(){
        let indegree = {}
        let result = []
        let queue  = []

        for(let vertex in this.arrayGraph){
            indegree[vertex] = 0
        }

        for(let vertex in this.arrayGraph){
            for(let neighbor of this.arrayGraph[vertex]){
                indegree[neighbor.node]++
            }
        }

        for(let node in indegree){
            if(indegree[node] == 0){
                queue.push(node)
            }
        }

        while(queue.length){
            let cur = queue.shift()
            result.push(cur)

            for(let neighbor of this.arrayGraph[cur]){
                indegree[neighbor.node]--
                if(indegree[neighbor.node] == 0){
                    queue.push(neighbor.node)
                }
            }
        }

        if(result.length  != Object.keys(this.arrayGraph).length){
            return 'cycle detected'
        }

        return result
    }

    pathFromSrcToDestination(src,des,path=[],temp='',visited = new Set()){
        if(visited.has(src)){
            return
        }

        visited.add(src)
        temp += src

        if(src == des){
            path.push(temp)
            visited.delete(src)
            return
        }
        else{
            for(let neighbor of this.arrayGraph[src]){
                this.pathFromSrcToDestination(neighbor.node,des,path,temp,visited)
            }
        }

        visited.delete(src)

        return path
    }

    dijkstra(src){
        let distance = {}
        let visited = new Set()

        for(let vertex in this.arrayGraph){
            distance[vertex] = Infinity
        }

        distance[src] = 0

        for(let i=0;i<Object.keys(this.arrayGraph).length;i++){
            let minNode = null
            let minDistance = Infinity

            for(let node in distance){
                if(!visited.has(node) && distance[node] < minDistance){
                    minNode =  node
                    minDistance = distance[node]
                }
            }

            if(minNode == null){
                break
            }

            visited.add(minNode)

            for(let neighbor of this.arrayGraph[minNode]){
                let newDistance = distance[minNode] + neighbor.weight

                if(newDistance < distance[neighbor.node]){
                    distance[neighbor.node] = newDistance
                }
            }
        }

        return distance
    }

    dijkstraUsingMinHeap(src){
        let distance = {}

        for(let vertex in this.arrayGraph){
            distance[vertex] = Infinity
        }

        distance[src] = 0

        let pq = new MinHeap()
        pq.push({node:src,dist:0})

        while(!pq.isEmpty()){
            let {node,dist} = pq.remove()

            if(dist > distance[node]){
                continue
            }

            for(let neighbor of this.arrayGraph[node]){
                let newDist = dist+neighbor.weight

                if(newDist < distance[neighbor.node]){
                    distance[neighbor.node] = newDist
                    pq.push({node:neighbor.node,dist:newDist})
                }
            }
        }
        return distance
    }
}

const g = new Graph()

// g.addArrDirectedEdge('A','B')
// g.addArrDirectedEdge('A','C')
// g.addArrDirectedEdge('B','D')
// g.addArrDirectedEdge('C','D')

// console.log(g.topologicalSort())
// console.log(g.pathFromSrcToDestination('A','D'))

g.addArrDirectedEdge('A','B',1)
g.addArrDirectedEdge('A','C',4)
g.addArrDirectedEdge('B','D',2)
g.addArrDirectedEdge('C','D',1)

// console.log(g.dijkstra('A'))

// console.log(g.dijkstraUsingMinHeap('A'))