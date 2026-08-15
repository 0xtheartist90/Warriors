import type { ReactNode } from 'react';

import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export const GoldButton = ({
    href,
    children,
    external
}: {
    href: string;
    children: ReactNode;
    external?: boolean;
}) => (
    <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className='display group bg-gold text-navy hover:bg-gold-dark inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] transition-colors duration-300'>
        {children}
        <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
    </Link>
);

export const GhostButton = ({
    href,
    children,
    external
}: {
    href: string;
    children: ReactNode;
    external?: boolean;
}) => (
    <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className='display hover:border-gold hover:text-gold inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-sm tracking-[0.2em] text-white transition-colors duration-300'>
        {children}
    </Link>
);
