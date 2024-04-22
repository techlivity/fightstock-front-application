"use client"
import Image from 'next/image';
import logo from "../public/logo.png"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import { UserCircleIcon } from '@heroicons/react/24/solid'
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";


const Nav_bar_component = ({ data }) => {
    let listaCategorias = [
        {
            id: 1,
            name: "Equipamentos"
        },
        {
            id: 2,
            name: "Suplementos"
        },
        {
            id: 3,
            name: "Vestimentas"
        },
        {
            id: 4,
            name: "Armas"
        }
    ]

    return (
        <main>
            <Navbar className="bg-[#420D09] py-3 w-full">
                <NavbarBrand>
                    <Link className="mr-10" prefetch={true} href='/'>
                        <Image className="w-40" src={logo} alt="logo image" />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden h-fit relative font-signika font-bold sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link className="text-[#FFF] text-xl font-signika font-semibold" prefetch={true} href='/promocoes'>
                            Promoções
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className="text-[#FFF] text-xl font-signika font-semibold" prefetch={true} href='/novidades'>
                            Novidades
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-[#FFF] text-xl font-signika font-semibold" prefetch={true} href='/produtos'>
                            Produtos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown className="bg-[#800000]">
                            <DropdownTrigger >
                                <Link className="bg-transparent font-signika font-semibold text-xl text-white cursor-pointer flex items-center">
                                    Categorias
                                    <ChevronDownIcon className="h-5 w-5 ml-1" />
                                </Link>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Action event example"
                                onAction={(key) => alert(key)}
                            >
                                {listaCategorias.map(categorias => (<DropdownItem className="data-[hover=true]:bg-[#bf0a30]" key={categorias.id}><Link className="font-signika font-semibold text-lg text-white w-full hover:text-[#bf0a30 duration-200]" prefetch={true} href={`/categorias/${categorias.name}`}>{categorias.name}</Link></DropdownItem>))}
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent as="div" justify="end" className='gap-2 ml-20'>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                as="button"
                                className="transition-transform hover:scale-[115%] ease-in duration-200"
                                color="secondary"
                                name="Jason Hughes"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className="flex font-signika font-bold items-center h-[20%] w-fit">
                        <Link prefetch={true} className='hover:scale-[115%] transition-all ease-in duration-200' href='/login'>
                            <UserCircleIcon className="h-12 w-12 text-[#FFFFFF]" />
                        </Link>
                        <Button className='flex flex-col items-start text-[#FFFFFF] bg-transparent -space-y-3 m-0 px-2'>
                            <span><Link prefetch={true} href='/login' className='text-md text-[#FFFFFF] font-semibold mr-2 w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Entre</Link>ou</span>
                            <span><Link prefetch={true} href='/criar-conta' className='text-md text-[#FFFFFF] font-semibold w-fit hover:text-[#57c04d] transition-all ease-in duration-200'>Cadastre-se</Link></span>
                        </Button>
                    </div>
                </NavbarContent>
            </Navbar>
        </main>
    );
};

export default Nav_bar_component;
