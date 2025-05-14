import React from 'react';

export function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Capacitação PJF</h4>
              <p className="text-gray-400">Plataforma de capacitação contínua para servidores públicos municipais</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contato</h4>
              <p className="text-gray-400">suporte.capacitacao@pjf.mg.gov.br</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Prefeitura de Juiz de Fora. Todos os direitos reservados.
          </div>
        </div>
      </footer>
  );
}