import Image, { StaticImageData } from 'next/image';
import { LinkButton } from '@/components/LinkButton';

type Props = {
    img: string | StaticImageData;
    buttonText: string;
    href: string;
}

export const Container = ({ img, buttonText, href }: Props) => {
    return (
        <div className="bg-gradient-to-br from-blue-400 w-64 h-64 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-4">
            <Image 
                src={img}
                alt="Container image"
                width={100}
                height={100}
            />
            <LinkButton 
                href={href}
                label={buttonText}
            />
        </div>
    );
};
