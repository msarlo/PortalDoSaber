import{Header} from "@/components/Header";
import{Footer} from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
