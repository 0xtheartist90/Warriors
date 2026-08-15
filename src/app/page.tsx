import Image from 'next/image';
import Link from 'next/link';

import Magnetic from '@/components/site/magnetic';
import Parallax from '@/components/site/parallax';
import Reveal from '@/components/site/reveal';
import SmokeBackground from '@/components/site/smoke-background';
import StatCounter from '@/components/site/stat-counter';

import { ArrowRight, Calendar, Check, Clock, MapPin } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Content, afkomstig van amsterdamwarriors.com                       */
/* ------------------------------------------------------------------ */

const WIX = 'https://static.wixstatic.com/media';

const media = {
    logo: `${WIX}/c5b4b1_84232c49e5e44f92a76ac8e0a0000621~mv2.png`,
    heroVideo: 'https://video.wixstatic.com/video/c5b4b1_90a271ffdebd41ad9034f9da9877f464/1080p/mp4/file.mp4',
    heroPoster: `${WIX}/c5b4b1_90a271ffdebd41ad9034f9da9877f464f000.jpg`,
    community: `${WIX}/c5b4b1_d06e2f640fd746aaad00a92ffbc6dd7b~mv2.jpg`,
    girls: `${WIX}/c5b4b1_e2daa68c5aa24763958a18f35a623f1d~mv2.jpg`,
    basketbalschool: `${WIX}/c5b4b1_b21cadd0fae94e2bb93e810745093c79~mv2.jpg`,
    proefles: `${WIX}/c5b4b1_88e5f3ebbfb34adc905f90d4e1b1c648~mv2.jpg`,
    nieuws: '/images/nieuws.jpg'
};

/* foto's uit /public/images/Marquee voor de doorlopende fotostrook */
const marqueePhotos = [
    '/images/Marquee/Warriors.jpg',
    '/images/Marquee/Warriors3.jpg',
    '/images/Marquee/Warriors4.jpg',
    '/images/Marquee/Warriors5.jpg',
    '/images/Marquee/Warriors6.jpg',
    '/images/Marquee/Warriors7.jpg'
];

const links = {
    proefles: 'https://forms.wix.com/f/7122204151047521203',
    tryouts: 'https://tinyurl.com/4n4hs3uz',
    gedragscode: 'https://www.amsterdamwarriors.com/_files/ugd/c5b4b1_e6e7e642b81d4073bd6b0e3c7cf9638b.pdf',
    beleidsplan: 'https://www.amsterdamwarriors.com/_files/ugd/c5b4b1_7a7b2477bbc446caac77ed95fc881713.pdf',
    sportfonds: 'https://jeugdfondssportencultuur.nl/fondsen/amsterdam-sport/',
    stadspas: 'https://www.amsterdam.nl/stadspas/',
    leergeld: 'https://www.leergeldamsterdam.nl/mogelijkheden/contributie-sport',
    potjescheck: 'https://potjescheck.geldfit.nl/'
};

const programmas = [
    {
        id: 'basketbalschool',
        title: 'Basketbalschool',
        text: 'De kennismaking met basketbal voor kinderen vanaf 4 tot 10 jaar. Hier laten we kinderen ervaren hoe leuk de sport kan zijn en stomen wij ze klaar om deel te kunnen nemen aan het Regio of Excellence programma.'
    },
    {
        id: 'regio',
        title: 'Regio',
        text: 'Vanaf 11 jaar maak je kennis met basketbal in ons Regio programma. Een dynamische sport met techniek, inspanning en vooral veel plezier!'
    },
    {
        id: 'excellence',
        title: 'Excellence',
        text: 'Wij excelleren ons talent in de NBB competitie middels ons Excellence programma. De sport waar de Warriors in 2014 mee zijn gestart, en wij groeien steeds meer tot een grotere familie.'
    }
];

const tryoutDates = ['24 & 25 april', '5 & 12 mei', '7 & 14 mei'];

const partners = [
    { name: '3x3 Unites', src: `${WIX}/c5b4b1_47c7ecbe4d4547788079d12d6da8fb89~mv2.png` },
    { name: 'OSB', src: `${WIX}/c5b4b1_fd6573a18ffe4881bc1885b099377058~mv2.jpg` },
    { name: 'Gemeente Amsterdam Zuidoost', src: `${WIX}/c5b4b1_0d55e1f3b8cd4eaaa0447b2d40bda8df~mv2.png` },
    { name: 'Ir. Lely Lyceum', src: `${WIX}/c5b4b1_6b5b231a509a4ed28133e6822575b300~mv2.png` },
    { name: 'Bindelmeer College', src: `${WIX}/c5b4b1_d57d3bec4a304d408d1c5c720c58cc44~mv2.png` },
    { name: 'Kolom', src: `${WIX}/c5b4b1_dc096df71b9a4cd58dd869d4cd986d4f~mv2.png` },
    { name: 'Coerver Partner Club', src: `${WIX}/3d8cdb_0a6050ac051f4e78a63e61afe0107d9e~mv2.jpg` },
    { name: 'SES', src: `${WIX}/c5b4b1_d02b49fc1aa045998994345cf12dad68~mv2.png` },
    { name: 'Funtrax ASV', src: `${WIX}/c5b4b1_214d511284244bc6929bf4f63a00576f~mv2.png` },
    { name: 'Kzone Sports', src: `${WIX}/c5b4b1_e4d8c6d09108467aba448f99ce3173fa~mv2.png` },
    { name: 'Feyt', src: `${WIX}/c5b4b1_06d6d3bf68d44d109dc0831ce2c64bad~mv2.jpeg` },
    { name: 'Schoolsport-toernooien Zuidoost', src: `${WIX}/c5b4b1_c87e5c2afa454627869ff9dda4a70f50~mv2.png` }
];

/* ------------------------------------------------------------------ */
/*  Kleine bouwstenen                                                  */
/* ------------------------------------------------------------------ */

const GoldButton = ({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) => (
    <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className='display group bg-gold text-navy hover:bg-gold-dark inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] transition-colors duration-300'>
        {children}
        <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
    </Link>
);

const GhostButton = ({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) => (
    <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className='display hover:border-gold hover:text-gold inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-sm tracking-[0.2em] text-white transition-colors duration-300'>
        {children}
    </Link>
);

/* ------------------------------------------------------------------ */
/*  Pagina                                                             */
/* ------------------------------------------------------------------ */

const Page = () => {
    return (
        <main className='overflow-x-clip'>
            {/* ---------------- Hero ---------------- */}
            <section className='relative flex min-h-svh items-center overflow-hidden pt-20'>
                <video
                    className='hero-video absolute inset-0 h-full w-full object-cover'
                    src={media.heroVideo}
                    poster={media.heroPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className='bg-navy/70 absolute inset-0' />
                {/* vignet: donkere randen voor cinematische focus op het midden */}
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,6,6,0.85)_100%)]' />
                <div className='from-navy absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent' />

                <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-10'>
                    <Image
                        src={media.logo}
                        alt='Amsterdam Warriors logo'
                        width={130}
                        height={104}
                        priority
                        className='anim-rise'
                    />
                    <h1 className='display anim-rise mt-8 text-[clamp(3.5rem,11vw,9rem)] text-white [animation-delay:160ms]'>
                        <span className='block'>Work</span>
                        <span className='block'>Hard</span>
                        <span className='block'>
                            Play hard <span className='text-gold'>/</span>
                        </span>
                    </h1>
                    <div className='anim-rise mt-12 flex flex-wrap items-center gap-8 [animation-delay:420ms]'>
                        <Magnetic>
                            <GoldButton href='/word-lid'>Word lid</GoldButton>
                        </Magnetic>
                        <Link
                            href='/aanbod'
                            className='display hover:text-gold text-sm tracking-[0.25em] text-white transition-colors duration-300'>
                            [&nbsp;&nbsp;Ons aanbod&nbsp;&nbsp;]
                        </Link>
                    </div>
                </div>

                {/* micro-labels in de hoeken */}
                <p className='display anim-rise absolute bottom-10 left-6 z-10 max-w-56 text-xs leading-relaxed tracking-[0.15em] text-white/60 [animation-delay:700ms] lg:left-10'>
                    Basketbalclub Amsterdam Zuidoost. Voor iedereen vanaf 4 jaar.
                </p>
                <p className='display anim-rise absolute right-6 bottom-10 z-10 text-xs tracking-[0.15em] text-white/60 [animation-delay:700ms] lg:right-10'>
                    Sinds 2014
                </p>

                {/* scroll-indicator */}
                <Link
                    href='#over'
                    aria-label='Scroll naar Over ons'
                    className='anim-rise absolute bottom-8 left-1/2 z-10 -translate-x-1/2 [animation-delay:900ms]'>
                    <span className='scroll-cue block' />
                </Link>
            </section>

            {/* ---------------- Sinds 2014: ghost-getal ---------------- */}
            <section className='border-hairline border-y'>
                <div className='mx-auto max-w-[1280px] px-6 py-20 lg:px-10'>
                    <Reveal>
                        <p className='display text-center text-[clamp(5rem,17vw,15rem)] leading-none text-white/[0.07]'>
                            <StatCounter value={2014} />
                        </p>
                        <div className='display mt-2 flex flex-col justify-between gap-3 text-xs tracking-[0.15em] text-white/60 sm:flex-row'>
                            <p>Sinds 2014 bouwen we aan sport in Zuidoost,</p>
                            <p>van basketbalschool tot Eredivisie.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Over ons ---------------- */}
            <section id='over' className='relative scroll-mt-24 overflow-hidden'>
                <SmokeBackground />
                <span aria-hidden className='bg-word'>
                    Warriors
                </span>
                <div className='relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <Parallax strength={30}>
                            <div className='group relative'>
                                <div aria-hidden className='bg-gold absolute -top-5 -left-5 size-28' />
                                <div aria-hidden className='border-gold absolute -right-5 -bottom-5 size-28 border-4' />
                                <div className='relative overflow-hidden'>
                                    <Image
                                        src={media.community}
                                        alt='Warriors community'
                                        width={1081}
                                        height={608}
                                        className='media-tint aspect-[4/3] w-full object-cover'
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className='eyebrow'>Over Amsterdam Warriors</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Dé plek voor basketbal in <span className='text-gold'>Zuidoost</span> vanaf 4 jaar <span className='text-gold'>/</span>
                        </h2>
                        <p className='mt-6 leading-relaxed text-white/70'>
                            Welkom bij Amsterdam Warriors! Wij zijn de basketbalclub van Amsterdam Zuidoost, waar je de
                            kans krijgt om je basketbaltalent te ontwikkelen. Zuidoost barst van talent. Ben jij of ken
                            jij de volgende ster? Sluit je aan bij de Amsterdam Warriors en laten we samen groeien!
                        </p>
                        <ul className='mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            {['Veilige omgeving', 'Sportclub voor iedereen', 'Samenwerken', 'Plezier voorop'].map(
                                (item) => (
                                    <li key={item} className='flex items-center gap-3'>
                                        <span className='bg-gold text-navy flex size-6 shrink-0 items-center justify-center'>
                                            <Check className='size-4' strokeWidth={3} />
                                        </span>
                                        <span className='display text-sm tracking-[0.08em] text-white'>{item}</span>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className='mt-11 flex flex-wrap gap-4'>
                            <Magnetic>
                                <GoldButton href='/word-lid'>Word lid</GoldButton>
                            </Magnetic>
                            <GhostButton href='/over'>Onze missie</GhostButton>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Fotomarquee: de club in beeld ---------------- */}
            <section aria-label='De club in beeld'>
                <Reveal>
                    <div className='marquee-mask overflow-hidden'>
                        <div className='marquee-track-slow flex w-max gap-4'>
                            {[...marqueePhotos, ...marqueePhotos].map((src, index) => (
                                <div key={`${src}-${index}`} className='group relative h-64 shrink-0 overflow-hidden lg:h-80'>
                                    <Image
                                        src={src}
                                        alt='Amsterdam Warriors in actie'
                                        width={520}
                                        height={347}
                                        sizes='520px'
                                        className='media-tint h-full w-auto object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ---------------- Aanbod / programma's ---------------- */}
            <section id='aanbod' className='bg-navy-light scroll-mt-24'>
                <div className='mx-auto max-w-[1280px] px-6 py-28 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Ons aanbod</p>
                        <h2 className='display mt-5 max-w-2xl text-4xl text-white lg:text-5xl'>
                            Een <span className='text-gold'>programma</span> voor elke leeftijd en elk niveau <span className='text-gold'>/</span>
                        </h2>
                    </Reveal>

                    <div className='mt-16 grid gap-x-6 gap-y-14 md:grid-cols-3'>
                        {programmas.map((programma, index) => (
                            <Reveal key={programma.title} delay={index * 120}>
                                <Link href={`/aanbod#${programma.id}`} className='group flex h-full flex-col'>
                                    <div className='relative aspect-[16/10] overflow-hidden'>
                                        <Image
                                            src={
                                                [media.basketbalschool, media.girls, media.proefles][index] ??
                                                media.community
                                            }
                                            alt={programma.title}
                                            fill
                                            sizes='(max-width: 768px) 100vw, 33vw'
                                            className='media-tint object-cover'
                                        />
                                    </div>
                                    <h3 className='display mt-6 text-3xl text-white'>
                                        <span className='text-gold'>{String(index + 1).padStart(2, '0')}.</span>{' '}
                                        {programma.title}
                                    </h3>
                                    <p className='mt-4 flex-1 text-sm leading-relaxed text-white/60'>
                                        {programma.text}
                                    </p>
                                    <span className='display text-gold group-hover:text-gold-dark mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] transition-colors duration-300'>
                                        Meer lezen
                                        <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Nieuws / try-outs ---------------- */}
            <section id='nieuws' className='relative scroll-mt-24 overflow-hidden'>
                <SmokeBackground />
                <div className='relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Nieuws</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Amsterdam Warriors gaat <span className='text-gold'>landelijk /</span>
                        </h2>
                        <p className='mt-6 leading-relaxed text-white/70'>
                            Bij de Amsterdam Warriors kijken we niet alleen terug, maar bouwen we ook vooruit! Na een
                            fantastisch 2025-2026 seizoen heeft onze U14-1 het kampioenschap in de eerste divisie
                            veroverd en promoveert nu naar de Eredivisie! Dit is de opbrengst van focus, discipline en
                            doorzettingsvermogen. Voor het seizoen 2026-2027 willen we de landelijke top bestormen met
                            twee teams: de U12 en onze debuut U14 in de Eredivisie. We verwelkomen alle jongens en
                            meisjes vanaf het geboortejaar 2016.
                        </p>

                        <div className='border-hairline mt-9 border border-t-2 border-t-[var(--gold)] p-7'>
                            <h3 className='display text-gold text-xl'>Selectietrainingen 2026/2027</h3>
                            <ul className='mt-5 space-y-3.5 text-sm text-white/75'>
                                <li className='flex items-center gap-3'>
                                    <MapPin className='text-gold size-4 shrink-0' />
                                    Bijlmersportcentrum, Amsterdam Zuidoost
                                </li>
                                {tryoutDates.map((date) => (
                                    <li key={date} className='flex items-center gap-3'>
                                        <Calendar className='text-gold size-4 shrink-0' />
                                        {date}
                                    </li>
                                ))}
                                <li className='flex items-center gap-3'>
                                    <Clock className='text-gold size-4 shrink-0' />
                                    17:30 tot 19:00
                                </li>
                            </ul>
                        </div>

                        <div className='mt-9'>
                            <Magnetic>
                                <GoldButton href={links.tryouts} external>
                                    Aanmelden try-outs
                                </GoldButton>
                            </Magnetic>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <Parallax strength={30}>
                            <div className='group relative'>
                                <div aria-hidden className='border-gold absolute -top-5 -right-5 size-28 border-4' />
                                <div className='relative overflow-hidden'>
                                    <Image
                                        src={media.nieuws}
                                        alt='Warriors team'
                                        width={2048}
                                        height={1152}
                                        className='media-tint aspect-[4/3] w-full object-cover'
                                    />
                                </div>
                                <div aria-hidden className='bg-gold absolute -bottom-5 -left-5 size-28' />
                            </div>
                        </Parallax>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Contributie ---------------- */}
            <section id='contributie' className='bg-navy-light scroll-mt-24'>
                <div className='mx-auto max-w-[1280px] px-6 py-28 lg:px-10'>
                    <div className='grid gap-16 lg:grid-cols-2'>
                        <Reveal>
                            <p className='eyebrow'>Contributie</p>
                            <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                                Gemak met <span className='text-gold'>NIKKI</span>
                            </h2>
                            <p className='mt-6 leading-relaxed text-white/70'>
                                De contributie-inning voor het seizoen 2025/2026 gaat weer van start, hiervoor werken
                                wij samen met NIKKI. Een gezonde vereniging staat of valt met het betalen van de
                                contributie. Alleen zo kunnen we samen blijven investeren in sport, plezier en
                                saamhorigheid. U ontvangt binnenkort per e-mail een betaalverzoek met een
                                iDEAL-betaallink.
                            </p>
                            <ul className='mt-9 space-y-4'>
                                <li className='flex items-start gap-3'>
                                    <span className='bg-gold text-navy mt-0.5 flex size-6 shrink-0 items-center justify-center'>
                                        <Check className='size-4' strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-white/75'>
                                        <strong className='text-white'>In één keer betalen</strong>, zonder extra
                                        kosten
                                    </p>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='bg-gold text-navy mt-0.5 flex size-6 shrink-0 items-center justify-center'>
                                        <Check className='size-4' strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-white/75'>
                                        <strong className='text-white'>In termijnen betalen (per maand)</strong>,
                                        inclusief servicekosten van 10% met een maximum van €19,- per seizoen
                                    </p>
                                </li>
                            </ul>
                            <p className='mt-7 text-sm leading-relaxed text-white/55'>
                                Vergoeding via gemeente of instantie? Vraag deze op tijd zelf aan en informeer NIKKI
                                via{' '}
                                <a className='text-gold hover:underline' href='mailto:contributie@nikki.nl'>
                                    contributie@nikki.nl
                                </a>
                                . Benieuwd of je in aanmerking komt? Doe de{' '}
                                <a
                                    className='text-gold hover:underline'
                                    href={links.potjescheck}
                                    target='_blank'
                                    rel='noreferrer noopener'>
                                    potjescheck
                                </a>{' '}
                                en weet het binnen 15 minuten.
                            </p>
                        </Reveal>

                        <Reveal delay={150}>
                            <div className='bg-navy-card border-gold self-start border-t-4 p-9'>
                                <h3 className='display text-2xl text-white'>
                                    Wist je <span className='text-gold'>dat...</span>
                                </h3>
                                <p className='mt-5 leading-relaxed text-white/70'>
                                    Je een beroep kan doen op je{' '}
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
                                    , en daarmee <strong className='text-white'>€300 op je contributie</strong> kan
                                    besparen?
                                </p>
                                <Link
                                    href='/aanbod#contributie'
                                    className='display text-gold group/link mt-7 inline-flex items-center gap-2 text-sm tracking-[0.2em]'>
                                    Bekijk alle tarieven
                                    <ArrowRight className='size-4 transition-transform duration-300 group-hover/link:translate-x-1' />
                                </Link>
                                <div className='border-hairline mt-9 border-t pt-6'>
                                    <p className='display text-sm tracking-[0.2em] text-white/45'>#WijWerkenMetNIKKI</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ---------------- Partners ---------------- */}
            <section id='partners' className='relative scroll-mt-24 overflow-hidden bg-white'>
                <span aria-hidden className='bg-word bg-word-dark'>
                    Partners
                </span>
                <div className='relative z-10 mx-auto max-w-[1280px] px-6 pt-24 pb-8 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Samenwerkingen</p>
                        <h2 className='display text-navy mt-5 text-4xl lg:text-5xl'>
                            Onze <span className='text-gold'>partners</span>
                        </h2>
                        <p className='text-navy/60 mt-5 max-w-xl leading-relaxed'>
                            Onze organisatie werkt veel samen met de volgende partijen om zo elkaar te ondersteunen, om
                            een betere wijk te creëren.
                        </p>
                    </Reveal>
                </div>

                {/* doorlopende logomarquee, pauzeert bij hover */}
                <Reveal>
                    <div className='marquee-mask overflow-hidden pb-14'>
                        <div className='marquee-track flex w-max items-center gap-20 px-10'>
                            {[...partners, ...partners].map((partner, index) => (
                                <div key={`${partner.name}-${index}`} className='flex h-24 shrink-0 items-center'>
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={200}
                                        height={120}
                                        className='max-h-20 w-auto object-contain grayscale transition duration-500 hover:grayscale-0'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ---------------- CTA-banner ---------------- */}
            <section className='relative overflow-hidden'>
                <Image
                    src='/images/proeflesbg.jpg'
                    alt='Basketbal bij de Warriors'
                    fill
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='bg-navy/80 absolute inset-0' />
                <div className='relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-6 py-32 text-center lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Doe mee</p>
                        <h2 className='display mt-5 max-w-3xl text-4xl text-white lg:text-6xl'>
                            Kom een <span className='text-gold'>proefles</span> volgen <span className='text-gold'>/</span>
                        </h2>
                        <p className='mx-auto mt-6 max-w-xl text-white/75'>
                            Meld je aan voor een proefles en ervaar zelf hoe leuk basketbal bij de Amsterdam Warriors
                            is.
                        </p>
                        <div className='mt-11 flex justify-center'>
                            <Magnetic>
                                <GoldButton href={links.proefles} external>
                                    Proefles aanvragen
                                </GoldButton>
                            </Magnetic>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Page;
