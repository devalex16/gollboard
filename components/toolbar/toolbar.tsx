import { useState, useCallback } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { NodeProps } from 'reactflow';
import crypto from 'crypto';

interface ToolProps {
  nodes: NodeProps;
  setNodes: NodeProps;
}

interface ColorsProps {
  color: string;
  value: boolean;
}

interface ColorsIconProps {
  colorCyan: string;
  colorPurple: string;
}

export default function ToolBar({ nodes, setNodes }: ToolProps) {
  const [colors, setColors] = useState<ColorsProps>({
    color: "bg-cyan-200",
    value: true
  })

  const [colorIcon, setColorIcon] = useState<ColorsIconProps>({
    colorCyan: "bg-fuchsia-400",
    colorPurple: "bg-cyan-400"
  })

  const [fonts, setFonts] = useState<string>('font-sans')

  const [bold, setBold] = useState("font-normal")

  function addNodes(type) {
    setNodes((nodes: Array<NodeProps>) => [
      ...nodes,
      {
        id: crypto.randomBytes(20).toString('hex'),
        type: type,
        position: {
          x: 100,
          y: 400
        },
        data: {
          color: colors.color,
          font: fonts,
          bold: bold,
          text: ''
        }
      },
    ])
  }

  function setColorsClick() {
    if (colors.value) {
      setColors({ color: "bg-fuchsia-200", value: false })
      setColorIcon({ colorCyan: "bg-cyan-400", colorPurple: "bg-fuchsia-400" })
    } else {
      setColors({ color: "bg-cyan-200", value: true })
      setColorIcon({ colorCyan: "bg-fuchsia-400", colorPurple: "bg-cyan-400" })
    }
  }

  function changeFont() {
    if (fonts == "font-sans") {
      setFonts("font-serif")
    } else if (fonts === "font-serif") {
      setFonts("font-mono")
    } else if (fonts == "font-mono") {
      setFonts("font-sans")
    }

  }

  function changeFontDouble() {
    if (bold == "font-normal") {
      setBold("font-bold")
    } else {
      setBold("font-normal")
    }

  }
  
  return (
    <Toolbar.Root className="fixed top-10 left-1/2 -translate-x-1/2 rounded-xl shadow-lg border border-zinc-300 px-8 py-2 max-w-[900px] h-[50px] overflow-hidden bg-white flex flex-row align-center justify-around">
      <Toolbar.Button
        className="h-[95%] w-[50px] mx-1 relative transition-transform hover:-translate-y-1"
        onClick={(e) => {
          addNodes("image")
        }}>
        <ImageIcon />
      </Toolbar.Button>
      <Toolbar.Button
        className="h-[95%] w-[50px] mx-1 bg-cyan-400 shadow border rounded transition-transform hover:-translate-y-1"
        onClick={(e) => {
          addNodes("square")
        }} />
      <Toolbar.Button className="h-[95%] w-[50px] mx-1 relative transition-transform hover:-translate-y-1" onClick={setColorsClick}>
        <div className="h-full w-full">
          <div className={`h-full w-full ${colorIcon.colorCyan} shadow rounded absolute bottom-1 left-1`} />
          <div className={`h-full w-full ${colorIcon.colorPurple} shadow rounded absolute`} />
        </div>
      </Toolbar.Button>
      <Toolbar.Button className="h-[95%] w-[50px] mx-1 -translate-y-1 transition-transform hover:-translate-y-2" onClick={changeFont} onDoubleClick={changeFontDouble}>
        <p className={`${fonts} ${bold} text-3xl text-zinc-400`}>T</p>
      </Toolbar.Button>
    </Toolbar.Root>
  )
}

function ImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path></svg>
  )
}

