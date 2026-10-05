import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";

import productOffer1 from "../assets/images/promos/offer1.png";
import productOffer2 from "../assets/images/promos/offer2.png";
import productOffer3 from "../assets/images/promos/offer3.png";

// Family gift-giving photo — used as the hero background
import giftGivingBg from "../assets/images/promos/yuletide.webp";

export default function PromoProduct() {
    return (
        <>
            <Header />

            {/* ============ HERO — yuletide photo + navy/maroon wash ============ */}
            <section className="relative overflow-hidden">
                <img
                    src={giftGivingBg}
                    alt="Online Products Insurance"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Base navy wash, warmed slightly with a maroon undertone for the season */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#312d60]/95 via-[#3d1f3a]/88 to-[#312d60]/60" />
                <div
                    className="absolute top-0 right-0 h-40 w-40 bg-[#d93338]/25"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    aria-hidden="true"
                />
                {/* Festive gold echo, bottom-left — balances the existing red triangle */}
                <div
                    className="absolute bottom-0 left-0 h-28 w-28 bg-[#f2c14e]/20"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    aria-hidden="true"
                />

                <Reveal>
                    <div className="container mx-auto px-4 xl:px-12 py-20 lg:py-28 relative z-10">
                        <a
                            href="/products"
                            className="flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white/60 transition-colors hover:text-[#d93338] cursor-pointer bg-transparent border-none mb-8"
                        >
                            <ArrowLeft size={14} />
                            Back to Products
                        </a>

                        <div className="flex items-center gap-5">
                            <div>
                                <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.25em] uppercase text-[#f2c14e]">
                                    <Star size={12} fill="currentColor" />
                                    SPECIAL OFFERS
                                    <Star size={12} fill="currentColor" />
                                </span>
                                <h1 className="mt-1 text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
                                    Online Products
                                </h1>
                            </div>
                        </div>

                        {/* Candy-cane divider instead of a plain bar */}
                        <div
                            className="mt-6 h-[4px] w-20"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(-45deg, #d93338 0 6px, #ffffff 6px 12px)",
                            }}
                            aria-hidden="true"
                        />

                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed text-lg">
                            Because{" "}
                            <span className="font-bold text-[#d93338]">
                                Christmas
                            </span>{" "}
                            is about giving to the people who matter most, share
                            the gift of{" "}
                            <span className="font-bold text-[#d93338]">
                                Love
                            </span>
                            , <span className="font-bold text-white">Care</span>
                            , and{" "}
                            <span className="font-bold text-[#d93338]">
                                Coverage
                            </span>
                            .
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ BODY ============ */}
            <div className="w-full bg-slate-50">
                {/* ============ Product Display ============ */}
                <section className="relative py-10 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20" />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-white/95"
                        aria-hidden="true"
                    />

                    <div className="container mx-auto px-4 xl:px-12 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Senior Elite */}
                            <Reveal delay={150}>
                                <div className="relative flex flex-col items-center text-center h-full bg-white/95 backdrop-blur-sm border-2 border-[#e07b39] p-8 lg:p-10 shadow-lg">
                                    <span
                                        className="absolute -top-px -left-px px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#312d60]"
                                        style={{ backgroundColor: "#f2c14e" }}
                                    >
                                        New
                                    </span>

                                    <img
                                        src={productOffer2}
                                        alt="Senior Elite"
                                        className="h-50 object-contain mt-4"
                                    />
                                    <span className="mt-3 h-[3px] w-10 bg-[#f2c14e]" />

                                    <p className="mt-3 italic text-slate-500 text-sm">
                                        Life gets better with age
                                    </p>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                                        Tailored for senior citizens, this
                                        specialized personal accident insurance
                                        provides security during their golden
                                        years. This policy offers 24/7 worldwide
                                        protection, including unique coverage
                                        for medical emergencies and
                                        compassionate memorial benefits.
                                    </p>
                                    <a
                                        href="https://corporate-guarantee-personal-accident.webflow.io/home-senior-elite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-4 w-full max-w-xs inline-flex items-center justify-center gap-2 rounded-full bg-[#e07b39] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white text-center transition-colors hover:bg-[#c46527]"
                                    >
                                        Buy Now
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </a>
                                </div>
                            </Reveal>

                            {/* Kasambahay Express */}
                            <Reveal>
                                <div className="relative flex flex-col items-center text-center h-full bg-white/95 backdrop-blur-sm border-2 border-[#2563a8] p-8 lg:p-10 shadow-lg">
                                    {/* Gold holiday-offer ribbon */}
                                    <span
                                        className="absolute -top-px -left-px px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#312d60]"
                                        style={{ backgroundColor: "#f2c14e" }}
                                    >
                                        New
                                    </span>

                                    <img
                                        src={productOffer1}
                                        alt="Kasambahay Express"
                                        className="h-50 object-contain mt-4"
                                    />
                                    {/* Thin gold accent under the logo */}
                                    <span className="mt-3 h-[3px] w-10 bg-[#f2c14e]" />

                                    <p className="mt-3 italic text-slate-500 text-sm">
                                        Caring for those who care for us
                                    </p>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                                        Designed for household staff employed in
                                        the Philippines, this personal accident
                                        insurance ensures that the people who
                                        care for us and our homes are protected
                                        as well. This policy offers
                                        comprehensive 24/7 worldwide coverage
                                        against accidents, unprovoked assault,
                                        and even pet-related medical
                                        emergencies.
                                    </p>
                                    <a
                                        href="https://corporate-guarantee-personal-accident.webflow.io/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-4 w-full max-w-xs inline-flex items-center justify-center gap-2 rounded-full bg-[#2563a8] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white text-center transition-colors hover:bg-[#1d4d85]"
                                    >
                                        Buy Now
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </a>
                                </div>
                            </Reveal>

                            {/* Golfer's Shield — coming soon, dimmed/inactive treatment */}
                            <Reveal delay={300}>
                                <div className="relative flex flex-col items-center text-center h-full bg-slate-50/95 backdrop-blur-sm border-2 border-slate-300 p-8 lg:p-10 shadow-lg overflow-hidden">
                                    {/* Coming Soon ribbon — gray, not gold, to visually read as "inactive" */}
                                    <span className="absolute -top-px -left-px px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-slate-500">
                                        Coming Soon
                                    </span>

                                    <img
                                        src={productOffer3}
                                        alt="Golfer's Shield — coming soon"
                                        className="h-50 object-contain mt-4 grayscale opacity-60"
                                    />
                                    <span className="mt-3 h-[3px] w-10 bg-slate-300" />

                                    <p className="mt-3 italic text-slate-400 text-sm">
                                        [Header Text]
                                    </p>
                                    <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">
                                        [Sentence Text]
                                    </p>

                                    <span
                                        className="mt-4 w-full max-w-xs inline-flex items-center justify-center gap-2 rounded-full bg-slate-300 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-600 text-center cursor-not-allowed select-none"
                                        aria-disabled="true"
                                    >
                                        Coming Soon
                                    </span>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Bottom candy-cane stripe — bookends the section before the footer */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[5px]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(-45deg, #d93338 0 12px, #ffffff 12px 24px)",
                        }}
                        aria-hidden="true"
                    />
                </section>
            </div>
            <Footer />
        </>
    );
}
