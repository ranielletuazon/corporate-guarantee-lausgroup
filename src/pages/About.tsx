import {
    Award,
    Building2,
    MapPin,
    ShieldCheck,
    Landmark,
    Smartphone,
    Phone,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// TODO: swap these placeholders with real imports
import buildingImg from "../assets/images/facade.jpg";
import isoCertImg from "../assets/images/isocertified.jpg";
import founderImg from "../assets/images/lpl.jpg";

// SEO
import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

const awards = [
    {
        year: "2016",
        title: "Distinguished Bosconian Alumnus",
        by: "Don Bosco Academy",
    },
    {
        year: "2009",
        title: "Outstanding Fernandino in the field of business and entrepreneurship",
        by: "City of San Fernando",
    },
    {
        year: "2008",
        title: "Most Distinguished Bedan",
        by: "San Beda College Alumni Association",
    },
    {
        year: "2008",
        title: "Outstanding Achievement Award",
        by: "Clark Development Corp.",
    },
    {
        year: "2007",
        title: "Outstanding Alumnus — 50th Anniversary",
        by: "Don Bosco Academy",
    },
    {
        year: "2007",
        title: "Blessed Philipp Rinaldi Servant Leader",
        by: "Salesians of Don Bosco Philippines",
    },
    {
        year: "2005",
        title: "Presidential Medal of Merit",
        by: "Former President Gloria Macapagal Arroyo",
    },
    {
        year: "1991",
        title: "Most Outstanding Kapampangan in the field of business with civic consciousness",
        by: "Province of Pampanga",
    },
    {
        year: "1983",
        title: "Most Distinguished Alumnus in the field of business",
        by: "Don Bosco Academy",
    },
];

const branches = [
    {
        name: "Pampanga (Head Office)",
        address:
            "2nd Floor CGIC Building, Jose Abad Santos Avenue, City of San Fernando, 2000 Pampanga, Philippines",
        landline: "+63 (45) 961-2222",
        mobiles: ["+63 999-885-3986", "+63 918-854-2913"],
        isHQ: true,
    },
    {
        name: "Bulacan",
        address:
            "Mezzanine Floor Carworld Building, McArthur Highway, Marilao, 3019 Bulacan, Philippines",
        mobiles: ["+63 918-854-2416"],
    },
    {
        name: "Ilocos Norte",
        address:
            "Chevrolet Ilocos, Barangay 16 San Marcos, San Nicolas, 2901 Ilocos Norte, Philippines",
        mobiles: ["+63 918-854-2461"],
    },
    {
        name: "La Union",
        address:
            "National Highway, Barangay Concepcion, Rosario, 2506 La Union, Philippines",
        mobiles: ["+63 998-587-8386"],
    },
    {
        name: "Pangasinan",
        address:
            "Kia Pangasinan Bldg. McArthur Highway, Barangay Ambonao, Calasiao, Pangasinan",
        mobiles: ["+63 918-854-2340"],
    },
    {
        name: "Metro Manila",
        address:
            "Ford Libis Building, No. 186 E. Rodriguez Jr. Avenue, Bagumbayan, 1110 Quezon City, Philippines",
        landline: "+63 (2) 8711-1195",
        mobiles: ["+63 918-854-2733", "+63 918-854-2734"],
    },
    {
        name: "Tarlac",
        address:
            "Ford Tarlac, McArthur Highway, San Nicolas, Tarlac City, 2300 Tarlac, Philippines",
        mobiles: ["+63 999-223-0337"],
    },
];

// Strips formatting for tel: links — keeps only digits and leading +
const toTelHref = (num: string) => `tel:${num.replace(/[^\d+]/g, "")}`;

export default function AboutUs() {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Corporate Guarantee's experience of more than 25 years of strength, stability, and valued commitment."
                url={`${BASE_URL}/about-us`}
            />
            <Header />

            {/* ============ PAGE HERO ============ */}
            <section className="bg-[#312d60] relative overflow-hidden">
                {/* Subtle polygon accents, echoing the FAQ panel */}
                <div
                    className="absolute top-0 right-0 h-40 w-40 bg-[#d93338]/20"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    aria-hidden="true"
                />
                <Reveal>
                    <div className="container mx-auto px-4 xl:px-12 py-20 lg:py-28 relative z-10">
                        <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                            About Us
                        </span>
                        <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                            WHO WE ARE
                        </h1>
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                            More than 25 years of strength, stability, and
                            valued commitment
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ WHO WE ARE ============ */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* LEFT — building photo, landscape */}
                        <Reveal>
                            <div className="relative">
                                <span
                                    className="absolute -bottom-3 -right-3 h-full w-full bg-[#312d60]"
                                    aria-hidden="true"
                                />
                                <div className="relative z-10 aspect-[4/3] w-full overflow-hidden border border-slate-200">
                                    <img
                                        src={buildingImg}
                                        alt="Corporate Guarantee head office building"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-20 h-[3px] w-16 bg-[#d93338]"
                                    aria-hidden="true"
                                />
                            </div>
                        </Reveal>

                        {/* RIGHT — story */}
                        <Reveal delay={150}>
                            <div>
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    Our Story
                                </span>
                                <h2 className="mt-3 text-3xl font-bold text-[#312d60]">
                                    BUILT ON STRENGTH AND STABILITY
                                </h2>

                                <div className="mt-8 space-y-5 text-slate-800 leading-relaxed">
                                    <p>
                                        Corporate Guarantee is a non-life
                                        insurance company registered with the
                                        Philippine Securities and Exchange
                                        Commission (SEC) on June 19, 1997. It
                                        received its license from the Office of
                                        the Insurance Commissioner on July 25,
                                        1997 at Holiday Inn Hotel in Clark
                                        Field, Pampanga, Philippines.
                                    </p>
                                    <p>
                                        In July 2004, Corporate Guarantee moved
                                        to its own building located beside
                                        Carworld, in the City of San Fernando,
                                        Pampanga — a manifestation of the
                                        company's strength, stability, and its
                                        readiness to handle its growing
                                        clientele.
                                    </p>
                                    <p>
                                        With more than 25 years in the industry,
                                        Corporate Guarantee is among the top 25
                                        non-life insurance players in the
                                        Philippines and continues to move up the
                                        ladder as it expands and develops a
                                        wider network of operations.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Network of offices — stat band */}
                    <Reveal>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white">
                            <div className="p-8 text-center">
                                <Building2
                                    className="mx-auto text-[#d93338]"
                                    size={28}
                                    strokeWidth={1.5}
                                />
                                <p className="mt-3 text-3xl font-bold text-[#312d60]">
                                    25+
                                </p>
                                <p className="mt-1 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">
                                    Years in the Industry
                                </p>
                            </div>
                            <div className="p-8 text-center">
                                <MapPin
                                    className="mx-auto text-[#d93338]"
                                    size={28}
                                    strokeWidth={1.5}
                                />
                                <p className="mt-3 text-3xl font-bold text-[#312d60]">
                                    {branches.length}
                                </p>
                                <p className="mt-1 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">
                                    Branches Nationwide —{" "}
                                    {branches.map((b) => b.name).join(", ")}
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Laus Group affiliation */}
                    <Reveal>
                        <div className="bg-white mt-10 border-l-[3px] border-[#d93338] bg-slate-50 p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                                <Landmark
                                    className="flex-none text-[#312d60] mt-1"
                                    size={24}
                                    strokeWidth={1.5}
                                />
                                <p className="text-slate-800 leading-relaxed">
                                    Corporate Guarantee is one of the various
                                    companies under the umbrella of the{" "}
                                    <strong className="text-[#312d60]">
                                        Laus Group of Companies
                                    </strong>
                                    , a business organization that deals in
                                    automotive, non-life insurance, real estate,
                                    financing, media, food services, tires and
                                    wheels, motor oil, window film, lubricants
                                    distribution, and gas station service.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============ ISO CERTIFICATION ============ */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    <Reveal>
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                Globally Recognized
                            </span>
                            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                                CERTIFICATIONS & RECOGNITION
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        <Reveal>
                            {/* ISO CERT IMAGE PLACEHOLDER — replace with <img src={isoCertImg} .../> */}
                            {/* ISO cert — logo lockup, contained not cropped */}
                            <div className="flex items-center justify-center bg-white border border-slate-200 p-10 lg:p-14">
                                <img
                                    src={isoCertImg}
                                    alt="ISO 9001 SGS UKAS Management Systems Certification"
                                    className="w-full max-w-sm object-contain"
                                />
                            </div>
                        </Reveal>

                        {/* Certification story */}
                        <Reveal delay={150}>
                            <div className="bg-white border border-slate-200 p-8 lg:p-10 flex flex-col justify-center">
                                <ShieldCheck
                                    className="text-[#d93338]"
                                    size={32}
                                    strokeWidth={1.5}
                                />
                                <h3 className="mt-5 text-xl font-bold text-[#312d60] uppercase tracking-wide">
                                    ISO 9001:2015 Certified
                                </h3>
                                <div className="mt-6 space-y-4 text-slate-800 leading-relaxed text-sm">
                                    <p>
                                        Corporate Guarantee earned its ISO
                                        9001:2000 Certification for maintaining
                                        a Quality Management System on April 23,
                                        2004 at the LGC Conference and Training
                                        Center. It has been certified with
                                        succeeding versions such as 9001:2008
                                        and 9001:2015 in July 2017, and
                                        re-certified in March 2020 — making it
                                        among the few non-life insurance
                                        companies in the Philippines to be
                                        accorded an ISO Certification.
                                    </p>
                                    <p>
                                        This means Corporate Guarantee's Quality
                                        Management System conforms to global
                                        standards. On May 25, 2022, the company
                                        received its Certificate of Authority,
                                        valid until 2024, received by its
                                        Chairman and CEO, Lisset Laus-Velasco.
                                    </p>
                                    <p>
                                        Corporate Guarantee was also awarded the{" "}
                                        <strong className="text-[#312d60]">
                                            People Management Excellence
                                            Standard Recognition
                                        </strong>{" "}
                                        by Investors in People (IiP) on June 16,
                                        2015 — the first insurance company in
                                        the country to be accredited by IiP
                                        Philippines.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ============ THE FOUNDER ============ */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    <Reveal>
                        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                            {/* Circular portrait */}
                            <div className="flex-none relative">
                                <span
                                    className="absolute -bottom-2 -right-2 h-full w-full rounded-full bg-[#d93338]/90"
                                    aria-hidden="true"
                                />
                                <img
                                    src={founderImg}
                                    alt="Liberato 'Levy' P. Laus, Founder"
                                    className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>

                            {/* Heading + intro */}
                            <div>
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    A Legacy of Leadership
                                </span>
                                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                                    THE FOUNDER
                                </h2>
                                <p className="mt-6 text-slate-800 leading-relaxed">
                                    Liberato "Levy" P. Laus — one of the most
                                    accomplished and most awarded Filipino
                                    businessmen of his generation, and the most
                                    familiar champion of countryside development
                                    with a visionary zeal.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
                            {/* Story — 3 cols */}
                            <div className="lg:col-span-3 space-y-5 text-slate-800 leading-relaxed">
                                <p>
                                    Coming from humble beginnings, Laus was
                                    driven by a personal dream to transform his
                                    life — not only by achieving success but by
                                    building a legacy. A man with an
                                    extraordinary mission, armed with a vision,
                                    imbued with the value of hard work,
                                    challenged by innovation and change itself,
                                    and inspired by love for his hometown, now
                                    the City of San Fernando, Laus set out to
                                    cut a distinct path for himself.
                                </p>
                                <p>
                                    In 1978, Laus — already on an upward career
                                    trajectory in the banking industry — left
                                    his corporate job as bank manager to pursue
                                    his dream and mission. He put up a small and
                                    obscure automotive dealership — three cars
                                    on display, funded with meager capital — in
                                    the backwater capital town, in a business
                                    environment threatened by both economic and
                                    political uncertainties at the time. That
                                    mother company has since grown into the
                                    highly diversified conglomerate now known as
                                    the{" "}
                                    <strong className="text-[#312d60]">
                                        Laus Group of Companies
                                    </strong>{" "}
                                    — the largest multi-brand dealership network
                                    in the Philippines, with over 45 dealerships
                                    across Metro Manila, Central, and Northern
                                    Luzon.
                                </p>
                                <p>
                                    Laus had his baptism of fire when Mount
                                    Pinatubo erupted in 1991 and lahar flow
                                    threatened to bury San Fernando and other
                                    parts of Pampanga. With his leadership
                                    skill, organizational savvy, and unmoved
                                    conviction, he cobbled together a disaster
                                    management group called the{" "}
                                    <strong className="text-[#312d60]">
                                        "Save San Fernando Movement"
                                    </strong>{" "}
                                    — instrumental in bringing together
                                    government leaders, businessmen, and civil
                                    society to compel government to build a
                                    protective dike and save the capital town
                                    from total disaster.
                                </p>
                                <p>
                                    In May 2019, his achievements were
                                    recognized and honored in the Senate with a
                                    posthumous award, citing in a Senate
                                    resolution his valuable contribution to
                                    countryside development in the Philippines.
                                </p>
                                <p>
                                    Today, the LausGroup continues to transform
                                    the landscape of countryside business and
                                    expand its reach across Northern and Central
                                    Luzon — hewing as faithful as ever to its
                                    avowed role as catalyst for countryside
                                    progress through its new generation of Laus
                                    leaders.
                                </p>
                            </div>

                            {/* Awards — 2 cols */}
                            <div className="lg:col-span-2">
                                <div className="bg-white border border-slate-200 p-6 lg:p-8 h-full">
                                    <div className="flex items-center gap-3">
                                        <Award
                                            className="text-[#d93338]"
                                            size={24}
                                            strokeWidth={1.5}
                                        />
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#312d60]">
                                            Prestigious Awards
                                        </h3>
                                    </div>
                                    <ul className="mt-6 divide-y divide-slate-200">
                                        {awards.map((award) => (
                                            <li
                                                key={`${award.year}-${award.title}`}
                                                className="py-3 flex gap-4"
                                            >
                                                <span className="flex-none text-sm font-bold text-[#d93338] w-12">
                                                    {award.year}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-[#312d60] leading-snug">
                                                        {award.title}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-slate-500">
                                                        {award.by}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ============ BRANCHES ============ */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    <Reveal>
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                Find Us
                            </span>
                            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                                OUR BRANCHES
                            </h2>
                            <p className="mt-6 text-slate-600 leading-relaxed">
                                With branches and satellite offices across
                                Luzon, Corporate Guarantee is never far from
                                where you need us.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* LEFT — Branch list (2 cols) */}
                        <div className="lg:col-span-2 space-y-4 lg:pr-2">
                            {branches.map((branch, i) => (
                                <Reveal key={branch.name} delay={i * 60}>
                                    <div
                                        className={`bg-white border p-6 ${
                                            branch.isHQ
                                                ? "border-[#d93338] border-l-[3px]"
                                                : "border-slate-200 border-l-[3px] border-l-[#312d60]/20"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-base font-bold uppercase tracking-wide text-[#312d60]">
                                                {branch.name}
                                            </h3>
                                            {branch.isHQ && (
                                                <span className="flex-none text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-[#d93338] px-2 py-1">
                                                    Head Office
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-3 flex items-start gap-2.5">
                                            <MapPin
                                                size={15}
                                                className="flex-none text-[#d93338] mt-0.5"
                                            />
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {branch.address}
                                            </p>
                                        </div>

                                        {branch.landline && (
                                            <a
                                                href={toTelHref(
                                                    branch.landline,
                                                )}
                                                className="mt-3 flex items-center gap-2.5 text-sm font-medium text-[#312d60] transition-colors hover:text-[#d93338]"
                                            >
                                                <Phone
                                                    size={15}
                                                    className="flex-none text-[#d93338]"
                                                />
                                                {branch.landline}
                                            </a>
                                        )}

                                        {branch.mobiles.map((mobile) => (
                                            <a
                                                key={mobile}
                                                href={toTelHref(mobile)}
                                                className="mt-2 flex items-center gap-2.5 text-sm font-medium text-[#312d60] transition-colors hover:text-[#d93338]"
                                            >
                                                <Smartphone
                                                    size={15}
                                                    className="flex-none text-[#d93338]"
                                                />
                                                {mobile}
                                            </a>
                                        ))}
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* RIGHT — Map (3 cols) */}
                        <Reveal delay={150} className="lg:col-span-3">
                            <div className="lg:top-40">
                                <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] border border-slate-200 overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/d/u/0/embed?mid=1gPxGwJWju2XmL2kr-s9cdapcGNw1IqE&ehbc=2E312F&noprof=1"
                                        title="Corporate Guarantee Branch Locations Map"
                                        className="absolute inset-0 w-full h-full"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                                    <Building2
                                        size={14}
                                        className="flex-none text-[#d93338]"
                                    />
                                    Map shows all {branches.length} branch and
                                    satellite locations.
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
