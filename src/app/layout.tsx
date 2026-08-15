import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import localFont from 'next/font/local';

import '@/app/globals.css';
import IntroCurtain from '@/components/site/intro-curtain';
import SmoothScroll from '@/components/site/smooth-scroll';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald'
});

export const metadata: Metadata = {
    title: 'Amsterdam Warriors | Basketbal Amsterdam Zuidoost',
    description:
        'Amsterdam Warriors is de plek voor basketbal in Zuidoost vanaf 4 jaar. Voor de jeugd vanaf 4 tot en met 10 jaar is de Warriors Basketbalschool de springplank. Vanaf 11 jaar maak je kennis met basketbal in ons Regio programma. En wij excelleren ons talent in de NBB competitie middels ons Excellence programma.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='nl' className='dark'>
            <body
                className={`${geistSans.variable} ${oswald.variable} bg-navy text-foreground overscroll-none font-sans antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
                <div aria-hidden className='grain' />
                <IntroCurtain />
            </body>
        </html>
    );
};

export default Layout;
