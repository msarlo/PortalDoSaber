import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
    img: StaticImageData;
    buttonText: string;
    href: string;
}

export const Container = ({ img, buttonText, href }: Props) => {
    return (
        <div className="w-64 h-64 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-4">
            <Image 
                src={img}
                alt="Container image"
                width={100}
                height={100}
            />
            <Link href={href}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </Link>
        </div>
    );
};
