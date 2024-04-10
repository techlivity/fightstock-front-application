import Link from 'next/link';
import data from "../api.json";
import Carousel_Component from '../components/carousel';
import ProductList_Component from '../components/produtos';
import Nav_bar_component from '../components/nav';
import Footer from "../components/footer"

export default function Home() {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
        <div className='text-white w-[85%] flex flex-col m-auto'>
            <h1 className='text-2xl font-bold mt-10 m-auto'>Sobre Nós: A Jornada da Luta e Disciplina</h1>
            <br/>
            <p>Bem-vindo à nossa loja de produtos de luta e artes marciais! Aqui, a paixão pela força, a busca pela excelência e a disciplina se entrelaçam para criar uma experiência única para nossos clientes.</p>
            <br/>
            <p>Nossa história começa nas montanhas remotas do Japão, onde um jovem mestre de artes marciais, chamado Hiroshi, dedicou sua vida à busca do equilíbrio entre mente, corpo e espírito. Ele treinou incansavelmente, aprimorando suas habilidades e desenvolvendo uma profunda compreensão das artes marciais.</p>
            <br/>
            <p>Hiroshi viajou pelo mundo, estudando com os melhores mestres e aprendendo técnicas antigas que haviam sido transmitidas por gerações. Ele percebeu que as artes marciais não eram apenas sobre combate físico, mas também sobre autodomínio, respeito e honra.</p>
            <br/>
            <p>Com esse conhecimento, Hiroshi fundou nossa loja. Ele queria compartilhar sua paixão pelas artes marciais com o mundo, oferecendo produtos autênticos e de alta qualidade para praticantes de todas as idades e níveis de habilidade. Assim nasceu a “Fight Stock”.</p>
            <br/>
            <p className='font-bold'>
                O que nos diferencia:
            </p>
            <br/>
                <p>
                    1. Qualidade Superior: Selecionamos cuidadosamente cada produto em nossa loja, garantindo que ele atenda aos mais altos padrões de qualidade. Desde quimonos tradicionais até luvas de boxe, nossos produtos são feitos para durar.
                    <br/>
                    <br/>
                    2. Variedade e Especialização: Oferecemos uma ampla variedade de produtos, desde katanas afiadas até sacos de pancada resistentes. Nossos especialistas estão sempre disponíveis para ajudá-lo a escolher o equipamento certo para suas necessidades.
                    <br/>
                    <br/>
                    3. Comunidade e Respeito: Acreditamos que as artes marciais são mais do que apenas movimentos físicos. Elas criam uma comunidade de pessoas apaixonadas, unidas pelo respeito mútuo e pela busca constante de aprimoramento.
                    <br/>
                    <br/>
                    4. Entrega Rápida e Atendimento Personalizado: Nosso compromisso é entregar seus produtos rapidamente, para que você possa continuar sua jornada de treinamento sem interrupções. Além disso, estamos sempre aqui para responder às suas perguntas e fornecer orientação.
                </p>
            <br/>
            <p>
                Junte-se a nós na busca pela excelência, pela superação dos limites e pela honra. Seja você um iniciante ou um mestre experiente, a “Fight Stock” está aqui para apoiá-lo em sua jornada. Arme-se com coragem, treine com paixão e siga o caminho do guerreiro com orgulho!
            </p>
            <br/>
            <p className='text-[15rem] opacity-[0.02] absolute right-[20%] top-[50%] font-bold text-slate-400 m-auto'>
                OSS!🥋
            </p>
        </div>
      <Footer footer={data.footer}></Footer>
    </main>
  );
}
