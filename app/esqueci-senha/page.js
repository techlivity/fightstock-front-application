"use client"
import Image from 'next/image';
import Link from 'next/link';
import bgSenha from '../public/bgSenha.jpg';
import logo from '../public/logo.png';
import "../components/styles/styles.css"
import { UserCircleIcon, LockClosedIcon, ArrowUturnLeftIcon, UserPlusIcon, EnvelopeIcon, CheckIcon} from '@heroicons/react/24/solid'

export default function Page() {
  const handleFocus = () => {
    document.getElementById('bgContainer').classList.add('blur-bg');
    document.getElementById('form').classList.add('vhMax');
    document.getElementById('slogan').classList.add('geeks');
    document.getElementById('sloganTxt').classList.remove('opacity-0');
};

  const handleBlur = () => {
    document.getElementById('bgContainer').classList.remove('blur-bg');
    document.getElementById('form').classList.remove('vhMax');
  };

  return (
    <div className="relative w-screen h-screen flex flex-row items-center text-white">
        <div id='form' className="absolute z-10 w-[60vh] h-[50vh] hover:h-[100vh] overflow-hidden duration-700 rounded-xl hover:rounded-none bg-[#300d0b] shadow-[#1a0f0e] shadow-md">
            <div className='h-[100%] flex justify-center items-center'>
                <div className="flex flex-col w-[90%] items-center">
                    <Image className="w-96 mt-14" src={logo} alt="logo image"/>
                    <form className="w-full space-y-2 flex flex-col" action="/processar-cadastro" method="post">
                        <div className='flex flex-row items-center space-x-2'>
                            <EnvelopeIcon className="h-8 w-8 text-[#FFFFFF]" />
                            <label className="font-protest-guerrila text-xl w-full" htmlFor="login">Email Cadastrado:</label>
                        </div>
                        <input
                            className="rounded-md px-4 py-1 w-[100%] text-slate-900 outline-none"
                            type="email"
                            id="login"
                            name="login"
                            required={true}
                            placeholder='Digite o email cadastrado..'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        <div className='flex flex-row items-center space-x-2'>
                            <LockClosedIcon className="h-7 w-7 text-[#FFFFFF]" />
                            <label className="font-protest-guerrila text-xl w-full" htmlFor="senha">Nova Senha:</label>
                        </div>
                        <input
                            className="rounded-md px-4 py-1 w-[100%] text-slate-900 outline-none"
                            type="password"
                            id="senha"
                            name="senha"
                            required={true}
                            placeholder='Digite sua nova senha..'
                            minlength="8"
                            maxlength="20"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <div className='flex justify-center'>
                            <button type='submit' className='flex mt-2 items-center w-[4rem] bg-[#1d942d] hover:bg-[#17421d] hover:w-[24%] duration-200 ease-in py-2 rounded-xl overflow-hidden'>
                                <span className="ml-3 font-protest-guerrila">Salvar</span>
                                <CheckIcon className="relative left-2 h-6 w-6 text-[#FFFFFF]" />
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-row mt-5">
                        <Link prefetch={true} className="flex flex-row font-protest-guerrila items-center text-xl cursor-pointer hover:text-green-800 duration-200 ease-in" href="/criar-conta">
                            <UserPlusIcon className="h-6 w-6 mr-1" />
                            <span>Cadastre-se</span>
                        </Link>
                        <span className="px-4">/</span>
                        <Link prefetch={true} className="flex flex-row font-protest-guerrila items-center text-xl hover:text-green-800 duration-200 ease-in" href="/login">
                            <UserCircleIcon className="h-6 w-6 mr-1" />
                            <span>Lembrei minha senha</span>
                        </Link>
                    </div>
                    <Link prefetch={true} className="flex flex-row gap-1 font-protest-guerrila items-center text-[#FFFFFF] text-lg hover:text-gray-500 mt-5 mb-28 duration-200 ease-in" href="/">
                        <ArrowUturnLeftIcon className="h-6 w-6" />
                        <span>Página inicial</span>
                    </Link>
                 
                    <div id='slogan' className="mb-32"> 
                        <pre id='sloganTxt' className='font-protest-guerrila text-3xl opacity-0'>O poder está em suas mãos!</pre>
                    </div> 
                </div>
            </div>
        </div>
        <div>
            <Image id="bgContainer" className='duration-1000' src={bgSenha} sizes="100vw 100vh" alt="background image" fill></Image>
        </div>
    </div>
  )
}
