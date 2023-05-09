import { VertexType, GraphType } from '../graphTypes';

function GraphAdjacentList<T>(): GraphType<T> {
  const addVertex = (vertex: VertexType<T>) => {};

  const addEdge = (vertexA: string, vertexB: string) => {};

  const connected = (vertexA: string, vertexB: string): boolean => {
    return true;
  };

  const connections = (vertexId: string) => {};

  const removeEdge = (vertexA: string, vertexB: string) => {};

  const removeVertex = (vertexId: string) => {
    return undefined;
  };

  const print = () => {
    return [''];
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

export default GraphAdjacentList;
