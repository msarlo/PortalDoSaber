import { Banner } from "@/components/Banner";
import logoProntoBanner from "/public/assets/images/LogoProntoSemBG.png"; // Importe a imagem

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <Banner
      title={logoProntoBanner}
        descricao="Tutoriais do Pronto para Recepcionistas"/>
    </main>
  );
}
