"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/schemas/userSchemas';
import { Header } from '@/components/Header'; 
import { LinkButton } from '@/components/LinkButton'; 

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage('');
    setIsSuccess(false);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Erro ${response.status} ao tentar fazer login`);
      }

      // Salvar o token (ex: localStorage)
      // CUIDADO: localStorage é vulnerável a XSS. Para produção, considere cookies HttpOnly.
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userData', JSON.stringify(result.user)); // Opcional: salvar dados do usuário

      setIsSuccess(true);
      console.log('Login bem-sucedido!', result);
      // Redirecionar para uma página protegida, ex: /dashboard ou /cursos
      router.push('/cursos'); 

    } catch (err: any) {
      console.error('Erro no login:', err);
      setErrorMessage(err.message || 'Erro inesperado ao tentar fazer login.');
    }
  };

  return (
    <>
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton href="/" label="Home" />
          <LinkButton href="/cadastro" label="Cadastro" />
        </nav>
      </Header>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-black">
            Acessar sua conta
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {isSuccess && (
              <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-300">
                Login realizado com sucesso! Redirecionando...
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-300">
                {errorMessage}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <div className="mt-1">
                  <input
                    id="senha"
                    type="password"
                    autoComplete="current-password"
                    {...register('senha')}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.senha && <p className="mt-2 text-sm text-red-600">{errors.senha.message}</p>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Entrando...' : 'Entrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}