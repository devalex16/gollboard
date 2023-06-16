import { useContext } from 'react';

import { NodeProps, Handle, Position, NodeResizeControl, NodeToolbar } from 'reactflow';

import { useState } from 'react';

import '@reactflow/node-resizer/dist/style.css';
import 'reactflow/dist/style.css';

import { zinc } from 'tailwindcss/colors';

import { Trash, Crop } from '@phosphor-icons/react';

import { NodesContext } from '../../pages/flow';

export default function Square({ id, data }: NodeProps) {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const context = useContext(NodesContext)

  return (
    <div key={id} className={`min-h-[60px] min-w-[60px] h-full w-full ${data.color} ${data.font} ${data.bold} p-1 rounded flex justify-center items-center`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>

      <NodeResizeControl style={{ background: 'transparent', border: 'none' }} minWidth={60} minHeight={60}>
        <Crop className="absolute bottom-1 right-1" size={25} />
      </NodeResizeControl>
      <Toolbar data={data} visible={visible} context={context} id={id} />
      <Handle id="right" type="source" position={Position.Right} className="-right-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="left" type="source" position={Position.Left} className="-left-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="top" type="source" position={Position.Top} className="-top-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="-bottom-5 border-1 border-cyan-400 bg-transparent h-3 w-3" />
      <textarea
        className="bg-transparent border-none text-center text-lg align-middle w-full h-full focus:outline-none"
        placeholder="Digite..."
        value={data.text || value}
        style={{ textAlignLast: "center" }}
        onChange={(e) => {
          data.text = e.target.value
          setValue(e.target.value)
        }} />
    </div>
  )
}

function Toolbar({ data, visible, context, id }) {

  function deleteSquare() {
    var listNew: Array[] = []
    context.nodes.filter((nds) => {
      if (nds.id != id) {
        listNew.push(nds)
      }
      context.setNodes(listNew)
    })
  }

  return (
    <NodeToolbar isVisible={visible} position={data.toolbar}>
      <button className="bg-transparent text-zinc-900 h-7 font-bold text-base mb-5" onClick={deleteSquare}>
        <Trash color={zinc[100]} size={"100%"} />
      </button>
    </NodeToolbar>
  )
}
