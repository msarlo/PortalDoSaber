import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import  Footer  from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Saber",
  description: "Plataforma de aprendizado e conhecimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <Header /> {/* Adicionar Header aqui */}
          <main>{children}</main> {/* Envolver children com <main> ou div se necessário */}
          {/* Você pode adicionar um Footer aqui também se tiver um */}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
