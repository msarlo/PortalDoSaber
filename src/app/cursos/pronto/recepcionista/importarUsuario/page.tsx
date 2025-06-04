import InteractionButtons from "@/components/InteractionButtons";
import Passo1 from "/public/assets/img/importar_usuarioPG15.png";
import Passo2 from "/public/assets/img/importar_usuarioPG16.png";
import Passo3 from "/public/assets/img/importar_usuarioPG17.png";
import Passo4 from "/public/assets/img/importar_usuarioPG18.png";
import Image from "next/image";
import React from "react";

export default function ImportarUsuarioPage() {
    return (
        <main >
            <Image src={Passo1} alt="Primeiro Passo importando usuario" />
            <Image src={Passo2} alt="Segundo Passo importando usuario" />
            <Image src={Passo3} alt="Terceiro Passo importando usuario" />
            <Image src={Passo4} alt="Quarto Passo importando usuario" />
            <InteractionButtons initialLikes={0} initialDislikes={0} />
        </main>
    );
}