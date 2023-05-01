type VertexType<T> = {
  value: T;
  edges: T[];
};

function Vertex(): VertexType {}

type GraphType = {
  addVertex: () => void;
  addEdge: () => void;
  removeVertex: () => void;
  removeEdge: () => void;
  verticesConnected: () => void;
};

function GraphAdjacentList(): GraphType {
  const addVertex = () => {};
  const addEdge = () => {};
  const removeVertex = () => {};
  const removeEdge = () => {};
  const verticesConnected = () => {};
  return {
    addVertex,
    addEdge,
    removeVertex,
    removeEdge,
    verticesConnected,
  };
}

export default GraphAdjacentList;
