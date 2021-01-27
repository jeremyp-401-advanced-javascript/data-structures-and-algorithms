'use strict';

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex; // A vertex
    this.weight = weight; // An array that holds all the connected verticies
  }
}

class Graph {
  constructor() {
    this.size = 0;
    this.adjacencyList = new Map();
    this.edges = 0;
  }

  // Add a new vertex to this graph
  addVertex(value) {
    // .set(key, value) puts a key/value (aka node) in the Map
    // When you add a node(vertex) for the first time, the value is an empty array because
    // it will eventually hold a list of all of the nodes that it is connected to.
    if (this.adjacencyList.has(value)) {
      throw new Error('Error: Vertex already exists', value);
    }
    this.adjacencyList.set(value, []);
    this.size++;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    // Add error checking for the start and end vertex.
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Error: Need a valid start and end vertex');
    }
    // Get the startVertex from the Map (of all verticies)
    // Push a new Edge that will connect the start to the end into the map along with the weight
    const adjList = this.adjacencyList.get(startVertex);
    adjList.push(new Edge(endVertex, weight));
    this.edges++;
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    // Add error checking for the start and end vertex.
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Error: Need a valid start and end vertex');
    }
    // Get the startVertex from the Map (of all verticies)
    // Push a new Edge that will connect the start to the end into the map along with the weight
    const adjListS = this.adjacencyList.get(startVertex);
    adjListS.push(new Edge(endVertex, weight));
    // Get the endVertex from the Map (of all verticies)
    // Push a new Edge that will connect the end to the start into the map along with the weight
    const adjListE = this.adjacencyList.get(endVertex);
    adjListE.push(new Edge(startVertex, weight));
    this.edges++;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Error: Invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }

  getNodes() {
    // Grabs the first thing in the adjacency list.
    let startNode = this.adjacencyList.keys().next().value;
    // Run a breadth first search to get a set of verticies
    let verticesSet = this.bfs(startNode);
    let verticiesArray = [];
    for (let vertex of verticesSet) {
      verticiesArray.push(vertex);
    }
    return verticiesArray;
  }

  bfsSize(startVertex) { // Returns the total number of nodes in the graph from this node.
    let numVerticies = 0;
    // Check for bad input in the arguments
    if (startVertex == null) {
      throw new Error('Error: Invalid starting vertex', startVertex);
    }
    // Checks the adjacencyList for the startNode or a adjacencyList.size greater than  0
    // If either isn't truthy throw an error.
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.size > 0) {
      throw new Error('Error: Invalid starting vertex', startVertex);
    }
    // Run a breadth first search to get a set of verticies from the start node to the end
    // then use Set.size to determine the number of verticies
    numVerticies = this.bfs(startVertex).size;
    // Finally return the number of verticies
    return numVerticies;
  }
  adjListSize() { // Returns the total number of nodes in the graph
    // Use Map.size to determine the number of verticies
    let numVerticies = this.adjacencyList.size;
    // console.log(`adjListSize:`, numVerticies);
    // Finally return the number of verticies
    return numVerticies;
  }
  propSize() { // Returns the total number of nodes in the graph
    // Uses the constructor's size property (which is updated when adding a node)
    return this.size;
  }

  bfs(startVertex) {
    const queue = [];
    // Add error checking for the startVertex argument.
    if (startVertex == null || startVertex === '') {
      throw new Error('Error: Need to call with a valid start vertex', startVertex);
    }
    // Add error checking for the start vertex.
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.size > 0) {
      throw new Error('Error: Start vertex was not found in graph');
    }
    // The visitedNodes is a set object that will only store unique keys
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      // Remove the first item from the queue
      const currentNode = queue.shift();
      // Get all the neighbors of the node that I took off of the queue
      const neighbors = this.getNeighbors(currentNode);

      // loop over all of the neighbors
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        // if the Set has the node that I'm looking for
        if (visitedNodes.has(neighborNode)) {
          // stop looking at this node and go to the next one
          continue;
        } else {
          // otherwise, I haven't been there. I need to add it to the Set
          visitedNodes.add(neighborNode);
          // put it into the queue
          queue.push(neighborNode);
        }
      }
    }
    // return the Set so I have a list of nodes of where I've been
    return visitedNodes;
  }

  dfs(startVertex) {
    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      // First things first, add the node to the Set
      visitedNodes.add(node);
      // Get all the neighbors
      const neighbors = this.getNeighbors(node);
      // Loop over those neighbors
      for (let edge of neighbors) {
        // If the set doesn't have the node...
        if (!visitedNodes.has(edge.vertex)) {
          // ...then I want to run this function again which will add it to the
          // set and get the neighbor nodes and loop and run the whole thing again...
          _traverseNeighbors(edge.vertex);
        }
      }
    };

    _traverseNeighbors(startVertex);
    return visitedNodes;
  }

  pathTo(startVertex, endVertex) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startVertex);
    visitedNodes.add(startVertex);

    while (stack.length) {
      // Remove the top/last thing from the stack
      const currentNode = stack.pop();
      // Make sure that our currentNode is not our end
      if (currentNode === endVertex) {
        return parentPath;
      }

      // Get all the neighbors
      const neighbors = this.getNeighbors(currentNode);

      // Loop over the edges
      for (let neighbor of neighbors) {
        // Find the vertex node
        const neighborNode = neighbor.vertex;
        // Check if the Set contains that node
        if (visitedNodes.has(neighborNode)) {
          // Stop looking at this node and move along
          continue;
        } else {
          // Otherwise add the node to the Set
          visitedNodes.add(neighborNode);
        }

        // Add it to the stack
        stack.push(neighborNode);
        // In the parentPath Map, set a path with this as the key and currentNode as the value
        parentPath.set(currentNode, neighborNode);
      }
    }
    return parentPath;
  }

  getEdges(routeArr) { // Create a function that accepts a 'routeArr'
    const outputObj = {}; // Create a new object to store our output
    outputObj.directConnect = false; // Initially set directConnect to false
    outputObj.totalCost = 0; // Track the total cost with totalCost

    // Add error checking for the routeArr argument.
    if (routeArr == null || routeArr[0] === '') {
      throw new Error('Error: The list of verticies is invalid', routeArr);
    }
    // Add error checking for the graph.
    if (!this.adjacencyList.size > 0) {
      throw new Error('Error: Graph is empty');
    }

    let neighbors = [];
    for (let i = 0; i < routeArr.length - 1; i++) { // While the routeArr contains nodes to visit...
      // Check to see if the currentNode is in the graph (to save time)
      if (!this.adjacencyList.has(routeArr[i])) {
        return { 'directConnect': false, 'totalCost': '$0' };
      }
      neighbors = this.getNeighbors(routeArr[i]);

      let neighborFound = false;
      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j].vertex === routeArr[i + 1]) {
          outputObj.totalCost += neighbors[j].weight;
          outputObj.directConnect = true;
          neighborFound = true;
          break;
        }
      }
      if (!neighborFound) {
        outputObj.totalCost = 0;
        outputObj.directConnect = false;
        break;
      }
    }

    outputObj.totalCost = `$${outputObj.totalCost}`; // Adding on the dollar sign
    return outputObj; // Return the outputObj
  }
}

module.exports = { Edge, Graph };
