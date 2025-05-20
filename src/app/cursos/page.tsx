"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/LinkButton';
import { Container } from '@/components/Container';
import { getListarCursos, Curso } from '@/lib/data';
import { SearchBar } from '@/components/SearchBar';
import { Banner } from '@/components/Banner';

export default function HomePage() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [cursosFiltrados, setCursosFiltrados] = useState<Curso[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCursos() {
      try {
        const data = await getListarCursos();
        setCursos(data);
        setCursosFiltrados(data);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCursos();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = cursos.filter((curso) => curso.title.toLowerCase().includes(query.toLocaleLowerCase())
      && curso.slug.toLowerCase().includes(query.toLocaleLowerCase()));
    setCursosFiltrados(filtered);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header>
        <nav className="flex gap-6 items-center">
          <LinkButton href='/login' label='Login' />
          <LinkButton href="/cadastro" label="Cadastro" />
        </nav>
      </Header>

      {/* seção boas vindas */}
      <Banner title="Bem-vindo ao Portal do Saber!"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
        de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!"
      />

      {/* seção de pesquisa */}
      <SearchBar placeholder='Pesquisar cursos...' onSearch={handleSearch} />

      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
          {cursosFiltrados.length === 0 ? "Nenhum curso encontrado" : "Cursos"}
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosFiltrados.map((curso) => (
              <Container
                key={curso.id}
                img={curso.image}
                buttonText={curso.title}
                href={`/cursos/${curso.slug}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
