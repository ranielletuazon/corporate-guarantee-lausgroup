import { useState, useEffect, useCallback } from "react";

// Slide images — served directly from /public/images/
const slides = [
    { src: "/images/newslider1.png", alt: "Corporate Guarantee — slide 1" },
    { src: "/images/slider2.jpg", alt: "Corporate Guarantee — slide 2" },
    { src: "/images/slider3.jpg", alt: "Corporate Guarantee — slide 3" },
    { src: "/images/slider4.jpg", alt: "Corporate Guarantee — slide 4" },
    { src: "/images/slider5.jpg", alt: "Corporate Guarantee — slide 5" },
    { src: "/images/slider6.jpg", alt: "Corporate Guarantee — slide 6" },
];

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const goTo = useCallback((index: number) => {
        setCurrent((index + slides.length) % slides.length);
    }, []);

    // Autoplay — pauses on hover via the wrapper's onMouseEnter/Leave
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(timer);
    }, [paused]);

    return (
        <div
            className="relative w-full h-30 md:h-96 lg:h-[64vh] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Hero image carousel"
        >
            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    aria-hidden={i !== current}
                >
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            ))}

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-current={i === current}
                        aria-label={`Slide ${i + 1}`}
                        className={`h-3 rounded-full transition-all duration-300 cursor-pointer border border-gray-200 ${
                            i === current
                                ? "w-8 bg-red-700"
                                : "w-3 bg-white/60 hover:bg-white"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
