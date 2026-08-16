import Link from 'next/link';

import { GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import SmokeBackground from '@/components/site/smoke-background';
import { contact, links, socials } from '@/lib/site';

const aanbodLinks = [
    { label: 'Basketbalschool', href: '/aanbod#basketbalschool' },
    { label: 'Regio', href: '/aanbod#regio' },
    { label: 'Excellence', href: '/aanbod#excellence' },
    { label: 'Voetbal & Baseball 5', href: '/aanbod#andere-sporten' },
    { label: 'Contributie', href: '/aanbod#contributie' }
];

const clubLinks = [
    { label: 'Word lid', href: '/word-lid' },
    { label: 'Over ons', href: '/over' },
    { label: 'Contact', href: '/contact' },
    { label: 'Webshop', href: links.webshop, external: true },
    { label: 'Gedragscode', href: links.gedragscode, external: true },
    { label: 'Beleidsplan', href: links.beleidsplan, external: true }
];

const SiteFooter = () => (
    <footer id='contact-footer' className='border-hairline overflow-hidden border-t'>
        {/* CTA-statement */}
        <div className='relative'>
            <SmokeBackground />
            <div className='relative z-10 mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-12 px-6 pt-28 pb-20 lg:px-10'>
                <div>
                    <h2 className='display text-[clamp(3rem,8vw,6.5rem)] text-white'>
                        <span className='block'>Klaar om</span>
                        <span className='text-outline block'>
                            mee te doen <span className='text-gold'>/</span>
                        </span>
                    </h2>
                </div>
                <div className='flex flex-col items-start gap-6 pb-2'>
                    <p className='display max-w-64 text-xs leading-relaxed tracking-[0.15em] text-white/60'>
                        Kom langs voor een gratis proefles en ervaar de Warriors-sfeer zelf.
                    </p>
                    <div className='flex flex-wrap items-center gap-7'>
                        <Magnetic>
                            <GoldButton href='/word-lid'>Word lid</GoldButton>
                        </Magnetic>
                        <a
                            href={links.proefles}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='display hover:text-gold text-sm tracking-[0.25em] text-white transition-colors duration-300'>
                            [&nbsp;&nbsp;Gratis proefles&nbsp;&nbsp;]
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Linkkolommen */}
        <div className='border-hairline border-t'>
            <div className='border-hairline mx-auto grid max-w-[1280px] gap-y-12 px-6 py-16 max-lg:gap-x-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[var(--hairline)] lg:px-10 lg:py-0 lg:[&>div]:py-16 lg:[&>div:not(:first-child)]:pl-10 lg:[&>div:not(:last-child)]:pr-10'>
                <div>
                    <h3 className='display text-xs tracking-[0.25em] text-white/40'>Contact</h3>
                    <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                        <li>
                            <a
                                className='hover:text-gold transition-colors duration-300'
                                href={`mailto:${contact.email}`}>
                                {contact.email}
                            </a>
                        </li>
                        <li>
                            <a className='hover:text-gold transition-colors duration-300' href={contact.telefoonHref}>
                                {contact.telefoon}
                            </a>
                        </li>
                        <li>Anton de Komplein 157, Amsterdam</li>
                    </ul>
                </div>

                <div>
                    <h3 className='display text-xs tracking-[0.25em] text-white/40'>Aanbod</h3>
                    <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                        {aanbodLinks.map((item) => (
                            <li key={item.label}>
                                <Link className='hover:text-gold transition-colors duration-300' href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='display text-xs tracking-[0.25em] text-white/40'>De club</h3>
                    <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                        {clubLinks.map((item) => (
                            <li key={item.label}>
                                <Link
                                    className='hover:text-gold transition-colors duration-300'
                                    href={item.href}
                                    {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='display text-xs tracking-[0.25em] text-white/40'>Volg ons</h3>
                    <ul className='mt-6 space-y-3.5'>
                        {socials.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className='display hover:text-gold text-sm tracking-[0.2em] text-white transition-colors duration-300'>
                                    [&nbsp;&nbsp;{label}&nbsp;&nbsp;]
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='mt-8 text-sm text-white/60'>
                        <p className='display text-xs tracking-[0.25em] text-white/40'>Vertrouwenspersoon</p>
                        <p className='mt-2'>
                            Wilt u iets melden?{' '}
                            <a className='text-gold hover:underline' href={`mailto:${contact.meldpunt}`}>
                                {contact.meldpunt}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Gigantisch woordmerk, licht op in goud bij hover */}
        <Link
            href='/'
            aria-label='Naar boven'
            className='display -mb-[0.16em] block text-center text-[clamp(3rem,10.5vw,10rem)] leading-none whitespace-nowrap text-transparent transition-[-webkit-text-stroke-color] duration-700 [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] hover:[-webkit-text-stroke-color:rgba(239,168,45,0.45)]'>
            Amsterdam Warriors
        </Link>

        {/* Onderste balk */}
        <div className='border-hairline relative border-t'>
            <div className='display mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs tracking-[0.15em] text-white/45 lg:px-10'>
                <p>© 2026 Amsterdam Warriors · KVK {contact.kvk}</p>
                <p>
                    Work hard, play hard <span className='text-gold'>/</span>
                </p>
                <a href='#' className='hover:text-gold text-white/60 transition-colors duration-300'>
                    [&nbsp;&nbsp;Naar boven&nbsp;&nbsp;]
                </a>
            </div>
        </div>
    </footer>
);

export default SiteFooter;
