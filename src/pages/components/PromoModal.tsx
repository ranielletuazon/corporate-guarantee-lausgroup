import { useState, useEffect, useCallback, useRef } from "react";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Promo {
    image: string;
    alt: string;
    link: string; // clicking the image/card goes here
    ctaLink?: string; // clicking "Learn More" goes here — falls back to `link` if omitted
    eyebrow?: string;
    title?: string;
    ctaLabel?: string;
    external?: boolean; // true if `link` goes off-site
    ctaExternal?: boolean; // true if `ctaLink` goes off-site
}

interface PromoModalProps {
    promos: Promo[];
}

const SWIPE_THRESHOLD = 50;

export default function PromoModal({ promos }: PromoModalProps) {
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setVisible(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % promos.length);
    }, [promos.length]);

    const prev = useCallback(() => {
        setCurrent((p) => (p - 1 + promos.length) % promos.length);
    }, [promos.length]);

    const goTo = useCallback(
        (index: number) => {
            setCurrent((index + promos.length) % promos.length);
        },
        [promos.length],
    );

    useEffect(() => {
        if (!visible) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [visible, prev, next]);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    // ---- Touch/swipe handling ----
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current > SWIPE_THRESHOLD) {
            prev();
        } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
            next();
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
    };

    if (!visible || promos.length === 0) return null;

    const promo = promos[current];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Promotional advertisement"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#312d60]/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Modal content */}
            <div className="relative z-10 w-full max-w-2xl animate-[popIn_0.35s_ease-out]">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    aria-label="Close advertisement"
                    className="absolute -top-4 -right-4 z-30 flex items-center justify-center w-10 h-10 bg-white text-[#312d60] shadow-lg cursor-pointer border-none transition-colors hover:bg-[#d93338] hover:text-white"
                    style={{ borderRadius: 0 }}
                >
                    <X size={20} />
                </button>

                {/* Carousel card */}
                <div
                    className="relative bg-white shadow-2xl overflow-hidden touch-pan-y"
                    style={{ borderRadius: 0 }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Desktop prev/next arrows — only when there's more than one promo */}
                    {promos.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                aria-label="Previous offer"
                                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 bg-white/90 text-[#312d60] shadow-md cursor-pointer border-none transition-colors hover:bg-[#312d60] hover:text-white"
                                style={{ borderRadius: 0 }}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                aria-label="Next offer"
                                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 bg-white/90 text-[#312d60] shadow-md cursor-pointer border-none transition-colors hover:bg-[#312d60] hover:text-white"
                                style={{ borderRadius: 0 }}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}

                    {/* Card body — image link + overlay; button is a SEPARATE sibling link on top */}
                    <div
                        key={current}
                        className="group relative animate-[fadeIn_0.3s_ease-out]"
                    >
                        {/* Big link — clicking anywhere on the image/overlay text goes to `link` */}
                        <a
                            href={promo.link}
                            target={promo.external ? "_blank" : undefined}
                            rel={
                                promo.external
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="block cursor-pointer"
                            aria-label={promo.title ?? promo.alt}
                        >
                            <img
                                src={promo.image}
                                alt={promo.alt}
                                className="sm:w-[800px] sm:h-[600px] object-cover bg-white select-none pointer-events-none"
                                draggable={false}
                            />
                        </a>

                        {/* Text overlay — sits on the image, but is not itself a link (button below is) */}
                        {(promo.eyebrow || promo.title || promo.ctaLabel) && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-[#312d60]/95 via-[#312d60]/60 to-transparent pointer-events-none">
                                {promo.eyebrow && (
                                    <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                        {promo.eyebrow}
                                    </span>
                                )}
                                {promo.title && (
                                    <h3 className="mt-1 text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                                        {promo.title}
                                    </h3>
                                )}

                                {/* Independent link — its own destination, separate from the image link above */}
                                <a
                                    href={promo.ctaLink ?? promo.link}
                                    target={
                                        promo.ctaExternal ? "_blank" : undefined
                                    }
                                    rel={
                                        promo.ctaExternal
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="pointer-events-auto mt-4 inline-flex items-center gap-2 bg-[#d93338] px-6 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-white transition-colors duration-300 hover:bg-white hover:text-[#312d60] cursor-pointer"
                                    style={{ borderRadius: 0 }}
                                >
                                    {promo.ctaLabel ?? "Learn More"}
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300"
                                    />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Indicators */}
                    {promos.length > 1 && (
                        <div className="flex items-center justify-center gap-2 py-4 bg-[#312d60]/95">
                            {promos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Offer ${i + 1}`}
                                    aria-current={i === current}
                                    className={`h-2.5 transition-all duration-300 cursor-pointer border-none ${
                                        i === current
                                            ? "w-7 bg-[#d93338]"
                                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                    style={{ borderRadius: 9999 }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes popIn {
                    from { opacity: 0; transform: scale(0.92) translateY(12px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </div>
    );
}
