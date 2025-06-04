import InteractionButtons from "@/components/InteractionButtons";
import Passo1 from "/public/assets/img/AtualizarCadastro24.png";
import Passo2 from "/public/assets/img/AtualizarCadastro25.png";
import Image from "next/image";
import React from "react";

export default function AtualizarDadosPage() {
    return (
        <main>
            <Image src={Passo1} alt="Primeiro Passo Atualizar Dados" />
            <Image src={Passo2} alt="Segundo Passo Atualizar Dados" />
            <InteractionButtons initialLikes={0} initialDislikes={0} />
        </main>
    );
}