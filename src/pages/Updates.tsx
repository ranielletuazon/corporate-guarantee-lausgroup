import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getPublishedNews, getFeaturedImage } from "../assets/data/news";
import { ArrowRight } from "lucide-react";

// SEO
import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

export default function Updates() {
    const allPosts = getPublishedNews();

    const POSTS_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
    const newsPosts = allPosts.slice(0, visibleCount);
    const hasMore = visibleCount < allPosts.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + POSTS_PER_PAGE);
    };

    return (
        <>
            <SEO
                title="Updates"
                description="Announcements, milestones, and the latest happenings from Corporate Guarantee — all in one place."
                url={`${BASE_URL}/updates`}
            />
            <Header />
            <main className="w-full max-w-full bg-slate-50">
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
                                UPDATES
                            </span>
                            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                                STAY IN THE KNOW
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                                Announcements, milestones, and the latest
                                happenings from Corporate Guarantee — all in one
                                place.
                            </p>
                        </div>
                    </Reveal>
                </section>

                {/* Latest News Cards Display */}
                <div className="container mx-auto px-4 xl:px-12 py-20 lg:py-28 bg-slate-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsPosts.map((post, i) => (
                            <Reveal
                                key={post.id}
                                delay={(i % POSTS_PER_PAGE) * 100}
                            >
                                <a
                                    href={`/updates/${post.slug}`}
                                    style={{ borderRadius: 0 }}
                                    className="group relative flex flex-col text-left bg-white border border-slate-200 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent h-full"
                                >
                                    <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                                        <img
                                            src={
                                                getFeaturedImage(post) ??
                                                "/news/placeholder.jpg"
                                            }
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-[#312d60]/0 group-hover:bg-[#312d60]/10 transition-colors duration-300" />
                                    </div>

                                    <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#d93338] transition-all duration-500 group-hover:w-full z-10" />

                                    <div className="flex flex-col flex-1 p-6">
                                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d93338]">
                                            {post.category}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold text-[#312d60] leading-snug line-clamp-2">
                                            {post.title.toUpperCase()}
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

                    {/* Load More button — only renders if more posts exist */}
                    {hasMore && (
                        <Reveal>
                            <div className="mt-14 flex justify-center">
                                <button
                                    onClick={handleLoadMore}
                                    style={{ borderRadius: 0 }}
                                    className="group relative overflow-hidden border-2 border-[#d93338] px-10 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-[#d93338] cursor-pointer transition-colors duration-300 hover:text-white bg-transparent"
                                >
                                    <span className="absolute inset-0 bg-[#d93338] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                                    <span className="relative z-10">
                                        Load More
                                    </span>
                                </button>
                            </div>
                        </Reveal>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
