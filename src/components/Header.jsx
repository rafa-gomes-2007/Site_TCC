import { Link } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

export default function header() {

  const [ abrirMenu, setAbrirMenu ] = useState(false)

  function handleAbrir() {
    if (abrirMenu) {
      setAbrirMenu(false)
    }
    setAbrirMenu(true)
  }

  return (
    <header className="bg-fundo_nav w-full font-Questrial flex items-center h-[150px] text-cinza_fonte rounded-b-2xl">
      <div className="flex">
        <h2 className='justify-start mb-[2px] ml-[30px] mr-[10px] text-[70px] text-cinza_fonte max-lg:text-[30px]'>D.A.R.P</h2>
        <button className="mt-[-100%] max-lg:mt-0" onClick={handleAbrir}>{< List />}</button>
      </div>

      <nav className='flex items-center justify-center gap-5 mx-auto space-x-14 max-lg:py-auto max-lg:flex-col max-lg:'>
          <Link to={"/Operacao"} className='text-[32px] max-lg:text-[20px]'>Operação</Link>
          <Link to={"/Materiais"} className='text-[32px] mx-auto max-lg:text-[20px]'>Materiais</Link>
          <Link to={"/"} className='text-[32px] max-lg:text-[20px]'>Home</Link>
          <Link to={"/Bibliografia"} className='text-[32px] mx-auto max-lg:text-[20px]'>Bibliografia</Link>
          <Link to={"/Membros"} className='text-[32px] max-lg:text-[20px]'>Membros</Link>
      </nav>
    </header>
  )
}

