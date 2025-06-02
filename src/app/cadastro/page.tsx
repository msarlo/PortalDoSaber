'use client';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cadastroSchema, type CadastroFormData } from '@/schemas/userSchemas';

export default function CadastroPage() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data: CadastroFormData) => {
    try {
      setErrorMessage('');
      setIsSuccess(false); // Resetar o estado de sucesso
      console.log('Enviando dados para /api/users:', data);
      
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          senha: data.senha, 
          role: data.role 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Erro da API:', result);
        throw new Error(result.error || `Erro ${response.status} ao criar conta`);
      }

      console.log('Usuário criado com sucesso pela API!', result);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (err: any) {
      console.error('Erro no cadastro (catch do onSubmit):', err);
      setErrorMessage(err.message || 'Erro inesperado ao criar conta.');
      setIsSuccess(false);
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
          <h2 className="text-center text-3xl font-extrabold text-black">
            Criar nova conta
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {isSuccess && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="text-center font-medium">
                  Cadastro realizado com sucesso! Redirecionando...
                </p>
              </div>
            )}
            {errorMessage && (
              <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p className="text-center font-medium">
                  {errorMessage}
                </p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} 
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-black">
                  Tipo de usuário
                </label>
                <select
                  id="role"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.role ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white`}
                  disabled={isSubmitting}
                  {...register('role')}
                >
                  <option value="">Selecione o tipo de usuário</option>
                  <option value="SAUDE">Profissional da Saúde</option>
                  <option value="COMUM">Usuário Comum</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-black">
                  Senha
                </label>
                <input
                  id="senha"
                  type="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.senha ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('senha')}
                />
                {errors.senha && (
                  <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmSenha" className="block text-sm font-medium text-black">
                  Confirmar Senha
                </label>
                <input
                  id="confirmSenha"
                  type="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.confirmSenha ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('confirmSenha')}
                />
                {errors.confirmSenha && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmSenha.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processando...' : 'Cadastrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



