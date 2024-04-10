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
            <h1 className='text-2xl font-bold mt-10 m-auto'>Termos de Serviço - Fight Stock</h1>
            <br/>
            <p className='m-auto'>Estes Termos de Serviço regem o uso do nosso website e os serviços oferecidos pela Fight Stock. Ao acessar ou usar nosso site, você concorda com estes Termos.</p>
            <br/>
            <p className='text-lg font-bold'>
                1. Uso do Site
            </p>
                <p className='ml-10'>
                    1.1 Ao utilizar o site da Fight Stock, você concorda em cumprir todas as leis aplicáveis e regulamentos, bem como estes Termos de Serviço.
                    <br/>
                    1.2 Você é responsável por garantir que todas as informações fornecidas durante o uso do site sejam precisas e atualizadas.
                    <br/>
                    1.3 Não utilize o site para qualquer propósito ilegal ou não autorizado.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                2. Conta do Usuário
            </p>
                <p className='ml-10'>
                    2.1 Para acessar determinadas áreas do site ou utilizar certos recursos, você pode precisar criar uma conta de usuário. Ao criar uma conta, você concorda em fornecer informações precisas e completas.
                    <br/>
                    2.2 Você é responsável por manter a segurança de sua conta e senha. Qualquer atividade realizada através de sua conta é de sua responsabilidade.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                3. Produtos e Serviços
            </p>
                <p className='ml-10'>
                    3.1 A Fight Stock oferece uma variedade de produtos relacionados a lutas e artes marciais. Nós nos esforçamos para fornecer descrições precisas e imagens representativas de nossos produtos, no entanto, não podemos garantir a precisão de todas as informações.
                    <br/>
                    3.2 Reservamo-nos o direito de modificar ou descontinuar qualquer produto a qualquer momento, sem aviso prévio.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                4. Pedidos e Pagamentos
            </p> 
                <p className='ml-10'>
                    4.1 Ao fazer um pedido através do nosso site, você concorda em fornecer informações precisas e atualizadas de pagamento e envio.
                    <br/>
                    4.2 O preço dos produtos está sujeito a alterações sem aviso prévio. Os preços exibidos no momento da compra serão aplicáveis.
                    <br/>
                    4.3 Nos reservamos o direito de recusar ou cancelar pedidos a nosso critério exclusivo, incluindo pedidos que possam violar estes Termos.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                5. Envio e Entrega
            </p>
                <p className='ml-10'>
                    5.1 Faremos o possível para garantir que os produtos sejam enviados e entregues dentro dos prazos estimados, no entanto, não podemos garantir prazos de entrega específicos.
                    <br/>
                    5.2 Você é responsável por fornecer um endereço de entrega preciso e completo. Não nos responsabilizamos por pacotes perdidos devido a informações de entrega imprecisas ou incompletas.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                6. Devoluções e Reembolsos
            </p>
                <p className='ml-10'>
                    6.1 Aceitamos devoluções de produtos dentro de um período especificado após a entrega, sujeito aos nossos Termos e Condições de Devolução.
                    <br/>
                    6.2 Os reembolsos serão processados de acordo com nossa política de reembolso e podem estar sujeitos a taxas de reposição.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                7. Propriedade Intelectual
            </p>
                <p className='ml-10'>
                    7.1 Todo o conteúdo presente em nosso site, incluindo texto, gráficos, logotipos, imagens e software, é de propriedade da Fight Stock ou de nossos licenciantes e é protegido por leis de direitos autorais.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                8. Limitação de Responsabilidade
            </p>
                <p className='ml-10'>
                    8.1 Em nenhuma circunstância a Fight Stock, seus diretores, funcionários, afiliados, agentes, fornecedores ou licenciantes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, receitas, dados ou uso.
                </p>
            <br/>
            <p className='text-lg font-bold'>
                9. Disposições Gerais
            </p>
                <p className='ml-10'>
                    9.1 Estes Termos de Serviço constituem o acordo completo entre você e a Fight Stock e regem o uso do site, substituindo qualquer acordo anterior entre você e a Fight Stock.
                    <br/>
                    9.2 Estes Termos serão regidos e interpretados de acordo com as leis do Brasil.
                    <br/>
                    9.3 Reservamo-nos o direito de modificar ou revisar estes Termos a qualquer momento, publicando a versão revisada no site. O uso contínuo do site após qualquer alteração constitui aceitação dessas alterações.
                </p>
            <br/>
            <p className='text-md m-auto font-bold'>
                Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através dos canais fornecidos em nosso site.
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
