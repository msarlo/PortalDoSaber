export const Footer = () => {
    return (
        <footer className="w-full bg-blue- py-6 mt-auto">
            <div className="container mx-auto px-4 text-center text-white">
                <p className="text-sm">
                    &copy; Prefeitura de Juiz de Fora
                    <br />
                    Av. Brasil, 2001 | Centro - Juiz de Fora/MG - CEP: 36060-010
                    <br />
                    Todos os direitos reservados. Copyright &copy; {new Date().getFullYear()} - Site versão 1.0
                </p>
            </div>
        </footer>
    )
}