import Image, { StaticImageData } from "next/image"

interface BannerProps {
    title: string | StaticImageData;
    descricao?: string
}

export function Banner({ title, descricao }: BannerProps) {
    return (
        <section className="bg-gradient-to-br from-blue-700 to-blue-100 text-gray-800 py-16 
        rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] mx-4 my-8 transform hover:scale-[1.02]
        transition-all duration-300">
            <div className="container mx-auto px-4">
                {typeof title === 'string' ? (
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4 text-black">{title}</h1>
                        {descricao && <p className="text-xl max-w-3xl mx-auto text-gray-900">{descricao}</p>}
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="flex-shrink-0">
                            <Image
                                className="max-w-[200px] md:max-w-[400px] h-auto"
                                src={title}
                                alt="Banner Title"
                                width={400}
                                height={200}
                            />
                        </div>
                        {descricao && <p className="text-xl text-gray-900 max-w-md">{descricao}</p>}
                    </div>
                )}
            </div>
        </section>
    )
}