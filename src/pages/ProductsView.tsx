import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    getProductBySlug,
    getProductImage,
    getProductLogo,
    getVisibleProducts,
} from "../assets/data/products";

import NotFound from "./NotFound";
import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

export default function ProductsView() {
    const { slug } = useParams<{ slug: string }>();
    // const navigate = useNavigate();
    const product = slug ? getProductBySlug(slug) : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <>
                <NotFound />
            </>
        );
    }

    // const others = getAllProducts().filter((p) => p.id !== product.id);
    const others = getVisibleProducts().filter((p) => p.id !== product.id);
    // const totalCoverages = product.coverages.reduce(
    //     (sum, c) => sum + (c.items ? c.items.length : 1),
    //     0,
    // );

    return (
        <>
            <SEO
                title={`${product.label} Insurance - Corporate Guarantee (CG)`}
                description={product.intro}
                url={`${BASE_URL}/products/${product.slug}`}
                image={getProductImage(product.image) ?? undefined}
            />
            <Header />

            {/* ============ HERO — product photo + navy wash ============ */}
            <section className="relative overflow-hidden">
                <img
                    src={getProductImage(product.image) ?? ""}
                    alt={`${product.label} insurance`}
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
                            <img
                                src={getProductLogo(product.logo) ?? ""}
                                alt=""
                                aria-hidden="true"
                                className="w-16 h-16 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                            />
                            <div>
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    Insurance
                                </span>
                                <h1 className="mt-1 text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
                                    {product.label}
                                </h1>
                            </div>
                        </div>

                        <div className="mt-6 h-[3px] w-16 bg-[#d93338]" />
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                            {product.intro}
                        </p>

                        {/* <span className="mt-8 inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase text-white">
                        <ShieldCheck size={14} className="text-[#d93338]" />
                        {totalCoverages} Coverages Available
                    </span> */}
                    </div>
                </Reveal>
            </section>

            {/* ============ BODY ============ */}
            <div className="w-full bg-slate-50">
                <div className="container mx-auto px-4 xl:px-12 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* LEFT — coverages */}
                        <Reveal className="lg:col-span-2">
                            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                What's Included
                            </span>
                            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-[#312d60]">
                                COVERAGES
                            </h2>
                            <div className="mt-4 h-[3px] w-16 bg-[#d93338]" />

                            <div className="mt-10 space-y-5">
                                {product.coverages.map((cov, key) => (
                                    <Reveal
                                        key={cov.name}
                                        delay={150 * key}
                                        className="bg-white border border-slate-200 border-l-[3px] border-l-[#d93338] p-6 lg:p-8"
                                    >
                                        <h3 className="text-base font-bold uppercase tracking-wide text-[#312d60]">
                                            {cov.name}
                                        </h3>

                                        {cov.desc && (
                                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                                {cov.desc}
                                            </p>
                                        )}

                                        {/* Nested sub-coverages */}
                                        {cov.items && (
                                            <div className="mt-5 space-y-4 border-l border-slate-200 pl-5">
                                                {cov.items.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="flex gap-3"
                                                    >
                                                        <Check
                                                            size={15}
                                                            className="flex-none mt-0.5 text-[#d93338]"
                                                        />
                                                        <div>
                                                            <h4 className="text-sm font-bold text-[#312d60]">
                                                                {item.name}
                                                            </h4>
                                                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Reveal>
                                ))}
                            </div>
                        </Reveal>

                        {/* RIGHT — CTA + other products */}
                        <aside className="lg:col-span-1">
                            <Reveal className="lg:sticky lg:top-40 space-y-6">
                                {/* Inquiry CTA */}
                                <div className="bg-[#312d60] p-8 relative overflow-hidden">
                                    <div
                                        className="absolute top-0 right-0 h-20 w-20 bg-[#d93338]/20"
                                        style={{
                                            clipPath:
                                                "polygon(100% 0, 0 0, 100% 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                                        Interested in {product.label}?
                                    </h3>
                                    <p className="mt-3 text-sm text-white/75 leading-relaxed">
                                        Get in touch and our team will walk you
                                        through the coverage that fits your
                                        needs.
                                    </p>
                                    <a
                                        href="/contact-us"
                                        style={{ borderRadius: 0 }}
                                        className="group mt-7 relative overflow-hidden w-full border-2 border-[#d93338] px-6 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-white cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-[#d93338] flex items-center justify-center gap-2 bg-[#d93338]"
                                    >
                                        <span className="relative z-10">
                                            Inquire Now
                                        </span>
                                        <ArrowRight
                                            size={14}
                                            className="relative z-10"
                                        />
                                    </a>
                                </div>

                                {/* Other products */}
                                <div className="bg-white border border-slate-200 p-6">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#312d60]">
                                        Other Products
                                    </h3>
                                    <div className="mt-5 space-y-2">
                                        {others.map((other) => (
                                            <a
                                                key={other.id}
                                                href={other.path}
                                                className="group flex items-center gap-3 w-full text-left p-3 cursor-pointer bg-transparent border-none transition-colors hover:bg-slate-50"
                                            >
                                                <img
                                                    src={
                                                        getProductLogo(
                                                            other?.logo,
                                                        ) ?? ""
                                                    }
                                                    alt=""
                                                    aria-hidden="true"
                                                    className="w-9 h-9 flex-none object-contain"
                                                />
                                                <span className="flex-1 text-sm font-bold uppercase tracking-wide text-[#312d60] transition-colors group-hover:text-[#d93338]">
                                                    {other.label}
                                                </span>
                                                <ArrowRight
                                                    size={14}
                                                    className="flex-none text-slate-300 transition-all duration-300 group-hover:text-[#d93338] group-hover:translate-x-1"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </aside>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
