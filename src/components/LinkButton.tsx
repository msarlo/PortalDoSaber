import Link from 'next/link';

type Props = {
    label: string;
    href: string;
}

export const LinkButton = ({ label, href }: Props) => {
    return (
        <Link href={href}>
            <button className="bg-blue-800 hover:bg-white hover:text-black px-4 py-2 rounded text-white cursor-pointer transition duration-300 ease-in-out">
                {label}
            </button>
        </Link>
    );
}
