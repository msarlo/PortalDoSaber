import React from 'react';

import { Banner } from '@/components/Banner';



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner title="Bem-vindo ao 1DOC"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. "
      />

    </main>
  );
}