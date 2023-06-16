import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { 
    id: '1', 
    position: { 
      x: 50,
      y: 50
    }, 
    data: { 
      label: 'Hello'
    } 
  },
  { 
    id: '2', 
    position: {
      x: 100,
      y: 130
    }, data: {
      label: 'World'
    } 
  },
];

const initialEdges = [
  { 
    id: 'e1-2',
    source: '1',
    target: '2' 
  }
];

export default function SectionNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])
  
  return (
    <section className="h-[300px] w-[90%] md:w-[500px] rounded-lg">
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
        <Background className="bg-zinc-800" gap={30} size={2} />
      </ReactFlow>
    </section>
  );
}