'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

/* Zwart entree-scherm met het clublogo dat na de eerste load omhoog wegschuift. */
const IntroCurtain = () => {
    const [leaving, setLeaving] = useState(false);
    const [gone, setGone] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setGone(true);
            return;
        }

        const leaveTimer = setTimeout(() => setLeaving(true), 1100);
        const goneTimer = setTimeout(() => setGone(true), 2000);

        return () => {
            clearTimeout(leaveTimer);
            clearTimeout(goneTimer);
        };
    }, []);

    if (gone) return null;

    return (
        <div aria-hidden className={`intro-curtain ${leaving ? 'intro-curtain-leaving' : ''}`}>
            <div className='intro-mark flex flex-col items-center gap-5'>
                <Image
                    src='https://static.wixstatic.com/media/c5b4b1_84232c49e5e44f92a76ac8e0a0000621~mv2.png'
                    alt=''
                    width={104}
                    height={84}
                    priority
                />
                <span className='display text-xl tracking-[0.3em] text-white'>
                    Amsterdam <span className='text-gold'>Warriors</span>
                </span>
            </div>
        </div>
    );
};

export default IntroCurtain;
