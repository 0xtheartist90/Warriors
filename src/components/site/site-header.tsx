'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Aanbod', href: '/aanbod' },
    { label: 'Over ons', href: '/over' },
    { label: 'Contact', href: '/contact' }
];

/* Vaste header die verdicht bij scrollen en de actieve pagina in goud markeert. */
const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`border-hairline fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${
                scrolled ? 'bg-navy/95' : 'bg-navy/70'
            }`}>
            <div
                className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
                    scrolled ? 'h-16' : 'h-20'
                }`}>
                <Link href='/' className='flex items-center gap-3'>
                    <Image
                        src='https://static.wixstatic.com/media/c5b4b1_84232c49e5e44f92a76ac8e0a0000621~mv2.png'
                        alt='Amsterdam Warriors logo'
                        width={52}
                        height={42}
                        className={`transition-transform duration-500 ${scrolled ? 'scale-90' : ''}`}
                    />
                    <span className='display text-lg text-white'>
                        Amsterdam <span className='text-gold'>Warriors</span>
                    </span>
                </Link>
                <nav className='hidden items-center gap-9 lg:flex'>
                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`display relative text-[13px] tracking-[0.18em] transition-colors duration-300 ${
                                    active ? 'text-gold' : 'hover:text-gold text-white/75'
                                }`}>
                                {item.label}
                                <span
                                    className={`bg-gold absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                                        active ? 'w-full' : 'w-0'
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>
                <Link
                    href='/word-lid'
                    className='display bg-gold text-navy hover:bg-gold-dark px-6 py-3 text-[13px] tracking-[0.18em] transition-colors duration-300'>
                    Word lid
                </Link>
            </div>
        </header>
    );
};

export default SiteHeader;
