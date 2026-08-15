'use client';

import { useEffect, useRef, useState } from 'react';

/* Telt op naar de eindwaarde zodra de stat in beeld scrollt. */
const StatCounter = ({ value, suffix = '', duration = 1600 }: { value: number; suffix?: string; duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [display, setDisplay] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(value);

            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;
                started.current = true;

                const start = performance.now();
                const tick = (now: number) => {
                    const progress = Math.min(1, (now - start) / duration);
                    const eased = 1 - Math.pow(1 - progress, 4);
                    setDisplay(Math.round(eased * value));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                observer.disconnect();
            },
            { threshold: 0.5 }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
};

export default StatCounter;
