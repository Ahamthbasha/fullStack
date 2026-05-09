class Graph {
  constructor() {
    this.arrayGraph = {};
    this.mapGraph = {};
  }

  addVertex(v) {
    if (!this.mapGraph[v]) {
      this.mapGraph[v] = new Set();
    }
  }

  addEdge(v1, v2, weight) {
    if (!this.mapGraph[v1]) {
      this.addVertex(v1);
    }

    if (!this.mapGraph[v2]) {
      this.addVertex(v2);
    }

    this.mapGraph[v1].add(v2, weight);
    this.mapGraph[v2].add(v1, weight);
  }

  addVertexArr(v) {
    if (!this.arrayGraph[v]) {
      this.arrayGraph[v] = [];
    }
  }

  addEdgeArr(v1, v2, weight) {
    if (!this.arrayGraph[v1]) {
      this.addVertexArr(v1);
    }

    if (!this.arrayGraph[v2]) {
      this.addVertexArr(v2);
    }

    this.arrayGraph[v1].push({ node: v2, weight });
    this.arrayGraph[v2].push({ node: v1, weight });
  }

  addDirectedEdgeMap(v1, v2, weight) {
    if (!this.mapGraph[v1]) {
      this.addVertex(v1);
    }

    if (!this.mapGraph[v2]) {
      this.addVertex(v2);
    }

    this.mapGraph[v1].add(v2, weight);
  }

  addDirectedEdgeArr(v1, v2, weight) {
    if (!this.arrayGraph[v1]) {
      this.addVertexArr(v1);
    }

    if (!this.arrayGraph[v2]) {
      this.addVertexArr(v2);
    }

    this.arrayGraph[v1].push({ node: v2, weight });
  }

  kosarajuAlgo() {
    let stack = [];
    let visited = new Set();

    //step1
    const fillOrder=(node)=>{
      visited.add(String(node));
      for (let v of this.arrayGraph[node]) {
        if(!visited.has(String(v.node))){
            fillOrder(String(v.node));
        }
      }
      stack.push(node);
    }

    for(let n in this.arrayGraph){
        if(!visited.has(n)){
            fillOrder(n)
        }
    }

    //create a graph with transpose
    let transposeGraph = new Graph();

    for (let node in this.arrayGraph) {
      for (let v of this.arrayGraph[node]) {
        transposeGraph.addDirectedEdgeArr(v.node, node);
      }
    }

    //dfs

    const dfs = (node)=>{
        visited.add(String(node))
        console.log(node)

        if(!transposeGraph.arrayGraph[node]){
            return
        }

        for(let n of transposeGraph.arrayGraph[node]){
            if(!visited.has(String(n.node))){
                dfs(String(n.node))
            }
        }
    }

    visited = new Set()

    while(stack.length > 0){
        let node = stack.pop()

        if(!visited.has(node)){
            dfs(node)
            console.log('src end')
        }
    }
  }
}


let g = new Graph();

g.addDirectedEdgeArr(0,1);
g.addDirectedEdgeArr(1,2);
g.addDirectedEdgeArr(2,0);
g.addDirectedEdgeArr(1,3);
g.addDirectedEdgeArr(3,4);

g.kosarajuAlgo();