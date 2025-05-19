import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';
import { Container } from '@/components/Container';

// Testando commit pull request
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton
            href='/login'
            label='Login'
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
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Principais Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {mainCourses.map((course, index) => (
            <Container
              key={index}
              img={course.image}
              buttonText={course.title}
              href={`/cursos/${course.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const mainCourses = [
  {
    title: "Sistema PRONTO",
    image: "/assets/images/logoPrefeitura.png",
    slug: "sistema-pronto",

  },
  {
    title: "GLPI",
    image: "/assets/images/logoPrefeitura.png",
    slug: "glpi"
  },
  {
    title: "1DOC",
    image: "/assets/images/logoPrefeitura.png",
    slug: "umdoc"
  }
];

//olha que legal luis