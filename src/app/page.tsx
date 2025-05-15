import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '../components/Header';
import { LinkButton } from '@/components/LinkButton';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton
            href="/login"
            label="Login"
          />
          <LinkButton
            href="/cadastro"
            label="Cadastro"
          />
        </nav>
      </Header>

      {/* seção boas vindas */}
      <section className="bg-gray-200 text-gray-800 py-16 rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] mx-4 my-8 transform hover:scale-[1.02] transition-all duration-300">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">Bem-vindo ao Portal do Saber!</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
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
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Principais Cursos</h2>
            <div className="space-y-4">
              {mainCourses.map((course, index) => (
                <div key={index} className="p-4 border rounded hover:bg-gray-50 transition-colors">
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