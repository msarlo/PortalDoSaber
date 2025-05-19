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
  
  // Inicializa o React Hook Form com Zod
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    mode: 'onBlur' // Valida no blur para feedback imediato
  });

  // Função que recebe dados já validados
  const onSubmit = async (data: CadastroFormData) => {
    try {
      // Simular chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
        
      console.log('Form submitted:', data);
      setIsSuccess(true);
        
      // Redirecionar após pequeno delay para mostrar mensagem de sucesso
      setTimeout(() => router.push('/login'), 1500);
    } catch (err) {
      console.error('Erro no cadastro:', err);
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
                <label htmlFor="profession" className="block text-sm font-medium text-black">
                  Profissão
                </label>
                <input
                  id="profession"
                  type="text"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.profession ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('profession')}
                />
                {errors.profession && (
                  <p className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
                  Confirmar Senha
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  disabled={isSubmitting}
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
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



