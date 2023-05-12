/* eslint-disable no-restricted-syntax */

import { VertexType, GraphType } from '../graphTypes';

function GraphEdgeList<T>(): GraphType<T> {
  const vertexList: { [key: string]: T } = {};
  const edgeList: { [key: string]: [string, string] } = {};

  const addVertex = (vertex: VertexType<T>) => {
    vertexList[vertex.id] = vertex.value;
  };

  const sortVertices = (...vertices: string[]) =>
    [...vertices].sort((a, b) => a.localeCompare(b));

  const addEdge = (vertexA: string, vertexB: string) => {
    if (!vertexList[vertexA] || !vertexList[vertexB])
      throw new Error('Unknown vertex!');
    // sort vertex for making unique has key for faster look up
    const [vA, vB] = sortVertices(vertexA, vertexB);
    // add pointers to vertexList index of values
    edgeList[vA + vB] = [vA, vB];
  };

  const removeVertex = (vertexId: string) => {
    // remove vertex and remove all edges connecting to that node
    if (!vertexList[vertexId]) return undefined;
    delete vertexList[vertexId]; // remove vertex
    Object.values(edgeList).forEach((vertices) => {
      // remove edges including vertexId
      if (vertices.includes(vertexId)) {
        delete edgeList[vertices.join('')];
      }
    });
  };

  const removeEdge = (vertexA: string, vertexB: string) => {
    const [vA, vB] = sortVertices(vertexA, vertexB);
    if (edgeList[vA + vB]) {
      delete edgeList[vA + vB];
    }
  };

  const connected = (vertexA: string, vertexB: string) => {
    const [vA, vB] = sortVertices(vertexA, vertexB);
    return edgeList[vA + vB] !== undefined;
  };

  const connections = (vertexId: string) => {
    const nodes: string[] = []; // O(|e|)
    for (const value of Object.values(edgeList)) {
      const vA = value[0];
      const vB = value[1];
      if (vertexId === vA) nodes.push(vB);
      if (vertexId === vB) nodes.push(vA);
    }
    return sortVertices(...nodes);
  };

  const print = () => {
    return Object.keys(vertexList).map(
      (v) => `${v} => (${connections(v).join(', ')})`
    );
  };

  const getVertexValue = (vertexId: string): T | undefined => {
    if (vertexList[vertexId]) {
      const value = vertexList[vertexId];
      // NOTE! for objects and array return copy to stop potential data change
      if (typeof value === 'object' && Array.isArray(value))
        return [...value] as T;
      if (typeof value === 'object') return { ...value };
      return value;
    }
    return undefined;
  };

  const setVertexValue = (vertexId: string, newValue: T) => {
    if (!vertexList[vertexId]) return;
    vertexList[vertexId] = newValue;
  };

  // traversal
  const breadthFirstTraversal = (vertexId: string): string[] | undefined => {
    if (!vertexList[vertexId]) return undefined;
    const visited: string[] = [];
    const queue: string[] = [vertexId];

    while (queue.length > 0) {
      const temp = queue.shift() as string;
      if (!visited.includes(temp)) visited.push(temp);
      connections(temp).forEach((vId) => {
        if (!visited.includes(vId)) queue.push(vId);
      });
    }
    return visited;
  };

  const depthFirstTraversal = (vertexId: string, visited: string[] = []) => {
    if (!vertexList[vertexId]) return undefined;
    if (!visited.includes(vertexId)) visited.push(vertexId);
    const connectedQueue = connections(vertexId);

    while (connectedQueue.length > 0) {
      const temp = connectedQueue.shift() as string;
      if (!visited.includes(temp)) depthFirstTraversal(temp, visited);
    }
    return visited;
  };

  return {
    addVertex,
    addEdge,
    connected,
    connections,
    print,
    removeVertex,
    removeEdge,
    getVertexValue,
    setVertexValue,
    breadthFirstTraversal,
    depthFirstTraversal,
  };
}

export default GraphEdgeList;
