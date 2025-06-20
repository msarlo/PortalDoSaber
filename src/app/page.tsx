"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import { LinkButton } from "@/components/LinkButton";
import { getListarCursos, type Curso } from "@/lib/data";

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
      {/* seção boas vindas */}
      <Banner
        title="Bem-vindo ao Portal Saber!"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="grid gap-8">
          {/* Main Courses Section */}
          <div className="p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800">
                Principais Cursos
              </h2>
              <LinkButton href="/cursos" label="Todos os Cursos" />
            </div>

            {/* Loading state */}
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">Carregando cursos...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
                {mainCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer group-hover:blur-sm group-hover:opacity-60 hover:!blur-none hover:!opacity-100 hover:shadow-xl hover:shadow-blue-600/80 hover:-translate-y-1 hover:scale-105"
                    onClick={() =>
                      (window.location.href = `/cursos/${course.slug}`)
                    }
                  >
                    <h3 className="font-semibold text-lg text-gray-800">
                      {course.title}
                    </h3>
                    {course.image && (
                      <div className="flex justify-center items-center h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-2x1 h-2x1 object-contain rounded transition-transform duration-300 ease-in-out"
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
                <p className="text-gray-600">
                  Nenhum curso disponível no momento.
                </p>
                <LinkButton href="/cursos" label="Explorar Todos os Cursos" />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
