import Arduino from '../assets/Arduino.svg'
import Bluetooth from '../assets/Bluetooth.svg'
import Mp3 from '../assets/Mp3.svg'
import Display from '../assets/Display.svg'

function Materiais() {
  return (
    <div className="flex flex-col bg-cinza-back items-center justify-center mt-[150px] max-lg:mt-[80px]">
        <h1 className='text-[90px] font-Questrial max-lg:text-[50px]'>MATERIAIS</h1>
        <p className=' text-center mx-[10px] pt-3 pb-20 text-[26px] font-Questrial max-lg:text-[18px]'>Quais materiais foram utilizados na composição do D.A.R.P?</p>

        <section className='flex-col items-center justify-center text-justify mx-40 w-full'>
            <h2 className='flex justify-center text-[32px] pt-10 mb-24 Roboto-Flex max-lg:text-[30px]'>ARDUÍNO UNO</h2>
           
            <div className='flex-col columns-2 font-Questrial mx-auto max-lg:columns-1'>
                <img src={Arduino} alt="imagem arduino" className='flex justify-center mx-auto w-[380px] mb-20 max-lg:w-[299px] max-lg:h-[235px]'/>
                <p className= 'flex justify-center font-Questrial mx-auto bg-fundo_texto text-[22px] rounded-lg mt-12 text-center mb-20 py-8 px-8 mr-10 max-lg:ml-10 max-lg:text-[14px] shadow-2xl'>O Arduino Uno é uma placa microcontroladora de código aberto baseada no microcontrolador Microchip ATmega328P e desenvolvida pela Arduino.cc e lançada inicialmente em 2010.         
                </p>
            </div>
            
            <h3 className='flex justify-center text-[28px] pb-8 font-Questrial max-lg:text-[22px]'>R$47,40</h3>
        </section>  

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] w-11/12'/>

        <section className='flex-col items-center justify-center text-justify mx-40 w-full'> 
            <h2 className='flex justify-center text-[32px] pt-10 mb-24 Roboto-Flex max-lg:text-[30px] text-center'>MÓDULO BLUETOOTH</h2>
           
            <div className=' columns-2 font-Questrial max-lg:columns-1 max-lg:space-y-[40px]'>
                <p className='flex justify-center font-Questrial bg-fundo_texto text-[22px] rounded-lg mx-auto mt-12 ml-10 px-8 py-8 text-center max-lg:mr-10 max-lg:text-[14px] shadow-2xl'>O Módulo Bluetooth permite a comunicação entre o arduino e outros dispositivos bluetooth por meio de transferência de dados Serial TTL.        
                </p>
                <img src={Bluetooth} alt="imagem bluetooth" className='flex justify-center mx-auto w-[300px] max-lg:w-[182px] max-lg:h-[208px]'/>
            </div>
            
            <h3 className='flex justify-center text-[28px] pt-8 font-Questrial max-lg:text-[22px]'>R$44,56</h3>
        </section>

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] w-11/12'/>

        <section className='flex-col items-center justify-center text-justify mx-40 w-full'>
            <h2 className=' flex justify-center text-[32px] pt-10 mb-24 Roboto-Flex max-lg:text-[30px]'>MÓDULO MP3</h2>
           
            <div className='columns-2 font-Questrial max-lg:columns-1 max-lg:space-y-[40px]'>  
                <img src={Mp3} alt="imagem Mp3" className='mx-auto w-[450px] max-lg:w-[374px] max-lg:h-[286px]'/>
                <p className='font-Questrial bg-fundo_texto text-[22px] rounded-lg mr-10 mt-12 px-8 py-8 text-center max-lg:ml-10 max-lg:text-[14px] shadow-2xl'>O módulo MP3 Arduino é utilizado para armazenamento e reprodução de arquivos de áudio. Esse módulo é composto pelo WTV020-SD que é um circuito microcontrolado para gravação de voz.        
                </p>
            </div>
            
            <h3 className='flex justify-center text-[28px] pt-8 font-Questrial max-lg:text-[22px]'>R$27,69</h3>
        </section>  

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] w-11/12'/>

        <div className='flex-col items-center justify-center text-justify mx-40 w-full'>
            <h2 className='flex justify-center text-[32px] pt-10 mb-24 Roboto-Flex max-lg:text-[30px]'>DISPLAY LCD</h2>
           
            <div className='columns-2 p-10 font-Questrial max-lg:space-y-[40px] max-lg:columns-1'>  
                <p className='font-Questrial bg-fundo_texto text-[22px] rounded-lg mx-auto mt-12 px-8 py-8 text-center max-lg:text-[14px] shadow-2xl'>Um display de cristal líquido, acrônimo de LCD, é um painel fino usado para exibir informações por via eletrônica, como texto, imagens e vídeos.    
                </p>
                <img src={Display} alt="imagem Mp3" className='mx-auto w-[450px] max-lg:w-[478px] max-lg:h-[349.01px]'/>   
            </div>
            
            <h3 className='flex justify-center text-[28px] pt-8 pb-20 Questrial max-lg:text-[22px]'>R$75,91</h3>
        </div>
    </div>

  )
}

export default Materiais
