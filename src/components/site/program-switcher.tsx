'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';

type Programma = {
    id: string;
    stap: string;
    title: string;
    image: string;
    tekst: string;
    punten: string[];
    cta: { label: string; href: string; external?: boolean };
};

/* Tab-selector voor het doorgroeipad: wissel tussen de drie programma's.
   Deep-links als /aanbod#regio openen direct de juiste tab. */
const ProgramSwitcher = ({ programmas }: { programmas: Programma[] }) => {
    const [actiefId, setActiefId] = useState(programmas[0].id);

    useEffect(() => {
        const vanHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (programmas.some((p) => p.id === hash)) setActiefId(hash);
        };
        vanHash();
        window.addEventListener('hashchange', vanHash);

        return () => window.removeEventListener('hashchange', vanHash);
    }, [programmas]);

    const kies = (id: string) => {
        setActiefId(id);
        window.history.replaceState(null, '', `#${id}`);
    };

    const actief = programmas.find((p) => p.id === actiefId) ?? programmas[0];

    return (
        <div>
            {/* Tabs */}
            <div className='border-hairline flex flex-wrap gap-x-10 gap-y-3 border-b' role='tablist'>
                {programmas.map((programma, index) => {
                    const isActief = programma.id === actiefId;

                    return (
                        <button
                            key={programma.id}
                            type='button'
                            role='tab'
                            aria-selected={isActief}
                            onClick={() => kies(programma.id)}
                            className={`display -mb-px cursor-pointer border-b-2 pb-4 text-left text-xl transition-colors duration-300 lg:text-2xl ${
                                isActief
                                    ? 'border-[var(--gold)] text-white'
                                    : 'border-transparent text-white/40 hover:text-white'
                            }`}>
                            <span className='text-gold'>{String(index + 1).padStart(2, '0')}.</span>{' '}
                            {programma.title}
                        </button>
                    );
                })}
            </div>

            {/* Actieve programma */}
            <div key={actief.id} className='anim-rise mt-12 grid items-center gap-16 lg:grid-cols-2'>
                <div className='relative overflow-hidden'>
                    <Image
                        src={actief.image}
                        alt={actief.title}
                        width={1080}
                        height={720}
                        className='media-tint aspect-[4/3] w-full object-cover'
                    />
                    <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                </div>
                <div>
                    <p className='display text-xs tracking-[0.25em] text-white/50'>{actief.stap}</p>
                    <h2 className='display mt-4 text-4xl text-white lg:text-5xl'>{actief.title}</h2>
                    <p className='mt-6 leading-relaxed text-white/70'>{actief.tekst}</p>
                    <ul className='border-hairline mt-9 border-t'>
                        {actief.punten.map((punt) => (
                            <li
                                key={punt}
                                className='border-hairline flex items-start gap-4 border-b py-3.5 text-sm text-white/75'>
                                <span className='display text-gold shrink-0'>/</span>
                                {punt}
                            </li>
                        ))}
                    </ul>
                    <div className='mt-10'>
                        <Magnetic>
                            <GoldButton href={actief.cta.href} external={actief.cta.external}>
                                {actief.cta.label}
                            </GoldButton>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramSwitcher;
