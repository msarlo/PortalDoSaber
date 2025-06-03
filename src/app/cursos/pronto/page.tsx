"use client";
import React, { useState, useEffect } from "react";
import { Banner } from "@/components/Banner";
import bannerImg from "../../../../public/assets/images/LogoProntoSemBG.png";
import { Profissional, getListarProfissionais } from "@/lib/data";
import { Container } from "@/components/Container";

export default function HomePage() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profissionalFiltrado, setProfissionalFiltrado] = useState<
    Profissional[]
  >([]);

  // Efeito para carregar os profissionais
  useEffect(() => {
    async function loadProfissionais() {
      try {
        const data = await getListarProfissionais();
        setProfissionais(data);
        setProfissionalFiltrado(data); // Inicialmente, mostra todos
      } catch (error) {
        console.error("Erro ao carregar profissionais:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProfissionais();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner
        title={bannerImg}
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore a partir do seu cargo e encontre o que você precisa!"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profissionalFiltrado.map((profissional) => (
            <Container
              key={profissional.id}
              img={profissional.image || "/assets/images/default-profile.png"} // Imagem padrão caso não exista
              buttonText={profissional.name}
              href={`/profissionais/${profissional.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
