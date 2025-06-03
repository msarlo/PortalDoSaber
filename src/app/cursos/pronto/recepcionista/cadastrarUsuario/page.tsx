import React from "react";
import Passo1 from "/assets/img/CadastrUsuario21.png"
import Passo2 from "/assets/img/CadastrUsuario22.png"
import Passo3 from "/assets/img/CadastrUsuario23.png"

export default function CadastrarUsuarioPage() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Tutorial aqui</h1>
            <img src={Passo1} alt="Primeiro Passo" />
            <img src={Passo2} alt="Segundo Passo" />
            <img src={Passo3} alt="Terceiro Passo" />
        </main>
    );
}