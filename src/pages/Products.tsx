import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShieldCheck, ArrowRight } from "lucide-react";

import {
    getAllProducts,
    getProductImage,
    getProductLogo,
} from "../assets/data/products";

// SEO
import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

export default function Products() {
    const products = getAllProducts();
    return (
        <>
            <SEO
                title="Products"
                description="Learn about the experience of more than 25 years of strength, stability, and valued commitment."
                url={`${BASE_URL}/products`}
            />
            <Header />
            <main className="w-full bg-slate-50">
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
                                Products
                            </span>
                            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                                WHAT WE PROVIDE
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                                Comprehensive array of insurance services
                                designed to meet all your needs, ensuring a safe
                                and secure future.
                            </p>
                        </div>
                    </Reveal>
                </section>

                <section className="container mx-auto bg-slate-50 px-4 xl:px-12 py-16 lg:py-24">
                    {/* Products Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                        {products.map((product, i) => {
                            const logoUrl = getProductLogo(product.logo);
                            return (
                                <Reveal key={product.label} delay={i * 100}>
                                    <a
                                        href={product.path}
                                        style={{ borderRadius: 0 }}
                                        className="group relative flex flex-col text-left bg-white border border-slate-200 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent h-full"
                                    >
                                        {/* Photo — taller, with navy gradient & overlaid title */}
                                        <div className="relative w-full h-60 overflow-hidden">
                                            <img
                                                src={
                                                    getProductImage(
                                                        product.image,
                                                    ) ?? ""
                                                }
                                                alt={`${product.label} insurance`}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#312d60]/90 via-[#312d60]/20 to-transparent" />

                                            {logoUrl && (
                                                <div className="absolute top-2 left-2 flex items-center justify-center w-18 h-18">
                                                    <img
                                                        src={logoUrl}
                                                        alt={`${product.label} icon`}
                                                        className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                                                    />
                                                </div>
                                            )}

                                            <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#312d60]">
                                                <ShieldCheck
                                                    size={12}
                                                    className="text-[#d93338]"
                                                />
                                                {product.tags.length +
                                                    (product.moreCount ??
                                                        0)}{" "}
                                                Coverages
                                            </span>

                                            <div className="absolute bottom-0 left-0 p-5">
                                                <h3 className="text-2xl font-bold uppercase tracking-widest text-white">
                                                    {product.label}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-col flex-1 p-6">
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {product.desc}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {product.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="border border-slate-300 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-slate-500 transition-colors duration-300 group-hover:border-[#312d60]/40 group-hover:text-[#312d60]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {product.moreCount && (
                                                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#d93338]">
                                                        +{product.moreCount}{" "}
                                                        more
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-auto pt-5">
                                                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#312d60] transition-colors duration-300 group-hover:text-[#d93338]">
                                                        Learn More
                                                    </span>
                                                    <ArrowRight
                                                        size={16}
                                                        className="text-[#d93338] transition-transform duration-300 group-hover:translate-x-1.5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Reveal>
                            );
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
