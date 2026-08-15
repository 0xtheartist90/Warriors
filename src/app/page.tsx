import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/site/reveal';

import {
    ArrowRight,
    Calendar,
    Check,
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Youtube
} from 'lucide-react';

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
    nieuws: `${WIX}/c5b4b1_688e0356f66447cf8bd4e75c3638a7b4~mv2.png`
};

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

const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/amsterdamwarriors.stichting/', Icon: Instagram },
    { label: 'Facebook', href: 'https://www.facebook.com/bcamsterdamwarriors/', Icon: Facebook },
    { label: 'LinkedIn', href: 'https://nl.linkedin.com/company/bc-gaasperdam-warriors', Icon: Linkedin },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCuJfCbpo4mLnbG-q4jxUrSA', Icon: Youtube }
];

const navItems = [
    { label: 'Over ons', href: '#over' },
    { label: 'Aanbod', href: '#aanbod' },
    { label: 'Nieuws', href: '#nieuws' },
    { label: 'Contributie', href: '#contributie' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' }
];

const stats = [
    { value: '2014', label: 'Opgericht in Zuidoost' },
    { value: '4+', label: 'Basketbal vanaf 4 jaar' },
    { value: '3', label: "Programma's voor elk niveau" },
    { value: '12', label: 'Partners in de wijk' }
];

const programmas = [
    {
        title: 'Basketbalschool',
        text: 'De kennismaking met basketbal voor kinderen vanaf 4 tot 10 jaar. Hier laten we kinderen ervaren hoe leuk de sport kan zijn en stomen wij ze klaar om deel te kunnen nemen aan het Regio of Excellence programma.'
    },
    {
        title: 'Regio',
        text: 'Vanaf 11 jaar maak je kennis met basketbal in ons Regio programma. Een dynamische sport met techniek, inspanning en vooral veel plezier!'
    },
    {
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
            {/* ---------------- Header ---------------- */}
            <header className='border-gold/15 bg-navy/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md'>
                <div className='mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10'>
                    <Link href='#' className='flex items-center gap-3'>
                        <Image src={media.logo} alt='Amsterdam Warriors logo' width={52} height={42} />
                        <span className='display text-lg text-white'>
                            Amsterdam <span className='text-gold'>Warriors</span>
                        </span>
                    </Link>
                    <nav className='hidden items-center gap-9 lg:flex'>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className='display hover:text-gold text-[13px] tracking-[0.18em] text-white/75 transition-colors duration-300'>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href={links.proefles}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='display bg-gold text-navy hover:bg-gold-dark px-6 py-3 text-[13px] tracking-[0.18em] transition-colors duration-300'>
                        Word lid
                    </Link>
                </div>
            </header>

            {/* ---------------- Hero ---------------- */}
            <section className='relative flex min-h-svh items-center overflow-hidden pt-20'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    src={media.heroVideo}
                    poster={media.heroPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className='from-navy via-navy/80 absolute inset-0 bg-gradient-to-r to-transparent' />
                <div className='from-navy absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent' />
                <div aria-hidden className='hero-glow top-[-15%] left-[-10%]' />
                {/* gouden decoratieve blokken */}
                <div aria-hidden className='bg-gold anim-rise absolute top-32 right-10 hidden size-24 [animation-delay:600ms] lg:block' />
                <div
                    aria-hidden
                    className='border-gold anim-rise absolute right-24 bottom-24 hidden size-40 border-4 [animation-delay:750ms] lg:block'
                />

                <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-10'>
                    <p className='eyebrow anim-rise'>Basketbalclub Amsterdam Zuidoost</p>
                    <h1 className='display mt-6 max-w-3xl text-[clamp(3rem,8vw,6rem)] text-white'>
                        <span className='anim-rise block [animation-delay:120ms]'>Work hard</span>
                        <span className='anim-rise text-gold block [animation-delay:260ms]'>play hard</span>
                    </h1>
                    <p className='anim-rise mt-7 max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:400ms]'>
                        Sporten in een veilige omgeving doe je bij de Amsterdam Warriors! We zijn een sportclub voor
                        iedereen. Samenwerken en plezier maken staan bij ons hoog in het vaandel. Kom jij een proefles
                        volgen, of weet je al zeker dat je bij ons wilt aansluiten?
                    </p>
                    <div className='anim-rise mt-11 flex flex-wrap gap-4 [animation-delay:540ms]'>
                        <GoldButton href={links.proefles} external>
                            Proefles aanvragen
                        </GoldButton>
                        <GhostButton href='#over'>Meer over ons</GhostButton>
                    </div>
                </div>
            </section>

            {/* ---------------- Stats ---------------- */}
            <section className='border-gold/15 border-y'>
                <div className='mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-10 px-6 py-14 lg:grid-cols-4 lg:px-10'>
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 100}>
                            <div className='flex items-baseline gap-4'>
                                <span className='display text-gold text-5xl'>{stat.value}</span>
                                <span className='display max-w-28 text-sm leading-tight text-white/60'>
                                    {stat.label}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ---------------- Over ons ---------------- */}
            <section id='over' className='scroll-mt-24'>
                <div className='mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
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
                    </Reveal>
                    <Reveal delay={150}>
                        <p className='eyebrow'>Over Amsterdam Warriors</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Dé plek voor basketbal in <span className='text-gold'>Zuidoost</span> vanaf 4 jaar
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
                        <div className='mt-11'>
                            <GoldButton href={links.proefles} external>
                                Meld je aan
                            </GoldButton>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Aanbod / programma's ---------------- */}
            <section id='aanbod' className='bg-navy-light scroll-mt-24'>
                <div className='mx-auto max-w-[1280px] px-6 py-28 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Ons aanbod</p>
                        <h2 className='display mt-5 max-w-2xl text-4xl text-white lg:text-5xl'>
                            Een <span className='text-gold'>programma</span> voor elke leeftijd en elk niveau
                        </h2>
                    </Reveal>

                    <div className='mt-16 grid gap-6 md:grid-cols-3'>
                        {programmas.map((programma, index) => (
                            <Reveal key={programma.title} delay={index * 120}>
                                <article className='bg-navy-card group border-gold/10 hover:border-gold/40 flex h-full flex-col border transition-colors duration-500'>
                                    <div className='relative aspect-[16/10] overflow-hidden'>
                                        <Image
                                            src={
                                                [media.basketbalschool, media.girls, media.proefles][index] ??
                                                media.community
                                            }
                                            alt={programma.title}
                                            fill
                                            sizes='(max-width: 768px) 100vw, 33vw'
                                            className='media-tint object-cover transition-transform duration-700 group-hover:scale-105'
                                        />
                                        <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                                    </div>
                                    <div className='flex flex-1 flex-col p-8'>
                                        <span className='display text-gold text-sm tracking-[0.25em]'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className='display mt-3 text-2xl text-white'>{programma.title}</h3>
                                        <p className='mt-4 flex-1 text-sm leading-relaxed text-white/60'>
                                            {programma.text}
                                        </p>
                                        <Link
                                            href={links.proefles}
                                            target='_blank'
                                            rel='noreferrer noopener'
                                            className='display text-gold group/link mt-7 inline-flex items-center gap-2 text-sm tracking-[0.2em]'>
                                            Meer lezen
                                            <ArrowRight className='size-4 transition-transform duration-300 group-hover/link:translate-x-1' />
                                        </Link>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Nieuws / try-outs ---------------- */}
            <section id='nieuws' className='scroll-mt-24'>
                <div className='mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Nieuws</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Amsterdam Warriors gaat <span className='text-gold'>landelijk!</span>
                        </h2>
                        <p className='mt-6 leading-relaxed text-white/70'>
                            Bij de Amsterdam Warriors kijken we niet alleen terug, maar bouwen we ook vooruit! Na een
                            fantastisch 2025-2026 seizoen heeft onze U14-1 het kampioenschap in de eerste divisie
                            veroverd en promoveert nu naar de Eredivisie! Dit is de opbrengst van focus, discipline en
                            doorzettingsvermogen. Voor het seizoen 2026-2027 willen we de landelijke top bestormen met
                            twee teams: de U12 en onze debuut U14 in de Eredivisie. We verwelkomen alle jongens en
                            meisjes vanaf het geboortejaar 2016.
                        </p>

                        <div className='border-gold/25 mt-9 border p-7'>
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
                            <GoldButton href={links.tryouts} external>
                                Aanmelden try-outs
                            </GoldButton>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className='group relative'>
                            <div aria-hidden className='border-gold absolute -top-5 -right-5 size-28 border-4' />
                            <div className='relative overflow-hidden'>
                                <Image
                                    src={media.nieuws}
                                    alt='Warriors team'
                                    width={1026}
                                    height={768}
                                    className='media-tint aspect-[4/5] w-full object-cover object-top'
                                />
                            </div>
                            <div aria-hidden className='bg-gold absolute -bottom-5 -left-5 size-28' />
                        </div>
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
                                <a
                                    href={links.leergeld}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className='display text-gold group/link mt-7 inline-flex items-center gap-2 text-sm tracking-[0.2em]'>
                                    Meer informatie
                                    <ArrowRight className='size-4 transition-transform duration-300 group-hover/link:translate-x-1' />
                                </a>
                                <div className='border-gold/15 mt-9 border-t pt-6'>
                                    <p className='display text-sm tracking-[0.2em] text-white/45'>#WijWerkenMetNIKKI</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ---------------- Partners ---------------- */}
            <section id='partners' className='scroll-mt-24'>
                <div className='mx-auto max-w-[1280px] px-6 py-28 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Samenwerkingen</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Onze <span className='text-gold'>partners</span>
                        </h2>
                        <p className='mt-5 max-w-xl leading-relaxed text-white/70'>
                            Onze organisatie werkt veel samen met de volgende partijen om zo elkaar te ondersteunen, om
                            een betere wijk te creëren.
                        </p>
                    </Reveal>
                    <div className='mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
                        {partners.map((partner, index) => (
                            <Reveal key={partner.name} delay={(index % 6) * 70}>
                                <div className='flex aspect-[3/2] items-center justify-center bg-white p-5 transition-transform duration-300 hover:-translate-y-1'>
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={200}
                                        height={120}
                                        className='max-h-full w-auto object-contain'
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- CTA-banner ---------------- */}
            <section className='relative overflow-hidden'>
                <Image
                    src={media.proefles}
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
                            Kom een <span className='text-gold'>proefles</span> volgen
                        </h2>
                        <p className='mx-auto mt-6 max-w-xl text-white/75'>
                            Meld je aan voor een proefles en ervaar zelf hoe leuk basketbal bij de Amsterdam Warriors
                            is.
                        </p>
                        <div className='mt-11 flex justify-center'>
                            <GoldButton href={links.proefles} external>
                                Proefles aanvragen
                            </GoldButton>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Footer ---------------- */}
            <footer id='contact' className='border-gold/15 scroll-mt-24 border-t'>
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
                                    href='mailto:info@amsterdamwarriors.com'>
                                    info@amsterdamwarriors.com
                                </a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Phone className='text-gold size-4 shrink-0' />
                                <a className='hover:text-gold transition-colors duration-300' href='tel:+31611210422'>
                                    +31 6 11 21 04 22
                                </a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <MapPin className='text-gold size-4 shrink-0' />
                                Hoogoorddreef, Amsterdam
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='display text-gold text-sm tracking-[0.2em]'>Aanbod</h3>
                        <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
                            {['Basketbalschool', 'Regio', 'Excellence', 'Scholentoernooi 2026'].map((item) => (
                                <li key={item}>
                                    <Link className='hover:text-gold transition-colors duration-300' href='#aanbod'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='display text-gold text-sm tracking-[0.2em]'>Nuttige links</h3>
                        <ul className='mt-6 space-y-3.5 text-sm text-white/65'>
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
                            <li>
                                <a
                                    className='hover:text-gold transition-colors duration-300'
                                    href={links.proefles}
                                    target='_blank'
                                    rel='noreferrer noopener'>
                                    Word lid
                                </a>
                            </li>
                        </ul>
                        <div className='mt-7 text-sm text-white/60'>
                            <p className='display text-xs tracking-[0.2em] text-white/45'>Vertrouwenspersoon</p>
                            <p className='mt-2'>
                                Wilt u iets melden?{' '}
                                <a className='text-gold hover:underline' href='mailto:meldpunt@basketball.nl'>
                                    meldpunt@basketball.nl
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className='display text-gold text-sm tracking-[0.2em]'>Volg ons</h3>
                        <div className='mt-6 flex gap-3'>
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label={label}
                                    className='border-gold/30 text-gold hover:bg-gold hover:text-navy flex size-11 items-center justify-center border transition-colors duration-300'>
                                    <Icon className='size-4' />
                                </a>
                            ))}
                        </div>
                        <div className='mt-9'>
                            <GoldButton href={links.proefles} external>
                                Word lid
                            </GoldButton>
                        </div>
                    </div>
                </div>
                <div className='border-gold/15 border-t'>
                    <p className='mx-auto max-w-[1280px] px-6 py-6 text-center text-xs tracking-wide text-white/45'>
                        © 2023 Amsterdam Warriors · Work hard, play hard
                    </p>
                </div>
            </footer>
        </main>
    );
};

export default Page;
