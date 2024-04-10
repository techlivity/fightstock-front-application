export default function Page() {
    return (
            <div className="w-screen h-screen flex items-center text-white">
                <div className="w-[60vh] h-[50vh] rounded-xl m-auto bg-[#300d0b] flex justify-center items-center shadow-[#1a0f0e] shadow-md">
                    <div className="flex flex-col w-[90%] items-center">
                        <form className="w-full space-y-2 flex flex-col" action="/processar-cadastro" method="post">
                            <label className="font-protest-guerrila text-xl" for="login">Login:</label>
                            <input className="rounded-md px-4 py-1 w-[100%] text-slate-900 outline-none" type="text" id="login" name="login" required></input>

                            <label className="font-protest-guerrila text-xl" for="senha">Senha:</label>
                            <input className="rounded-md px-4 py-1 w-[100%] text-slate-900 outline-none" type="password" id="senha" name="senha" required></input>

                        </form>
                        <button className="font-protest-guerrila mt-8 bg-[#1d942d] hover:bg-[#17421d] duration-200 ease-in py-2 rounded-xl w-[25%]">Entrar</button>
                        <div className="mt-5">
                            <a className="font-protest-guerrila text-xl cursor-pointer hover:text-green-800 duration-200 ease-in" href="/criar-conta">Cadastre-se</a>
                            <span className="px-4">/</span>
                            <a className="font-protest-guerrila text-xl hover:text-red-900 duration-200 ease-in" href="/esqueci-senha">Esqueci minha senha</a>
                        </div>
                        <a className="font-protest-guerrila text-lg hover:text-gray-500 mt-5 duration-200 ease-in" href="/">Volte a página inicial</a>
                    </div>
                </div>
            </div>
    )
}