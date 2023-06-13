import { useCallback, useState } from 'react';

import crypto from 'crypto';

import ReactFlow, { MiniMap, Controls, Background, useEdgesState, useNodesState, addEdge, ConnectionMode, Connection } from 'reactflow';

import Square from '../components/nodes/square';
import Image from '../components/nodes/image';
import DefaultEdges from '../components/edges/defaultEdges';
import ToolBar from '../components/toolbar/toolbar';
import ToolJson from '../components/tooljson/tooljson';
import UploadFile from '../components/upload/upload';


import { zinc } from 'tailwindcss/colors';

import 'reactflow/dist/style.css';

const nodeTypes = {
  square: Square,
  image: Image,
}

const edgeTypes = {
  default: DefaultEdges,
}

const initialNodes = [
  {
    id: crypto.randomBytes(20).toString('hex'),
    type: 'square',
    position: {
      x: 100,
      y: 100
    },
    data: {
      color: "bg-cyan-200"
    }
  },
];

export default function FlowPage() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [upload, setUpload] = useState(false)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div className={`h-[95vh] w-screen relative`}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}>
        <Background className="bg-zinc-900 color-zinc-900" gap={30} size={2} />
        <Controls />
        <MiniMap className="rounded" maskColor={zinc[800]} />
      </ReactFlow>
      <ToolBar nodes={nodes} setNodes={setNodes} />
      <ToolJson edges={edges} nodes={nodes} setUpload={setUpload} />

      {upload
        ? <UploadFile setUpload={setUpload} setNodes={setNodes} setEdges={setEdges}/>
        : false
      }

    </div>
  )
}