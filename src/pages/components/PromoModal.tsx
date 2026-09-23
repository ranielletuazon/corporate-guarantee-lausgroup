import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface PromoModalProps {
    image: string;
    alt: string;
    link: string;
    eyebrow?: string; // e.g. "New Product" or "Limited Offer"
    title?: string; // headline overlaid on the image
    ctaLabel?: string; // button text, e.g. "Learn More"
    external?: boolean; // true if `link` goes off-site
}

export default function PromoModal({
    image,
    alt,
    link,
    eyebrow = "New Product",
    title,
    ctaLabel = "Learn More",
    external = false,
}: PromoModalProps) {
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

    if (!visible) return null;

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
            <div className="relative z-10 w-full max-w-4xl animate-[popIn_0.35s_ease-out]">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    aria-label="Close advertisement"
                    className="absolute -top-4 -right-4 z-20 flex items-center justify-center w-10 h-10 bg-white text-[#312d60] shadow-lg cursor-pointer border-none transition-colors hover:bg-[#d93338] hover:text-white"
                    style={{ borderRadius: 0 }}
                >
                    <X size={20} />
                </button>

                {/* Entire card is one clickable link — image with text overlaid directly on it */}
                <a
                    href={link}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative block shadow-2xl overflow-hidden cursor-pointer"
                    style={{ borderRadius: 0 }}
                >
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-auto max-h-[85vh] object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Text overlay — bottom of the image, no separate panel */}
                    {(eyebrow || title || ctaLabel) && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-[#312d60]/95 via-[#312d60]/60 to-transparent">
                            {eyebrow && (
                                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    {eyebrow}
                                </span>
                            )}
                            {title && (
                                <h3 className="mt-1 text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                                    {title}
                                </h3>
                            )}
                            <span
                                className="mt-4 inline-flex items-center gap-2 bg-[#d93338] px-6 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#312d60]"
                                style={{ borderRadius: 0 }}
                            >
                                {ctaLabel}
                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </div>
                    )}
                </a>
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
