import { NodeProps, EdgeProps } from "reactflow"

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
    <div className="flex flex-row absolute h-10 top-[100px] right-1/2 translate-x-1/2 md:top-5 md:right-5 md:translate-x-1">
      <button className="border-none bg-zinc-900 color-zinc-200 text-center mx-2 rounded active:bg-zinc-900 outline-none" onClick={(e) => {
        saveNodes()
        saveEdges()
      }}>
        <DownloadIcon />
      </button>
      <button className="border-none bg-zinc-900 color-zinc-200 text-center mx-2 rounded active:bg-zinc-900 outline-none" onClick={(e) => { setUpload(true) }}>
        <UploadIcon />
      </button>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#FFFFFF" viewBox="0 0 256 256">
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-61.66a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35A8,8,0,0,1,157.66,154.34Z"></path>
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path></svg>
  )
}