import InteractionButtons from "@/components/InteractionButtons";
import Passo1 from "/public/assets/img/Agendamento26.png";
import Passo2 from "/public/assets/img/Agendamento27.png";
import Passo3 from "/public/assets/img/Agendamento28.png";
import Passo4 from "/public/assets/img/Agendamento29.png";
import Passo5 from "/public/assets/img/Agendamento30.png";
import Passo6 from "/public/assets/img/Agendamento31.png";
import Passo7 from "/public/assets/img/Agendamento32.png";
import Passo8 from "/public/assets/img/Agendamento33.png";
import Passo9 from "/public/assets/img/Agendamento34.png";
import Image from "next/image";
import React from "react";

export default function AgendamentoPage() {
    return (
        <main>
            <Image src={Passo1} alt="Primeiro Passo Agendamento" />
            <Image src={Passo2} alt="Segundo Passo Agendamento" />
            <Image src={Passo3} alt="Terceiro Passo Agendamento" />
            <Image src={Passo4} alt="Quarto Passo Agendamento" />
            <Image src={Passo5} alt="Quinto Passo Agendamento" />
            <Image src={Passo6} alt="Sexto Passo Agendamento" />
            <Image src={Passo7} alt="Sétimo Passo Agendamento" />
            <Image src={Passo8} alt="Oitavo Passo Agendamento" />
            <Image src={Passo9} alt="Nono Passo Agendamento" />
            <InteractionButtons initialLikes={0} initialDislikes={0} />
        </main>
    );
}