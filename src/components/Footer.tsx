import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Ícone mais recente para X/Twitter

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-600 to-white text-gray-700 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Informações da Prefeitura */}
        <div className="text-sm mb-6 sm:mb-0 text-center sm:text-left">
          <h1 className="font-semibold text-blue-800">Prefeitura de Juiz de Fora</h1>
          <p className="text-gray-600">Av. Brasil, 2001 | Centro - Juiz de Fora/MG - CEP: 36060-010</p>
          <p className="text-gray-500 mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados. {/* Site versão X.X (se aplicável) */}
          </p>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/JuizdeForaPJF/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Prefeitura de Juiz de Fora">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://x.com/prefeiturajf" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) da Prefeitura de Juiz de Fora">
            <FaXTwitter className="text-black hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/JuizdeForaPJF" target="_blank" rel="noopener noreferrer" aria-label="YouTube da Prefeitura de Juiz de Fora">
            <FaYoutube className="text-red-500 hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/prefeiturajuizdefora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Prefeitura de Juiz de Fora">
            <FaInstagram className="text-orange-700 hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}