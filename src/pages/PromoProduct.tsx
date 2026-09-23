import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { ArrowLeft } from "lucide-react";

import heroImage from "../assets/images/promos/hero-image.jpg";
import productImage from "../assets/images/promos/promo-image.png";

import financialProtectionIcon from "../assets/images/promos/prod1.png";
import incomeSupplementIcon from "../assets/images/promos/prod2.png";
import familyFutureIcon from "../assets/images/promos/prod3.png";

import productOffer1 from "../assets/images/promos/offer1.png";
import productOffer2 from "../assets/images/promos/offer2.png";

const benefits = [
    {
        icon: financialProtectionIcon,
        title: "Financial Protection",
        desc: "When an accident occurs (a fall, a collision, or a sports injury), a Personal Accident policy provides a crucial financial shield and assistance to help you manage the immediate aftermath.",
    },
    {
        icon: incomeSupplementIcon,
        title: "Income Supplement",
        desc: "When your injury prevents you from working, your regular bills don't stop. Personal Accident Insurance allows you to use your payout benefit while you focus entirely on your recovery.",
    },
    {
        icon: familyFutureIcon,
        title: "Securing Your Family's Future",
        desc: "True recovery requires mental ease. By eliminating financial stress, you protect your family from the secondary crisis of debt and won't derail their long-term financial goals.",
    },
];

export default function PromoProduct() {
    return (
        <>
            <Header />

            {/* ============ HERO — product photo + navy wash ============ */}
            <section className="relative overflow-hidden">
                <img
                    src={heroImage}
                    alt="Online Products Insurance"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#312d60]/95 via-[#312d60]/85 to-[#312d60]/60" />
                <div
                    className="absolute top-0 right-0 h-40 w-40 bg-[#d93338]/25"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
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
                            {/* <img
                                src={productImage}
                                alt=""
                                aria-hidden="true"
                                className="w-16 h-16 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                            /> */}
                            <div>
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    Insurance
                                </span>
                                <h1 className="mt-1 text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
                                    Online Products
                                </h1>
                            </div>
                        </div>

                        <div className="mt-6 h-[3px] w-16 bg-[#d93338]" />
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                            Essential coverage for sudden injuries, disability,
                            and unexpected accidents.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ BODY ============ */}
            <div className="w-full bg-slate-50">
                {/* ============ INTRO — photo + copy ============ */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 xl:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <Reveal>
                                <p className="text-slate-600 leading-relaxed">
                                    Corporate Guarantee offers 24/7 worldwide
                                    personal accident coverage tailored for
                                    senior citizens and household staff. Our
                                    plans provide essential financial support
                                    for medical emergencies, accidental
                                    injuries, and compassionate death benefits
                                    to ensure reliable protection for your loved
                                    ones and household staff.
                                </p>
                            </Reveal>

                            <Reveal delay={150}>
                                <div className="relative">
                                    <span
                                        className="absolute -bottom-3 -right-3 h-full w-full bg-[#312d60]"
                                        aria-hidden="true"
                                    />
                                    <div className="relative z-10 aspect-[4/3] w-full overflow-hidden border border-slate-200">
                                        <img
                                            src={productImage}
                                            alt="Senior citizens and caregiver at home"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span
                                        className="absolute top-0 left-0 z-20 h-[3px] w-16 bg-[#d93338]"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ============ WHY IT MATTERS ============ */}
                <section className="bg-white pt-16 lg:py-24">
                    <div className="container mx-auto px-4 xl:px-12">
                        <Reveal>
                            <div className="max-w-2xl mx-auto text-center">
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    Why It Matters
                                </span>
                                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-[#312d60]">
                                    BECAUSE LIFE HAPPENS, PERSONAL ACCIDENT
                                    INSURANCE MATTERS
                                </h2>
                                <div className="mx-auto mt-4 h-[3px] w-16 bg-[#d93338]" />
                                <p className="mt-6 text-slate-600 leading-relaxed">
                                    Even the most well-planned life can meet the
                                    unexpected. Personal Accident Insurance
                                    provides a vital safety net for those
                                    moments you didn't see coming — offering
                                    financial support for medical costs,
                                    disablement, or life's most difficult
                                    transitions. Protect what you've built
                                    against the unplanned.
                                </p>
                            </div>
                        </Reveal>

                        {/* Benefit cards */}
                        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
                            {benefits.map((b, i) => (
                                <Reveal key={b.title} delay={i * 150}>
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src={b.icon}
                                            alt=""
                                            aria-hidden="true"
                                            className="w-50 h-50 object-contain"
                                        />
                                        <h3 className="mt-6 text-base font-bold uppercase tracking-wide text-[#312d60]">
                                            {b.title}
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                            {b.desc}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ Product Display ============ */}
                <section className="bg-white py-10 lg:py-24">
                    <div className="container mx-auto px-4 xl:px-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Kasambahay Express */}
                            <Reveal>
                                <div className="flex flex-col items-center text-center h-full bg-white border-2 border-[#2563a8] p-8 lg:p-10">
                                    <img
                                        src={productOffer1}
                                        alt="Kasambahay Express"
                                        className="h-50 object-contain"
                                    />
                                    <p className="mt-2 italic text-slate-500 text-sm">
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
                                        href="https://kasambahay-express.com/learn-more"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full max-w-xs rounded-full bg-[#2563a8] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white text-center transition-colors hover:bg-[#1d4d85]"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </Reveal>

                            {/* Senior Elite */}
                            <Reveal delay={150}>
                                <div className="flex flex-col items-center text-center h-full bg-white border-2 border-[#e07b39] p-8 lg:p-10">
                                    <img
                                        src={productOffer2}
                                        alt="Senior Elite"
                                        className="h-50 object-contain"
                                    />
                                    <p className="mt-2 italic text-slate-500 text-sm">
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
                                        href="https://kasambahay-express.com/learn-more"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full max-w-xs rounded-full bg-[#e07b39] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white text-center transition-colors hover:bg-[#c46527]"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
