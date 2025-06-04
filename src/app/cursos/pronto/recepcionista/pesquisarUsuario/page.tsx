import React from "react";
import Image from "next/image";
import Passo1 from "/public/assets/img/pesquisar_usuarioPG11.png"
import Passo2 from "/public/assets/img/pesquisar_usuarioPG12.png"
import Passo3 from "/public/assets/img/pesquisar_usuarioPG13.png"
import InteractionButtons from "@/components/InteractionButtons";

export default function PesquisarUsuarioPage() {
    return (
        <main>
            <Image src={Passo1} alt="Primeiro passo pesquisar usuário" />
            <Image src={Passo2} alt="Segundo passo pesquisar usuário" />
            <Image src={Passo3} alt="Terceiro passo pesquisar usuário" />
            <InteractionButtons initialLikes={0} initialDislikes={0} />
        </main>
    );
}