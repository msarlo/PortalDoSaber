import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';
import recepcionistaImage from '@/assets/images/Recepcionista.webp';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header showButtons={true} />
        <Container 
            img={recepcionistaImage}
            buttonText="recepcionista"
            href="/destination-page"
        />
        <Footer />
    </div>
  );
}

export default Page;