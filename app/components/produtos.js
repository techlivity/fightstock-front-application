"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import promo from "../public/promo.png"
import promo2 from "../public/promo2.png"


const ProductList_Component = ({ items }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (

    <div className="flex flex-wrap justify-center gap-10 mt-8">
      <div className='flex flex-wrap justify-between w-[75%] h-auto'>
        <div className='flex m-auto w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl mb-10 text-zinc-50 drop-shadow-lg'>Confira nossos produtos</h1>
        </div>
        {items.produtos.map(item => (
          <div key={item.id} className="flex text-[#FFFFFF]  justify-center font-protest-guerrila rounded-3xl h-[300px] w-[15rem]">
            <button className='flex justify-center'>
              <h1 className="absolute text-xl mt-3 font-semibold">{item.titulo}</h1>
              <Image className='h-[300px] w-[15rem] shadow-md shadow-black rounded-2xl' height={300} width={240} src={item.image} alt="product image" />
            </button>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-between w-[75%] h-auto'>
        <div className='flex w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Produtos em Destaque</h1>
        </div>

        {items.produtos_em_promocoes.map(item_especial => {

          return (
            <div key={item_especial.id} className="flex text-[#FFF] mt-10 font-protest-guerrila relative justify-center">
              <div className="flex flex-wrap gap-3">
                <Button
                  onPress={() => { setSelectedProduct(item_especial); onOpen(); }}
                  className="capitalize h-[18.75rem] w-[15rem] gap-0 p-0 flex justify-center shadow-md shadow-black rounded-2xl"
                >
                  <h1 className="absolute text-md mt-64 font-semibold">{item_especial.titulo}</h1>
                  <Image className='h-full w-[15rem] rounded-2xl' height={300} width={240} src={item_especial.image} alt="promo product image" />
                  <span className='w-0'>
                    <MagnifyingGlassIcon className="h-6 w-6 relative right-56 bottom-28 text-[#000]" />
                  </span>
                </Button>
              </div>
            </div>
          );
        })}
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{
            backdrop: "bg-gradient-to-t from-red-900/50 to-zinc-900/10 backdrop-opacity-20",
            base: "max-w-4xl"
          }}
        >
          <ModalContent>
            {(onClose) => (
              selectedProduct && (
                <div className='flex flex-row items-center mx-auto my-5 w-[30rem] sm:w-[15rem] md:w-[30rem] lg:w-[48rem]' key={selectedProduct.id}>
                  <div>
                    <Image loading='eager' className='rounded-2xl' height={300} width={240} alt="promo product image" src={selectedProduct.image}></Image>
                  </div>
                  <div className='flex flex-col gap-4 w-full'>
                    <ModalHeader className="flex flex-col mx-auto p-0 capitalize">{selectedProduct.titulo}</ModalHeader>
                    <ModalBody className='pb-0 pt-0'>
                      <p>{selectedProduct.descricao}</p>
                    </ModalBody>
                    <ModalFooter className='p-0'>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              )
            )}
          </ModalContent>
        </Modal>
      </div>

      <div className='flex flex-wrap justify-evenly mb-5 w-[80%] h-auto'>
        <div className='flex w-full justify-center'>
          <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Promoções Especiais</h1>
        </div>

        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo} alt="promo image" />
          </button>
        </div>
        <div className="flex text-[#FFFFFF] mt-10 font-protest-guerrila relative justify-center rounded-3xl h-[450px] w-[40%]">
          <button className='flex justify-center'>
            <Image className='h-[450px] w-[500px]' src={promo2} alt="promo image" />
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductList_Component;