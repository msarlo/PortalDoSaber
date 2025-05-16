import React from 'react';
import { Header } from '@/components/Header';



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header/>
      
      <section className="bg-gradient-to-br from-blue-900 to-blue-100 text-gray-800 py-16 rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] mx-4 my-8 transform hover:scale-[1.02] transition-all duration-300">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Bem-vindo ao 1DOC</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. 
          </p>
        </div>
      </section>
    </main>
  );
}