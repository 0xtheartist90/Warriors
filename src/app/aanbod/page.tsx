import type { Metadata } from 'next';
import Image from 'next/image';

import { GhostButton, GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import Reveal from '@/components/site/reveal';
import SmokeBackground from '@/components/site/smoke-background';
import { contact, links, media } from '@/lib/site';

import { Calendar, Check, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Aanbod | Amsterdam Warriors',
    description:
        'Van Basketbalschool (4-10 jaar) via Regio (12-18 jaar) naar Excellence in de NBB competitie. Plus voetbal en Baseball 5. Bekijk het volledige aanbod en de contributie van Amsterdam Warriors.'
};

/* Het doorgroeipad: van kennismaken tot excelleren */
const programmas = [
    {
        id: 'basketbalschool',
        stap: '4 tot 10 jaar',
        title: 'Basketbalschool',
        image: media.basketbalschool,
        tekst: 'Onze wekelijkse zaterdagochtendactiviteit voor kinderen van 4 tot 10 jaar. Een uur lang kennismaken met basketbal: dribbelen, passen, vangen en schieten, afgesloten met leuke oefenvormen. Het doel is kinderen enthousiast maken voor de sport, met doorstroming naar het recreatieve of competitieve programma.',
        punten: ['Zaterdag 10:00 tot 11:00', 'Bijlmer Sportcentrum', '€5 per les, betalen per keer', 'Stadspas en Jeugdfonds Sport geaccepteerd'],
        cta: { label: 'Proefles aanvragen', href: links.proefles, external: true }
    },
    {
        id: 'regio',
        stap: '12 tot 18 jaar',
        title: 'Regio',
        image: '/images/warriorssfeer4.jpg',
        tekst: 'Sporten op fietsafstand, loopafstand of binnen 15 minuten met het openbaar vervoer. Twee trainingsmomenten per week in het Bijlmersportcentrum of de gymzaal van de OSB, verzorgd door Warriors-trainers. Het Regio programma biedt structuur, een veilige leeromgeving en individuele ontwikkeling, met lokale competities.',
        punten: ['Twee trainingen per week', 'Bijlmersportcentrum of OSB-gymzaal', 'Zaterdag 10:00 tot 11:00 (10-18 jaar)', 'Pickups 22+: dinsdag en donderdag 19:00 tot 20:30'],
        cta: { label: 'Proefles aanvragen', href: links.proefles, external: true }
    },
    {
        id: 'excellence',
        stap: 'Selectie, U12 tot U22',
        title: 'Excellence',
        image: '/images/warriorssfeer.jpg',
        tekst: 'Ons selectieve programma voor getalenteerde spelers die uitkomen in de NBB competitie. Excellence vraagt begrip van trainingsintensiteit, een serieuze opleiding en teamverantwoordelijkheid. Onze filosofie: it takes a village to raise a child. We bouwen aan een professioneel netwerk van voedingsdeskundigen, docenten, coaches en scholen rond elke speler.',
        punten: ['NBB competitie, U12 tot U22', 'Besloten trainingen', 'Netwerk, ontwikkeling, structuur en community', 'Geen proefles: selectietrainingen aan het einde van elk seizoen'],
        cta: { label: 'Aanmelden selectietrainingen', href: links.tryouts, external: true }
    }
];

const contributie = [
    { programma: 'Basketbalschool (4-10 jaar)', prijs: '€5 per les' },
    { programma: 'Regio U10 t/m U22', prijs: '€350 per seizoen' },
    { programma: 'Excellence U12', prijs: '€530 per seizoen' },
    { programma: 'Excellence U14', prijs: '€550 per seizoen' },
    { programma: 'Excellence U16', prijs: '€630 per seizoen' },
    { programma: 'Excellence U18', prijs: '€640 per seizoen' },
    { programma: 'Excellence U22', prijs: '€630 per seizoen' },
    { programma: 'Baseball 5 (4-18 jaar)', prijs: '€300 per seizoen + €44,95 inschrijving' },
    { programma: 'Trainingstenue (optioneel)', prijs: '€44,95' }
];

const Page = () => {
    return (
        <main className='overflow-x-clip'>
            {/* Paginakop */}
            <section className='relative overflow-hidden pt-40 pb-20'>
                <div
                    aria-hidden
                    className='absolute inset-0 bg-[url(/images/spotlightbg.jpg)] bg-cover bg-center opacity-15'
                />
                <span aria-hidden className='bg-word'>
                    Aanbod
                </span>
                <div className='relative z-10 mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-10 px-6 lg:px-10'>
                    <h1 className='display anim-rise mt-5 text-[clamp(3rem,8vw,6.5rem)] text-white [animation-delay:120ms]'>
                        <span className='block'>Eén doorgroeipad</span>
                        <span className='text-outline block'>
                            voor elke leeftijd <span className='text-gold'>/</span>
                        </span>
                    </h1>
                    <p className='display anim-rise max-w-64 pb-3 text-xs leading-relaxed tracking-[0.15em] text-white/60 [animation-delay:240ms]'>
                        Kennismaken, ontwikkelen, excelleren. Seizoen van september tot en met mei.
                    </p>
                </div>
            </section>

            {/* Doorgroeipad */}
            {programmas.map((programma, index) => (
                <section
                    key={programma.id}
                    id={programma.id}
                    className={`scroll-mt-24 ${index % 2 === 1 ? '' : 'bg-navy-light'}`}>
                    <div className='mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10'>
                        <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
                            <div className='group relative overflow-hidden'>
                                <Image
                                    src={programma.image}
                                    alt={programma.title}
                                    width={1080}
                                    height={720}
                                    className='media-tint aspect-[4/3] w-full object-cover'
                                />
                                <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <p className='display text-xs tracking-[0.25em] text-white/50'>{programma.stap}</p>
                            <h2 className='display mt-4 text-5xl text-white lg:text-6xl'>
                                <span className='text-gold'>{String(index + 1).padStart(2, '0')}.</span>{' '}
                                {programma.title}
                            </h2>
                            <p className='mt-6 leading-relaxed text-white/70'>{programma.tekst}</p>
                            <ul className='border-hairline mt-9 border-t'>
                                {programma.punten.map((punt) => (
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
                                    <GoldButton href={programma.cta.href} external={programma.cta.external}>
                                        {programma.cta.label}
                                    </GoldButton>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </section>
            ))}

            {/* Andere sporten */}
            <section id='andere-sporten' className='scroll-mt-24'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Meer dan basketbal</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Andere <span className='text-gold'>sporten /</span>
                        </h2>
                    </Reveal>
                    <div className='mt-12 grid gap-6 md:grid-cols-2'>
                        <Reveal>
                            <article className='bg-navy-card border-hairline hover:border-gold/40 flex h-full flex-col border p-9 transition-colors duration-500'>
                                <h3 className='display text-3xl text-white'>
                                    <span className='text-gold'>04.</span> Voetbal
                                </h3>
                                <p className='mt-4 flex-1 text-sm leading-relaxed text-white/65'>
                                    In samenwerking met de nieuwe voetbalvereniging Amstel City organiseren we samen de
                                    voetbaltak. Onze leden trainen en spelen wedstrijden op het Bijlmer Sportpark,
                                    onder leiding van gediplomeerde trainers. Voor jongens en meiden van 6 tot 14 jaar
                                    uit Zuidoost. Houd de open dagen in de gaten!
                                </p>
                                <p className='mt-5 flex items-center gap-2 text-sm text-white/60'>
                                    <MapPin className='text-gold size-4' /> Bijlmer Sportpark, Karspeldreef 501
                                </p>
                                <div className='mt-7'>
                                    <GhostButton href={links.uitschrijven} external>
                                        Houd me op de hoogte
                                    </GhostButton>
                                </div>
                            </article>
                        </Reveal>
                        <Reveal delay={120}>
                            <article className='bg-navy-card border-hairline hover:border-gold/40 flex h-full flex-col border p-9 transition-colors duration-500'>
                                <h3 className='display text-3xl text-white'>
                                    <span className='text-gold'>05.</span> Baseball 5
                                </h3>
                                <p className='mt-4 flex-1 text-sm leading-relaxed text-white/65'>
                                    Baseball 5 is een snelle variant op honkbal, gespeeld met vijf spelers per team en
                                    voornamelijk binnen in de zaal. De nadruk ligt op spelinzicht, coördinatie en
                                    samenwerking, met trainingen gericht op individuele vaardigheden en collectieve
                                    prestaties. Voor kinderen en tieners van 4 tot 18 jaar.
                                </p>
                                <p className='mt-5 flex items-center gap-2 text-sm text-white/60'>
                                    <MapPin className='text-gold size-4' /> OSB, Gulden Kruis 5
                                </p>
                                <div className='mt-7'>
                                    <GhostButton href={links.proefles} external>
                                        Proefles aanvragen
                                    </GhostButton>
                                </div>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Scholentoernooi */}
            <section className='bg-navy-light'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <div className='border-hairline grid gap-12 border border-t-2 border-t-[var(--gold)] p-9 lg:grid-cols-2 lg:p-14'>
                        <Reveal>
                            <p className='eyebrow'>Evenement</p>
                            <h2 className='display mt-4 text-4xl text-white lg:text-5xl'>
                                Scholentoernooi <span className='text-gold'>2026 /</span>
                            </h2>
                            <p className='mt-6 leading-relaxed text-white/70'>
                                Hét basketbaltoernooi voor kinderen van 6 tot 12 jaar. Doe mee met je schoolteam of
                                schrijf je individueel in, dan delen wij je in bij een team. Individuele inschrijving
                                kan tot en met 14 februari 2026.
                            </p>
                            <div className='mt-8'>
                                <Magnetic>
                                    <GoldButton href={links.proefles} external>
                                        Schrijf je in
                                    </GoldButton>
                                </Magnetic>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <ul className='space-y-4 text-sm text-white/75 lg:mt-12'>
                                <li className='flex items-center gap-3'>
                                    <Calendar className='text-gold size-4 shrink-0' /> Zaterdag 21 februari 2026
                                </li>
                                <li className='flex items-center gap-3'>
                                    <MapPin className='text-gold size-4 shrink-0' /> Bijlmersportcentrum, Amsterdam
                                    Zuidoost
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Clock className='text-gold size-4 shrink-0' /> Voor kinderen van 6 tot 12 jaar
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Check className='text-gold size-4 shrink-0' /> Inschrijven per school of
                                    individueel
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Contributie */}
            <section id='contributie' className='relative scroll-mt-24 overflow-hidden'>
                <SmokeBackground />
                <div className='relative z-10 mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Seizoen september t/m mei</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            <span className='text-gold'>Contributie</span> per programma <span className='text-gold'>/</span>
                        </h2>
                    </Reveal>
                    <div className='mt-12 grid gap-16 lg:grid-cols-[1.2fr_1fr]'>
                        <Reveal>
                            <div className='border-hairline border'>
                                {contributie.map((rij, index) => (
                                    <div
                                        key={rij.programma}
                                        className={`flex items-center justify-between gap-6 px-6 py-4 ${
                                            index !== 0 ? 'border-hairline border-t' : ''
                                        }`}>
                                        <span className='text-sm text-white/75'>{rij.programma}</span>
                                        <span className='display text-gold text-sm tracking-wide whitespace-nowrap'>
                                            {rij.prijs}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <h3 className='display text-xl text-white'>Goed om te weten</h3>
                            <ul className='mt-6 space-y-4 text-sm leading-relaxed text-white/70'>
                                <li>
                                    Betaling verloopt via het NIKKI-systeem: in één keer zonder extra kosten, of in
                                    maximaal 4 termijnen met 10% servicekosten (maximaal €19 per seizoen).
                                </li>
                                <li>
                                    Recht op vergoeding via je{' '}
                                    <a
                                        className='text-gold hover:underline'
                                        href={links.sportfonds}
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                        sportfonds
                                    </a>{' '}
                                    of{' '}
                                    <a
                                        className='text-gold hover:underline'
                                        href={links.stadspas}
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                        stadspas
                                    </a>
                                    ? Zo bespaar je tot €300 op je contributie. Check het via de{' '}
                                    <a
                                        className='text-gold hover:underline'
                                        href={links.potjescheck}
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                        potjescheck
                                    </a>
                                    .
                                </li>
                                <li>
                                    Uitschrijven voor het volgende seizoen kan vóór 1 mei via het{' '}
                                    <a
                                        className='text-gold hover:underline'
                                        href={links.uitschrijven}
                                        target='_blank'
                                        rel='noreferrer noopener'>
                                        uitschrijfformulier
                                    </a>
                                    .
                                </li>
                                <li>
                                    Trainingslocaties: {contact.locaties[0].naam} ({contact.locaties[0].adres}) en{' '}
                                    {contact.locaties[1].naam} ({contact.locaties[1].adres}).
                                </li>
                            </ul>
                            <div className='mt-9'>
                                <Magnetic>
                                    <GoldButton href='/word-lid'>Word lid</GoldButton>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
