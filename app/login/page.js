"use client"
import Image from 'next/image';
import bgLogin from '../public/bgLogin.jpg';
import Link from 'next/link';
import logo from '../public/logo.png';
import "../components/styles/styles.css"
import { UserCircleIcon, LockClosedIcon, ArrowRightEndOnRectangleIcon, ArrowUturnLeftIcon, ArrowPathIcon, UserPlusIcon} from '@heroicons/react/24/solid'
import GoogleLoginButton from '../components/renderGoogleLogin/GoogleLogginButton';

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
                            <UserCircleIcon className="h-8 w-8 text-[#FFFFFF]" />
                            <label className="font-oswald text-xl w-full" htmlFor="login">Login:</label>
                        </div>
                        <input
                            className="rounded-md font-oswald px-4 py-1 w-[100%] outline-none"
                            type="email"
                            id="login"
                            name="login"
                            required={true}
                            placeholder='Digite seu email..'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        <div className='flex flex-row items-center space-x-2'>
                            <LockClosedIcon className="h-7 w-7 text-[#FFFFFF]" />
                            <label className="font-oswald text-xl w-full" htmlFor="senha">Senha:</label>
                        </div>
                        <input
                            className="rounded-md font-oswald px-4 py-1 w-[100%] outline-none"
                            type="password"
                            id="senha"
                            name="senha"
                            required={true}
                            placeholder='Digite sua senha..'
                            minlength="8"
                            maxlength="20"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <div className='flex justify-center'>    
                            <button type='submit' className='flex mt-2 items-center w-[4rem] bg-[#1d942d] hover:bg-[#17421d] hover:w-[26%] duration-200 ease-in py-2 rounded-xl overflow-hidden'>
                                <span className="ml-4 font-oswald">Entrar</span>
                                <ArrowRightEndOnRectangleIcon className="relative left-4 h-7 w-7 text-[#FFFFFF]" />
                            </button>
                        </div>
                        <div className='h-16 m-4 flex items-center justify-center'>
                            <GoogleLoginButton></GoogleLoginButton>
                        </div>
                    </form>
                    <div className="flex flex-row mt-5">
                        <Link prefetch={true} className="flex flex-row font-oswald text-xl items-center cursor-pointer hover:text-green-800 duration-200 ease-in" href="/criar-conta">
                            <UserPlusIcon className="h-6 w-6 mr-1" />
                            <span>Cadastre-se</span>
                        </Link>
                        <span className="px-4 text-xl font-oswald">/</span>
                        <Link prefetch={true} className="flex flex-row font-oswald text-xl items-center hover:text-red-900 duration-200 ease-in" href="/esqueci-senha">
                            <ArrowPathIcon className="h-6 w-6 mr-1" />
                            <span>Esqueci minha senha</span>
                        </Link>
                    </div>
                    <Link prefetch={true} className="flex flex-row gap-1 font-oswald items-center text-[#FFFFFF] text-lg hover:text-gray-500 mt-5 mb-28 duration-200 ease-in" href="/">
                        <ArrowUturnLeftIcon className="h-6 w-6" />
                        <span>Página inicial</span>
                    </Link>
                    <div id='slogan' className="mb-32"> 
                        <pre id='sloganTxt' className='font-merienda font-bold mx-auto text-2xl opacity-0'>O poder está em suas mãos!</pre>
                    </div> 
                </div>
            </div>
        </div>
        <div>
            <Image loading="eager" id="bgContainer" className='duration-1000' src={bgLogin} sizes="100vw 100vh" alt="background image" fill></Image>
        </div>
    </div>
  )
}
