import Arthur from '../assets/Arthur.svg'
import Rafael from '../assets/Rafael.svg'
import Caua from '../assets/Caua.svg'
import Kayque from '../assets/Kayque.svg'

export default function Membros() {
  return (


    <main className="items-center justify-center flex flex-col w-screen font-Questrial">

      <h1 className='mt-8 text-[164px] max-lg:text-[70px]'>MEMBROS</h1>
      <p className='text-center mb-20 text-[32px] max-lg:text-[20px] max-lg:mx-[40px]'>Quem são os integrantes que estão por trás do D.A.R.P</p>

      <section className='flex justify-around gap-40 pb-32 max-lg:flex-col max-lg:columns-1'>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[480px] rounded-[50px] space-y-12 max-lg:w-[318px] max-lg:h-[334] max-lg:space-y-1 shadow-2xl'>
          
          <h2 className='text-[52px] max-lg:text-[32px]'>Arthur Araújo</h2>

          <img src={Arthur} alt="Arthur" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/artu_rodriguess/" className="bg-[#495057] text-white items-center flex justify-center rounded-[50px] text-[38px] px-8 py-4 max-lg:text-[24px] max-lg:px-4 max-lg:py-2">Veja Mais</a>

        </div>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[480px] rounded-[50px] space-y-12 max-lg:w-[318px] max-lg:h-[334] max-lg:space-y-1 shadow-2xl'>
          <h2 className='text-[52px] max-lg:text-[32px]'>Kayque Henrry</h2>

          <img src={Kayque} alt="Kayque" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/k.henrryxz/" className="bg-[#495057] text-white items-center flex justify-center rounded-[50px] text-[38px] px-8 py-4 max-lg:text-[24px] max-lg:px-4 max-lg:py-2">Veja Mais</a>

        </div>

      </section>


      <section className='flex justify-around gap-40 pb-12 max-lg:flex-col max-lg:columns-1'>
        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[480px] rounded-[50px] space-y-12 max-lg:w-[318px] max-lg:h-[334] max-lg:space-y-1 shadow-2xl'>
          <p className='text-[52px] max-lg:text-[32px]'>Rafael Gomes</p>

          <img src={Rafael} alt="Rafawl" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/rafa_nasc11/" className="bg-[#495057] text-white items-center flex justify-center rounded-[50px] text-[38px] px-8 py-4 max-lg:text-[24px] max-lg:px-4 max-lg:py-2">Veja Mais</a>

        </div>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[480px] rounded-[50px] space-y-12 max-lg:w-[318px] max-lg:h-[334] max-lg:space-y-1 shadow-2xl'>
          <p className='text-[52px] max-lg:text-[32px]'>Cauã Schunck</p>

          <img src={Caua} alt="Caua" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/schunck_ccs/" className="bg-[#495057] text-white items-center flex justify-center rounded-[50px] text-[38px] px-8 py-4 max-lg:text-[24px] max-lg:px-4 max-lg:py-2">Veja Mais</a>

        </div>
      </section>
      

    </main>

    
   )
  }
