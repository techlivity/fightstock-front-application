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
        <div className='text-white w-[85%] font-gabarito flex flex-col m-auto'>
            <h1 className='text-2xl font-bold mt-10 m-auto'>Política de Privacidade - Fight Stock</h1>
            <br/>
            <p className='m-auto'>Estas Políticas de Privacidade descrevem como coletamos, usamos e protegemos as informações pessoais que você nos fornece ao utilizar nosso site.</p>
            <br/>
            <p className='text-lg font-bold'>
                1. Informações Coletadas
            </p>
                <p className='ml-10'>
                    1.1 Ao utilizar nosso site, podemos coletar informações pessoais fornecidas por você, incluindo, mas não se limitando a, nome, endereço de e-mail, endereço de entrega, informações de pagamento e outras informações necessárias para processar seus pedidos.
                    <br/>
                    1.2 Também podemos coletar informações automaticamente, incluindo endereço IP, tipo de navegador, páginas visitadas e dados de cookies, para melhorar sua experiência de usuário e fornecer conteúdo personalizado.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                2. Uso das Informações
            </p>
                <p className='ml-10'>
                    2.1 Utilizamos as informações pessoais fornecidas por você para processar seus pedidos, fornecer suporte ao cliente, personalizar sua experiência de usuário e comunicar ofertas especiais e novidades sobre nossos produtos.
                    <br/>
                    2.2 Não compartilhamos suas informações pessoais com terceiros para fins de marketing sem o seu consentimento expresso.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                3. Cookies e Tecnologias Semelhantes
            </p>
                <p className='ml-10'>
                    3.1 Utilizamos cookies e tecnologias semelhantes para coletar informações sobre o uso do site e melhorar nossos serviços. Você pode optar por desativar os cookies em seu navegador, no entanto, isso pode afetar a funcionalidade do site.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                4. Segurança da Informação
            </p> 
                <p className='ml-10'>
                    4.1 Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                5. Links para Sites de Terceiros
            </p>
                <p className='ml-10'>
                    5.1 Nosso site pode conter links para sites de terceiros. Esta Política de Privacidade se aplica apenas ao nosso site e não somos responsáveis pelas práticas de privacidade de outros sites. Recomendamos que você revise as políticas de privacidade desses sites.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                6. Menores de Idade
            </p>
                <p className='ml-10'>
                    6.1 Nosso site não é direcionado a menores de 18 anos e não coletamos intencionalmente informações pessoais de menores de idade. Se tomarmos conhecimento de que coletamos informações pessoais de um menor sem o consentimento dos pais, tomaremos medidas para remover essas informações de nossos servidores.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                7. Alterações nesta Política de Privacidade
            </p>
                <p className='ml-10'>
                    7.1 Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento, publicando a versão revisada em nosso site. O uso contínuo do site após qualquer alteração constitui aceitação dessas alterações.
                </p>
            <br/>
            <br/>
            <p className='text-md m-auto font-bold'>
                Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco através dos canais fornecidos em nosso site.
            </p>
            <br/>
            <p className='text-sm text-slate-400 m-auto'>
                Última atualização: 10 de abril de 2024.
            </p>
        </div>
      <Footer footer={data.footer}></Footer>
    </main>
  );
}
