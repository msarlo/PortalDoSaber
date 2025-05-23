import React from 'react';
import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <LinkButton
            href="/cadastro"
            label="Cadastro"
          />
          <LinkButton
            href="/login"
            label="Login"
          />
        </nav>
      </Header>

      {/* seção boas vindas */}
      <Banner title="Bem-vindo ao Portal do Saber!"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!"
      />
      <section className="container mx-auto py-12 px-4">
        <div className="grid gap-8">
          {/* Main Courses Section */}
          <div className="bg-gradient-to-br from-blue-400 to-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800">Principais Cursos</h2>
              <LinkButton
                href='/cursos'
                label='Todos os Cursos'
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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