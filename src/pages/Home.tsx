import { ArrowRight, ShieldCheck } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import HeroCarousel from "./components/HeroCarousel";
import { getLatestNews, getFeaturedImage } from "../assets/data/news";
import imageBanner from "../assets/images/herobanner.jpg";

// Promo
import PromoModal from "./components/PromoModal";
import promoImage from "../assets/images/promos/promo-image.png";

// SEO
import SEO, { BASE_URL } from "./components/SEO";

import {
    getProductImage,
    getProductLogo,
    getVisibleProducts,
} from "../assets/data/products";

// Animations
import Reveal from "./components/Reveal";

export default function Home() {
    const products = getVisibleProducts();
    const newsPosts = getLatestNews(3);
    return (
        <>
            <SEO
                title="Corporate Guarantee (CG)"
                description="Corporate Guarantee provides a comprehensive array of insurance products designed to meet all your needs, ensuring a safe and secured future."
                url={`${BASE_URL}/`}
                image={`${imageBanner}`}
            />
            <Header />
            <PromoModal
                image={promoImage}
                alt="Online Products"
                link="/products/online-products"
                eyebrow="New Product"
                title="Online Products"
                ctaLabel="Learn More"
            />
            {/* Image Carousel Banner */}
            <Reveal>
                <HeroCarousel />
            </Reveal>

            {/* <div className="w-full lg:min-h-[56vh]">
                <img
                    src={header_banner}
                    alt="CORPORATE GUARANTEE CG"
                    className="w-full lg:h-auto"
                />
            </div> */}

            {/* First Content */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    {/* Section heading */}
                    <Reveal>
                        <div className="max-w-2xl mx-auto text-center mb-14">
                            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                What We Offer
                            </span>
                            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                                OUR PRODUCTS
                            </h2>
                            <p className="mt-6 text-slate-600 leading-relaxed">
                                Corporate Guarantee provides a comprehensive
                                array of insurance products designed to meet all
                                your needs, ensuring a safe and secured future.
                            </p>
                        </div>
                    </Reveal>

                    {/* Product cards — 6-col grid, each card spans 2 → centered 3 + 2 layout */}
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
                </div>
            </section>

            <Reveal>
                <FAQ />
            </Reveal>

            {/* 3rd Section */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    {/* Section heading */}
                    <Reveal>
                        <div className="max-w-2xl mx-auto text-center mb-14">
                            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                Latest
                            </span>
                            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                                NEWS AND UPDATES
                            </h2>
                            <p className="mt-6 text-slate-600 leading-relaxed">
                                Stay informed with the latest announcements,
                                product updates, and company news from Corporate
                                Guarantee.
                            </p>
                        </div>
                    </Reveal>

                    {/* Section for News Display Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsPosts.map((post, i) => (
                            <Reveal key={post.id} delay={i * 100}>
                                <a
                                    href={`/updates/${post.slug}`}
                                    style={{ borderRadius: 0 }}
                                    className="group relative flex flex-col text-left bg-white border border-slate-200 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent h-full"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden">
                                        <img
                                            src={
                                                getFeaturedImage(post) ??
                                                "/news/placeholder.jpg"
                                            }
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-[#312d60]/0 group-hover:bg-[#312d60]/10 transition-colors duration-300" />
                                    </div>

                                    <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#d93338] transition-all duration-500 group-hover:w-full z-10" />

                                    <div className="flex flex-col flex-1 p-6">
                                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d93338]">
                                            {post.category}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold text-[#312d60] leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <div className="mt-auto pt-5">
                                            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#312d60] transition-colors duration-300 group-hover:text-[#d93338]">
                                                    Read More
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
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
