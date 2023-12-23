import InputForm from '@/Components/InputForm';
import SectionInfo from '@/Components/SectionInfo';
import { Link } from '@inertiajs/react';


export default function Login() {
    return (
        <>
            <div className='flex flex-col lg:flex-row'>
                {/* section de login */}
                <section className="w-full min-h-[100vh] flex flex-col justify-center items-center">
                    <div className="p-[32px] fixed top-0 w-full sm:w-[448px]">
                        <h1 className="font-epilogue font-bold text-[1.3em] text-gray-900">
                            Mercado Agora.
                        </h1>
                    </div>
                    <div className="p-[32px] sm:w-[448px]">
                        <div className="w-fit">
                            <span className="font-inter font-medium text-xs text-primary border-primary border-[1px] py-1 px-3 rounded-full lg:text-[14px]">Boas vindas ao Mercado Agora &#128075;</span>
                            <h1 className="font-epilogue font-bold text-[1.4em] text-gray-900 mt-4 mb-0 leading-tight lg:text-[1.6em]">
                                Os melhores preços e produtos de acordo com sua necessidade
                            </h1>
                            <p className="my-2 font-inter text-xs text-gray-600">
                                Insira os dados abaixo para entrar
                            </p>
                            <form className="my-5" >
                                <InputForm
                                    icon="mail"
                                    placeholder="Digite seu e-mail"
                                    type="email"
                                    id="email"
                                    name="email"
                                />
                                <InputForm
                                    icon="password"
                                    placeholder="Digite sua senha"
                                    type="password"
                                    id="password"
                                    name="password"
                                />
                                <div
                                    className="
                                        flex justify-between items-center
                                        mb-4
                                    "
                                >
                                    <span>
                                        <input
                                            className="
                                            rounded-[4px] mr-2 border-gray-100
                                            focus:ring-0 focus:ring-offset-0 focus:ring-primary
                                        "
                                            type="checkbox"
                                            name="followConnected" />
                                        <label className="font-inter text-xs" htmlFor="followConnected">
                                            Manter conectado
                                        </label>
                                    </span>
                                    <Link
                                        className="font-inter text-xs decoration-none"
                                        href="/forgot-password"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <div
                                    className="
                                        flex justify-between items-center
                                        gap-2
                                    "
                                >
                                    <Link
                                        className="font-inter font-bold border-[1px] border-gray-900 rounded-[4px] text-gray-900 text-xs text-center w-full px-3 py-2"
                                        href='#'>
                                        Não possui uma conta
                                    </Link>
                                    <button
                                        className="
                                            font-inter font-bold bg-secondary border-secondary border-[1px] text-white rounded-[4px] text-xs w-full px-3 py-2
                                        "
                                    >
                                        Entrar
                                    </button>
                                </div>
                                <p className="w-fit my-4 m-auto font-inter text-gray-600 text-[12px]">Ou acesse com sua rede social</p>
                                <div
                                    className="
                                        flex justify-between items-center
                                        mb-4
                                        gap-2
                                    "
                                >
                                    <Link
                                        className="flex items-center justify-center font-inter font-medium border-[1px] border-gray-100 text-gray-600 rounded-[4px] text-[10px] w-full px-3 py-2"
                                        href='#'
                                    >
                                        <img className="w-4 mr-3" src="/assets/images/icon-fb-true.svg" />
                                        Entrar com Facebook
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center font-inter font-medium border-[1px] border-gray-100 text-gray-600 rounded-[4px] text-[10px] w-full px-3 py-2"
                                        href='#'
                                    >
                                        <img className="w-4 mr-3" src="/assets/images/icon-google-true.svg" />
                                        Entrar com Google
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* fim da section de login */}
                {/* inicio section design information*/}
                    <SectionInfo />
                {/* fim section design information*/}
            </div>
        </>
    );
}
