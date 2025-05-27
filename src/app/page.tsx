"use client"
import React, { useEffect, useState } from 'react';
import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';
import { getListarCursos, type Curso } from '@/lib/data';

export default function HomePage() {
  const [mainCourses, setMainCourses] = useState<Curso[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMainCourses() {
      try {
        const allCourses = await getListarCursos();
        // Pegar apenas os 3 primeiros cursos para exibir na home
        setMainCourses(allCourses.slice(0, 3));
      } catch (error) {
        console.error("Erro ao carregar cursos principais:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadMainCourses();
  }, []);

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
            
            {/* Loading state */}
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">Carregando cursos...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainCourses.map((course) => (
                  <div 
                    key={course.id} 
                    className="p-4 border rounded hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => window.location.href = `/cursos/${course.slug}`}
                  >
                    <h3 className="font-semibold text-lg text-gray-800">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                    {course.image && (
                      <div className="mt-3">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Se não houver cursos */}
            {!isLoading && mainCourses.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">Nenhum curso disponível no momento.</p>
                <LinkButton
                  href='/cursos'
                  label='Explorar Todos os Cursos'
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
