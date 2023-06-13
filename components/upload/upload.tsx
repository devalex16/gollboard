import { useState, useRef } from 'react';
import { NodeProps, EdgeProps } from 'reactflow'

interface UploadProps {
  setUpload: boolean;
  setNodes: NodeProps;
  setEdges: EdgeProps;
}

export default function UploadFile({ setUpload, setNodes, setEdges }: UploadProps) {
  const [nameFile, setNameFile] = useState("Nome do Arquivo")
  const inputFile = useRef()
  
  function handleFile(e) {
    const fileText = e.target.value
    setNameFile(fileText.substring(12, 40))
  }

  function loadNodes(e) {
    e.preventDefault()
    const file = inputFile.current;
    
    if(!file.value.length) return;
    const reader = new FileReader()

    reader.onload = logFile;

    reader.readAsText(file.files[0])
  }

  function logFile() {
    const file = event.target.result
    const json = JSON.parse(file)
    try {
      if (nameFile.includes("slide")) {
        setNodes(json)
      } else if (nameFile.includes("edges")) {
        setEdges(json)
      } 
    } catch (erro) {
      console.log(erro)
    }
  }
  
  
   return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900/80 absolute top-0 left-0">
      <div className="flex flex-col justify-center items-center p-5 bg-zinc-800 rounded-2xl relative">
        <button className="absolute top-3 right-3 bg-transparent text-zinc-100 active:outline-none" onClick ={(e) => { setUpload(false) }}>X</button>
        <form className="flex flex-col justify-center items-center" onSubmit={loadNodes}>
          <label className="text-zinc-100">{nameFile}</label>
          <label htmlFor="file">
            <FileIcon />
          </label>
          <input className="hidden" type="file" id="file" accept=".json" onChange={handleFile} ref={inputFile}/>
          <button type="submit" className="bg-zinc-100 font-bold w-1/2 py-3 rounded-lg">ENVIAR</button>
        </form>
        <p className="max-w-[400px] mx-10 my-2 text-base text-zinc-400 text-center">Faça primeiro upload do slide e depois os edges, bons estudos com seus projetos!</p>
      </div>
    </div>
   )
}

function FileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#FFFFFF" viewBox="0 0 256 256">
      <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM93.66,85.66,120,59.31V152a8,8,0,0,0,16,0V59.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,85.66Z"></path>
    </svg>
  )
}
