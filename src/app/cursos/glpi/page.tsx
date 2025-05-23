import React from 'react';
import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Banner title="Bem-vindo ao GLPI"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore a partir do seu cargo e encontre o que você precisa!"
      />
    </main>
  );
}