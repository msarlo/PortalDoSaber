"use client"
import React from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder = "Pesquisar...", onSearch }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    onSearch?.(value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center gap-2 w-full max-w-md">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>    
  );
}