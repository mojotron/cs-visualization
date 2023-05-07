import { VertexType, GraphType } from '../graphTypes';

function GraphAdjacencyMatrix<T>(size = 10): GraphType<T> {
  let freeIndex = 0;
  // to store matrix columns for O(1) search - when add vertex add column position
  const idList: string[] = [];
  const vertexList: { [key: string]: { index: number; value: T } } = {}; // object for instant

  const edgeMatrix: (null | number)[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );

  const addVertex = (vertex: VertexType<T>) => {
    if (freeIndex === size) return;
    idList[freeIndex] = vertex.id; // add column
    vertexList[vertex.id] = { index: freeIndex, value: vertex.value };
    freeIndex += 1;
  };

  const addEdge = (vertexA: string, vertexB: string) => {
    const vA = vertexList[vertexA];
    const vB = vertexList[vertexB];
    if (!vA || !vB) return undefined;
    edgeMatrix[vA.index][vB.index] = 1;
    edgeMatrix[vB.index][vA.index] = 1;
  };

  const removeVertex = (vertexId: string) => {
    return undefined;
  };

  const removeEdge = (vertexA: string, vertexB: string) => {};

  const connected = (vertexA: string, vertexB: string) => {
    return false;
  };

  const connections = (vertexId: string) => {
    const vId = vertexList[vertexId];
    if (!vId) return;
    return edgeMatrix[vId.index]
      .map((ele, i) => (ele === 1 ? idList[i] : null))
      .filter((ele) => ele !== null);
  };

  const print = () => {
    const result: string[] = [];
    Object.keys(vertexList).forEach((k) => {
      result.push(`${k} => (${connections(k)?.join(', ')})`);
    });
    console.log(result);

    return result;
  };

  const getVertexValue = (vertexId: string): T | undefined => {
    return undefined;
  };

  const setVertexValue = (vertexId: string, newValue: T) => {};

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
  };
}

export default GraphAdjacencyMatrix;
