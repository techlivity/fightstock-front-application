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

    return (
        <div className='menu'>
            <div className='w-fit'>
                <Image className="w-60" src={img} />
            </div>
            <nav className='h-fit'>
                <ul className='space-x-20'>
                    <li><a>Home</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Contato</a></li>
                    <li>
                        <a>Categorias</a>
                        <ul className='w-fit rounded-b-md'>
                            <li><span>Equipamentos</span></li>
                            <li><span>Suplementos</span></li>
                            <li><span>Vestimentas</span></li>
                            <li><span>Sub-Item 4</span></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="flex relative left-1/4 items-center gap-4">
                <button className='flex flex-row items-center text-left gap-4'>    
                    <UserCircleIcon className="h-10 w-10 text-[#FFFFFF]" />
                    <span className='text-xl w-32 hover:text-[#bf0a30] transition-all ease-in duration-200'>Entre<br/>ou cadastre-se</span>
                </button>
            </div>
        </div>
    );
};

export default Nav_bar_component;