"use client";
import React from "react";
import Image from "next/image";
import Passo1 from "/public/assets/img/CadastrUsuario21.png";
import Passo2 from "/public/assets/img/CadastrUsuario22.png";
import Passo3 from "/public/assets/img/CadastrUsuario23.png";
import InteractionButtons from "@/components/InteractionButtons";

export default function CadastrarUsuarioPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <Image src={Passo1} alt="Primeiro Passo" />
      <Image src={Passo2} alt="Segundo Passo" />
      <Image src={Passo3} alt="Terceiro Passo" />
      <InteractionButtons initialLikes={0} initialDislikes={0} />
    </main>
  );
}
