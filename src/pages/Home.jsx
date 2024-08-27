import Cruz from "../assets/cruz-vermelha 1.png";
import Peq from "../assets/pequeno 1.png";
import Mul from "../assets/auxiliar-de-marcha 1.png"

export default function Home() {
  return (
    <main className="flex-col justify-center items-center mt-5">
      <section className="text-center font-Questrial">
        <h1 className="text-[164px] max-lg:text-[91px]">D.A.R.P</h1>
        <p className="text-[32px] mb-20 max-lg:text-[20px]">Dispositivo de Ajuda Repetitiva Psicológica</p>
        <p className="text-[32px] bg-[#D9D9D9] mb-[100px] px-[20px] py-[20px] mx-[100px] rounded-lg max-lg:text-[14px]">Um produto que auxilia pessoas com Transtorno Obsessivo-Compulsivo (TOC), Transtorno de Pânico (TP) e Transtorno de ansiedade generalizada (TAG) utilizando Arduíno. O dispositivo pode ser personalizado de acordo com as necessidades específicas de cada pessoa. </p>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

      <div className="flex-col items-center mt-[80px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text[65px] Roboto-Flex">Objetivo</h2>
        <p className="text-[32px] text-center mt-[15px] max-lg:[16px] font-Questrial">Quais são o nosso objetivo com esse produto?</p>
        <section className="flex columns-3 justify-center mt-[100px] max-lg:flex-col max-lg:columns-1 max-lg:space-y-10 font-Questrial">
          <div className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] ml-auto px-5
          py-5 shadow-2xl rounded-lg max-lg:mx-auto">
            <h3 className="text-[41px] max-lg:text[28px]">Tratamento</h3>
            <img className="mx-auto my-[10px] max-lg:my-5" src={Cruz} alt="" />
            <p className="text-justify text-[27px] mx-auto mt-[40px] max-lg:text-[14px] max-lg:text-center"> Ajudar e diminuir a quantidade exorbitante de crises da atualidade. <br /> <br />
            Uma forma de fazer isso seria as tratando pela raiz, e influenciando outras pessoas a fazer uso de nosso produto, que tem capacidade de fazer esse trabalho.</p>
          </div>
          
          <div className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] mx-auto px-5
          py-5 shadow-2xl rounded-lg">
            <h3 className="text-[41px] max-lg:text-[28px]">Minimalista</h3>
            <img className="mx-auto my-[10px]" src={Peq} alt="" />
            <p className="text-justify text-[27px] mx-auto max-lg:text-[14px] max-lg:text-center"> Nosso compromisso é fornecer uma experiência minimalista e acessível a qualquer indivíduo que usufrua de nosso produto, site ou aplicativo. <br /> <br /> Isso porque o público alvo que está sendo visado, pode ter T.O.C. Ou seja, se incomodar com o qualquer tipo de design que não seja optimizado para ele(a).</p>
          </div>

          <div className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] mr-auto px-5
          py-5 shadow-2xl rounded-lg max-lg:mx-auto">
            <h3 className="text-[41px] max-lg:text-[28px]" >Auxiliar</h3>
            <img className="mx-auto my-[10px]" src={Mul} alt="" />
            <p className="text-justify text-[27px] mx-auto max-lg:text-[14px] max-lg:text-center"> Conseguir com que as pessoas possam ser auxiliadas em qualquer lugar. <br /> <br />Uma facilidade de acesso em qualquer lugar é um de nossos diferenciais. Você não precisar estar em um lugar específico para utilizar nosso produto é reconfortante não acha?</p>
          </div>
        </section>
      </div>
      
      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

      <section className="flex-col items-center mt-[50px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text-[65px] Roboto-Flex">Público Alvo</h2>
        <p className="text-[32px] text-center mb-[80px] max-lg:text-[16px] font-Questrial">A quem pretendemos entregar nosso produto final</p>
        <p className="text-[32px] bg-[#D9D9D9] mb-[100px] px-[20px] py-[20px] mx-[100px] rounded-lg max-lg:text-[14px] font-Questrial">Este público inclui pessoas de todas as idades que sofrem de transtornos de ansiedade, ataques de pânico, fobias, estresse crônico e outras condições relacionadas. Essas pessoas muitas vezes enfrentam dificuldades em lidar com situações cotidianas, relacionamentos pessoais e profissionais, e podem sentir-se sobrecarregadas pela intensidade de suas emoções.</p>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px]'/>

      <section className="flex-col items-center mt-[50px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text-[65px] Roboto-Flex">Diferencial</h2>
        <p className="text-[32px] text-center mb-[80px] max-lg:text-[16px] font-Questrial">Pontos que podemos oferecer a mais </p>
        <ul className="flex-col columns-1 items-center text-center mx-auto justify-center font-Questrial">
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] mx-auto px-[20px] py-[20px] rounded-lg w-[1006px] max-lg:text-[18px] max-lg:w-[369px]">Alta Mobilidade</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg w-[1006px] max-lg:text-[18px] max-lg:w-[369px]">Ajuda Imediata</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg w-[1006px] max-lg:text-[18px] max-lg:w-[369px]">Organizador</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg w-[1006px] max-lg:text-[18px] max-lg:w-[369px]">Botão de Emergência</li>
        </ul>
      </section>
    </main>
  )
}
