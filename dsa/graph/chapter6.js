class Graph {
  constructor() {
    this.arrayGraph = {};
    this.mapGraph = {};
  }

  // ---------------- MAP GRAPH ----------------
  addVertex(v) {
    if (!this.mapGraph[v]) {
      this.mapGraph[v] = new Set();
    }
  }

  addEdge(v1, v2) {
    if (!this.mapGraph[v1]) this.addVertex(v1);
    if (!this.mapGraph[v2]) this.addVertex(v2);

    this.mapGraph[v1].add(v2);
    this.mapGraph[v2].add(v1);
  }

  addDirectedEdgeMap(v1, v2) {
    if (!this.mapGraph[v1]) this.addVertex(v1);
    if (!this.mapGraph[v2]) this.addVertex(v2);

    this.mapGraph[v1].add(v2);
  }

  // ---------------- ARRAY GRAPH ----------------
  addVertexArr(v) {
    if (!this.arrayGraph[v]) {
      this.arrayGraph[v] = [];
    }
  }

  addEdgeArr(v1, v2, weight = 1) {
    if (!this.arrayGraph[v1]) this.addVertexArr(v1);
    if (!this.arrayGraph[v2]) this.addVertexArr(v2);

    this.arrayGraph[v1].push({ node: v2, weight });
    this.arrayGraph[v2].push({ node: v1, weight });
  }

  addDirectedEdgeArr(v1, v2, weight = 1) {
    if (!this.arrayGraph[v1]) this.addVertexArr(v1);
    if (!this.arrayGraph[v2]) this.addVertexArr(v2);

    this.arrayGraph[v1].push({ node: v2, weight });
  }

  // ---------------- KOSARAJU ALGORITHM ----------------
  kosarajuAlgo() {
    let stack = [];
    let visited = new Set();

    // STEP 1: Fill stack according to finishing times
    const fillOrder = (node) => {
      visited.add(node);

      for (let neighbor of this.arrayGraph[node] || []) {
        if (!visited.has(neighbor.node)) {
          fillOrder(neighbor.node);
        }
      }

      stack.push(node);
    };

    for (let node in this.arrayGraph) {
      let numNode = Number(node);
      if (!visited.has(numNode)) {
        fillOrder(numNode);
      }
    }

    // STEP 2: Create transpose graph
    let transposeGraph = new Graph();

    for (let node in this.arrayGraph) {
      for (let neighbor of this.arrayGraph[node]) {
        transposeGraph.addDirectedEdgeArr(
          neighbor.node,
          Number(node),
          neighbor.weight,
        );
      }
    }

    // STEP 3: DFS on transpose graph
    visited = new Set();

    const dfsTranspose = (node) => {
      visited.add(node);
      process.stdout.write(node + " ");

      for (let neighbor of transposeGraph.arrayGraph[node] || []) {
        if (!visited.has(neighbor.node)) {
          dfsTranspose(neighbor.node);
        }
      }
    };

    console.log("Strongly Connected Components:");

    while (stack.length > 0) {
      let node = stack.pop();

      if (!visited.has(node)) {
        dfsTranspose(node);
        console.log("\nSCC END");
      }
    }
  }

  dfs(graph, cur, parent, dt, low, visited, time) {
    visited.add(cur);
    dt[cur] = low[cur] = ++time.value;

    for (let n of graph[cur]) {
      let neighbor = n.node;
      if (neighbor == parent) {
        continue;
      } else if (!visited.has(neighbor)) {
        this.dfs(graph, neighbor, cur, dt, low, visited, time);
        low[cur] = Math.min(low[cur], low[neighbor]);
        if (dt[cur] < low[neighbor]) {
          console.log(`Bridge:${cur}------>${neighbor}`);
        }
      } else {
        low[cur] = Math.min(low[cur], dt[neighbor]);
      }
    }
  }

  findBridgeUsingTarjansAlgo() {
    let dt = [];
    let low = [];
    let visited = new Set();
    let time = { value: 0 };

    for (let node in this.arrayGraph) {
      if (!visited.has(node)) {
        this.dfs(this.arrayGraph, node, -1, dt, low, visited, time);
      }
    }
  }

  dfsAp(graph,cur,parent,dt,low,visited,time,ap){
    visited.add(cur)

    dt[cur] = low[cur] = ++time.value
    let children = 0
    for(let n of graph[cur]){
      let neighbor = n.node
      if(neighbor == parent){
        continue
      }
      else if(visited.has(neighbor)){
        low[cur] = Math.min(low[cur],dt[neighbor])
      }
      else{
        this.dfsAp(graph,neighbor,cur,dt,low,visited,time,ap)
        low[cur] = Math.min(low[cur],low[neighbor])
        if(parent != -1 && dt[cur] <= low[neighbor]){
          ap.add(cur)
        }
        children++
      }
    }

    if(parent == -1 && children > 1){
      ap.add(cur)
    }
  }

  articulationPoint(){
    let dt = []
    let low = []
    let visited = new Set()
    let time = {value:0}
    let ap = new Set()

    for(let node in this.arrayGraph){
      if(!visited.has(node)){
        this.dfsAp(this.arrayGraph,node,-1,dt,low,visited,time,ap)
      }
    }

    for(let val of ap){
      console.log(`articulation point->${val}`)
    }
  }
}

let g = new Graph();

g.addDirectedEdgeArr(0, 1);
g.addDirectedEdgeArr(1, 2);
g.addDirectedEdgeArr(2, 0);
g.addDirectedEdgeArr(1, 3);
g.addDirectedEdgeArr(3, 4);

g.kosarajuAlgo();

let bridgeGraph = new Graph();

bridgeGraph.addEdgeArr(0, 1);
bridgeGraph.addEdgeArr(1, 2);
bridgeGraph.addEdgeArr(2, 0);
bridgeGraph.addEdgeArr(1, 3);
bridgeGraph.addEdgeArr(3, 4);

bridgeGraph.findBridgeUsingTarjansAlgo();

let apGraph = new Graph();

apGraph.addEdgeArr(0, 1);
apGraph.addEdgeArr(1, 2);
apGraph.addEdgeArr(2, 0);
apGraph.addEdgeArr(1, 3);
apGraph.addEdgeArr(3, 4);

apGraph.articulationPoint();