import { Link } from 'react-router-dom';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 ${inter.className}`}>Crie seus MAPAS MENTAIS para seus ESTUDOS da FORMA que DESEJAR.</h1>
      <Link className="text-zinc-100 block" to="/project">
        Começar meu projeto!
      </Link> 
    </div>
  )
}