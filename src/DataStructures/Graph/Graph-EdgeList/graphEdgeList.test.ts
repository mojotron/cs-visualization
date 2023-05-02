import { describe, test, expect } from 'vitest';
import GraphEdgeList from './graphEdgeList';

describe('Graph implementation using edge list method', () => {
  test('create vertex add vertex and add edges', () => {
    const graph = GraphEdgeList<number>();
    // A - D
    // | \
    // |  C
    // | /
    // B
    graph.addVertex({ id: 'A', value: 1 });
    graph.addVertex({ id: 'B', value: 2 });
    graph.addVertex({ id: 'C', value: 3 });
    graph.addVertex({ id: 'D', value: 4 });
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    graph.addEdge('D', 'A');
    expect(graph.print()).toEqual([
      'A => (B, C, D)',
      'B => (A, C)',
      'C => (A, B)',
      'D => (A)',
    ]);
  });

  test('connections', () => {
    const graph = GraphEdgeList<number>();
    graph.addVertex({ id: 'A', value: 1 });
    graph.addVertex({ id: 'B', value: 2 });
    graph.addVertex({ id: 'C', value: 3 });
    graph.addVertex({ id: 'D', value: 4 });
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    graph.addEdge('D', 'A');
    expect(graph.connected('A', 'B')).toBeTruthy();
    expect(graph.connected('B', 'A')).toBeTruthy();
    expect(graph.connected('C', 'D')).toBeFalsy();
    expect(graph.connections('A')).toEqual(['B', 'C', 'D']);
    expect(graph.connections('B')).toEqual(['A', 'C']);
    expect(graph.connections('C')).toEqual(['A', 'B']);
    expect(graph.connections('D')).toEqual(['A']);
  });

  test('get and set vertex value', () => {
    const graph1 = GraphEdgeList<number>();
    graph1.addVertex({ id: 'A', value: 10 });
    expect(graph1.getVertexValue('B')).toBe(undefined);
    expect(graph1.getVertexValue('A')).toBe(10);
    graph1.setVertexValue('A', 20);
    expect(graph1.getVertexValue('A')).toBe(20);

    const graph2 = GraphEdgeList<string[]>();
    graph2.addVertex({ id: 'A', value: ['A', 'B', 'C'] });
    expect(graph2.getVertexValue('A')).toEqual(['A', 'B', 'C']);
    const temp = graph2.getVertexValue('A') as string[];
    graph2.setVertexValue('A', [...temp, 'D']);
    expect(graph2.getVertexValue('A')).toEqual(['A', 'B', 'C', 'D']);

    const graph3 = GraphEdgeList<{ name: string; id: number }>();
    graph3.addVertex({ id: 'A', value: { name: 'Tom', id: 1 } });
    expect(graph3.getVertexValue('A')).toEqual({ name: 'Tom', id: 1 });
    const temp2 = graph3.getVertexValue('A') as { id: number; name: string };
    graph3.setVertexValue('A', { ...temp2, name: 'Bob' });
    expect(graph3.getVertexValue('A')).toEqual({ name: 'Bob', id: 1 });
  });

  test('remove edge and vertices', () => {
    const graph = GraphEdgeList<number>();
    graph.addVertex({ id: 'A', value: 1 });
    graph.addVertex({ id: 'B', value: 2 });
    graph.addVertex({ id: 'C', value: 3 });
    graph.addVertex({ id: 'D', value: 4 });
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    graph.addEdge('D', 'A');
    expect(graph.print()).toEqual([
      'A => (B, C, D)',
      'B => (A, C)',
      'C => (A, B)',
      'D => (A)',
    ]);
    graph.removeEdge('D', 'A');
    expect(graph.print()).toEqual([
      'A => (B, C)',
      'B => (A, C)',
      'C => (A, B)',
      'D => ()',
    ]);
    graph.removeVertex('A');
    expect(graph.print()).toEqual(['B => (C)', 'C => (B)', 'D => ()']);
  });
});
