"use client"
import React, { useEffect, useState } from 'react';
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
  const [selectedRole, setSelectedRole] = useState<'Saude' | 'Comum' | null>(null);

  useEffect(() => {
    async function loadCursos() {
      try {
        const data = await getListarCursos();
        setCursos(data);
        // Não definimos cursosFiltrados ainda, pois esperamos a seleção do usuário
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCursos();
  }, []);

  useEffect(() => {
    // Quando o papel é selecionado, filtramos os cursos
    if (selectedRole) {
      const filtered = cursos.filter(curso => curso.role === selectedRole);
      setCursosFiltrados(filtered);
    }
  }, [selectedRole, cursos]);

  const handleSearch = (query: string) => {
    // Só filtramos se um papel já foi selecionado
    if (!selectedRole) return;

    const filtered = cursos.filter((curso) =>
      curso.role === selectedRole &&
      (curso.title.toLowerCase().includes(query.toLowerCase()) ||
        curso.slug.toLowerCase().includes(query.toLowerCase()))
    );
    setCursosFiltrados(filtered);
  };

  const handleSelectRole = (role: 'Saude' | 'Comum') => {
    setSelectedRole(role);
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

      {/* Loading State - Mostrar o novo loader quando estiver carregando */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Carregando opções...</p>
        </div>
      )}

      {/* Seleção de perfil - aparece apenas se nenhum perfil for selecionado E não está carregando */}
      {!selectedRole && !isLoading && (
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
            Selecione seu perfil para ver os cursos
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
            <div
              onClick={() => handleSelectRole('Saude')}
              className="bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-xl shadow-lg p-8 text-center cursor-pointer transform transition-transform hover:scale-105 flex-1 max-w-md mx-auto"
            >
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sou Profissional da Saúde</h3>
              <p className="text-gray-600">Acesse conteúdos específicos para profissionais da área da saúde</p>
            </div>

            <div
              onClick={() => handleSelectRole('Comum')}
              className="bg-white border-2 border-green-600 hover:bg-green-50 rounded-xl shadow-lg p-8 text-center cursor-pointer transform transition-transform hover:scale-105 flex-1 max-w-md mx-auto"
            >
              <div className="text-green-600 text-5xl mb-4">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Sou Usuário Comum</h3>
              <p className="text-gray-600">Acesse conteúdos para o público geral</p>
            </div>
          </div>
        </section>
      )}

      {/* Mostrar pesquisa e cursos apenas se um perfil for selecionado */}
      {selectedRole && (
        <>
          {/* seção de pesquisa */}
          <div className="container mx-auto px-4 mt-8 mb-4">
            <div className="flex justify-between items-center">
              <SearchBar placeholder='Pesquisar cursos...' onSearch={handleSearch} />
              <button
                onClick={() => setSelectedRole(null)}
                className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Mudar perfil
              </button>
            </div>
          </div>

          <section className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">
              {cursosFiltrados.length === 0
                ? "Nenhum curso encontrado"
                : `Cursos para ${selectedRole === 'Saude' ? 'Profissionais da Saúde' : 'Usuários Comuns'}`}
            </h2>

            {/* Usando o novo estilo de loader para os cursos também */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Carregando cursos...</p>
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
        </>
      )}
    </main>
  );
}
