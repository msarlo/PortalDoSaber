import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';

// Testando commit pull request
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton
            href="/cadastro"
            label="Cadastro"
          />
        </nav>
      </Header>

      {/* seção boas vindas */}
      <Banner title="Bem-vindo ao Portal do Saber!"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!"
      />


      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Login Form */}
          <div className="bg-gradient-to-br from-blue-400 to-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="usuario" className="block text-gray-700 mb-2">
                  Usuário:
                </label>
                <input
                  type="text"
                  id="usuario"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite seu usuário"
                />
              </div>
              <div>
                <label htmlFor="senha" className="block text-gray-700 mb-2">
                  Senha:
                </label>
                <input
                  type="password"
                  id="senha"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite sua senha"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Entrar
              </button>
            </form>
            <div className="mt-4 text-center">
              <LinkButton href="/cadastro" label="Cadastre-se aqui!" />
            </div>
          </div>

          {/* Main Courses Section */}
          <div className="bg-gradient-to-br from-blue-400 to-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800">Principais Cursos</h2>
              <LinkButton
                href='/cursos'
                label='Todos os Cursos'
              />
            </div>
            <div className="space-y-4">
              {mainCourses.map((course, index) => (
                <div key={index} className="p-4 border rounded hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-semibold text-lg text-gray-800">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const mainCourses = [
  {
    title: "Introdução ao Sistema PRONTO",
    description: "Aprenda os fundamentos do sistema e suas principais funcionalidades."
  },
  {
    title: "Gestão de Processos",
    description: "Domine as ferramentas essenciais para gestão eficiente de processos."
  },
  {
    title: "Ferramentas Avançadas",
    description: "Explore recursos avançados para otimizar seu trabalho."
  }
];