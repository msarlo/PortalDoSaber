import Image from 'next/image'
import Link from 'next/link'
import recepcionistaImage from '@/assets/images/Recepcionista.webp';
interface HeaderProps {
    showButtons?: boolean;
}

export const Header = ({ showButtons: showButtons = false }: HeaderProps) => {
    return (
        <header className="w-full h-20 flex items-center justify-between px-8 bg-white shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    
                    <Image
                        src="/images/logo.png"
                        alt="Logo da empresa"
                        width={150}
                        height={40}
                        priority
                    />
                </Link>
            </div>

            {showButtons && (
                <div className="flex gap-4">
                    <Link 
                        href="/login" 
                        className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                    >
                        Login
                    </Link>
                    <Link 
                        href="/register" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Cadastro
                    </Link>
                </div>
            )}
        </header>
    )
}