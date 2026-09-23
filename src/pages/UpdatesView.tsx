import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./NotFound";
import {
    getNewsBySlug,
    getPublishedNews,
    getFeaturedImage,
    resolveImage,
} from "../assets/data/news";

import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

export default function UpdatesView() {
    const { slug } = useParams<{ slug: string }>();

    const post = slug ? getNewsBySlug(slug) : undefined;

    // ---- Image slider state ----
    const [current, setCurrent] = useState(0);
    const images = post?.images ?? [];
    const hasSlider = images.length > 1;

    const goTo = (index: number) => {
        setCurrent((index + images.length) % images.length);
    };

    // Reset slider when navigating between posts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // ---- Post not found ----
    if (!post) {
        return (
            <>
                <NotFound />
            </>
        );
    }

    // ---- Related posts: same category first, backfill with latest ----
    const related = [
        ...getPublishedNews().filter(
            (p) => p.category === post.category && p.id !== post.id,
        ),
        ...getPublishedNews().filter(
            (p) => p.category !== post.category && p.id !== post.id,
        ),
    ].slice(0, 4);

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                url={`${BASE_URL}/updates/${post.slug}`}
                image={getFeaturedImage(post) ?? undefined}
                type="article"
            />
            <Header />
            <div className="w-full bg-slate-50">
                <Reveal>
                    <div className="container mx-auto px-4 xl:px-12 py-12 lg:py-20">
                        {/* Back link */}
                        <a
                            href="/updates"
                            className="flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-slate-500 transition-colors hover:text-[#d93338] cursor-pointer bg-transparent border-none mb-8"
                        >
                            <ArrowLeft size={14} />
                            Back to Updates
                        </a>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {/* ============ LEFT — Post content (2 cols) ============ */}
                            <article className="lg:col-span-2 bg-white border border-slate-200">
                                {/* Image / Slider */}
                                <div className="relative w-full aspect-video overflow-hidden bg-black/70">
                                    {images.length > 0 ? (
                                        images.map((img, i) => (
                                            <img
                                                key={img}
                                                src={resolveImage(img)}
                                                alt={`${post.title} — image ${i + 1}`}
                                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                                                    i === current
                                                        ? "opacity-100 z-10"
                                                        : "opacity-0 z-0"
                                                }`}
                                            />
                                        ))
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-semibold uppercase tracking-widest">
                                            No Image
                                        </div>
                                    )}

                                    {/* Slider controls — only when 2+ images */}
                                    {hasSlider && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    goTo(current - 1)
                                                }
                                                aria-label="Previous image"
                                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-[#312d60]/70 text-white transition-colors hover:bg-[#d93338] cursor-pointer border-none"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    goTo(current + 1)
                                                }
                                                aria-label="Next image"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-[#312d60]/70 text-white transition-colors hover:bg-[#d93338] cursor-pointer border-none"
                                            >
                                                <ChevronRight size={20} />
                                            </button>

                                            {/* Indicators */}
                                            <div className="absolute z-20 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
                                                {images.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => goTo(i)}
                                                        aria-label={`Image ${i + 1}`}
                                                        aria-current={
                                                            i === current
                                                        }
                                                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                                                            i === current
                                                                ? "w-7 bg-[#d93338]"
                                                                : "w-2.5 bg-black/40 hover:bg-white"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="p-6 lg:p-10">
                                    {/* Category + date */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d93338]">
                                            {post.category}
                                        </span>
                                        {post.published_date && (
                                            <>
                                                <span className="text-slate-300">
                                                    •
                                                </span>
                                                <span className="text-[12px] text-slate-500">
                                                    {new Date(
                                                        post.published_date,
                                                    ).toLocaleDateString(
                                                        "en-PH",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        },
                                                    )}
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    <h1 className="mt-4 text-2xl lg:text-4xl font-bold text-[#312d60] leading-tight">
                                        {post.title}
                                    </h1>
                                    <div className="mt-5 h-[3px] w-16 bg-[#d93338]" />

                                    <Reveal delay={150}>
                                        <div className="mt-8 text-slate-600 leading-relaxed whitespace-pre-line">
                                            {post.description}
                                        </div>
                                    </Reveal>
                                </div>
                            </article>

                            {/* ============ RIGHT — Related posts (1 col) ============ */}
                            <aside className="lg:col-span-1">
                                <div className="lg:sticky lg:top-40">
                                    <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                        More From Us
                                    </span>
                                    <h2 className="mt-2 text-xl font-bold text-[#312d60]">
                                        RELATED UPDATES
                                    </h2>

                                    <div className="mt-8 space-y-5">
                                        {related.map((rel) => (
                                            <a
                                                key={rel.id}
                                                href={`/updates/${rel.slug}`}
                                                style={{ borderRadius: 0 }}
                                                className="group flex gap-4 w-full text-left bg-white border border-slate-200 p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent"
                                            >
                                                {/* Thumb */}
                                                <div className="relative flex-none w-20 h-20 overflow-hidden bg-slate-100">
                                                    <img
                                                        src={
                                                            getFeaturedImage(
                                                                rel,
                                                            ) ??
                                                            "/news/placeholder.jpg"
                                                        }
                                                        alt={rel.title}
                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                {/* Text */}
                                                <div className="min-w-0 flex flex-col">
                                                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#d93338]">
                                                        {rel.category}
                                                    </span>
                                                    <h3 className="mt-1 text-sm font-bold text-[#312d60] leading-snug line-clamp-2 transition-colors group-hover:text-[#d93338]">
                                                        {rel.title}
                                                    </h3>
                                                    <span className="mt-auto pt-2 flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 transition-colors group-hover:text-[#312d60]">
                                                        Read
                                                        <ArrowRight size={11} />
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </Reveal>
            </div>
            <Footer />
        </>
    );
}
