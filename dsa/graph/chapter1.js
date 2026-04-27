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

    addVertexArray(vertex){
        if(!this.arrayGraph[vertex]){
            this.arrayGraph[vertex] = []   
        }
    }

    addEdgeArray(vertex1,vertex2,weight){
        if(!this.arrayGraph[vertex1]){
            this.addVertexArray(vertex1)
        }

        if(!this.arrayGraph[vertex2]){
            this.addVertexArray(vertex2)
        }

        this.arrayGraph[vertex1].push({node:vertex2,weight})
        this.arrayGraph[vertex2].push({node:vertex1,weight})
    }

    BFSArray(startingPoint){
        if(!this.arrayGraph[startingPoint]){
            return
        }

        let queue = []
        let visitedNode = new Set()
        queue.push(startingPoint)
        visitedNode.add(startingPoint)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr)
            for(let val of this.arrayGraph[curr]){
                let {node} = val
                if(!visitedNode.has(node)){
                    visitedNode.add(node)
                    queue.push(node)
                }
            }
        }
    }

    BFSMap(startingPoint){
        if(!this.mapGraph[startingPoint]){
            return
        }
        let queue = []
        let visitedNode = new Set()

        queue.push(startingPoint)
        visitedNode.add(startingPoint)

        while(queue.length){
            let cur = queue.shift()
            console.log(cur)

            for(let [node,weight] of this.mapGraph[cur]){
                if(!visitedNode.has(node)){
                    visitedNode.add(node)
                    queue.push(node)
                }
            }
        }
    }

    DFSArray(startingPoint,visitedNode = new Set()){
        if(!this.arrayGraph[startingPoint]){
            return
        }
        visitedNode.add(startingPoint)

        console.log(startingPoint)

        for(let neighbor of this.arrayGraph[startingPoint]){
            let {node} = neighbor
            if(!visitedNode.has(node)){
                this.DFSArray(node,visitedNode)
            }
        }
    }

    DFSMap(startingPoint,visitedNode=new Set()){
        if(!this.mapGraph[startingPoint]){
            return
        }
        visitedNode.add(startingPoint)
        console.log(startingPoint)
        for(let [node,weight] of this.mapGraph[startingPoint]){
            if(!visitedNode.has(node)){  
                this.DFSMap(node,visitedNode)
            }
        }
    }

    hasPathArray(src,des,visitedNode = new Set()){
        if(src == des){
            return true
        }

        if(!this.arrayGraph[src]){
            return false
        }


        visitedNode.add(src)

        for(let {node} of this.arrayGraph[src]){
            if(!visitedNode.has(node) && this.hasPathArray(node,des,visitedNode)){
                return true
            }
        }

        return false
    }

    hasPathMap(src,des,visitedNode= new Set()){
        if(src == des){
            return true
        }

        if(!this.mapGraph[src]){
            return false
        }


        visitedNode.add(src)

        for(let [neighbor] of this.mapGraph[src]){
            if(!visitedNode.has(neighbor) && this.hasPathMap(neighbor,des,visitedNode)){
                return true
            }
        }

        return false
    }
} 

const g = new Graph()

// Array Graph
g.addEdgeArray(1, 2, 10)
g.addEdgeArray(1, 3, 5)
g.addEdgeArray(2, 4, 2)

// Map Graph
g.addEdge(1, 2, 10)
g.addEdge(1, 3, 5)
g.addEdge(2, 4, 2)

// Isolated node
g.addVertexArray(5)
g.addVertex(5)

g.BFSArray(1)

g.BFSMap(1)

g.DFSArray(1)

g.DFSMap(1)

console.log(g.hasPathArray(1, 4)) // true
console.log(g.hasPathArray(3, 4)) // true
console.log(g.hasPathArray(4, 5)) // false
console.log(g.hasPathArray(5, 5)) // true

console.log(g.hasPathMap(1, 4)) // true
console.log(g.hasPathMap(3, 4)) // true
console.log(g.hasPathMap(4, 5)) // false
console.log(g.hasPathMap(5, 5)) // true