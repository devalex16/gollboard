import { useState, useRef } from 'react';
import { NodeProps, EdgeProps } from 'reactflow'

import { X, UploadSimple } from '@phosphor-icons/react';

import { zinc } from 'tailwindcss/colors';

interface UploadProps {
  setUpload: boolean;
  setNodes: NodeProps;
  setEdges: EdgeProps;
}

export default function UploadFile({ setUpload, setNodes, setEdges }: UploadProps) {
  const [nameFile, setNameFile] = useState<string>("Nome do Arquivo")
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
        <X className="absolute top-3 right-3 bg-transparent text-zinc-100 active:outline-none" size={"10%"} onClick ={(e) => { setUpload(false) }} />
        <form className="flex flex-col justify-center items-center" onSubmit={loadNodes}>
          <label className="text-zinc-100">{nameFile}</label>
          <label htmlFor="file">
            <UploadSimple className="text-center m-auto" color={zinc[100]} size={"80%"} />
          </label>
          <input className="hidden" type="file" id="file" accept=".json" onChange={handleFile} ref={inputFile}/>
          <button type="submit" className="bg-zinc-100 font-bold w-1/2 py-3 rounded-lg">ENVIAR</button>
        </form>
        <p className="max-w-[400px] mx-10 my-2 text-base text-zinc-400 text-center">Faça primeiro upload do slide e depois os edges, bons estudos com seus projetos!</p>
      </div>
    </div>
   )
}
