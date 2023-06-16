import { useContext, useState } from 'react';
import { NodeProps, Handle, Position, NodeResizeControl, NodeToolbar } from 'reactflow';

import { Trash, Crop } from '@phosphor-icons/react';

import { NodesContext } from '../../pages/flow';

import { zinc } from 'tailwindcss/colors';


import '@reactflow/node-resizer/dist/style.css';
import 'reactflow/dist/style.css';

export default function Image({ id, data }: NodeProps) {
  const [url, setUrl] = useState('' || data.text)
  const [visible, setVisible] = useState(false)

  const context = useContext(NodesContext)

  return (
    <div key={id} className={`min-h-[60px] min-w-[60px] h-full w-full ${data.color} ${data.font} ${data.bold} p-1 rounded flex-col justify-center items-center`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {url == ''
        ? <p className="text-center text-bold w-full">Digite sua URL - Imagem</p>
        : <img className="w-full h-[90%]" src={url} alt="Imagem" />
      }
      <NodeResizeControl style={{ background: 'transparent', border: 'none' }} minWidth={60} minHeight={60}>
         <Crop className="absolute bottom-1 right-1" size={25} />
      </NodeResizeControl>
      <Toolbar data={data} visible={visible} context={context} id={id} />
      <Handle id="right" type="source" position={Position.Right} className="-right-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="left" type="source" position={Position.Left} className="-left-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="top" type="source" position={Position.Top} className="-top-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="-bottom-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <input
        type="text"
        className="bg-transparent border-none text-center text-base text-zinc-500 w-full focus:outline-none"
        value={data.text}
        placeholder="Digite..."
        onChange={(e) => {
          data.text = e.target.value.trim()
          setUrl(e.target.value.trim())
        }} />
    </div>
  )
}

interface ToolProps {
  data: NodeProps;
  visible: boolean;
  context: {
    nodes: NodeProps;
    setNodes: NodeProps;
  }
  id: string;
}

function Toolbar({ data, visible, context, id }: ToolProps) {

  function deleteSquare() {
    var listNew: Array<NodeProps> = []
    context.nodes.filter((nds) => {
      if (nds.id != id) {
        listNew.push(nds)
      }
      context.setNodes(listNew)
    })
  }

  return (
    <NodeToolbar isVisible={visible} position={data.toolbar}>
      <button className="bg-transparent text-zinc-900 h-9 font-bold text-base mb-5" onClick={deleteSquare}>
        <Trash color={zinc[100]} size={"100%"} />
      </button>
    </NodeToolbar>
  )
}
