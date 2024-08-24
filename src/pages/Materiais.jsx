import Arduino from '../assets/Arduino.svg'
import Bluetooth from '../assets/Bluetooth.svg'
import Mp3 from '../assets/Mp3.svg'
import Display from '../assets/Display.svg'

function Materiais() {
  return (
    <div className="bg-cinza-back items-center justify-center flex flex-col w-screen">
        <h1 className='text-[164px] pt-7 font-Questrial'>Materiais</h1>
        <p className='pt-3 pb-20 text-[32px] font-Questrial'>Quais materiais foram utilizados na composição do D.A.R.P?</p>

        <div className='flex items-center justify-center flex-col space-x-4 text-justify mx-40 w-full'>
            <h2 className='text-[50px] pt-10 mb-24 font-Roboto-Flex'>ARDUÍNO UNO</h2>
           
            <div className='space-x-2 grid grid-cols-2 gap-40 font-Questrial'>
                <img src={Arduino} alt="imagem arduino" className=' w-[380px] mb-20'/>
                <p className='bg-fundo_texto h-[200px] w-[600px] text-[28px] rounded-lg ml-22 mt-12 text-center mb-20 pb-8'>O Arduino Uno é uma placa microcontroladora de código aberto baseada no microcontrolador Microchip ATmega328P e desenvolvida pela Arduino.cc e lançada inicialmente em 2010.         
                </p>
            </div>
            
            <h3 className='text-[45px] pb-8 font-Questrial'>R$47,40</h3>
        </div>  

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

        <div className='flex items-center justify-center flex-col space-x-4 text-justify mx-40 w-full'> 
            <h2 className='text-[50px] pt-10 mb-24 font-Roboto-Flex'>MÓDULO BLUETOOTH</h2>
           
            <div className='space-x-32  grid grid-cols-2 gap-40 font-Questrial'>
                <p className='bg-fundo_texto h-[200px] w-[600px] text-[28px] rounded-lg ml-18 mt-12  text-center'>O Módulo Bluetooth permite a comunicação entre o arduino e outros dispositivos bluetooth por meio de transferência de dados Serial TTL.        
                </p>
                <img src={Bluetooth} alt="imagem bluetooth" className='w-[300px]'/>
            </div>
            
            <h3 className='text-[45px] pt-8 font-Questrial'>R$44,56</h3>
        </div>

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

        <div className='flex items-center justify-center flex-col space-x-4 text-justify mx-40 w-full'>
            <h2 className='text-[50px] pt-10 mb-24 font-Roboto-Flex'>MÓDULO MP3</h2>
           
            <div className='flex space-x-16  grid-cols-2 gap-40 p-4 font-Questrial'>  
                <img src={Mp3} alt="imagem Mp3" className='w-[450px]'/>
                <p className='bg-fundo_texto h-[200px] w-[650px] text-[28px] rounded-lg ml-18 mt-12  text-center'>O módulo MP3 Arduino é utilizado para armazenamento e reprodução de arquivos de áudio. Esse módulo é composto pelo WTV020-SD que é um circuito microcontrolado para gravação de voz.        
                </p>
            </div>
            
            <h3 className='text-[45px] pt-8 font-Questrial'>R$27,69</h3>
        </div>  

        <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

        <div className='flex items-center justify-center flex-col space-x-4 text-justify mx-40 w-full'>
            <h2 className='text-[50px] pt-10 mb-24 font-Roboto-Flex'>DISPLAY LCD</h2>
           
            <div className='flex space-x-12  grid-cols-2 gap-40 p-10 font-Questrial'>  
                <p className='bg-fundo_texto h-[200px] w-[650px] text-[28px] rounded-lg ml-18 mt-12  text-center'>Um display de cristal líquido, acrônimo de LCD, é um painel fino usado para exibir informações por via eletrônica, como texto, imagens e vídeos.    
                </p>
                <img src={Display} alt="imagem Mp3" className='w-[450px]'/>   
            </div>
            
            <h3 className='text-[45px] pt-8 pb-20 font-Questrial'>R$75,91</h3>
        </div>
    </div>

  )
}

export default Materiais
