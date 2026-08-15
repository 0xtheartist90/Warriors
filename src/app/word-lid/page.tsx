import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { GhostButton, GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import Reveal from '@/components/site/reveal';
import SmokeBackground from '@/components/site/smoke-background';
import { links, media } from '@/lib/site';

import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Word lid | Amsterdam Warriors',
    description:
        'Wil jij een Amsterdam Warrior worden? Volg gratis een proefles, schrijf je in en bespaar tot €300 op je contributie via het sportfonds of de stadspas.'
};

const stappen = [
    {
        nummer: '01',
        titel: 'Volg een gratis proefles',
        tekst: 'Om erachter te komen of de sport echt iets voor jou is, kan je gratis een proefles volgen bij ons. Kies je sport, kom langs en ervaar de Warriors-sfeer. Let op: voor het Excellence programma zijn er geen proeflessen, daarvoor organiseren we selectietrainingen aan het einde van elk seizoen.',
        cta: { label: 'Proefles aanvragen', href: links.proefles, external: true }
    },
    {
        nummer: '02',
        titel: 'Schrijf je in',
        tekst: 'Overtuigd? Vul het inschrijfformulier in en sluit je aan bij onze sportfamilie. Ben je jonger dan 16 jaar, dan moet de inschrijving door een ouder of voogd worden gedaan. Na inschrijving ontvang je de betaallink per e-mail via ons NIKKI-systeem.',
        cta: { label: 'Inschrijfformulier', href: links.inschrijven, external: true }
    },
    {
        nummer: '03',
        titel: 'Regel je contributie slim',
        tekst: 'Betaal in één keer zonder extra kosten, of in maximaal 4 termijnen. Kom je in aanmerking voor het sportfonds of de stadspas? Dan bespaar je tot €300 op je contributie. Doe de potjescheck en weet het binnen 15 minuten.',
        cta: { label: 'Bekijk de contributie', href: '/aanbod#contributie' }
    }
];

const Page = () => {
    return (
        <main className='overflow-x-clip'>
            {/* Paginakop */}
            <section className='relative overflow-hidden pt-40 pb-20'>
                <span aria-hidden className='bg-word'>
                    Word lid
                </span>
                <div className='relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10'>
                    <h1 className='display anim-rise mt-5 max-w-3xl text-5xl text-white [animation-delay:120ms] lg:text-7xl'>
                        Wil jij een Amsterdam <span className='text-gold'>Warrior</span> worden? <span className='text-gold'>/</span>
                    </h1>
                    <p className='anim-rise mt-6 max-w-2xl leading-relaxed text-white/70 [animation-delay:240ms]'>
                        Wat leuk dat je ervoor kiest om je aan te sluiten bij onze sportfamilie! Onderneem de volgende
                        stappen om te proeven of de sport voor jou is.
                    </p>
                </div>
            </section>

            {/* Stappen */}
            <section className='bg-navy-light'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <div className='grid gap-6 lg:grid-cols-3'>
                        {stappen.map((stap, index) => (
                            <Reveal key={stap.nummer} delay={index * 120}>
                                <article className='bg-navy-card border-hairline hover:border-gold/40 flex h-full flex-col border p-9 transition-colors duration-500'>
                                    <span className='display text-outline text-6xl'>{stap.nummer}</span>
                                    <h2 className='display mt-5 text-2xl text-white'>{stap.titel}</h2>
                                    <p className='mt-4 flex-1 text-sm leading-relaxed text-white/65'>{stap.tekst}</p>
                                    <Link
                                        href={stap.cta.href}
                                        {...('external' in stap.cta && stap.cta.external
                                            ? { target: '_blank', rel: 'noreferrer noopener' }
                                            : {})}
                                        className='display text-gold group/link mt-7 inline-flex items-center gap-2 text-sm tracking-[0.2em]'>
                                        {stap.cta.label}
                                        <ArrowRight className='size-4 transition-transform duration-300 group-hover/link:translate-x-1' />
                                    </Link>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Besparen */}
            <section className='relative overflow-hidden'>
                <SmokeBackground />
                <div className='relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Wist je dat...</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Tot <span className='text-gold'>€300 besparen</span> op je contributie?
                        </h2>
                        <p className='mt-6 leading-relaxed text-white/70'>
                            Je kan een beroep doen op je{' '}
                            <a
                                className='text-gold font-semibold hover:underline'
                                href={links.sportfonds}
                                target='_blank'
                                rel='noreferrer noopener'>
                                sportfonds
                            </a>{' '}
                            of{' '}
                            <a
                                className='text-gold font-semibold hover:underline'
                                href={links.stadspas}
                                target='_blank'
                                rel='noreferrer noopener'>
                                stadspas
                            </a>
                            , en daarmee tot €300 op je contributie besparen. Vraag de vergoeding op tijd zelf aan.
                            Benieuwd of je in aanmerking komt? Doe de potjescheck en weet het binnen 15 minuten.
                        </p>
                        <div className='mt-10 flex flex-wrap gap-4'>
                            <Magnetic>
                                <GoldButton href={links.potjescheck} external>
                                    Doe de potjescheck
                                </GoldButton>
                            </Magnetic>
                            <GhostButton href={links.leergeld} external>
                                Meer informatie
                            </GhostButton>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className='group relative overflow-hidden'>
                            <Image
                                src={media.community}
                                alt='Warriors team'
                                width={1080}
                                height={810}
                                className='media-tint aspect-[4/3] w-full object-cover'
                            />
                            <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Page;
