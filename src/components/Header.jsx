import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import BotHome from "../assets/BotHome.png";
import Membros from "../assets/Membros.png"
import Book from "../assets/E-book.png";
import Oper from "../assets/Oper.png";
import Mate from "../assets/Mate.png"

export default function Header() {

  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrir() {
    if (abrirMenu) {

      setAbrirMenu(false)
      return

    }

    setAbrirMenu(true)
  }

  return (
    <header className="bg-fundo_nav w-full font-Questrial flex items-center h-[150px] text-cinza_fonte rounded-b-2xl max-lg:h-auto max-lg:bg-cinza-back">
      <div className="flex">
        <button className="mt-[-100%] max-lg:mt-3 max-lg:ml-2 bg-fundo_nav px-[10px] py-[10px] rounded-2xl max-lg:mr-2" onClick={handleAbrir}>
          {abrirMenu ? <X size={32} weight="bold"/> : <List size={32} weight="bold"/>}
        </button>
        <h2 className='justify-start mb-[2px] ml-[30px] mr-[10px] text-[70px] text-cinza_fonte max-lg:text-[1px] max-lg:ml-[-10px]'>D.A.R.P</h2>
          
      </div>

      <nav style={{ marginTop: abrirMenu ? "0" : "-550px" }} className='flex items-center justify-center gap-5 space-x-14 max-lg:flex-col max-lg:bg-[#90969C] transition-all max-lg:py-3 max-lg:w-screen'>

        <h2 className=' mt-[-500px] mb-[2px] text-cinza_fonte max-lg:text-[91px] max-lg:ml-[-10px] max-lg:text-[#000000] max-lg:text-center max-lg:mt-0'>DARP</h2>

        <hr className='bg-[#D9D9D9] h-[8px] mt-[-100] max-lg:mt-0'/>
        <div className=" flex space-x-8 max-lg:flex max-lg:flex-col max-lg:columns-1 max-lg:justify-center max-lg:text-center max-lg:space-y-4">
          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Oper} alt="" />
            <Link to={"/Operacao"} className='text-[32px] max-lg:text-[20px] max-lg:text-[#000000] max-lg:text-center mx-auto'>Operação</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Mate} alt="" />
            <Link to={"/Materiais"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-3 max-lg:justify-center max-lg:self-center'>Materiais</Link>
          </div>
            
          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={BotHome} alt="" />
            <Link to={"/"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto'>Home</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Book} alt="" />
            <Link to={"/Bibliografia"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto'>Bibliografia</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Membros} alt="" />
            <Link to={"/Membros"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto'>Membros</Link>
          </div>
          
        </div>
      </nav>
    </header>
  )
}

