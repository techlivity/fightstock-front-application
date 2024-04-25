"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import whatsappLogo from "../public/whatsapp.png"

import promo from "../public/promo.png"
import promo2 from "../public/promo2.png"
import Link from 'next/link';


const Product_Component = ({ items }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-8">
      <div className='flex flex-wrap justify-between w-[75%] h-auto'>

        {items.produtos_em_promocoes.map(item_especial => {

          return (
            <div key={item_especial.id} className="flex text-[#FFF] mt-10 relative justify-center">
              <div className="flex flex-wrap gap-3">
                <Button
                  onPress={() => { setSelectedProduct(item_especial); onOpen(); }}
                  className="capitalize h-[18.75rem] w-[15rem] gap-0 p-0 flex justify-center shadow-md shadow-black rounded-2xl"
                >
                  <h1 className="absolute text-md mt-64 font-dynaPuff">{item_especial.titulo}</h1>
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
                    <ModalHeader className="flex flex-col mx-auto font-dynaPuff p-0 capitalize">{selectedProduct.titulo}</ModalHeader>
                    <ModalBody className='pb-0 font-signika pt-0'>
                      <p>{selectedProduct.descricao}</p>
                    </ModalBody>
                    <ModalFooter className='p-0'>
                      <Button className='font-signika' color="danger" variant="light" onPress={onClose}>
                        Fechar
                      </Button>
                        <Link target='blank' href={`https://api.whatsapp.com/send?phone=555596053783&text=Olá, me interessei no seguinte produto: ${encodeURIComponent(selectedProduct.titulo)}`+ `. Poderia me fornecer mais informações sobre?`}>
                          <Button className='bg-[#25D366] hover:bg-[#2c7e4a] font-signika' color="primary" onPress={onClose}>
                              Saiba mais!
                              <Image className='h-6 w-6' src={whatsappLogo} alt='whatsappLogo'></Image>
                          </Button>
                        </Link>
                    </ModalFooter>
                  </div>
                </div>
              )
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>

  );
};

export default Product_Component;