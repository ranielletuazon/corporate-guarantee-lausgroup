import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { ChevronRight, ExternalLink, FileText } from "lucide-react";

const PDF_URL = "/documents/list-10-21-2026.pdf";
const PDF_FILENAME = "List of Licensed Agents.pdf";

// TODO: set to the date printed on the current list
const LIST_AS_OF = "October 10, 202";

export default function RegistryAgents() {
    return (
        <>
            <Header />

            {/* ============ HERO ============ */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#312d60] via-[#3a3670] to-[#312d60]">
                <div
                    className="absolute top-0 right-0 h-40 w-40 bg-[#d93338]/25"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-0 left-0 h-28 w-28 bg-white/5"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    aria-hidden="true"
                />

                <Reveal>
                    <div className="container mx-auto px-4 xl:px-12 py-16 lg:py-24 relative z-10">
                        <nav
                            aria-label="Breadcrumb"
                            className="flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white/60"
                        >
                            <a
                                href="/"
                                className="transition-colors hover:text-[#d93338]"
                            >
                                Home
                            </a>
                            <ChevronRight size={14} aria-hidden="true" />
                            <span className="text-white" aria-current="page">
                                Registry of Insurance Agents
                            </span>
                        </nav>

                        <h1 className="mt-6 text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
                            Registry of Insurance Agents
                        </h1>
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed text-lg">
                            Check the license of an agent authorized to
                            represent Corporate Guarantee.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ BODY ============ */}
            <div className="w-full bg-white">
                {/* ---------- Intro (left) + verification contact card (right) ---------- */}

                {/* ---------- Registry document ---------- */}
                <section
                    aria-labelledby="registry-heading"
                    className="border-t border-slate-200 py-12 lg:py-20"
                >
                    <div className="container mx-auto px-4 xl:px-12">
                        <Reveal>
                            <div className="mx-auto max-w-6xl">
                                <h2
                                    id="registry-heading"
                                    className="text-2xl lg:text-3xl font-bold uppercase tracking-wide text-[#312d60]"
                                >
                                    Registered Licensed Agents
                                </h2>

                                {/* Document card */}
                                <div className="mt-2 border border-slate-200 border-t-4 border-t-[#312d60] bg-white shadow-sm">
                                    {/* Document header */}
                                    <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <span
                                                className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#312d60] text-white"
                                                aria-hidden="true"
                                            >
                                                <FileText size={20} />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="truncate text-sm sm:text-base font-semibold text-slate-800">
                                                    {PDF_FILENAME}
                                                </p>
                                                <p className="text-xs sm:text-sm text-slate-500">
                                                    Active agents as of{" "}
                                                    <span className="font-semibold text-slate-700">
                                                        {LIST_AS_OF}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 shrink-0">
                                            <a
                                                href={PDF_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 border-2 border-[#312d60] px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-[#312d60] transition-colors hover:bg-[#312d60] hover:text-white"
                                            >
                                                <ExternalLink
                                                    size={14}
                                                    aria-hidden="true"
                                                />
                                                Open
                                            </a>
                                            {/* <a
                                                href={PDF_URL}
                                                download={PDF_FILENAME}
                                                className="inline-flex items-center gap-2 border-2 border-[#d93338] bg-[#d93338] px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-[#b8232c] hover:bg-[#b8232c]"
                                            >
                                                <Download
                                                    size={14}
                                                    aria-hidden="true"
                                                />
                                                Download
                                            </a> */}
                                        </div>
                                    </div>

                                    {/* PDF viewer — desktop/tablet.
                                        toolbar=0 hides the browser's PDF control bar and navpanes=0 the thumbnail
                                        sidebar. Chrome and Edge honor these; Firefox and Safari may still show theirs. */}
                                    <div className="hidden md:block border-t border-slate-200 bg-slate-100 p-3 lg:p-4">
                                        <iframe
                                            src={`${PDF_URL}#toolbar=0&navpanes=0&view=FitH`}
                                            title="List of registered licensed insurance agents from Corporate Guarantee"
                                            className="block h-[85vh] min-h-[640px] w-full bg-white shadow-inner"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Mobile: phones can't embed multi-page PDFs reliably, so send them to the file */}
                                    <div className="md:hidden border-t border-slate-200 bg-slate-50 px-6 py-10 text-center">
                                        <FileText
                                            size={40}
                                            className="mx-auto text-slate-300"
                                            aria-hidden="true"
                                        />
                                        <p className="mt-3 text-sm text-slate-600">
                                            Tap{" "}
                                            <span className="font-semibold">
                                                Open
                                            </span>{" "}
                                            to view the full list in your
                                            browser, or{" "}
                                            <span className="font-semibold">
                                                Download
                                            </span>{" "}
                                            to save a copy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
