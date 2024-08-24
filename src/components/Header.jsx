import { Link } from "react-router-dom"

export default function header() {
  return (
    <div className="bg-fundo_nav w-full font-Questrial">

      <header className='flex items-center h-[150px] text-cinza_fonte rounded-b-2xl' >

        <h2 className='justify-start mb-[2px] ml-[30px] mr-[10px] text-[70px] text-cinza_fonte max-lg:text-[30px]'>D.A.R.P</h2>

        <ul className='flex justify-center gap-5 mx-auto grow'>
          <li>
            <Link to={"/Operacao"} className='text-[32px] max-lg:text-[20px]'>Operação</Link>
          </li>
          <li className="">
            <Link to={"/Materiais"} className='text-[32px] mx-auto max-lg:text-[20px]'>Materiais</Link>
          </li>
          <li>
            <Link to={"/"} className='text-[32px] max-lg:text-[20px]'>Home</Link>
          </li>
          <li>
            <Link to={"/Bibliografia"} className='text-[32px] mx-auto max-lg:text-[20px]'>Bibliografia</Link>
          </li>
          <li className="mr-10">
            <Link to={"/Membros"} className='text-[32px] max-lg:text-[20px]'>Membros</Link>
          </li>
        </ul>
      </header>
      
        
    </div>
  )
}

