import { ArrowLeft } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SEO from "./components/SEO";

export default function NotFound() {
    return (
        <>
            <SEO title="Page Not Found - Corporate Guarantee (CG)" />
            <Header />
            <section className="relative bg-white overflow-hidden">
                <div className="container mx-auto px-4 xl:px-12 py-24 lg:py-32">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Oversized 404 with red accent bar through it */}
                        <div className="relative inline-block">
                            <span className="text-[120px] lg:text-[180px] font-bold leading-none text-[#312d60]/10 select-none">
                                404
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center h-[3px] bg-[#d93338] top-1/2 -translate-y-1/2" />
                        </div>

                        {/* Eyebrow */}
                        <span className="block -mt-6 text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                            Page Not Found
                        </span>

                        <h1 className="mt-3 text-2xl lg:text-3xl font-bold text-[#312d60]">
                            This page isn't covered.
                        </h1>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            The page you're looking for may have been moved,
                            renamed, or no longer exists. Let's get you back on
                            track.
                        </p>

                        {/* Actions */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/"
                                style={{ borderRadius: 0 }}
                                className="group relative overflow-hidden w-full sm:w-auto border-2 border-[#d93338] px-8 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-[#d93338] cursor-pointer transition-colors duration-300 hover:text-white flex items-center justify-center gap-2 bg-transparent"
                            >
                                <span className="absolute inset-0 bg-[#d93338] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                                <ArrowLeft
                                    size={14}
                                    className="relative z-10"
                                />
                                <span className="relative z-10">
                                    Back to Home
                                </span>
                            </a>

                            <a
                                href={"/contact-us"}
                                style={{ borderRadius: 0 }}
                                className="w-full sm:w-auto border-2 border-[#312d60] px-8 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-[#312d60] cursor-pointer transition-colors duration-300 hover:bg-[#312d60] hover:text-white bg-transparent"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Quick links to core sections */}
                        <div className="mt-14 pt-10 border-t border-slate-200">
                            {/* <span className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">
                                <Search size={12} />
                                Or find what you need
                            </span> */}
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {[
                                    { label: "About Us", path: "/about" },
                                    { label: "Products", path: "/products" },
                                    {
                                        label: "News and Updates",
                                        path: "/updates",
                                    },
                                    { label: "Careers", path: "/careers" },
                                    {
                                        label: "Online Payment",
                                        path: "/online-payment",
                                    },
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.path}
                                        className="px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-slate-600 border border-slate-300 cursor-pointer transition-colors duration-300 hover:border-[#312d60]/40 hover:text-[#312d60] bg-transparent"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
