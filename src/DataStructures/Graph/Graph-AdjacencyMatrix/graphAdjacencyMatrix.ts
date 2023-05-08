import { VertexType, GraphType } from '../graphTypes';

function GraphAdjacencyMatrix<T>(size = 10): GraphType<T> {
  // to store matrix columns for O(1) search - when add vertex add column position
  // this array adds additional Space complexity
  const idList: (string | null)[] = Array.from({ length: size }, () => null);

  const vertexList: { [key: string]: { index: number; value: T } } = {}; // object for instant

  const edgeMatrix: (null | number)[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );
  // helpers
  const findFreeIndex = () => idList.findIndex((ele) => ele === null);

  const addVertex = (vertex: VertexType<T>) => {
    const freeIndex = findFreeIndex();
    if (freeIndex === -1) return undefined;
    idList[freeIndex] = vertex.id; // add column
    vertexList[vertex.id] = { index: freeIndex, value: vertex.value };
  };

  const addEdge = (vertexA: string, vertexB: string) => {
    const vA = vertexList[vertexA];
    const vB = vertexList[vertexB];
    if (!vA || !vB) return undefined;
    edgeMatrix[vA.index][vB.index] = 1;
    edgeMatrix[vB.index][vA.index] = 1;
  };

  const connected = (vertexA: string, vertexB: string): boolean => {
    const vA = vertexList[vertexA];
    const vB = vertexList[vertexB];
    if (!vA || !vB) return false;
    return (
      edgeMatrix[vA.index][vB.index] === 1 &&
      edgeMatrix[vB.index][vA.index] === 1
    );
  };

  const connections = (vertexId: string) => {
    const vId = vertexList[vertexId];
    if (!vId) return;
    return edgeMatrix[vId.index]
      .map((ele, i) => (ele === 1 ? idList[i] : null))
      .filter((ele) => ele !== null);
  };

  const removeEdge = (vertexA: string, vertexB: string) => {
    if (!connected(vertexA, vertexB)) return;
    const vA = vertexList[vertexA];
    const vB = vertexList[vertexB];
    if (!vA || !vB) return undefined;
    edgeMatrix[vA.index][vB.index] = null;
    edgeMatrix[vB.index][vA.index] = null;
  };

  const removeVertex = (vertexId: string) => {
    const v = vertexList[vertexId];
    if (!v) return undefined;
    // remove edges
    const connectedVertices = connections(vertexId);
    connectedVertices?.forEach((vId) => {
      removeEdge(vertexId, vId as string);
    });
    // remove vertex
    delete vertexList[vertexId];
    // free idList
    idList[v.index] = null;
  };

  const print = () => {
    const result: string[] = [];

    Object.keys(vertexList).forEach((k) => {
      result.push(`${k} => (${connections(k)?.join(', ')})`);
    });

    return result;
  };

  const getVertexValue = (vertexId: string): T | undefined => {
    if (vertexList[vertexId]) {
      const { value } = vertexList[vertexId];
      // NOTE! for objects and array return copy to stop potential data change
      if (typeof value === 'object' && Array.isArray(value))
        return [...value] as T;
      if (typeof value === 'object') return { ...value };
      return value;
    }
    return undefined;
  };

  const setVertexValue = (vertexId: string, newValue: T) => {
    if (vertexList[vertexId]) {
      vertexList[vertexId].value = newValue;
    }
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
  };
}

export default GraphAdjacencyMatrix;
