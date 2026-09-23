import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// SEO
import SEO, { BASE_URL } from "./components/SEO";

// Animation
import Reveal from "./components/Reveal";

export default function Contact() {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <SEO
                title="Contact Us"
                description="Announcements, milestones, and the latest happenings
                                    from Corporate Guarantee all in one place."
                url={`${BASE_URL}/`}
            />
            <Header />
            <div className="w-full bg-slate-50">
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
                                Contact Us
                            </span>
                            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                                WE'D LOVE TO HEAR FROM YOU
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                                Whether it's a question about your policy, a new
                                inquiry, or a claim, our team is ready to help.
                                Fill out the form below and we'll get back to
                                you.
                            </p>
                        </div>
                    </Reveal>
                </section>

                <div className="container mx-auto bg-slate-50 px-4 xl:px-12 py-16 lg:py-24">
                    {/* Wrapper needs relative positioning so the loader can overlay the iframe */}
                    <div className="relative w-full min-h-[1400px] sm:min-h-[1350px] lg:min-h-[1000px]">
                        {/* Loader overlay — shown until iframe fires onLoad */}
                        {!loaded && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 z-10">
                                <div
                                    className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200"
                                    style={{ borderTopColor: "#d93338" }}
                                />
                                <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#312d60]">
                                    Loading form...
                                </p>
                            </div>
                        )}

                        <Reveal>
                            <iframe
                                src="https://crm.lausgroup.com.ph/ContactUs-cg/index2.php"
                                width="100%"
                                title="Corporate Guarantee Contact Form"
                                onLoad={() => setLoaded(true)}
                                className={`w-full h-[1400px] sm:h-[1350px] lg:h-[1000px] transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
