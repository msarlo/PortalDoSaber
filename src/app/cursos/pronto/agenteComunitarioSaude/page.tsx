import React from 'react';
import { Banner } from '@/components/Banner'; 
import { Container } from '@/components/Container';
import { tutoriaisProntoAcs, tutoriaisProntoRecepicionista,Tutorial } from '@/lib/prontoData';
import logoProntoBanner from '/public/assets/images/LogoProntoSemBG.png'; // Importe a imagem

export default function CursosProntoPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Banner 
        title={logoProntoBanner} 
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações de forma simples e eficiente. Explore a partir do seu cargo e encontre o que você precisa!"
      />

      {/* Barra de Pequisa COMPONENTIZAR DEPOIS*/}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full max-w-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Grid de Profissões */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {tutoriaisProntoAcs.map((tutorial: Tutorial) => (
            <Container
              key={tutorial.id}
              img={tutorial.imagemSrc}
              buttonText={tutorial.titulo}
              href={`/cursos/pronto/${tutorial.profissaoSlug}/${tutorial.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}