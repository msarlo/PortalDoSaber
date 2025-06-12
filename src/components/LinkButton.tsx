import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
    label: string;
    href: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const LinkButton = ({ label, href, onClick }: Props) => {
    return (
        <Link href={href}>
            <button className="bg-blue-800 hover:bg-white hover:text-black px-4 py-2 rounded text-white cursor-pointer transition duration-300 ease-in-out"
                onClick={onClick}>
                {label}
            </button>
        </Link>
    );
}
