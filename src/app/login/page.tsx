import { Header } from "@/components/Header";
import { LinkButton } from "@/components/LinkButton";


export default function LoginPage() {
    return (
       <>
            <Header>
               <nav className="flex gap-6 items-center">
                 <LinkButton
                   href="/"
                   label="HOME"
                 />
               </nav>
             </Header>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Acesse sua conta
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="/api/login" method="POST">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-900
                        rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>

                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                        Senha
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-900
                        rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Entrar
                    </button>
                    </div>
                </form>
                </div>
                <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                    Não tem uma conta?{' '}
                    <a href="/cadastro" className="font-medium text-blue-600 hover:text-blue-500">
                    Cadastre-se
                    </a>
                </p>
                <p className="text-center text-sm text-gray-600">
                    Esqueceu sua senha?{' '}
                    <a href="/recuperar-senha" className="font-medium text-blue-600 hover:text-blue-500">
                    Clique aqui
                    </a>
                </p>
                </div>
            </div>
            </div>
        </>    
    );
}