import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import promo from "../public/promo.png"
import promo2 from "../public/promo2.png"


const ProductList_Component = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-8">
      <div className='flex flex-wrap justify-between w-[75%] h-auto'>
        <div className='flex m-auto w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl mb-10 text-zinc-50 drop-shadow-lg'>Confira nossos produtos</h1>
        </div>
        {items.produtos.map(item => (
          <div key={item.id} className="flex text-[#FFFFFF]  justify-center font-protest-guerrila rounded-3xl h-[300px] w-[15rem]">
            <button key={item.id} className='flex justify-center'>
              <h1 className="absolute text-xl mt-3 font-semibold">{item.titulo}</h1>
              <Image className='h-[300px] w-[15rem] shadow-md shadow-black rounded-2xl' height={300} width={240} src={item.image} />
            </button>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-between w-[75%] h-auto'>
        <div className='flex w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Produtos em Destaque</h1>
        </div>
        {items.produtos_em_promocoes.map(item_especial => (
          <div key={item_especial.id} className="flex text-[#FFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl hover:shadow-lg hover:shadow-white duration-300 ease-in h-[300px] w-[15rem]">
            <button key={item_especial.id} className='flex justify-center'>
              <h1 key={item_especial.id} className="absolute text-md mt-64 font-semibold">{item_especial.titulo}</h1>
              <Image key={item_especial.id} className='h-[300px] w-[15rem] shadow-md shadow-black rounded-2xl' height={300} width={240} src={item_especial.image} />
            </button>
              <span className='w-0'>  
                <MagnifyingGlassIcon className="h-7 w-7 relative right-56 top-3 text-[#000]" />
              </span>
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