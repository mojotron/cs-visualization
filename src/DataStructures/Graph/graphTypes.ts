export type VertexType<T> = {
  id: string; // id used to map vertices in graph
  value: T;
};

export type GraphType<T> = {
  addVertex: (vertex: VertexType<T>) => void;
  addEdge: (vertexA: string, vertexB: string) => void;
  removeVertex: (vertexId: string) => undefined;
  removeEdge: (vertexA: string, vertexB: string) => void;
  connected: (vertexA: string, vertexB: string) => boolean;
  connections: (vertexId: string) => void;
  print: () => string[];
  // vertex value methods
  getVertexValue: (vertexId: string) => T | undefined;
  setVertexValue: (vertexId: string, newValue: T) => void;
  // traversal
  breadthFirstTraversal: (vertexId: string) => string[] | undefined;
  depthFirstTraversal: (vertexId: string) => string[] | undefined;
};
