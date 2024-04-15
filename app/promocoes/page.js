import data from "../api.json";
import React from 'react';
import Image from 'next/image';
import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Nav_bar_component from '../components/nav';
import Carousel_Component from '../components/carousel';
import Footer from "../components/footer"

export default function Home() {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
      <Carousel_Component items={data.carrossel}></Carousel_Component>
        <div className='flex flex-wrap justify-between w-[75%] h-auto m-auto'>
            <div className='flex w-full justify-center'>
                <h1 className='font-protest-guerrila flex text-3xl mt-10 text-zinc-50 drop-shadow-lg'>Produtos em Promoção</h1>
            </div>
            {data.produtos_em_promocoes.map(item_especial => (
            <div key={item_especial.id} className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl shadow-md shadow-black hover:shadow-white duration-300 ease-in h-[300px] w-[15rem]">
                <button className='flex justify-center'>
                <h1  className="absolute text-md mt-64 font-semibold">{item_especial.titulo}</h1>
                <Image className='h-[300px] w-[15rem] rounded-2xl' height={300} width={240} src={item_especial.image} alt="promo product image"/>
                </button>
                <span className='w-0'>
                    <MagnifyingGlassIcon className="h-7 w-7 relative right-56 top-3 text-[#000]" />
                </span>
            </div>
            ))}
        </div>
      <Footer footer={data.footer}></Footer>
    </main>
  );
}
