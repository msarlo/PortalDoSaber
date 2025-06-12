"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: "SAUDE" | "SUS" | "ADMIN";
  // Adicione outros campos que você armazena, como 'image' para a foto de perfil
  image?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Tenta carregar o usuário do localStorage ao iniciar
    setIsLoading(true);
    const token = localStorage.getItem("authToken");
    const storedUserJson = localStorage.getItem("userData");

    if (token && storedUserJson) {
      try {
        const storedUser: User = JSON.parse(storedUserJson);
        setUser(storedUser);
      } catch (error) {
        console.error(
          "Erro ao carregar dados do usuário do localStorage:",
          error
        );
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User, token: string) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
    // Você pode querer redirecionar aqui ou deixar a página de login fazer isso
    // router.push('/cursos');
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
    router.push("/login"); // Redireciona para o login após o logout
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
