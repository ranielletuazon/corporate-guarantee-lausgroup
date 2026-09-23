import { ExternalLink, Phone, Mail, ShieldCheck, Info } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import paymentBanner from "../assets/images/payment-banner.jpg";

import SEO, { BASE_URL } from "./components/SEO";
import Reveal from "./components/Reveal";

const PAY_NOW_URL = "https://gw.dragonpay.ph/GenPay.aspx?merchantid=CGICI";

const steps = [
    {
        title: "Click the PAY NOW button",
        detail: "You'll be taken to our secure Dragonpay payment portal in a new tab.",
    },
    {
        title: "Enter your payment details",
        detail: "Provide your Policy Number, Assured Name (full name of the policy holder), a valid Email Address, Mobile Number, Amount, and Remarks.",
    },
    {
        title: "Click Pay",
        detail: "Review your details, then proceed.",
    },
    {
        title: "Select your payment option",
        detail: "Choose from the available banks and payment facilities.",
    },
    {
        title: "Agree to Terms and Conditions, then click Select",
        detail: "Confirm your chosen payment channel to continue.",
    },
    {
        title: "Follow your payment facility's instructions",
        detail: "Complete the step-by-step process provided by your chosen bank or facility.",
    },
    {
        title: "Check your email for confirmation",
        detail: "Once the transaction is complete, a payment confirmation will be sent to the email address you provided.",
    },
];

export default function OnlinePayment() {
    return (
        <>
            <SEO
                title="Online Payment"
                description="Settle your premiums securely anytime, anywhere — through our trusted payment partner, Dragonpay."
                url={`${BASE_URL}/online-payment`}
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
                                Online Payment
                            </span>
                            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                                PAY YOUR POLICY ONLINE
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                                Settle your premiums securely anytime, anywhere
                                — through our trusted payment partner,
                                Dragonpay.
                            </p>
                        </div>
                    </Reveal>
                </section>

                {/* ============ PAYMENT CONTENT ============ */}
                <section className="container mx-auto px-4 xl:px-12 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* LEFT — Steps (3 cols) */}
                        <Reveal className="lg:col-span-3">
                            <div>
                                <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                    Step by Step
                                </span>
                                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-[#312d60]">
                                    HOW TO MAKE AN ONLINE PAYMENT
                                </h2>
                                <div className="mt-4 h-[3px] w-16 bg-[#d93338]" />

                                {/* Numbered steps — each stagger in individually */}
                                <ol className="mt-10 space-y-0">
                                    {steps.map((step, i) => (
                                        <Reveal key={i} delay={i * 80}>
                                            <li className="relative flex gap-5 pb-8 last:pb-0">
                                                {i < steps.length - 1 && (
                                                    <span
                                                        className="absolute left-[19px] top-10 h-full w-[2px] bg-slate-200"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span className="relative z-10 flex-none flex items-center justify-center w-10 h-10 bg-[#312d60] text-white text-sm font-bold">
                                                    {i + 1}
                                                </span>
                                                <div className="pt-1.5">
                                                    <h3 className="font-bold text-[#312d60] leading-snug">
                                                        {step.title}
                                                    </h3>
                                                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                                                        {step.detail}
                                                    </p>
                                                </div>
                                            </li>
                                        </Reveal>
                                    ))}
                                </ol>

                                {/* Procedure note */}
                                <div className="mt-8 flex items-start gap-3 border-l-[3px] border-[#d93338] bg-white p-5">
                                    <Info
                                        className="flex-none text-[#d93338] mt-0.5"
                                        size={18}
                                    />
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Procedures may vary depending on the
                                        bank or facility of your choice. Payment
                                        instructions may also be sent to your
                                        email.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* RIGHT — Pay Now card + help (2 cols) */}
                        <Reveal delay={150} className="lg:col-span-2">
                            <div className="lg:sticky lg:top-40 space-y-6">
                                {/* PAY NOW card */}
                                <div className="bg-[#312d60] p-8 lg:p-10 relative overflow-hidden">
                                    <div
                                        className="absolute top-0 right-0 h-24 w-24 bg-[#d93338]/20"
                                        style={{
                                            clipPath:
                                                "polygon(100% 0, 0 0, 100% 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                    <ShieldCheck
                                        className="text-[#d93338]"
                                        size={32}
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-xl font-bold text-white uppercase tracking-wide">
                                        Ready to Pay?
                                    </h3>
                                    <p className="mt-3 text-sm text-white/75 leading-relaxed">
                                        You'll be redirected to the secure
                                        Dragonpay portal in a new tab. Keep your
                                        policy number ready.
                                    </p>
                                    <a
                                        href={PAY_NOW_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ borderRadius: 0 }}
                                        className="group mt-8 relative overflow-hidden w-full border-2 border-[#d93338] px-6 py-4 text-[13px] font-bold tracking-[0.15em] uppercase text-white cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 bg-[#d93338] hover:bg-transparent hover:text-[#d93338]"
                                    >
                                        <span className="relative z-10">
                                            Pay Now
                                        </span>
                                        <ExternalLink
                                            size={15}
                                            className="relative z-10"
                                        />
                                    </a>
                                </div>

                                {/* Help card */}
                                <div className="bg-white border border-slate-200 p-8">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#312d60]">
                                        Need Help?
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                        For payment inquiries, reach our Client
                                        Care team:
                                    </p>
                                    <div className="mt-5 space-y-3">
                                        <a
                                            href="tel:+639998853986"
                                            className="flex items-center gap-3 text-sm font-semibold text-[#312d60] transition-colors hover:text-[#d93338]"
                                        >
                                            <Phone
                                                size={16}
                                                className="text-[#d93338]"
                                            />
                                            +63 999 885 3986
                                        </a>
                                        <a
                                            href="mailto:clientcare@corporateguarantee.com.ph"
                                            className="flex items-center gap-3 text-sm font-semibold text-[#312d60] transition-colors hover:text-[#d93338] break-all"
                                        >
                                            <Mail
                                                size={16}
                                                className="flex-none text-[#d93338]"
                                            />
                                            clientcare@corporateguarantee.com.ph
                                        </a>
                                    </div>
                                </div>

                                {/* Promo banner */}
                                <div className="mt-6 border border-slate-200 overflow-hidden">
                                    <img
                                        src={paymentBanner}
                                        alt="Welcome to Corporate Guarantee Online Payment — pay anytime, anywhere, online"
                                        className="w-full h-auto"
                                    />
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
