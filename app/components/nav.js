"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import img from "../public/logo-removebg-preview.png"
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Nav_bar_component = ({ data }) => {
    let listaCategorias = [
        {
        id:1,
        name:"Equipamentos"
        }, 
        {
        id:2,
        nome:"Suplementos"
        },
        {
        id:3,
        nome:"Vestimentas"
        },
        {
        id:4,
        nome:"Armas"
        }
    ]

    return (
        <div className='menu h-fit justify-around shadow-slate-900 shadow-md'>
            <div className='w-fit'>
                <Link prefetch={true} href='/'>
                    <Image className="w-40" src={img} />
                </Link>
            </div>
            <nav className='h-fit relative right-60'>
                <ul className='space-x-20 text-lg'>
                    <li><Link prefetch={true} href='/promocoes'>Promoções</Link></li>
                    <li><a href='/novidades'>Novidades</a></li>
                    <li><a href='/produtos'>Produtos</a></li>
                    <li>
                        <span>Categorias</span>
                        <ul className='w-fit rounded-b-md'>
                            {listaCategorias.map(categorias => (<li key={categorias.id}><Link prefetch={true} href={`/categorias/${categorias}`}>{categorias}</Link></li>))}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center h-[20%] w-fit gap-2">
                <Link prefetch={true} className='hover:scale-[115%] duration-200 ease-in' href='/login'>    
                    <UserCircleIcon className="h-10 w-10 text-[#FFFFFF]" />
                </Link>
                <button className='flex flex-col text-left'>    
                    <span><Link prefetch={true} href='/login' className='text-md mr-2 w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Entre</Link>ou</span>
                    <span><Link prefetch={true} href='/criar-conta' className='text-md w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Cadastre-se</Link></span>
                </button>
            </div>
        </div>
    );
};

export default Nav_bar_component;