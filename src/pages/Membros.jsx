import Arthur from '../assets/Arthur.svg'
import Rafael from '../assets/Rafael.svg'
import Caua from '../assets/Caua.svg'
import Kayque from '../assets/Kayque.svg'

export default function Membros() {
  return (


    <div className="items-center justify-center flex flex-col w-screen font-Questrial mt-[150px] max-lg:mt-[80px]">

      <h1 className='text-[90px] max-lg:text-[48px]'>MEMBROS</h1>
      <p className='text-center mb-20 text-[32px] max-lg:text-[18px] max-lg:mx-[40px]'>Quem são os integrantes que estão por trás do D.A.R.P</p>

      <section className='flex justify-around gap-40 pb-32 max-lg:flex-col max-lg:columns-1'>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[90%] rounded-[50px] space-y-12 max-lg:w-[80%] max-lg:h-[80%] max-lg:space-y-1 shadow-2xl max-lg:mx-auto max-lg:py-4'>
          
          <h2 className='text-[42px] max-lg:text-[20px]'>Arthur Araújo</h2>

          <img src={Arthur} alt="Arthur" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/artu_rodriguess/" className="bg-[#495057] text-white font-semibold items-center flex justify-center hover:bg-fundo_texto hover:border-[3px] hover:border-[#495057] hover:text-[#495057] rounded-[50px] text-[28px] px-8 py-4 max-lg:text-[14px] max-lg:px-4 max-lg:py-2">Veja Mais</a>

        </div>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[90%] rounded-[50px] space-y-12 max-lg:w-[80%] max-lg:h-[80%] max-lg:space-y-1 shadow-2xl max-lg:mx-auto max-lg:py-4'>
          <h2 className='text-[42px] max-lg:text-[22px]'>Kayque Henrry</h2>

          <img src={Kayque} alt="Kayque" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/k.henrryxz/" className="bg-[#495057] text-white font-semibold items-center flex justify-center rounded-[50px] text-[28px] px-8 py-4 max-lg:text-[14px] max-lg:px-4 max-lg:py-2 hover:bg-fundo_texto hover:border-[3px] hover:border-[#495057] hover:text-[#495057]">Veja Mais</a>

        </div>

      </section>


      <section className='flex justify-around gap-40 pb-12 max-lg:flex-col max-lg:columns-1'>
        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[90%] rounded-[50px] space-y-12 max-lg:w-[80%] max-lg:h-[80%] max-lg:space-y-1 shadow-2xl max-lg:mx-auto max-lg:py-4'>
          <p className='text-[42px] max-lg:text-[22px]'>Rafael Gomes</p>

          <img src={Rafael} alt="Rafawl" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/rafa_nasc11/" className="bg-[#495057] text-white font-semibold items-center flex justify-center rounded-[50px] text-[28px] px-8 py-4 max-lg:text-[14px] max-lg:px-4 max-lg:py-2 hover:bg-fundo_texto hover:border-[3px] hover:border-[#495057] hover:text-[#495057]">Veja Mais</a>

        </div>

        <div className='bg-fundo_texto py-8 justify-center items-center flex-col flex w-[90%] rounded-[50px] space-y-12 max-lg:w-[80%] max-lg:h-[80%] max-lg:space-y-1 shadow-2xl mx-auto max-lg:p-4'>
          <p className='text-[42px] max-lg:text-[22px]'>Cauã Schunck</p>

          <img src={Caua} alt="Caua" className='w-3/5  h-3/5'/>
          
          <a href="https://www.instagram.com/schunck_ccs/" className="bg-[#495057] text-white items-center flex justify-center rounded-[50px] text-[28px] px-8 py-4 max-lg:text-[14px] max-lg:px-4 max-lg:py-2 hover:bg-fundo_texto hover:border-[3px] hover:border-[#495057] hover:text-[#495057]">Veja Mais</a>

        </div>
      </section>
      

    </div>

    
   )
  }
