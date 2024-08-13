import { Link } from "react-router-dom"

export default function header() {
  return (
    <div>

      <header className='flex justify-center space-x-4 h-16 bg-fundo_nav text-cinza_fonte rounded-b-2xl space-x-16 w-screen'>
        <h1 className='mt-2 text-3xl '>D.A.R.P</h1>

        <ul className='flex justify-center gap-4 mt-4'>
          <li>
            <Link to={"/Operacao"} className=''>Operação</Link>
          </li>
          <li>
            <Link to={"/Materiais"} className=''>Materiais</Link>
          </li>
          <li>
            <Link to={"/"} className=''>Home</Link>
          </li>
          <li>
            <Link to={"/Bibliografia"} className=''>Bibliografia</Link>
          </li>
          <li>
            <Link to={"/Membros"} className=''>Membros</Link>
          </li>
        </ul>
      </header>
      
        
    </div>
  )
}

