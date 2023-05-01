import HashTable from '../../HashTable/hashTable';

type GraphType<T> = {
  addVertex: (value: T) => void;
  addEdge: (vertexA: T, vertexB: T, weight: number | null) => void;
  // removeVertex: () => void;
  // removeEdge: () => void;
  // incidentEdges: () => void;
  // areAdjusted: () => void;
  // origin: () => void;
  // destination: () => void;
};

function GraphEdgeList<T>(): GraphType<T> {
  const vertexList = HashTable<T, T>(10); //
  const edgeList = HashTable<T, { a: T; b: T; weight: null | number }>(10);

  const addVertex = (value: T) => {
    vertexList.set(value, value);
    console.log(vertexList.values());
  };

  const addEdge = (
    vertexA: T,
    vertexB: T,
    weight: number | null
  ): undefined | true => {
    // TODO check if vertexA and vertexB exist

    if (!vertexList.has(vertexA) || !vertexList.has(vertexB)) return undefined;
    edgeList.set(vertexA, { a: vertexA, b: vertexB, weight });
    console.log(edgeList.values());
  };

  return {
    addVertex,
    addEdge,
  };
}

export default GraphEdgeList;
