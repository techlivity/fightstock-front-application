"use client"
import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/logo.png"

const Footer = ({ footer }) => {
  const renderFooterLinks = () => (
    footer.links_uteis.map(link => (
      <Link className='hover:text-red-600 duration-200 ease-in w-fit' href={`${link.url}`} key={link.id}>
        {link.titulo}
      </Link>
    ))
  );

  const renderRedesSociais = () => (
    footer.redes_sociais.map(item => (
      <Link target='blank' className='hover:text-red-600 duration-200 ease-in w-fit' href={`${item.url}`} key={item.id}>
        {item.nome}
      </Link>
    ))
  );

  return (
    <footer className="w-full h-fit py-2 bottom-0 bg-[#420D09] text-white pb-2 px-8 mt-8 flex flex-row">
      <a className='m-auto' href='/'>  
        <Image className="w-40 mr-40" src={logo} alt="logo image"></Image>
      </a>
      <div className="w-full justify-center font-signika grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className='w-fit flex flex-col'>
          <h2 className="font-signika text-xl">Links Úteis</h2>
          {renderFooterLinks()}
        </div>
        <div className='w-fit flex flex-col'>
          <h2 className="font-signika text-xl">Redes Sociais</h2>
          {renderRedesSociais()}
        </div>
        <div>
          <h2 className="font-signika text-xl">Contato</h2>
          <p>{footer.contato.telefone}</p>
          <p>{footer.contato.email}</p>
          <p>{footer.contato.endereco}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
