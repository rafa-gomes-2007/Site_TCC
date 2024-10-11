import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import BotHome from "../assets/BotHome.png";
import Membros from "../assets/Membros.png"
import Book from "../assets/E-book.png";
import Oper from "../assets/Oper.png";
import Mate from "../assets/Mate.png";
import Logo from "../assets/Logo.png";

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
    <header className="bg-fundo_nav w-full font-Questrial flex items-center h-[150px] text-cinza_fonte rounded-b-2xl max-lg:h-auto max-lg:bg-cinza-back max-lg:justify-between">
      <div className={`flex max-lg:bg-${abrirMenu ? "[##000000]" : "[#90969C] transition-all"} max-lg:w-full pb-[2px]`} >
        <button className="mt-[-100%] max-lg:mt-3 max-lg:ml-2 bg-fundo_nav px-[10px] py-[10px] rounded-2xl max-lg:mr-2 h-[50px]" onClick={handleAbrir}>
          {abrirMenu ? <List size={32} weight="bold"/> : <X size={32} weight="bold"/>}
        </button>
        <img className="justify-end mb-[2px] w-[100px] mr-0 max-lg:w-[55px] max-lg:h-[50px] max-lg:mt-3 ml-auto max-lg:mr-3" src={Logo} alt="" />

          
      </div>

      <nav className={`flex items-center justify-center space-x-10 max-lg:flex-col max-lg:bg-[#90969C] transition-all max-lg:w-full max-lg:h-auto max-lg:fixed max-lg:space-x-0 max-lg:mt-[381px] max-lg:py-5 max-lg:gap-0 max-lg:ml-${abrirMenu ? "[700px]" : "[100px]"}`}>

        <hr className='bg-[#D9D9D9] h-[6px] max-lg:w-full mx-5 mb-4'/>

        <div className=" flex space-x-8 max-lg:flex max-lg:flex-col max-lg:columns-1 max-lg:space-y-4 max-lg:space-x-0 max-lg:justify-center">
          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center max-lg:justify-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Oper} alt="" />
            <Link to={"/Operacao"} className='text-[32px] max-lg:text-[20px] max-lg:text-[#000000] mx-auto max-lg:w-[100px] max-lg:ml-0 max-lg:mr-[2px]'>Operação</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center max-lg:justify-center">
            <img className="mr-2 mt-[-500px] max-lg:mt-0" src={Mate} alt="" />
            <Link to={"/Materiais"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-3 max-lg:w-[100px]'>Materiais</Link>
          </div>
            
          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mt-[-500px] max-lg:mt-0" src={BotHome} alt="" />
            <Link to={"/"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto max-lg:w-[100px]'>Home</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mt-[-500px] max-lg:mt-0" src={Book} alt="" />
            <Link to={"/Bibliografia"} className='text-[32px] max-lg:text-[20px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto max-lg:w-[100px] max-lg:ml-0 max-lg:mr-[2px]'>Bibliografia</Link>
          </div>

          <div className="flex max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:px-5 max-lg:items-center">
            <img className="mt-[-500px] max-lg:mt-0" src={Membros} alt="" />
            <Link to={"/Membros"} className='text-[32px] max-lg:text-[20px] mr-[50px] max-lg:bg-[#D9D9D9] max-lg:rounded-2xl max-lg:text-[#000000] max-lg:px-5 max-lg:text-center mx-auto max-lg:w-[100px] max-lg:ml-0 max-lg:mr-[2px]'>Membros</Link>
          </div>
          
        </div>
      </nav>
    </header>
  )
}

