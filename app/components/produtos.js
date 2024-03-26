import React from 'react';
import Image from 'next/image';

import promo from "../public/promo.png"
import promo2 from "../public/promo2.png"

import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const ProductList_Component = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-8">
      <div className='flex flex-wrap justify-between w-[80%] h-auto'>
        <div className='flex m-auto w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl mb-10 text-zinc-50 drop-shadow-lg'>Conheça nossos produtos</h1>
        </div>
        {items.produtos.map(item => (
          <div className="flex text-[#FFFFFF]  justify-center font-protest-guerrila rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-2xl mt-3 font-semibold">{item.titulo}</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' height={300} width={240} src={item.image} />
          </button>
        </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-between w-[80%] h-auto'>
        <div className='flex w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Produtos em Destaque</h1>
        </div>
        {items.produtos_em_promocoes.map(item_especial => (
          <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl h-[300px] w-[24%]">
          <button className='flex justify-center'>
            <h1 className="absolute text-md mt-64 font-semibold">{item_especial.titulo}</h1>
            <Image className='h-[300px] w-[240px] shadow-md shadow-black rounded-2xl' height={300} width={240} src={item_especial.image} />
            <MagnifyingGlassIcon className="h-7 w-7 absolute left-12 top-3 text-[#000]" />
          </button>
        </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-evenly mb-5 w-[80%] h-auto'>
        <div className='flex w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Promoções Especiais</h1>
        </div>

        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo} />
          </button>
        </div>
        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo2} />
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductList_Component;