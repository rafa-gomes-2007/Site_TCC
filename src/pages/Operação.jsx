import Prot1 from '../assets/prot1.png';
import Prot2 from '../assets/prot2.png';
import Prot3 from '../assets/prot3.png';
import Prot4 from '../assets/prot4.png';
import Prot5 from '../assets/prot5.png';

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
          <img className='w-[55%] h-[55%] mb-[220px] mx-auto mt-5 max-lg:w-[220px] max-lg:h-[345px] max-lg:object-bottom' src={Prot1} alt="" />
        </div>

        <div className='flex-col grow-0 max-lg:mr-0 justify-center items-center text-center'>
          <div>
            <p className='font-Questrial text-[22px] bg-[#D9D9D9] rounded-lg px-[15px] py-[15px] text-center mb-10 max-lg:text-[14px] max-lg:mt-5'>Vários botões foram implementados. Em sua grande parte podem ser personalizados de acordo com o uso do consumidor, mas em geral, eles podem contar com:</p>
          </div>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-center mb-10 max-lg:text-[12px] shadow2xl'>F.S: Feedback Sonoro;</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-center mb-10 max-lg:text-[12px] shadow-2xl'>B.I: Botão de interrupção;</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-center mb-10 max-lg:text-[12px] shadow-2xl'>F.V: Feedback Visual;</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-center mb-10 max-lg:text-[12px] shadow-2xl'>T.I: Temporizador Integrado;</p>
          <p className='text-[20px] bg-[#D9D9D9] rounded-lg px-[20px] py-[10px] text-center mb-10 max-lg:text-[12px] shadow-2xl'>D.R: Dados Registrador.</p>
        </div>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] mb-20 max-lg:mt-[25px] max-lg:mx-[35px]'/>

      <section className='flex-col columns-2 items-center justify-center max-lg:columns-1 max-lg:mx-[20px]'>
        <p className='font-Questrial text-[20px] bg-[#D9D9D9] rounded-lg px-[25px] py-[20px] text-center mb-[320px] mt-[50%] ml-[100px] max-lg:text-[12px] max-lg:mt-[25px] max-lg:mb-[25px] max-lg:mx-auto shadow-2xl'>Visando um de seus principais objetivos, sendo ele “simplicidade”, em suas laterais direta e esquerda, D.A.R.P aproveita de um simples layout. Sendo simples e induzível para ligar/desligar. Sem contar com a facilidade para aumentar ou reduzir o volume.</p>

        <div className=''>
          <img className='w-[60%] h-[60%] mx-auto max-lg:w-[220px] max-lg:h-[345px]' src={Prot2} alt="" />
        </div>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mt-[25px] max-lg:mx-[35px]'/>

      <section className='flex items-center justify-center mt-[100px] mx-[80px] max-lg:mx-[20px] max-lg:mt-[25px]'>
          
        <div className='flex-col columns-2 justify-center '>
          <div className=''>
            <img className='w-[55%] h-[55%] max-lg:w-[220px] max-lg:h-[255px] ml-auto mr-5' src={Prot3} alt="" />
          </div>

          <div className=''>
            <img className='w-[55%] h-[55%] max-lg:w-[220px] max-lg:h-[255px] mr-auto' src={Prot4} alt="" />
          </div>
        </div>

      </section>


      <div className='flex justify-center'>
        <p className='font-Questrial text-[20px] text-center px-5 py-4 bg-[#D9D9D9] rounded-lg mt-[100px] mx-10 w-[78%] max-lg:text-[12px] max-lg:mt-[25px] shadow-2xl max-lg:mx-5'>Pensando em diminuir a poluição causada pela produção do D.A.R.P, resolvemos fazer com que ele carregue via pilhas recarregáveis. Este é um ponto positivo, pois além de visar sua própria estética, a duração de carga também será aumentada drasticamente.</p>
      </div>

      

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mt-[25px] max-lg:mx-[35px]'/>
      
      <section className='flex-col columns-2 justify-center items-center mt-[80px] mx-auto max-lg:columns-1 max-lg:mx-[20px] mb-5'>

        <div className='items-center'>
          <img className='w-[45%] h-[450%] mx-auto max-lg:w-[260px] max-lg:h-[355px]' src={Prot5} alt="" />
        </div>

        <div className='flex items-center'>
          <p className='font-Questrial text-center text-[20px] bg-[#D9D9D9] rounded-lg py-5 px-[40px] my-[20%] w-[80%] max-lg:text-[12px] max-lg:mt-[25px] max-lg:mx-auto shadow-2xl'>Para indivíduos que possuem Transtorno Obsessivo Compulsivo, uma capa foi planejada para que a higiene do D.A.R.P possa ser mantida. Está capa é feita de silicone, um material satisfatório ao tocar e simples de lavar. </p>
        </div>

      </section>

    </main>
  )
}
