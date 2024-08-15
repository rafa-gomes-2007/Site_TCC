import Arduino from '../assets/arduino.png'
import Bluetooth from '../assets/bluetooth.png'
import Mp3 from '../assets/mp3.png'
import Display from '../assets/display.png'

function Materiais() {
  return (
    <div className="bg-cinza-back items-center justify-center flex flex-col w-screen">
        <h1 className='text-5xl pt-7'>Materiais</h1>
        <p className='pt-3'>Quais materiais foram utilizados na composição do D.A.R.P?</p>

        <section className='flex items-center justify-center flex-col space-x-4 text-justify mx-40 w-1/2'>
            <h2 className='text-3xl pt-10 mb-8'>ARDUÍNO UNO</h2>
           
            <div className='space-x-4 grid grid-cols-2 gap-40'>
                <img src={Arduino} alt="imagem arduino" className='w-80 '/>
                <p className='bg-fundo_texto h-24 rounded-lg ml-18 mt-12 text-center mb-8 pb-8'>O Arduino Uno é uma placa microcontroladora de código aberto baseada no microcontrolador Microchip ATmega328P e desenvolvida pela Arduino.cc e lançada inicialmente em 2010.         
                </p>
            </div>
            
            <h3 className='text-4xl pb-16'>R$47,40</h3>
        </section>  
        <section className='flex items-center justify-center  flex-col space-x-4 text-justify mx-40 w-1/2'> 
            <h2 className='text-3xl pt-10 mb-8'>MÓDULO BLUETOOTH</h2>
           
            <div className=' space-x-4 grid grid-cols-2 gap-40'>
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 text-center pb-8'>O Módulo Bluetooth permite a comunicação entre o arduino e outros dispositivos bluetooth por meio de transferência de dados Serial TTL.        
                </div>
                <img src={Bluetooth} alt="imagem bluetooth" className='w-64 h-68'/>
            </div>
            
            <h3 className='text-4xl pb-16'>R$44,56</h3>
        </section>
        <section className='flex items-center justify-center  flex-col space-x-4 text-justify mx-40 w-1/2'>
            <h2 className='text-3xl pt-10 mb-8'>MÓDULO MP3</h2>
           
            <div className='flex space-x-4  grid-cols-2 gap-40 p-4'>  
                <img src={Mp3} alt="imagem Mp3" className='w-64 h-68'/>
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 text-center pb-10 px-2'>O módulo MP3 Arduino é utilizado para armazenamento e reprodução de arquivos de áudio. Esse módulo é composto pelo WTV020-SD que é um circuito microcontrolado para gravação de voz.        
                </div>
            </div>
            
            <h3 className='text-4xl pb-16'>R$27,69</h3>
        </section>  
        <section className='flex items-center justify-center  flex-col space-x-4 text-justify mx-40 w-1/2'>
            <h2 className='text-3xl pt-10 mb-8'>DISPLAY LCD</h2>
           
            <div className='flex space-x-4  grid-cols-2 gap-40 p-10'>  
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 py-2 px-8 text-center'>Um display de cristal líquido, acrônimo de LCD, é um painel fino usado para exibir informações por via eletrônica, como texto, imagens e vídeos.    
                </div>
                <img src={Display} alt="imagem Mp3" className='w-64 h-68'/>   
            </div>
            
            <h3 className='text-4xl pb-16'>R$75,91</h3>
        </section>
    </div>

  )
}

export default Materiais
