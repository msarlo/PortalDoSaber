'use client';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormValidation } from '@/hooks/userFormValidation';
import { cadastroSchema, type CadastroFormData } from '@/schemas/userSchemas';

export default function CadastroPage() {
  const router = useRouter();
  const { errors, validate, clearError } = useFormValidation(cadastroSchema);
  
  const [formData, setFormData] = useState<CadastroFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro quando o usuário começa a digitar
    clearError(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = validate(formData);
    
    if (result.success) {
      try {
        // Aqui você faria sua chamada de API
        console.log('Form submitted:', result.data);
        router.push('/login');
      } catch (err) {
        console.error('Erro no cadastro:', err);
      }
    }
  };

  return (
    <>
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton
            href="/"
            label="Home"
          />
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {errors.form && (
                <div className="text-red-600 text-sm text-center">{errors.form}</div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-black">
                  Profissão
                </label>
                <input
                  id="profession"
                  name="profession"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
                  Confirmar Senha
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}



