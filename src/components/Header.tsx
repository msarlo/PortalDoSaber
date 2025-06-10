"use client"; 

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext'; 
import { LinkButton } from './LinkButton'; 

// Um ícone simples de usuário como placeholder
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

type Props = {
  children?: ReactNode;
};

export function Header({ children }: Props) {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  if (isLoading) {
    // Pode mostrar um loader menor ou nada enquanto o auth carrega
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Placeholder para logo e texto durante o carregamento */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-blue-500 animate-pulse rounded"></div> {/* Placeholder para logoPrefeitura */}
            <div className="h-8 w-32 bg-blue-500 animate-pulse rounded"></div> {/* Placeholder para "Portal Saber" */}
          </div>
          <div className="h-8 w-20 bg-blue-500 animate-pulse rounded"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-gradient-to-b from-blue-600 to-white text-gray-700 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e Nome do Portal */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/images/logoPrefeitura.png" 
            alt="Logo Prefeitura" 
            width={300} 
            height={100} 
             
          />
          <span className="text-2xl font-bold"> {/* Mantido o span para o texto */}
            Portal Saber
          </span>
        </Link>

        {/* Custom Navigation Links passed as children */}
        {children && (
          <nav className="hidden md:flex gap-6 items-center">
            {children}
          </nav>
        )}
        
        {/* Authentication Status */}
        <nav className="flex gap-4 items-center">
          {isAuthenticated && user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                aria-label="Menu do usuário"
              >
                {/* Idealmente, user.image seria a URL da foto de perfil */}
                {user.image ? (
                  <img src={user.image} alt="Foto do perfil" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <UserIcon className="w-6 h-6 text-white" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-gray-700">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  <Link
                    href="/perfil/editar" // Crie esta página depois
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Editar Perfil
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <LinkButton href="/cadastro" label="Cadastro" />
              <Link href="/login" 
              onClick ={() => setIsDropdownOpen(false)}
              />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};