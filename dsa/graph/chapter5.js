class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  getLeftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  getRightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftchild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightchild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      this.hasParent(index) &&
      this.getParent(index).cost > this.heap[index].cost
    ) {
      let parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length == 0) {
      return null;
    }

    if (this.heap.length == 1) {
      return this.heap[0];
    }

    let temp = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return temp;
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftchild(index)) {
      let smallerIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightchild(index) &&
        this.getRightChild(index).cost < this.getLeftChild(index).cost
      ) {
        smallerIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].cost <= this.heap[smallerIndex].cost) {
        break;
      } else {
        this.swap(index, smallerIndex);
      }

      index = smallerIndex;
    }
  }
}

class Graph {
  constructor() {
    this.arrayGraph = {};
    this.mapGraph = {};
  }

  addVertex(vertex) {
    if (!this.mapGraph[vertex]) {
      this.mapGraph[vertex] = new Map();
    }
  }

  addEdge(v1, v2, weight) {
    if (!this.mapGraph[v1]) {
      this.addVertex(v1);
    }

    if (!this.mapGraph[v2]) {
      this.addVertex(v2);
    }

    this.mapGraph[v1].set(v2, weight);
    this.mapGraph[v2].set(v1, weight);
  }

  addVertexArr(vertex) {
    if (!this.arrayGraph[vertex]) {
      this.arrayGraph[vertex] = [];
    }
  }

  addEdgeArr(v1, v2, weight) {
    if (!this.arrayGraph[v1]) {
      this.addVertexArr(v1);
    }

    if (!this.arrayGraph[v2]) {
      this.addVertexArr(v2);
    }

    this.addVertexArr[v1].push({ node: v2, weight });
    this.addVertexArr[v2].push({ node: v1, weight });
  }

  addDirectedEdgeMap(v1, v2, weight) {
    if (!this.mapGraph[v1]) {
      this.addVertex(v1);
    }

    if (!this.mapGraph[v2]) {
      this.addVertex(v2);
    }

    this.mapGraph[v1].set(v2, weight);
  }

  addDirectedEdgeArray(v1, v2, weight) {
    if (!this.arrayGraph[v1]) {
      this.addVertexArr(v1);
    }

    if (!this.arrayGraph[v2]) {
      this.addVertexArr(v2);
    }

    this.arrayGraph[v1].push({ node: v2, weight });
  }

  cheapestFlight(flight, src, des, k) {
    //build the graph
    for (let [from, to, price] of flight) {
      this.addDirectedEdgeArray(from, to, price);
    }

    let q = [[src, 0, 0]];

    let minCost = Infinity;

    while (q.length) {
      let [node, cost, stop] = q.shift();

      if (stop > k + 1) {
        continue;
      }

      if (node == des) {
        minCost = Math.min(minCost, cost);
      }

      for (let neighbor of this.arrayGraph[node]) {
        let nxtNode = neighbor.node;
        let nxtCost = neighbor.weight;

        if (cost + nxtCost < minCost) {
          q.push([nxtNode, cost + nxtCost, stop + 1]);
        }
      }
    }

    return minCost == Infinity ? -1 : minCost;
  }

  connectingCities(cities) {
    for (let i = 0; i < cities.length; i++) {
      for (let j = 0; j < cities[i].length; j++) {
        if (cities[i][j] != 0) {
          this.addDirectedEdgeArray(i, j, cities[i][j]);
        }
      }
    }

    let visited = new Set();
    let minHeap = new MinHeap();
    minHeap.insert({ node: 0, cost: 0 });
    let finalCost = 0;

    while (!minHeap.isEmpty()) {
      let { node, cost } = minHeap.remove();

      if (visited.has(node)) {
        continue;
      }

      visited.add(node);
      finalCost += cost;

      for (let neighbor of this.arrayGraph[node]) {
        if (!visited.has(neighbor.node)) {
          minHeap.insert({
            node: neighbor.node,
            cost: neighbor.weight,
          });
        }
      }
    }

    return finalCost
  }

  markSet(n){
    this.parent = []
    this.rank = []

    for(let i=0;i<n;i++){
        this.parent[i] = i
        this.rank[i] = 0
    }
  }

  find(a){
        if(a == this.parent[a]){
            return a
        }
        //path compression
        this.parent[a] = this.find(this.parent[a])
        
        return this.parent[a]
  }

  union(a,b){

    let parentA = this.find(a)
    let parentB = this.find(b)

    if(this.rank[parentA] == this.rank[parentB]){
        this.parent[parentB] = parentA
        this.rank[parentA]++
    } 
    else if(this.rank[parentA] < this.rank[parentB]){
        this.parent[parentA] = parentB
    }
    else{
        this.parent[parentB] = parentA
    }
  }

  kruskalsAlgo(graphs,v){
    for(let [src,des,cost] of graphs){
        this.addDirectedEdgeArray(src,des,cost)
    }

    let graphsSortedEdge = []
   
    for(let n in this.arrayGraph){
        for(let val of this.arrayGraph[n]){
            graphsSortedEdge.push([n,val.node,val.weight])
        }
    }

    graphsSortedEdge.sort((a,b)=>a[2] - b[2])

    this.markSet(v)

    let count = 0
    let minCost = 0
    for(let i=0;i<graphsSortedEdge.length && count<v-1;i++){
        let src =graphsSortedEdge[i][0] 
        let des = graphsSortedEdge[i][1]
        let cost = graphsSortedEdge[i][2]

        if(this.find(src) != this.find(des)){
            minCost += cost
            this.union(src,des)
            count++
        }
    }
    return minCost
  }

  floodFillAlgoHelper(images,sr,sc,color,visited,originalColor){
    if(sr < 0 || sc < 0 || sr >= images.length || sc >= images[0].length || visited.has(`${sr},${sc}`) || images[sr][sc] != originalColor){
        return
    }

    visited.add(`${sr},${sc}`)

    images[sr][sc] = color

    //left
    this.floodFillAlgoHelper(images,sr,sc-1,color,visited,originalColor)
    //right
    this.floodFillAlgoHelper(images,sr,sc+1,color,visited,originalColor)
    //up
    this.floodFillAlgoHelper(images,sr-1,sc,color,visited,originalColor)
    //down
    this.floodFillAlgoHelper(images,sr+1,sc,color,visited,originalColor)
  }

  floodFillAlgo(images,sr,sc,color){
    let visited = new Set()
    let originalColor = images[sr][sc]

    if(originalColor == color){
        return images
    }

    this.floodFillAlgoHelper(images,sr,sc,color,visited,originalColor)
    return images
  }
}

// const n = 4;
// const flights = [
//   [0, 1, 100],
//   [1, 2, 100],
//   [2, 0, 100],
//   [1, 3, 600],
//   [2, 3, 200],
// ];
// const src = 0;
// const dest = 3;
// const k = 1;
const g = new Graph();
// console.log(g.cheapestFlight(flights, src, dest, k));

// const cities = [
//   [0, 1, 2, 3, 4],
//   [1, 0, 5, 0, 7],
//   [2, 5, 0, 6, 0],
//   [3, 0, 6, 0, 0],
//   [4, 7, 0, 0, 0],
// ];
// console.log(g.connectingCities(cities));


// g.markSet(5)

// g.union(0,1)
// g.union(1,2)

// console.log(g.find(0))
// console.log(g.find(2))

const graphs = [
  [0,1,10],
  [0,2,15],
  [0,3,30],
  [1,3,40],
  [2,3,50]
]

console.log(g.kruskalsAlgo(graphs,4))

const image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
];

console.log(g.floodFillAlgo(image,1,1,2));