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

    addEdges(v1,v2,weight){
        if(!this.mapGraph[v1]){
            this.addVertex(v1)
        }

        if(!this.mapGraph[v2]){
            this.addVertex(v2)
        }

        this.mapGraph[v1].set(v2,weight)
        this.mapGraph[v2].set(v1,weight)
    }

    addDirectArrayEdge(vertex1,vertex2,weight){
        if(!this.arrayGraph[vertex1]){
            this.addVertexArr(vertex1)
        }

        if(!this.arrayGraph[vertex2]){
            this.addVertexArr(vertex2)
        }

        this.arrayGraph[vertex1].push({node:vertex2,weight})
    }

    addVertexArr(vertex){
        if(!this.arrayGraph[vertex]){
            this.arrayGraph[vertex] = []
        }
    }

    addEdgesArr(v1,v2,weight){
        if(!this.arrayGraph[v1]){
            this.addVertexArr(v1)
        }

        if(!this.arrayGraph[v2]){
            this.addVertexArr(v2)
        }

        this.arrayGraph[v1].push({node:v2,weight})
        this.arrayGraph[v2].push({node:v1,weight})
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

    connectedComponentBFSArray(){
        let component = []
        let visitedNode = new Set()

        for(let vertex in this.arrayGraph){
            if(!visitedNode.has(vertex)){
                visitedNode.add(vertex)
                let currentComponent = []
                let queue = []
                queue.push(vertex)

                while(queue.length){
                    let cur = queue.shift()
                    currentComponent.push(cur)
                    for(let neighbor of this.arrayGraph[cur]){
                        const {node} = neighbor
                        if(!visitedNode.has(node)){
                            visitedNode.add(node)
                            queue.push(node)
                        }
                    }
                }
                component.push(currentComponent)
            }
        }

        return component
    }

    connectedComponetBFSMap(){
        let component = []
        let visitedNode = new Set()

        for(let vertex in this.mapGraph){
            if(!visitedNode.has(vertex)){
                let queue = []
                let currentComponent = []
                queue.push(vertex)
                visitedNode.add(vertex)

                while(queue.length){
                    let cur = queue.shift()
                    currentComponent.push(cur)

                    for(let [neighbor,weight] of this.mapGraph[cur]){
                        if(!visitedNode.has(neighbor)){
                            visitedNode.add(neighbor)
                            queue.push(neighbor)
                        }
                    }
                }
                component.push(currentComponent)
            }
        }
        return component
    }

    connectedComponentDFSArray(){
        let visitedNode = new Set()
        let component = []
        for(let vertex in this.arrayGraph){
            if(!visitedNode.has(vertex)){
                let currentComponent = []
                
                const dfs = (node)=>{
                    visitedNode.add(node)
                    currentComponent.push(node)
                    for(let neighbor of this.arrayGraph[node]){
                        let {node:nextNode} = neighbor
                        if(!visitedNode.has(nextNode)){
                            dfs(nextNode)
                        }
                    }
                }
                dfs(vertex)
                component.push(currentComponent)
            }
        }
        return component
    }

    connectComponentDFSMap(){
        let visistedNode = new Set()
        let component = []

        for(let vertex in this.mapGraph){
            if(!visistedNode.has(vertex)){
                let currentComponent = []
                const dfs = (node)=>{
                    visistedNode.add(node)
                    currentComponent.push(node)

                    for(let [neighbor] of this.mapGraph[node]){
                        if(!visistedNode.has(neighbor)){
                            dfs(neighbor)
                        }
                    }
                }
                dfs(vertex)
                component.push(currentComponent)
            }
        }
        return component
    }

    detectCycleDfs(){
        let visistedNode = new Set()

        for(let vertex in this.arrayGraph){
            if(!visistedNode.has(vertex)){
                if(this.detectCycleUtil(visistedNode,vertex,null)){
                    return true
                }
            }
        }

        return false
    }

    detectCycleUtil(visitedNode,node,parent){
        visitedNode.add(node)

        for(let {neighbor} of this.arrayGraph[node]){
            if(!visitedNode.has(neighbor)){
                if(this.detectCycleUtil(visitedNode,neighbor,node)){
                    return true
                }
            }
            else if(neighbor != parent){
                return true
            }
        } 
        return false
    }

    isBiPartite(){
        let color = {}

        for(let vertex in this.arrayGraph){
            if(!(vertex in color)){
                let queue = []
                queue.push(vertex)

                color[vertex] = 0

                while(queue.length){
                    let cur = queue.shift()

                    for(let neighborObj of this.arrayGraph[cur]){
                        let {node:neighbor} = neighborObj

                        if(!(neighbor in color)){
                            color[neighbor] = 1 - color[cur]
                            queue.push(neighbor)
                        }
                        else if(color[neighbor] == color[cur]){
                            return false
                        }
                    }
                }
            }
            return true
        }
    }

    directedGraphCycleDetectionDFS(){
        let visitedNode = new Set()
        let recursionStack = new Set()

        const dfsDirectCycleDetection = (node)=>{
            visitedNode.add(node)
            recursionStack.add(node)

            for(let neighborObj of this.arrayGraph[node]){
                const {node:neighbor} = neighborObj

                if(!visitedNode.has(neighbor)){
                    if(dfsDirectCycleDetection(neighbor)){
                        return true
                    }
                }
                else if(recursionStack.has(neighbor)){
                    return true
                }
            }
            recursionStack.delete(node)
            return false
        }

        for(let vertex in this.arrayGraph){
            if(!visitedNode.has(vertex)){
            if(dfsDirectCycleDetection(vertex)){
                return true
            }
            }
        }
        
        return false
    }

    topologicalSort(){
        let visitedNode = new Set()
        let stack = []

        const dfsUtil = (visitedNode,stack,node)=>{
            visitedNode.add(node)

            for(let neighborObj of this.arrayGraph[node]){
                const {node:neighbor} = neighborObj
                if(!visitedNode.has(neighbor)){
                    dfsUtil(visitedNode,stack,neighbor)
                }
            }

            stack.push(node)
        }

        for(let vertex in this.arrayGraph){
            if(!visitedNode.has(vertex)){
                dfsUtil(visitedNode,stack,vertex)
            }
        }

        return stack.reverse()

    }
}

const g = new Graph()

// ======================
// ARRAY GRAPH
// ======================
g.addEdgesArr("A", "B", 1)
g.addEdgesArr("A", "C", 1)
g.addEdgesArr("B", "D", 1)

g.addEdgesArr("E", "F", 1)

g.addVertexArr("G") // isolated node

// ======================
// MAP GRAPH
// ======================
g.addEdges("A", "B", 1)
g.addEdges("A", "C", 1)
g.addEdges("B", "D", 1)

g.addEdges("E", "F", 1)

g.addVertex("G") // isolated node

// ======================
// BFS Traversal
// ======================
console.log("BFS Array from A:")
g.BFSArray("A")
// Expected: A B C D

console.log("BFS Map from A:")
g.BFSMap("A")
// Expected: A B C D

// ======================
// DFS Traversal
// ======================
console.log("DFS Array from A:")
g.DFSArray("A")
// Expected: A B D C (or similar valid DFS order)

console.log("DFS Map from A:")
g.DFSMap("A")
// Expected: A B D C (or similar)

// ======================
// Connected Components BFS
// ======================
console.log("Connected Components BFS Array:")
console.log(g.connectedComponentBFSArray())
// Expected:
// [
//   ['A','B','C','D'],
//   ['E','F'],
//   ['G']
// ]

console.log("Connected Components BFS Map:")
console.log(g.connectedComponetBFSMap())
// Expected:
// [
//   ['A','B','C','D'],
//   ['E','F'],
//   ['G']
// ]

// ======================
// Connected Components DFS
// ======================
console.log("Connected Components DFS Array:")
console.log(g.connectedComponentDFSArray())
// Expected:
// [
//   ['A','B','D','C'],
//   ['E','F'],
//   ['G']
// ]

console.log("Connected Components DFS Map:")
console.log(g.connectComponentDFSMap())
// Expected:
// [
//   ['A','B','D','C'],
//   ['E','F'],
//   ['G']
// ]

// ======================
// Bipartite Graph Test
// ======================
const bipartiteGraph = new Graph()

// Even cycle / valid bipartite
// A -- B
// |    |
// D -- C

bipartiteGraph.addEdgesArr("A", "B", 1)
bipartiteGraph.addEdgesArr("B", "C", 1)
bipartiteGraph.addEdgesArr("C", "D", 1)
bipartiteGraph.addEdgesArr("D", "A", 1)

console.log("Is Bipartite (Expected: true):")
console.log(bipartiteGraph.isBiPartite())

// ======================
// Non-Bipartite Graph Test
// ======================
const nonBipartiteGraph = new Graph()

// Odd cycle
// A -- B
//  \  |
//    C

nonBipartiteGraph.addEdgesArr("A", "B", 1)
nonBipartiteGraph.addEdgesArr("B", "C", 1)
nonBipartiteGraph.addEdgesArr("C", "A", 1)

console.log("Is Bipartite (Expected: false):")
console.log(nonBipartiteGraph.isBiPartite())

// ======================
// Disconnected Bipartite Graph
// ======================
const disconnectedGraph = new Graph()

disconnectedGraph.addEdgesArr("A", "B", 1)
disconnectedGraph.addEdgesArr("C", "D", 1)
disconnectedGraph.addVertexArr("E")

console.log("Disconnected Graph Bipartite (Expected: true):")
console.log(disconnectedGraph.isBiPartite())

const topoGraph = new Graph()

topoGraph.addDirectArrayEdge("A", "C", 1)
topoGraph.addDirectArrayEdge("B", "C", 1)
topoGraph.addDirectArrayEdge("C", "D", 1)
topoGraph.addDirectArrayEdge("D", "E", 1)

console.log("Topological Sort:")
console.log(topoGraph.topologicalSort())