"use client"
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder = "Pesquisar...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md">
        <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
        >
            Buscar
        </button>
        </form>
    </div>    
  );
}