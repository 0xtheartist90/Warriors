/* Subtiele rooklaag op 15% als blend over de zwarte secties. */
const SmokeBackground = () => (
    <video
        aria-hidden
        className='absolute inset-0 h-full w-full object-cover opacity-15'
        src='/images/smoke.webm'
        autoPlay
        muted
        loop
        playsInline
    />
);

export default SmokeBackground;
