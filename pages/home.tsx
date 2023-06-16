import Head from 'next/head';

import { Link } from 'react-router-dom';

import style from '../styles/component.module.css';

import SectionNodes from '../components/secnodes/secnodes';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Faça seu Mapa Mental!</title>
      </Head>
      <main className={`w-full bg-zinc-800 flex flex-col items-center ${style.textRoboto} overflow-x-hidden`}>
        <div className="max-w-[900px] h-full flex flex-col justify-around items-center gap-y-20 md:gap-y-28 p-10 text-center">
          <section>
            <h1 className="font-bold text-zinc-200 text-2xl md:text-4xl max-w-[600px]">
              Crie seus Mapas Mentais da forma que desejar! &#128064;
            </h1>
          </section>
          <Link className={`bg-zinc-200 text-zinc-900 rounded-lg p-5 block max-w-[300px] md:text-xl ${style.animatedButton}`} to="project">
            Começar meu projeto 😎
          </Link>
          <section className="flex flex-wrap justify-center max-w-[450px]">
            <p className="font-bold text-zinc-200 text-base md:text-xl">
              Monte seus mapas com 3 fontes diferentes.
            </p>
            <p className="font-bold text-zinc-200 text-base mx-1 md:text-xl">
              2 Cores diferentes.
            </p>
            <p className="font-bold text-zinc-200 text-base mx-1 md:text-xl">
              Blocos dimensíveis.
            </p>
            <p className="font-bold text-zinc-200 text-base md:text-xl">
              &#x1F4D2; Suporte a imagens externas. &#x1F4D2;
            </p>
          </section>
          <SectionNodes />
          <p className="font-bold text-zinc-200 text-base">
            &#x1F4D8; Compartilhe seus mapas pro mundo! &#x1F4D8;
          </p>
        </div>
        <footer>
          <p className="text-sm text-zinc-200">© 2023 Todos os direitos reservados - Criador @gollinhatech</p>
        </footer>
      </main>
    </>

  )
}
