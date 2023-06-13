import { NodeProps, Handle, Position, NodeResizeControl } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import 'reactflow/dist/style.css';
import { useState } from 'react';


export default function Square({ id, data }: NodeProps) {
  const [value, setValue] = useState('')
  return (
    <div key={id} className={`min-h-[60px] min-w-[60px] h-full w-full ${data.color} ${data.font} ${data.bold} p-1 rounded flex justify-center items-center`}>

      <NodeResizeControl style={{ background: 'transparent', border: 'none' }} minWidth={60} minHeight={60}>
        <ResizeIcon />
      </NodeResizeControl>

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


function ResizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256" style={{ position: 'absolute', bottom: 5, right: 5 }}><path d="M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"></path></svg>
  )
}