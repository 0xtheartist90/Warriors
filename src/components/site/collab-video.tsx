'use client';

import { useState } from 'react';

import { Volume2, VolumeX } from 'lucide-react';

/* Achtergrondvideo voor de Hedy Tjin-sectie, standaard gedempt met een geluidsknop. */
const CollabVideo = ({ src }: { src: string }) => {
    const [muted, setMuted] = useState(true);

    return (
        <>
            <video
                className='absolute inset-0 h-full w-full object-cover'
                src={src}
                autoPlay
                muted={muted}
                loop
                playsInline
            />
            <div aria-hidden className='from-navy via-navy/80 to-navy/50 absolute inset-0 bg-gradient-to-l' />
            <button
                type='button'
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? 'Geluid aanzetten' : 'Geluid uitzetten'}
                className='border-gold/40 text-gold hover:bg-gold hover:text-navy absolute right-6 bottom-6 z-20 flex size-11 items-center justify-center border transition-colors duration-300 lg:right-10'>
                {muted ? <VolumeX className='size-4' /> : <Volume2 className='size-4' />}
            </button>
        </>
    );
};

export default CollabVideo;
