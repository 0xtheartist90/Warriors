import Link from 'next/link';

import { GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
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
    { label: 'Gedragscode', href: links.gedragscode, external: true },
    { label: 'Beleidsplan', href: links.beleidsplan, external: true }
];

const SiteFooter = () => (
    <footer id='contact-footer' className='border-hairline overflow-hidden border-t'>
        {/* CTA-statement */}
        <div className='mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-10 px-6 pt-24 pb-16 lg:px-10'>
            <h2 className='display max-w-3xl text-[clamp(2.75rem,7vw,5.5rem)] text-white'>
                Klaar om mee <span className='text-outline'>te doen</span>{' '}
                <span className='text-gold'>/</span>
            </h2>
            <Magnetic>
                <GoldButton href='/word-lid'>Word lid</GoldButton>
            </Magnetic>
        </div>

        {/* Linkkolommen */}
        <div className='border-hairline border-t'>
            <div className='mx-auto grid max-w-[1280px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10'>
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

        {/* Gigantisch woordmerk */}
        <p
            aria-hidden
            className='display -mb-[0.16em] text-center text-[clamp(3rem,10.5vw,10rem)] leading-none whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]'>
            Amsterdam Warriors
        </p>

        {/* Onderste balk */}
        <div className='border-hairline border-t'>
            <div className='display mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs tracking-[0.15em] text-white/45 lg:px-10'>
                <p>© 2026 Amsterdam Warriors</p>
                <p>
                    Work hard, play hard <span className='text-gold'>/</span>
                </p>
            </div>
        </div>
    </footer>
);

export default SiteFooter;
