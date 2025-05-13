
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Plataforma de Capacitação Contínua</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Aprenda sobre os sistemas institucionais e boas práticas administrativas da Prefeitura de Juiz de Fora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Para Servidores Municipais</h3>
            <p className="text-gray-600 mb-4">Acesse conteúdos específicos para sua área de atuação e aprimore suas habilidades.</p>
            <Link href="/cursos/administrativo" className="text-blue-600 hover:underline">Explorar cursos →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Novos Colaboradores</h3>
            <p className="text-gray-600 mb-4">Orientação inicial sobre os sistemas e procedimentos utilizados pela prefeitura.</p>
            <Link href="/cursos/iniciantes" className="text-blue-600 hover:underline">Ver introdução →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Gestores de Equipes</h3>
            <p className="text-gray-600 mb-4">Acompanhe o progresso da sua equipe e incentive o desenvolvimento profissional.</p>
            <Link href="/dashboard/equipe" className="text-blue-600 hover:underline">Acessar dashboard →</Link>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Áreas de Conhecimento</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Administração', 'Saúde', 'Educação', 'Finanças', 'Tecnologia', 'Recursos Humanos'].map((area) => (
              <Link 
                href={`/cursos/${area.toLowerCase().replace(' ', '-')}`}
                key={area}
                className="bg-gray-200 hover:bg-blue-100 px-4 py-2 rounded-full text-gray-800 transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}