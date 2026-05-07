class Graph{
    constructor(){
        this.arrayGraph = {}
        this.mapGraph = {}
    }

    addVertex(vertex){
        if(!this.mapGraph[vertex]){
            this.arrayGraph[vertex] = new Map()
        }
    }

    addEdge(v1,v2,weight){
        if(!this.mapGraph[v1]){
            this.addVertex(v1)
        }

        if(!this.mapGraph[v2]){
            this.addVertex(v2)
        }

        this.mapGraph[v1].set(v2,weight)
        this.mapGraph[v2].set(v1,weight)
    }

    addVertexArr(vertex){
        if(!this.arrayGraph[vertex]){
            this.arrayGraph[vertex] = []
        }
    }

    addEdgeArr(v1,v2,weight){
        if(!this.arrayGraph[v1]){
            this.addVertexArr(v1)
        }

        if(!this.arrayGraph[v2]){
            this.addVertexArr(v2)
        }

        this.addVertexArr[v1].push({node:v2,weight})
        this.addVertexArr[v2].push({node:v1,weight})
    }

    addDirectedEdgeMap(v1,v2,weight){
        if(!this.mapGraph[v1]){
            this.addVertex(v1)
        }

        if(!this.mapGraph[v2]){
            this.addVertex(v2)
        }

        this.mapGraph[v1].set(v2,weight)
    }

    addDirectedEdgeArray(v1,v2,weight){
        if(!this.arrayGraph[v1]){
            this.arrayGraph[v1]
        }

        if(!this.arrayGraph[v2]){
            this.arrayGraph[v2]
        }

        this.arrayGraph[v1].push({node:v2,weight})
    }

    chepestFlight(flight,src,des,k){
        for(let [from,to,price] of flight){
            this.addDirectedEdgeArray(from,to,price)
        }

        let q = [[src,0,0]]

        let minCost = Infinity

        while(q.length){
            let cur = q.remove()
            
        }
    }
}

const n = 4
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
const src = 0
const dest = 3
const k = 1
