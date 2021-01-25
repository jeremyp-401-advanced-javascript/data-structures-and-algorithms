'use strict';

// Require our linked list class
const { Edge, Graph } = require('../graph');

// Write tests to prove the following functionality:

// - [X] An empty graph properly returns null
// - [X] Adding an existing vertex throws an error
// - [X] Calling getNeighbors on an empty graph throws an error
// - [X] Calling addDirectedEdge with invalid verticies throws an error
// - [X] Calling bfsSize with invalid vertex throws an error
// - [X] Calling bfs on an empty graph throws an error
// - [X] Calling dfs on an empty graph throws an error
// - [X] A vertex can be successfully added to the graph
// - [X] An edge can be successfully added to the graph
// - [X] A collection of all nodes can be properly retrieved from the graph
// - [X] All appropriate neighbors can be retrieved from the graph with the weight between nodes included
// - [X] The proper size is returned (using bfsSize, adjListSize and propSize), representing the number of nodes in the graph
// - [X] A graph with only one node and edge can be properly returned
// - [X] Calling bfs (breadth first search) returns expected output
// - [X] Calling dfs (depth first search) returns expected output
// - [X] Calling pathTo to returns expected output


describe('Graph', () => {
  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(() => {graph.bfsSize();}).toThrowError('Error: Invalid starting vertex');
    expect(graph.adjListSize()).toBe(0);
    expect(graph.propSize()).toBe(0);
    expect(graph.adjacencyList).toMatchObject({});
  });
  it('Adding an existing vertex throws an error', () => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(() => {
      graph.addVertex('A');
    }).toThrowError('Error: Vertex already exists');
  });
  it('Calling getNeighbors on an empty graph throws an error', () => {
    const graph = new Graph();
    expect(() => {
      graph.getNeighbors('A');
    }).toThrowError('Error: Invalid vertex');
  });
  it('Calling addDirectedEdge with invalid verticies throws an error', () => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(() => {
      graph.addDirectedEdge('A', 'B', 25);
    }).toThrowError('Error: Need a valid start and end vertex');
  });
  it('Calling bfsSize with invalid vertex throws an error', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    expect(() => {
      graph.bfsSize('E');
    }).toThrowError('Error: Invalid starting vertex');
  });
  it('Calling bfs on an empty graph throws an error', () => {
    const graph = new Graph();
    expect(() => {
      graph.bfs('A');
    }).toThrowError('Error: Invalid vertex');
  });
  it('Calling dfs on an empty graph throws an error', () => {
    const graph = new Graph();
    expect(() => {
      graph.dfs('A');
    }).toThrowError('Error: Invalid vertex');
  });
  it('A vertex can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(graph.getNeighbors('A')).toEqual([]);
    expect(graph.getNodes()).toStrictEqual(['A']);
  });
  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addDirectedEdge('A', 'B', 25);
    expect(graph.getNeighbors('A')).toEqual([{'vertex': 'B', 'weight': 25}]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    expect(graph.getNodes('A')).toEqual(['A', 'B', 'C', 'D']);
  });
  it('All appropriate neighbors can be retrieved from the graph with the weight between nodes included', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    expect(graph.getNeighbors('A')).toEqual([{'vertex': 'B', 'weight': 25}, {'vertex': 'C', 'weight': 5}]);
  });
  it('The proper size is returned (using bfsSize, adjListSize and propSize), representing the number of nodes in the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    expect(graph.bfsSize('A')).toBe(4);
    expect(graph.adjListSize()).toBe(4);
    expect(graph.propSize()).toBe(4);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addDirectedEdge('A', 'A', 35);
    expect(graph.getNeighbors('A')).toEqual([{'vertex': 'A', 'weight': 35}]);
  });
  it('Calling bfs (breadth first search) returns expected output', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    let bfsRawOutput = graph.bfs('A');
    let bfsTestOutput = [];
    for (let node of bfsRawOutput) {
      bfsTestOutput.push(node);
    }
    expect(bfsTestOutput).toEqual(['A', 'B', 'C', 'D']);
  });
  it('Calling dfs (depth first search) returns expected output', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    let dfsRawOutput = graph.dfs('A');
    let dfsTestOutput = [];
    for (let node of dfsRawOutput) {
      dfsTestOutput.push(node);
    }
    expect(dfsTestOutput).toEqual(['A', 'B', 'C', 'D']);
  });
  it('Calling pathTo to returns expected output', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addDirectedEdge('A', 'B', 25);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('B', 'C', 55);
    graph.addDirectedEdge('C', 'D', 10);
    let pathToRawOutput = graph.pathTo('A', 'D');
    let obj = Object.fromEntries(pathToRawOutput.entries());
    expect(obj).toEqual({'A': 'C', 'C': 'D'});
  });
});
