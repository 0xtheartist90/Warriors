import type { Metadata } from 'next';
import Image from 'next/image';

import { GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import Reveal from '@/components/site/reveal';
import { contact, links } from '@/lib/site';

import { Building2, FileText, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact | Amsterdam Warriors',
    description:
        'Neem contact op met Amsterdam Warriors: telefonisch, via WhatsApp of per e-mail. Vind ook onze locaties, vertrouwenspersoon en officiële documenten.'
};

const mailadressen = [
    { onderwerp: 'Basketbal', email: contact.emailBasketbal, toelichting: 'Vragen over teams en trainingen gaan direct naar de hoofdtrainer.' },
    { onderwerp: 'Voetbal', email: contact.emailVoetbal, toelichting: 'Vragen over de voetbaltak en open dagen.' },
    { onderwerp: 'Basketbalschool', email: contact.emailBasketbalschool, toelichting: 'Alles over de zaterdagochtendlessen voor 4 tot 10 jaar.' },
    { onderwerp: 'Overige vragen', email: contact.email, toelichting: 'Voor alle andere vragen, ideeën en samenwerkingen.' }
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
                    Contact
                </span>
                <div className='relative z-10 mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-10 px-6 lg:px-10'>
                    <div>
                        <h1 className='display anim-rise mt-5 text-[clamp(3rem,8vw,6.5rem)] text-white [animation-delay:120ms]'>
                            <span className='block'>We horen graag</span>
                            <span className='text-outline block'>
                                van je <span className='text-gold'>/</span>
                            </span>
                        </h1>
                        <div className='anim-rise mt-10 flex flex-wrap items-center gap-8 [animation-delay:360ms]'>
                            <Magnetic>
                                <GoldButton href={contact.telefoonHref} external>
                                    Bel {contact.telefoon}
                                </GoldButton>
                            </Magnetic>
                            <a
                                href={`mailto:${contact.email}`}
                                className='display hover:text-gold text-sm tracking-[0.25em] text-white transition-colors duration-300'>
                                [&nbsp;&nbsp;Mail ons&nbsp;&nbsp;]
                            </a>
                        </div>
                    </div>
                    <p className='display anim-rise max-w-64 pb-3 text-xs leading-relaxed tracking-[0.15em] text-white/60 [animation-delay:240ms]'>
                        Doordeweeks bereikbaar van 10:00 tot 18:00, ook via WhatsApp.
                    </p>
                </div>
            </section>

            {/* Gerichte mailadressen */}
            <section className='bg-navy-light'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Meest gestelde vragen</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Mail direct met de <span className='text-gold'>juiste persoon /</span>
                        </h2>
                    </Reveal>
                    <div className='border-hairline mt-12 grid border-t sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--hairline)]'>
                        {mailadressen.map((item, index) => (
                            <Reveal key={item.onderwerp} delay={index * 100} className='h-full'>
                                <a
                                    href={`mailto:${item.email}`}
                                    className='group flex h-full flex-col py-9 max-lg:border-b max-lg:border-[var(--hairline)] lg:px-8 lg:first:pl-0 lg:last:pr-0'>
                                    <span className='display text-outline text-4xl'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className='display mt-5 text-xl text-white'>{item.onderwerp}</h3>
                                    <p className='mt-3 flex-1 text-sm leading-relaxed text-white/60'>
                                        {item.toelichting}
                                    </p>
                                    <span className='text-gold mt-6 text-sm break-all group-hover:underline'>
                                        {item.email}
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sfeerbeeld */}
            <section aria-label='Het Warriors team'>
                <div className='mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <div className='relative max-w-md overflow-hidden'>
                            <Image
                                src='/images/contact.jpeg'
                                alt='Warriors jeugdteam met medailles en trofee'
                                width={414}
                                height={414}
                                className='media-tint w-full object-cover'
                            />
                            <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <h2 className='display text-4xl text-white lg:text-6xl'>
                            <span className='block'>Work hard</span>
                            <span className='text-outline block'>
                                play hard <span className='text-gold'>/</span>
                            </span>
                        </h2>
                        <p className='mt-6 max-w-md leading-relaxed text-white/70'>
                            Van je eerste dribbel tot een medaille om je nek: bij de Warriors hoor je erbij. Vragen?
                            We staan voor je klaar.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Praktische info */}
            <section className='relative overflow-hidden'>
                <div
                    aria-hidden
                    className='absolute inset-0 bg-[url(/images/blackbg.jpg)] bg-cover bg-center opacity-15'
                />
                <div className='relative z-10 mx-auto grid max-w-[1280px] gap-6 px-6 py-24 md:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <div className='border-hairline h-full border p-9'>
                            <div className='flex items-center gap-3'>
                                <Phone className='text-gold size-5' />
                                <h2 className='display text-2xl text-white'>Bereikbaarheid</h2>
                            </div>
                            <ul className='mt-6 space-y-4 text-sm leading-relaxed text-white/70'>
                                <li className='flex items-start gap-3'>
                                    <MessageCircle className='text-gold mt-0.5 size-4 shrink-0' />
                                    <span>
                                        <a className='text-gold hover:underline' href={contact.telefoonHref}>
                                            {contact.telefoon}
                                        </a>
                                        , doordeweeks van 10:00 tot 18:00 en ook bereikbaar via WhatsApp.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <Mail className='text-gold mt-0.5 size-4 shrink-0' />
                                    <a className='hover:text-gold' href={`mailto:${contact.email}`}>
                                        {contact.email}
                                    </a>
                                </li>
                            </ul>
                            <div className='border-hairline mt-8 border-t pt-6'>
                                <div className='flex items-center gap-3'>
                                    <MapPin className='text-gold size-5' />
                                    <h3 className='display text-xl text-white'>Locaties</h3>
                                </div>
                                <ul className='mt-4 space-y-3 text-sm text-white/70'>
                                    {contact.locaties.map((locatie) => (
                                        <li key={locatie.naam}>
                                            <span className='text-white'>{locatie.naam}</span> · {locatie.adres}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className='border-hairline h-full border p-9'>
                            <div className='flex items-center gap-3'>
                                <ShieldCheck className='text-gold size-5' />
                                <h2 className='display text-2xl text-white'>Vertrouwenspersoon</h2>
                            </div>
                            <p className='mt-6 text-sm leading-relaxed text-white/70'>
                                Wil je iets melden of vertrouwelijk praten? Neem contact op met onze
                                vertrouwenspersoon <span className='text-white'>{contact.vertrouwenspersoon.naam}</span>{' '}
                                via{' '}
                                <a className='text-gold hover:underline' href={contact.vertrouwenspersoon.telefoonHref}>
                                    {contact.vertrouwenspersoon.telefoon}
                                </a>{' '}
                                of met het landelijke meldpunt via{' '}
                                <a className='text-gold hover:underline' href={`mailto:${contact.meldpunt}`}>
                                    {contact.meldpunt}
                                </a>
                                .
                            </p>
                            <div className='border-hairline mt-8 border-t pt-6'>
                                <div className='flex items-center gap-3'>
                                    <Building2 className='text-gold size-5' />
                                    <h3 className='display text-xl text-white'>Zakelijk</h3>
                                </div>
                                <ul className='mt-4 space-y-2 text-sm text-white/70'>
                                    <li>
                                        KVK: <span className='text-white'>{contact.kvk}</span>
                                    </li>
                                    <li>
                                        IBAN: <span className='text-white'>{contact.iban}</span> t.n.v.{' '}
                                        {contact.tenaamstelling}
                                    </li>
                                </ul>
                            </div>
                            <div className='border-hairline mt-8 border-t pt-6'>
                                <div className='flex items-center gap-3'>
                                    <FileText className='text-gold size-5' />
                                    <h3 className='display text-xl text-white'>Documenten</h3>
                                </div>
                                <ul className='mt-4 space-y-2 text-sm'>
                                    <li>
                                        <a
                                            className='text-gold hover:underline'
                                            href={links.gedragscode}
                                            target='_blank'
                                            rel='noreferrer noopener'>
                                            Gedragscode (PDF)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-gold hover:underline'
                                            href={links.beleidsplan}
                                            target='_blank'
                                            rel='noreferrer noopener'>
                                            Beleidsplan (PDF)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Page;
