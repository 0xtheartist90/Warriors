import type { Metadata } from 'next';
import Image from 'next/image';

import { GhostButton, GoldButton } from '@/components/site/buttons';
import Magnetic from '@/components/site/magnetic';
import Reveal from '@/components/site/reveal';
import SmokeBackground from '@/components/site/smoke-background';
import { contact, links, media } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Over ons | Amsterdam Warriors',
    description:
        'Amsterdam Warriors is sinds 2014 de sportvereniging voor en door jongeren in Amsterdam Zuidoost. Lees over onze missie, onze reis en de samenwerking met Hedy Tjin.'
};

const reis = [
    {
        jaar: '2014',
        titel: 'De oprichting',
        tekst: 'Amsterdam Warriors wordt opgericht door Joep Kuijs, Mike Nasibdar en Robert Kathusing. Een basketbalvereniging voor en door jongeren, waar leden hun eigen ideeën kunnen realiseren.'
    },
    {
        jaar: '2015',
        titel: 'De scholen in',
        tekst: 'We ontwikkelen een aanbod voor het primair en voortgezet onderwijs. Via projecten op basis- en middelbare scholen groeit de vereniging in de eerste twee jaar exponentieel.'
    },
    {
        jaar: 'Nu',
        titel: 'Drie sporten, één familie',
        tekst: 'Inmiddels zijn we actief in basketbal, honkbal en voetbal. We ondersteunen jongeren in hun scholing, thuissituatie en toekomstplannen, met stageplekken, huiswerkbegeleiding en events.'
    }
];

const vacatureGroepen = [
    { groep: 'Bestuur', functies: 'Voorzitter · Secretaris · Penningmeester · Boekhouder' },
    {
        groep: 'Management',
        functies:
            'Marketing specialist · Social media specialist · ICT-beheer · Excellence coördinator · Regio coördinator · Vrijwilligerscoördinator · Beweegschool manager · Hoofdtrainer voetbal'
    },
    { groep: 'Trainers', functies: 'Basketbal · Voetbal · Baseball 5 · Beweegschool' }
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
                    Missie
                </span>
                <div className='relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10'>
                    <h1 className='display anim-rise mt-5 max-w-3xl text-5xl text-white [animation-delay:120ms] lg:text-7xl'>
                        Een nieuwe manier van <span className='text-gold'>bewegen /</span>
                    </h1>
                    <p className='anim-rise mt-6 max-w-2xl leading-relaxed text-white/70 [animation-delay:240ms]'>
                        Wij zijn een sportvereniging voor en door jongeren, waar leden hun ideeën kunnen realiseren.
                        Naast sport draait het bij ons om de normen en waarden die je buiten het spel nodig hebt:
                        punctualiteit, samenwerken, geduld en natuurlijk plezier!
                    </p>
                </div>
            </section>

            {/* Onze reis */}
            <section className='bg-navy-light'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <Reveal>
                        <p className='eyebrow'>Onze reis</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Van idee tot <span className='text-gold'>familie</span>
                        </h2>
                    </Reveal>
                    <div className='mt-14 grid gap-6 lg:grid-cols-3'>
                        {reis.map((stap, index) => (
                            <Reveal key={stap.jaar} delay={index * 120}>
                                <article className='bg-navy-card border-hairline hover:border-gold/40 flex h-full flex-col border p-9 transition-colors duration-500'>
                                    <span className='display text-outline text-6xl'>{stap.jaar}</span>
                                    <h3 className='display mt-5 text-2xl text-white'>{stap.titel}</h3>
                                    <p className='mt-4 text-sm leading-relaxed text-white/65'>{stap.tekst}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warriors × Hedy Tjin */}
            <section className='relative overflow-hidden'>
                <SmokeBackground />
                <div className='relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10'>
                    <Reveal>
                        <div className='group relative overflow-hidden'>
                            <Image
                                src={media.girls}
                                alt='Warriors kledinglijn'
                                width={1080}
                                height={810}
                                className='media-tint aspect-[4/3] w-full object-cover'
                            />
                            <div aria-hidden className='bg-gold absolute top-0 left-0 h-1 w-full' />
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className='eyebrow'>Samenwerking</p>
                        <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                            Warriors × <span className='text-gold'>Hedy Tjin</span>
                        </h2>
                        <p className='mt-6 leading-relaxed text-white/70'>
                            It takes a village to raise a child. Vanuit dat motto werken we samen met partners aan
                            bijzondere projecten. Zo ontwierpen we met Hedy Tjin, gerenommeerd illustrator en beeldend
                            kunstenaar (winnaar van meerdere Zilveren Penselen en onderscheiden door Koning
                            Willem-Alexander), een kledinglijn gebaseerd op illustraties van Warriors-beelden: hoodies,
                            t-shirts en een uniek tenue. Verkrijgbaar zolang de voorraad strekt.
                        </p>
                        <div className='mt-10 flex flex-wrap gap-4'>
                            <Magnetic>
                                <GoldButton href={links.webshop} external>
                                    Naar de webshop
                                </GoldButton>
                            </Magnetic>
                            <GhostButton href={links.hedytjin} external>
                                Over Hedy Tjin
                            </GhostButton>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Werken bij ons */}
            <section className='bg-navy-light'>
                <div className='mx-auto max-w-[1280px] px-6 py-24 lg:px-10'>
                    <div className='grid gap-16 lg:grid-cols-2'>
                        <Reveal>
                            <p className='eyebrow'>Werken bij ons</p>
                            <h2 className='display mt-5 text-4xl text-white lg:text-5xl'>
                                Bouw mee aan <span className='text-gold'>Zuidoost</span>
                            </h2>
                            <p className='mt-6 leading-relaxed text-white/70'>
                                Ben je op zoek naar een stageplek? Wij zijn een erkend stagebedrijf! Daarnaast zoeken
                                we doorlopend vrijwilligers en professionals die de club verder helpen. Interesse?
                                Stuur een mail naar{' '}
                                <a className='text-gold hover:underline' href={`mailto:${contact.email}`}>
                                    {contact.email}
                                </a>
                                .
                            </p>
                            <div className='mt-10'>
                                <Magnetic>
                                    <GoldButton href={`mailto:${contact.email}`} external>
                                        Solliciteer direct
                                    </GoldButton>
                                </Magnetic>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className='border-hairline border'>
                                {vacatureGroepen.map((groep, index) => (
                                    <div
                                        key={groep.groep}
                                        className={`px-7 py-6 ${index !== 0 ? 'border-hairline border-t' : ''}`}>
                                        <h3 className='display text-gold text-sm tracking-[0.2em]'>{groep.groep}</h3>
                                        <p className='mt-2 text-sm leading-relaxed text-white/65'>{groep.functies}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
