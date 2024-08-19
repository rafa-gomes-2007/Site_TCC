import Arthur from '../assets/Arthur.svg'
import Rafael from '../assets/Rafael.svg'
import Caua from '../assets/Caua.svg'
import Kayque from '../assets/Kayque.svg'

export default function Membros() {
  return (

    <main className=" items-center justify-center flex flex-col w-screen">

      <h1 className='mt-8 mb-4 text-6xl'>Membros</h1>
      <p className='mb-8'>Quem são os integrantes que estão por trás do D.A.R.P</p>

      <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[400px] rounded-[50px] space-y-12'>
        <p className='text-4xl'>Arthur Araújo</p>

        <img src={Arthur} alt="Arthur" className='w-3/5  h-3/5'/>
        
        <a href="" className="bg-black text-white w-48 h-16 items-center flex justify-center rounded-[50px] text-2xl">Veja Mais</a>

      </div>

      <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[400px] rounded-[50px] space-y-12'>
        <p className='text-4xl'>Kayque Henrry</p>

        <img src={Kayque} alt="Kayque" className='w-3/5  h-3/5'/>
        
        <a href="" className="bg-black text-white w-48 h-16 items-center flex justify-center rounded-[50px] text-2xl">Veja Mais</a>

      </div>

      <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[400px] rounded-[50px] space-y-12'>
        <p className='text-4xl'>Rafael Gomes</p>

        <img src={Rafael} alt="Rafawl" className='w-3/5  h-3/5'/>
        
        <a href="" className="bg-black text-white w-48 h-16 items-center flex justify-center rounded-[50px] text-2xl">Veja Mais</a>

      </div>

      <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[400px] rounded-[50px] space-y-12'>
        <p className='text-4xl'>Cauã Schunck</p>

        <img src={Caua} alt="Caua" className='w-3/5  h-3/5'/>
        
        <a href="" className="bg-black text-white w-48 h-16 items-center flex justify-center rounded-[50px] text-2xl">Veja Mais</a>

      </div>

    </main>

    

  )
}