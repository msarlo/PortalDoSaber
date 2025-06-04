import InteractionButtons from "@/components/InteractionButtons";
import Passo1 from "/public/assets/img/filaAtendimento36.png";
import Passo2 from "/public/assets/img/filaAtendimento37.png";
import Image from "next/image";
import React from "react";

export default function FilaDeAtendimentoPage() {
    return (
        <main>
            <Image src={Passo1} alt="Primeiro Passo Fila de Atendimento" />
            <Image src={Passo2} alt="Segundo Passo Fila de Atendimento" />
            <InteractionButtons/>
        </main>
    );
}