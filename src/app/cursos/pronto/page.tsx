"use client"
import React, { useState, useEffect } from 'react';
import { Banner } from '@/components/Banner';
import bannerImg from "../../../../public/assets/images/LogoProntoSemBG.png"


export default function HomePage() {


  return (
    <main className="min-h-screen bg-gray-50">
      <Banner title={bannerImg}
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore a partir do seu cargo e encontre o que você precisa!"
      />
    </main>
  );
}

