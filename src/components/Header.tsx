"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function Header({ children }: Props) {
  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/logoPrefeitura.png"
                alt="Logo Prefeitura de Juiz de Fora"
                width={300}
                height={500}
              />
              <h1 className="text-xl font-bold">Portal Saber</h1>
            </div>
          </Link>
        </div>

        {children}
        
      </div>
    </header>
  );
}