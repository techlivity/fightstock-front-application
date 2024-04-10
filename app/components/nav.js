"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data_json from '../api.json'
import img from "../public/logo-removebg-preview.png"
import { UserCircleIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Nav_bar_component = ({ data }) => {
    const [activeSubItem, setActiveSubItem] = useState(null);
    let listaCategorias = ["Equipamentos", "Suplementos", "Vestimentas", "Armas"]

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
                        <a>Categorias</a>
                        <ul className='w-fit rounded-b-md'>
                            {listaCategorias.map(categorias => (<li><a href={`/categorias/${categorias}`}>{categorias}</a></li>))}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center h-[20%] w-fit gap-2">
                <a className='hover:scale-[115%] duration-200 ease-in' href='login'>    
                    <UserCircleIcon className="h-10 w-10 text-[#FFFFFF]" />
                </a>
                <button className='flex flex-col text-left'>    
                    <span><a href='/login' className='text-md mr-2 w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Entre</a>ou</span>
                    <a href='/criar-conta' className='text-md w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Cadastre-se</a>
                </button>
            </div>
        </div>
    );
};

export default Nav_bar_component;