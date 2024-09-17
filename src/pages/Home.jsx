import Cruz from "../assets/cruz-vermelha 1.png";
import Peq from "../assets/pequeno 1.png";
import Mul from "../assets/auxiliar-de-marcha 1.png";

export default function Home() {
  return (
    <main className="flex-col justify-center items-center mt-5">

      <section className="text-center font-Questrial">
        <h1 className="text-[164px] max-lg:text-[91px]">D.A.R.P</h1>
        <p className="text-[32px] mb-20 max-lg:text-[20px]">Dispositivo de Ajuda Repetitiva Psicológica</p>
        <p className="text-[32px] bg-[#D9D9D9] mb-[100px] px-[20px] py-[20px] mx-[100px] rounded-lg max-lg:text-[14px] max-lg:mx-[20px] shadow-2xl">Um produto que auxilia pessoas com Transtorno Obsessivo-Compulsivo (TOC), Transtorno de Pânico (TP) e Transtorno de ansiedade generalizada (TAG) utilizando Arduíno. O dispositivo pode ser personalizado de acordo com as necessidades específicas de cada pessoa. </p>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mx-[30px]'/>

      <div className="flex-col items-center mt-[80px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text[65px] Roboto-Flex">Objetivo</h2>
        <p className="text-[32px] text-center mt-[15px] max-lg:[16px] font-Questrial">Quais são o nosso objetivo com esse produto?</p>
        <section className="flex columns-3 justify-center mt-[100px] max-lg:flex-col max-lg:columns-1 max-lg:space-y-10 font-Questrial">
          <card className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] space-y-[50px] ml-auto px-5
          py-5 shadow-2xl rounded-lg max-lg:w-[80%] max-lg:mx-auto max-lg:space-y-[25px] ">
            <h3 className="text-[41px] max-lg:text[28px]">Tratamento</h3>
            <img className="mx-auto my-[10px] max-lg:my-5 max-lg:w-[91px] max-lg:h-[73px]" src={Cruz} alt="" />
            <p className="text-justify text-[27px] mx-auto mt-[40px] max-lg:text-[14px] max-lg:text-justify max-lg:tracking-[0.25rem]"> Ajudar e diminuir a quantidade exorbitante de crises da atualidade. <br /> <br />
            Uma forma de fazer isso seria as tratando pela raiz, e influenciando outras pessoas a fazer uso de nosso produto, que tem capacidade de fazer esse trabalho.</p>
          </card>
          
          <card className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] space-y-[50px] mx-auto px-5 py-5 shadow-2xl rounded-lg max-lg:w-[80%] max-lg:mx-auto max-lg:space-y-[25px]">
            <h3 className="text-[41px] max-lg:text-[28px]">Minimalista</h3>
            <img className="mx-auto my-[10px] max-lg:w-[76px] max-lg:h-[75px]" src={Peq} alt="" />
            <p className="text-justify text-[27px] mx-auto max-lg:text-[14px] max-lg:text-center max-lg:tracking-[0.25rem]"> Nosso compromisso é fornecer uma experiência minimalista e acessível a qualquer indivíduo que usufrua de nosso produto, site ou aplicativo. <br /> <br /> Isso porque o público alvo que está sendo visado, pode ter T.O.C. Ou seja, se incomodar com o qualquer tipo de design que não seja optimizado para ele(a).</p>
          </card>

          <card className="text-center bg-gradient-to-b from-[#FFFEFE] via-[#F3F2F2] to-pink-[#D9D9D9] w-[470px] space-y-[50px] mr-auto px-5
          py-5 shadow-2xl rounded-lg max-lg:w-[80%] max-lg:mx-auto max-lg:space-y-[25px] max-lg:h-[456px]">
            <h3 className="text-[41px] max-lg:text-[28px]" >Auxiliar</h3>
            <img className="mx-auto my-[10px] max-lg:w-[71px] max-lg:h-[72px]" src={Mul} alt="" />
            <p className="text-justify text-[27px] mx-auto max-lg:text-[14px] max-lg:text-justify max-lg:tracking-[0.25rem]"> Conseguir com que as pessoas possam ser auxiliadas em qualquer lugar. <br /> <br />Uma facilidade de acesso em qualquer lugar é um de nossos diferenciais. Você não precisar estar em um lugar específico para utilizar nosso produto é reconfortante não acha?</p>
          </card>
        </section>
      </div>
      
      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mx-[30px]'/>

      <section className="flex-col items-center mt-[50px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text-[65px] Roboto-Flex">Público Alvo</h2>
        <p className="text-[32px] text-center mb-[80px] max-lg:text-[16px] font-Questrial">A quem pretendemos entregar nosso produto final</p>
        <p className="text-[32px] text-center bg-[#D9D9D9] mb-[100px] px-[20px] py-[20px] mx-[100px] rounded-lg max-lg:text-[14px] max-lg:mx-[20px] font-Questrial shadow-2xl">Este público inclui pessoas de todas as idades que sofrem de transtornos de ansiedade, ataques de pânico, fobias, estresse crônico e outras condições relacionadas. Essas pessoas muitas vezes enfrentam dificuldades em lidar com situações cotidianas, relacionamentos pessoais e profissionais, e podem sentir-se sobrecarregadas pela intensidade de suas emoções.</p>
      </section>

      <hr className='bg-[#D9D9D9] mt-[100px] mx-[120px] h-[8px] max-lg:mx-[30px]'/>

      <section className="flex-col items-center mt-[50px]">
        <h2 className="text-[96px] text-center my-auto max-lg:text-[65px] Roboto-Flex">Diferencial</h2>
        <p className="text-[32px] text-center mb-[80px] max-lg:text-[16px] font-Questrial">Pontos que podemos oferecer a mais </p>
        <ul className="flex-col columns-1 items-center text-center mx-[100px] justify-center font-Questrial max-lg:mx-[20px]">
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] mx-auto px-[20px] py-[20px] rounded-lg max-lg:text-[18px] shadow-2xl">Alta Mobilidade</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg max-lg:text-[18px] shadow-2xl">Ajuda Imediata</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg max-lg:text-[18px] shadow-2xl">Organizador</li>
          <li className="text-[32px] bg-[#D9D9D9] mb-[50px] px-[20px] py-[20px] mx-auto rounded-lg max-lg:text-[18px] shadow-2xl">Botão de Emergência</li>
        </ul>
      </section>
    </main>
  )
}
