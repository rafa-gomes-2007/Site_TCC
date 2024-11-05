import Frente from '../assets/frente.png';
import Tras from '../assets/tras.png';
import Projeto from '../assets/Projeto.mp4';

export default function Operação() {
  return (
    <main className='flex-col justify-center items-center font-Questrial mt-[150px] max-lg:mt-[80px]'>

      <section className='flex-col justify-center'>
          <h1 className='text-center text-[100px] max-lg:text-[50px]'>OPERAÇÃO</h1>
          <p className='text-center text-[24px] pt-[10px] pb-[76px] max-lg:text-[16px]'>Como operar o D.A.R.P?</p>

          <p className='font-Questrial text-center text-[20px] bg-[#D9D9D9] rounded-lg px-10 py-10 mx-[80px] max-lg:text-[12px] shadow-2xl max-lg:mx-[20px]'>Este dispositivo é projetado para ajudar pessoas com certos transtornos a controlar e reduzir comportamentos compulsivos, ansiedade exacerbada em momentos inoportunos, verificar portas várias vezes, lavar as mãos excessivamente e momentos de pânico. O D.A.R.P inclui as seguintes características:</p>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mt-[25px] max-lg:mx-[35px]'/>

      <section className='flex-col columns-2 justify-center items-center mt-[100px] mx-[80px] max-lg:columns-1 max-lg:mt-[25px] max-lg:mx-[20px]'>
        <div className='justify-center'>
          <img className='w-[65%] h-[65%] mb-[220px] mx-auto mt-5 max-lg:w-[220px] max-lg:h-[345px] max-lg:mb-[30px]' src={Frente} alt="" />
        </div>

        <div className='flex-col grow-0 max-lg:mr-0 justify-center items-center text-center'>
          <div>
            <p className='font-Questrial text-[22px] bg-[#D9D9D9] rounded-lg px-[15px] py-[15px] text-center mb-10 max-lg:text-[14px] max-lg:mt-5'>a Vários botões foram implementados. Em sua grande parte podem ser personalizados de acordo com o uso do consumidor, mas em geral, eles podem contar com:</p>
          </div>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-left mb-10 max-lg:text-[12px] shadow2xl'>A - Exercício de respiração</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-left mb-10 max-lg:text-[12px] shadow-2xl'>K - Imagens da natureza</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-left mb-10 max-lg:text-[12px] shadow-2xl'>H - Menu do DARP;</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-left mb-10 max-lg:text-[12px] shadow-2xl'>J - Economia de energia</p>
        </div>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] mb-20 max-lg:mt-[25px] max-lg:mx-[35px]'/>

      <section className='flex-col columns-2 items-center justify-center mt-[100px] mx-[80px] max-lg:mx-[20px] max-lg:mt-[25px]'>

          <div className=''>
            <img className='w-[65%] h-[65%] max-lg:w-[220px] max-lg:h-[255px] mr-auto' src={Tras} alt="" />
          </div>
          <p className='font-Questrial text-[20px] text-center px-5 py-4 bg-[#D9D9D9] rounded-lg mt-[100px] mx-10 w-[78%] max-lg:text-[12px] max-lg:mt-[25px] shadow-2xl max-lg:mx-5'>Pensando em diminuir a poluição causada pela produção do D.A.R.P, resolvemos fazer com que ele carregue via pilhas recarregáveis. Este é um ponto positivo, pois além de visar sua própria estética, a duração de carga também será aumentada drasticamente.</p>

      </section>

      <section>
        <video className='w-[30%] h-[30%] justify-center mx-auto rounded-lg transform rotate-90' controls>
          <source src={Projeto} type="video/mp4" />
        </video>
      </section>

    </main>
  )
}
