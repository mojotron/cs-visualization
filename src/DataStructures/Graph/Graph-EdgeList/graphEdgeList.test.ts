import { describe, test, expect } from 'vitest';
import GraphEdgeList from './graphEdgeList';

describe('Graph implementation using edge list method', () => {
  test('add vertex and add edges', () => {
    const graph = GraphEdgeList();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', null);
    graph.addEdge('C', 'B', null);
  });
});
