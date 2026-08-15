import Image from 'next/image';
import Link from 'next/link';

import { GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import { contact, links, media, socials } from '@/lib/site';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const socialIcons = { Instagram, Facebook, LinkedIn: Linkedin, YouTube: Youtube } as const;

const SiteFooter = () => (
    <footer id='contact-footer' className='border-hairline border-t'>
        <div className='mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <Image src={media.logo} alt='Amsterdam Warriors logo' width={56} height={45} />
                    <span className='display text-lg text-white'>
                        Amsterdam <span className='text-gold'>Warriors</span>
                    </span>
                </div>
                <ul className='mt-7 space-y-3.5 text-sm text-white/65'>
                    <li className='flex items-center gap-3'>
                        <Mail className='text-gold size-4 shrink-0' />
                        <a
                            className='hover:text-gold transition-colors duration-300'
                            href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Phone className='text-gold size-4 shrink-0' />
                        <a className='hover:text-gold transition-colors duration-300' href={contact.telefoonHref}>
                            {contact.telefoon}
                        </a>
                    </li>
                    <li className='flex items-center gap-3'>
                        <MapPin className='text-gold size-4 shrink-0' />
                        Anton de Komplein 157, Amsterdam
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='display text-gold text-sm tracking-[0.2em]'>Aanbod</h3>
                <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                    {[
                        { label: 'Basketbalschool', href: '/aanbod#basketbalschool' },
                        { label: 'Regio', href: '/aanbod#regio' },
                        { label: 'Excellence', href: '/aanbod#excellence' },
                        { label: 'Voetbal & Baseball 5', href: '/aanbod#andere-sporten' },
                        { label: 'Contributie', href: '/aanbod#contributie' }
                    ].map((item) => (
                        <li key={item.label}>
                            <Link className='hover:text-gold transition-colors duration-300' href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='display text-gold text-sm tracking-[0.2em]'>Nuttige links</h3>
                <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                    <li>
                        <Link className='hover:text-gold transition-colors duration-300' href='/word-lid'>
                            Word lid
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-gold transition-colors duration-300' href='/over'>
                            Over ons
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-gold transition-colors duration-300' href='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a
                            className='hover:text-gold transition-colors duration-300'
                            href={links.gedragscode}
                            target='_blank'
                            rel='noreferrer noopener'>
                            Gedragscode
                        </a>
                    </li>
                    <li>
                        <a
                            className='hover:text-gold transition-colors duration-300'
                            href={links.beleidsplan}
                            target='_blank'
                            rel='noreferrer noopener'>
                            Beleidsplan
                        </a>
                    </li>
                </ul>
                <div className='mt-7 text-sm text-white/60'>
                    <p className='display text-xs tracking-[0.2em] text-white/45'>Vertrouwenspersoon</p>
                    <p className='mt-2'>
                        Wilt u iets melden?{' '}
                        <a className='text-gold hover:underline' href={`mailto:${contact.meldpunt}`}>
                            {contact.meldpunt}
                        </a>
                    </p>
                </div>
            </div>

            <div>
                <h3 className='display text-gold text-sm tracking-[0.2em]'>Volg ons</h3>
                <div className='mt-6 flex gap-3'>
                    {socials.map(({ label, href }) => {
                        const Icon = socialIcons[label as keyof typeof socialIcons];

                        return (
                            <a
                                key={label}
                                href={href}
                                target='_blank'
                                rel='noreferrer noopener'
                                aria-label={label}
                                className='border-gold/30 text-gold hover:bg-gold hover:text-navy flex size-11 items-center justify-center border transition-colors duration-300'>
                                <Icon className='size-4' />
                            </a>
                        );
                    })}
                </div>
                <div className='mt-9'>
                    <Magnetic>
                        <GoldButton href='/word-lid'>Word lid</GoldButton>
                    </Magnetic>
                </div>
            </div>
        </div>
        <div className='border-hairline border-t'>
            <p className='mx-auto max-w-[1280px] px-6 py-6 text-center text-xs tracking-wide text-white/45'>
                © 2026 Amsterdam Warriors · Work hard, play hard
            </p>
        </div>
    </footer>
);

export default SiteFooter;
