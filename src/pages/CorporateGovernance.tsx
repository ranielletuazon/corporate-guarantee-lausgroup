import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import SEO, { BASE_URL } from "./components/SEO";
import { FileText, ChevronDown, Download, Eye, FolderOpen } from "lucide-react";
import { getDocumentsByYear } from "../assets/data/document";

export default function CorporateGovernance() {
    const yearGroups = getDocumentsByYear();
    // Default open: the most recent year with documents
    const [openYear, setOpenYear] = useState<string | null>(
        yearGroups[0]?.year ?? null,
    );

    const toggleYear = (year: string) => {
        setOpenYear((prev) => (prev === year ? null : year));
    };

    return (
        <>
            <SEO
                title="Corporate Governance"
                description="Corporate Guarantee's legal disclosures, reports, and governance documents."
                url={`${BASE_URL}/corporate-governance`}
            />
            <Header />

            {/* ============ PAGE HERO ============ */}
            <section className="bg-[#312d60] relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 h-40 w-40 bg-[#d93338]/20"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    aria-hidden="true"
                />
                <Reveal>
                    <div className="container mx-auto px-4 xl:px-12 py-20 lg:py-28 relative z-10">
                        <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                            Legal
                        </span>
                        <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                            CORPORATE GOVERNANCE
                        </h1>
                        <div className="mt-4 h-[3px] w-16 bg-[#d93338]" />
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                            Corporate Guarantee's legal disclosures, reports,
                            and governance documents.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ DOCUMENTS BY YEAR ============ */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12 max-w-4xl">
                    {yearGroups.length === 0 ? (
                        <Reveal>
                            <div className="bg-white border border-slate-200 p-10 text-center">
                                <FolderOpen
                                    className="mx-auto text-slate-300"
                                    size={40}
                                />
                                <p className="mt-4 text-slate-500">
                                    No documents have been uploaded yet.
                                </p>
                            </div>
                        </Reveal>
                    ) : (
                        <div className="bg-white border border-slate-200 divide-y divide-slate-300">
                            {yearGroups.map(({ year, documents }, i) => {
                                const isOpen = openYear === year;
                                return (
                                    <Reveal key={year} delay={i * 60}>
                                        <div>
                                            {/* Year header */}
                                            <button
                                                type="button"
                                                onClick={() => toggleYear(year)}
                                                aria-expanded={isOpen}
                                                className="group/year relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50 cursor-pointer bg-transparent border-none"
                                            >
                                                <span
                                                    className={`absolute left-0 top-0 h-full w-[3px] bg-[#d93338] transition-transform duration-300 origin-top ${
                                                        isOpen
                                                            ? "scale-y-100"
                                                            : "scale-y-0"
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                                <span className="flex items-center gap-3">
                                                    <span
                                                        className={`text-lg font-bold tracking-wide transition-colors duration-200 ${
                                                            isOpen
                                                                ? "text-[#d93338]"
                                                                : "text-[#312d60]"
                                                        }`}
                                                    >
                                                        {year}
                                                    </span>
                                                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                                                        {documents.length}{" "}
                                                        {documents.length === 1
                                                            ? "Document"
                                                            : "Documents"}
                                                    </span>
                                                </span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`flex-none text-[#312d60] transition-transform duration-300 ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>

                                            {/* Document list — animated open/close */}
                                            <div
                                                className={`grid transition-all duration-300 ease-out ${
                                                    isOpen
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="divide-y divide-slate-100 bg-slate-50/60">
                                                        {documents.map(
                                                            (doc) => (
                                                                <div
                                                                    key={
                                                                        doc.filename
                                                                    }
                                                                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-6 py-4 pl-8 transition-colors hover:bg-white"
                                                                >
                                                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                        <FileText
                                                                            size={
                                                                                18
                                                                            }
                                                                            className="flex-none text-[#d93338]"
                                                                        />
                                                                        <span className="text-sm font-medium text-slate-700 truncate">
                                                                            {
                                                                                doc.displayName
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center gap-2 flex-none">
                                                                        <a
                                                                            href={
                                                                                doc.url
                                                                            }
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="flex items-center gap-1.5 border border-slate-300 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-[#312d60]/40 hover:text-[#312d60]"
                                                                        >
                                                                            <Eye
                                                                                size={
                                                                                    13
                                                                                }
                                                                            />
                                                                            View
                                                                        </a>
                                                                        <a
                                                                            href={
                                                                                doc.url
                                                                            }
                                                                            download
                                                                            className="flex items-center gap-1.5 bg-[#312d60] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#d93338]"
                                                                        >
                                                                            <Download
                                                                                size={
                                                                                    13
                                                                                }
                                                                            />
                                                                            Download
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}
