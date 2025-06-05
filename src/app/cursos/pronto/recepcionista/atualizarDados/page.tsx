import InteractionButtons from "@/components/InteractionButtons";
import React from "react";

export default function AtualizarDadosPage() {
    return (
        <main>
            <img src="/assets/img/AtualizarCadastro24.png" alt="Primeiro Passo Atualizar Dados" />
            <img src="/assets/img/AtualizarCadastro25.png" alt="Segundo Passo Atualizar Dados" />
            <InteractionButtons initialLikes={0} initialDislikes={0} />
        </main>
    );
}