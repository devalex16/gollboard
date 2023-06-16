import { NodeProps, EdgeProps } from "reactflow"

import { Download, Upload } from '@phosphor-icons/react';

import { zinc } from 'tailwindcss/colors';

interface ToolProps {
  setUpload: boolean;
  nodes: NodeProps;
  edges: EdgeProps;
}

export default function ToolJson({ setUpload, nodes, edges }: ToolProps) {

  function saveNodes() {
    const json = JSON.stringify(nodes, null)
    const blob = new Blob([json], {type: 'json/application'})
    const fileLink =
    window.document.createElement('a');
    fileLink.href = window.URL.createObjectURL(blob);
    fileLink.download = 'slide.json';
    fileLink.click(); 
  }
  
  function saveEdges() {
    const json = JSON.stringify(edges, null)
    const blob = new Blob([json], {type: 'json/application'})
    const fileLink =
    window.document.createElement('a');
    fileLink.href = window.URL.createObjectURL(blob);
    fileLink.download = 'edges.json';
    fileLink.click(); 
  }
  
  
  return (
    <div className="flex flex-row absolute w-[110px] top-[100px] right-1/2 translate-x-1/2 md:top-5 md:right-5 md:translate-x-1">
      <button className="border-none bg-zinc-900 color-zinc-200 text-center mx-2 rounded active:bg-zinc-900 outline-none" onClick={(e) => {
        saveNodes()
        saveEdges()
      }}>
        <Download color={zinc[200]} size={"100%"} />
      </button>
      <button className="border-none bg-zinc-900 color-zinc-200 text-center mx-2 rounded active:bg-zinc-900 outline-none" onClick={(e) => { setUpload(true) }}>
       <Upload color={zinc[200]} size={"100%"} />
      </button>
    </div>
  )
}