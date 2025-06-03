"use client"
import React, { useState, useEffect } from 'react';
import { Banner } from '@/components/Banner';
import bannerImg from "../../../../public/assets/images/LogoProntoSemBG.png"
import { Profissional } from '@/lib/data';


export default function HomePage() {
  const [prossinal, setProfissional] = useState<Profissional[]>([]);
  const [profissionalFiltrado, setProfissionalFiltrado] = useState<Profissional[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner title={bannerImg}
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore a partir do seu cargo e encontre o que você precisa!"
      />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {prossinal.map((profissional) => (
            <div key={profissional.id} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-6">
              <img src={profissional.image} alt={profissional.name} className="w-full h-32 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{profissional.name}</h3>
              <p className="text-gray-600 mt-2">Cargo: {profissional.slug}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

