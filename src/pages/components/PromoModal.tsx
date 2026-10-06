import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

// Swap this for the actual file path once it's in src/assets/images/
// e.g. import promoHeaderBg from "../../assets/images/promos/family-christmas.jpg";
import promoHeaderBg from "../../assets/images/promos/yuletide.webp";

interface Promo {
    image: string;
    alt: string;
    link: string; // BUY NOW destination
    eyebrow?: string; // e.g. "Holiday Offer"
    title?: string; // product name
    tagline?: string; // short one-liner under the title
    description?: string; // longer blurb, a sentence or two
    ctaLabel?: string; // defaults to "Buy Now"
    external?: boolean;
    accent?: string; // hex color to theme this card's badge/button — falls back to holiday red
}

interface PromoModalProps {
    promos: Promo[]; // expects exactly 2 products
}

export default function PromoModal({ promos }: PromoModalProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setVisible(false);

    useEffect(() => {
        if (!visible) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [visible]);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    if (!visible || promos.length === 0) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Promotional advertisement"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#3a0a0f]/85 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Modal content — capped height + internal scroll so it never exceeds the viewport */}
            <div className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col animate-[popIn_0.35s_ease-out]">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    aria-label="Close advertisement"
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-30 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white text-[#7a1220] shadow-lg cursor-pointer border-none transition-colors hover:bg-[#b8232c] hover:text-white"
                    style={{ borderRadius: 0 }}
                >
                    <X size={20} />
                </button>

                <div
                    className="bg-white shadow-2xl overflow-hidden flex flex-col min-h-0"
                    style={{ borderRadius: 0 }}
                >
                    {/* Candy-cane stripe */}
                    <div
                        className="h-[6px] w-full flex-none"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(-45deg, #b8232c 0 14px, #ffffff 14px 28px)",
                        }}
                        aria-hidden="true"
                    />

                    {/* Header — family photo background with a maroon/red overlay for legibility */}
                    <div className="relative flex-none px-5 py-4 sm:px-6 sm:py-8 text-center overflow-hidden">
                        <img
                            src={promoHeaderBg}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#3a0a0f]/90 via-[#5c1219]/85 to-[#7a1220]/90" />

                        <div className="relative z-10">
                            <p className="text-white/80 leading-snug text-[11px] sm:text-base">
                                Because{" "}
                                <span className="font-bold text-white">
                                    Christmas
                                </span>{" "}
                                is about giving to the people who matter most,
                                share the gift of{" "}
                                <span className="font-bold text-white">
                                    Love
                                </span>
                                ,{" "}
                                <span className="font-bold text-white">
                                    Care
                                </span>
                                , and{" "}
                                <span className="font-bold text-white">
                                    Coverage
                                </span>
                                .
                            </p>
                            <span className="inline-flex items-center gap-2 mt-1.5 sm:mt-0 text-[9px] sm:text-[18px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#f2c14e]">
                                Online Products, Now Available!
                            </span>
                        </div>
                    </div>

                    {/* Two products — always side by side, even on mobile. Scrolls internally if content still runs tall. */}
                    <div className="grid grid-cols-2 divide-x divide-slate-200 overflow-y-auto">
                        {promos.slice(0, 2).map((promo, i) => {
                            const accent = promo.accent ?? "#b8232c";
                            return (
                                <div
                                    key={i}
                                    className="group flex flex-col bg-white min-w-0"
                                >
                                    {/* Product image — compact on mobile so two columns fit without crowding */}
                                    <div
                                        className="relative w-full h-70 sm:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-2 sm:p-4 border-t-4"
                                        style={{ borderTopColor: "#f2c14e" }}
                                    >
                                        <img
                                            src={promo.image}
                                            alt={promo.alt}
                                            className="w-full h-full object-contain transition-transform duration-500 select-none"
                                            draggable={false}
                                        />
                                        {promo.eyebrow && (
                                            <span
                                                className="absolute top-1 left-1 sm:top-3 sm:left-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[6px] sm:text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-white leading-none"
                                                style={{
                                                    backgroundColor: accent,
                                                }}
                                            >
                                                {promo.eyebrow}
                                            </span>
                                        )}
                                    </div>

                                    {/* Text + CTA */}
                                    <div className="flex flex-col flex-1 px-2.5 py-3 sm:px-6 sm:py-6 text-center justify-between border-t border-slate-100 min-w-0">
                                        {promo.title && (
                                            <h3 className="text-[11px] sm:text-lg font-bold uppercase tracking-tight sm:tracking-wide text-[#7a1220] leading-tight break-words">
                                                {promo.title}
                                            </h3>
                                        )}
                                        {promo.tagline && (
                                            <p className="mt-1 sm:mt-2 text-[9px] sm:text-sm font-semibold text-slate-700 leading-snug">
                                                {promo.tagline}
                                            </p>
                                        )}
                                        {promo.description && (
                                            <p className="mt-1 text-[8px] sm:text-xs text-slate-500 leading-snug line-clamp-3 sm:line-clamp-none">
                                                {promo.description}
                                            </p>
                                        )}

                                        <a
                                            href={promo.link}
                                            target={
                                                promo.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                promo.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="mt-2 sm:mt-1 w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-1.5 sm:py-3 text-[9px] sm:text-[12px] font-bold tracking-tight sm:tracking-[0.2em] uppercase text-white transition-opacity duration-300 hover:opacity-90 cursor-pointer whitespace-nowrap"
                                            style={{
                                                borderRadius: 0,
                                                backgroundColor: accent,
                                            }}
                                        >
                                            {promo.ctaLabel ?? "Buy Now"}
                                            <ArrowRight
                                                size={12}
                                                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom candy-cane stripe to bookend the card */}
                    <div
                        className="h-[6px] w-full flex-none"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(-45deg, #b8232c 0 14px, #ffffff 14px 28px)",
                        }}
                        aria-hidden="true"
                    />
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
