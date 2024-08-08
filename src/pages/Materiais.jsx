import Arduino from '../assets/arduino.png'
import Bluetooth from '../assets/bluetooth.png'
import Mp3 from '../assets/mp3.png'
import Switch from '../assets/switch.png'

function Materiais() {
  return (
    <div className="bg-cinza-back flex items-center justify-center flex flex-col">
        <h1 className='text-5xl pt-7'>Materiais</h1>
        <p className='pt-3'>Quais materiais foram utilizados na composição do D.A.R.P?</p>

        <section className='flex items-center justify-center flex flex-col space-x-4 text-justify mx-40'>
            <h2 className='text-3xl pt-10 mb-8'>ARDUÍNO UNO</h2>
           
            <div className='flex space-x-4 grid grid-cols-2 gap-40 p-4'>
                <img src={Arduino} alt="imagem arduino" className='w-80'/>
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-12 text-center'>O Arduino Uno é uma placa microcontroladora de código aberto baseada no microcontrolador Microchip ATmega328P e desenvolvida pela Arduino.cc e lançada inicialmente em 2010.         
                </div>
            </div>
            
            <h3 className='text-4xl'>R$47,40</h3>
        </section>
     
    <hr/>

        <section className='flex items-center justify-center flex flex-col space-x-4 text-justify mx-40'>
            <h2 className='text-3xl pt-10 mb-8'>MÓDULO BLUETOOTH</h2>
           
            <div className='flex space-x-4 grid grid-cols-2 gap-40 p-4'>
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 text-center'>O Módulo Bluetooth permite a comunicação entre o arduino e outros dispositivos bluetooth por meio de transferência de dados Serial TTL.        
                </div>
                <img src={Bluetooth} alt="imagem bluetooth" className='w-64 h-68'/>
            </div>
            
            <h3 className='text-4xl'>R$44,56</h3>
        </section>
    <hr/>
        <section className='flex items-center justify-center flex flex-col space-x-4 text-justify mx-40'>
            <h2 className='text-3xl pt-10 mb-8'>MÓDULO MP3</h2>
           
            <div className='flex space-x-4 grid grid-cols-2 gap-40 p-4'>  
                <img src={Mp3} alt="imagem Mp3" className='w-64 h-68'/>
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 text-center'>O módulo MP3 Arduino é utilizado para armazenamento e reprodução de arquivos de áudio. Esse módulo é composto pelo WTV020-SD que é um circuito microcontrolado para gravação de voz.        
                </div>
            </div>
            
            <h3 className='text-4xl'>R$27,69</h3>
        </section>
    <hr/>
        <section className='flex items-center justify-center flex flex-col space-x-4 text-justify mx-40'>
            <h2 className='text-3xl pt-10 mb-8'>SWITCH BLUE</h2>
           
            <div className='flex space-x-4 grid grid-cols-2 gap-40 p-4'>  
                <div className='bg-fundo_texto h-24 rounded-lg ml-18 mt-20 text-center mb-44'>Os switches são peças fundamentais dos teclados mecânicos, responsáveis pelo controle do contato entre as teclas e a placa do circuito.        
                </div>
                <img src={Switch} alt="imagem Mp3" className='w-80 h-80'/>
                
            </div>
            
            <h3 className='text-4xl'>R$25,85</h3>
        </section>
    </div>

  )
}

export default Materiais