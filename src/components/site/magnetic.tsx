'use client';

import { type ReactNode, useRef } from 'react';

/* Trekt de knop subtiel richting de cursor en veert terug bij verlaten. */
const Magnetic = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (event: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'translate(0, 0)';
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className='inline-block transition-transform duration-300 ease-out'>
            {children}
        </div>
    );
};

export default Magnetic;
