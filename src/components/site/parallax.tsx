'use client';

import { type ReactNode, useEffect, useRef } from 'react';

/* Laat de inhoud iets trager meebewegen dan de scroll voor een gelaagd diepte-effect. */
const Parallax = ({ children, strength = 40, className = '' }: { children: ReactNode; strength?: number; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const rect = el.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const progress = (elementCenter - viewportCenter) / window.innerHeight;
            el.style.transform = `translateY(${(progress * strength).toFixed(1)}px)`;
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [strength]);

    return (
        <div ref={ref} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
};

export default Parallax;
