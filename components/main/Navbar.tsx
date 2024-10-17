import Link from 'next/link';
import React from 'react';
import { GoCodeSquare } from 'react-icons/go';

interface navProps {
    id: number;  // Changed to number since IDs are typically numeric
    href: string;
    to: string;
}

const Navbar = () => {
    const nav = [
        {
            id: 1,
            href: '/',
            to: 'Home',
        },
        {
            id: 2,
            href: '/features',
            to: 'Features',
        },
        {
            id: 3,
            href: '/pricing',
            to: 'Pricing',
        },
        {
            id: 4,
            href: '/about',
            to: 'About',
        },
        {
            id: 5,
            href: '/docs',
            to: 'Documentation',
        },
    ];

    return (
        <div className='w-full flex items-center gap-[180px] p-4'>
            <div className="flex text-3xl items-center gap-1 font-bold">
                <h1>Code</h1>
                <span>
                    <GoCodeSquare size={40} />
                </span>
                <h1>Hub</h1>
            </div>
            <ul className="flex space-x-4">
                {nav.map((item: navProps) => (
                    <li key={item.id}>
                        <Link href={item.href}>
                            {item.to}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
