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
        <nav className="w-full h-44 bg-[#180606] font-protest-guerrila text-white py-4 px-8 flex items-center">
            <div>
                <Image className="w-60" src={img} />
            </div>
            <ul className="flex items-center text-3xl space-x-20">
                {data.map(item => (
                    <li key={item.id} onMouseEnter={() => setActiveSubItem(item.id)} onMouseLeave={() => setActiveSubItem(null)}>
                        {item.sub_item ? (
                            <>
                                <p>{item.label}</p>
                                {activeSubItem === item.id && (
                                    <ul>
                                        {item.sub_item.map(subItem => (
                                            <li key={subItem.id}>
                                                <Link href={`$subItem.url`}>
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link href={`$item.url`}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
                <div className="flex ml-48 items-center gap-4">
                    <button className='flex flex-row items-center text-left gap-4'>    
                        <UserCircleIcon className="h-10 w-10 text-[#FFFFFF]" />
                        <span className='text-xl w-32'>Entre<br/>ou cadastre-se</span>
                    </button>
                </div>

        </nav>
    );
};

export default Nav_bar_component;