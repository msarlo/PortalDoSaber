"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/Header";
import { LinkButton } from "@/components/LinkButton";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ 
                    email, 
                    senha 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login realizado com sucesso
                console.log('Login realizado:', data);
                router.push('/cursos'); // Redirecionar para página de cursos
            } else {
                // Erro retornado pela API
                setError(data.error || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            setError('Erro de conexão');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header>
                <nav className="flex gap-6 items-center">
                    <LinkButton href="/" label="Home" />
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
                        
                        {/* Mostrar erros */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-900
                                    rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-900">
                                    Senha
                                </label>
                                <input
                                    id="senha"
                                    name="senha"
                                    type="password"
                                    required
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-900
                                    rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {isLoading ? 'Entrando...' : 'Entrar'}
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