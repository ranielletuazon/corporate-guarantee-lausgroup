import { PhoneCall, Mail, Clock, MapPin } from "lucide-react";

// Insurance Commission
import iclogo from "../../assets/images/iclogowhite.png";
import type { SVGProps } from "react";

/**
 * Brand accent lives in ONE place. Swap `red-600` / `red-700` below for your
 * CGIC theme token (e.g. add `brand` to tailwind.config and use `bg-brand-600`).
 * Everything else is neutral slate so the red does the talking.
 */

/**
 * Lucide dropped brand/social icons a while back, so Facebook and Instagram
 * are hand-drawn here as inline SVGs. Same `className`/sizing API as a lucide
 * icon (`h-5 w-5`, `aria-hidden`, etc.) so they drop in the same way.
 */
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.22 4.32 15.26 4.25 14.14 4.25c-2.33 0-3.93 1.42-3.93 4.03V10.5H7.7v3h2.51V21h3.29Z" />
        </svg>
    );
}

function YoutubeIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            {...props}
        >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
        </svg>
    );
}

const quickLinks = [
    { label: "FAQs", href: "/faqs" },
    { label: "Data Privacy Notice", href: "/data-privacy-notice" },
    { label: "Contact Us", href: "/contact-us" },
];

const products = [
    { label: "Motor", href: "/products/motor" },
    { label: "Fire", href: "/products/fire" },
    { label: "Casualty", href: "/products/casualty" },
    { label: "Cargo", href: "/products/cargo" },
    { label: "Bonds", href: "/products/bonds" },
];

const claimsNumbers = [
    "+63 918 854 2267",
    "+63 918 854 2070",
    "+63 918 854 5085",
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="w-full bg-slate-900 text-slate-300"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Site footer
            </h2>

            {/* Brand accent rule */}
            <div className="h-1 w-full bg-red-600" aria-hidden="true" />

            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                {/* Top row: identity + primary CTA */}
                <div className="flex flex-col gap-4 border-b border-slate-700/60 pb-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xl font-semibold tracking-tight text-white">
                            Corporate Guarantee
                        </p>
                        {/* <p className="mt-1 text-sm text-slate-400">
                            Non-life insurance you can build on.
                        </p> */}
                    </div>
                    <a
                        href="/contact-us"
                        className="inline-flex w-fit items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                        GET IN TOUCH
                    </a>
                </div>

                {/* Main columns */}
                <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h3>
                        <address className="mt-4 space-y-4 not-italic text-sm">
                            <div className="flex gap-3">
                                <PhoneCall
                                    className="mt-0.5 h-5 w-5 flex-none text-red-500"
                                    aria-hidden="true"
                                />
                                <div className="space-y-1.5">
                                    <p>
                                        <span className="text-slate-400">
                                            Client Care:
                                        </span>{" "}
                                        <a
                                            href="tel:+639998853986"
                                            className="hover:text-white"
                                        >
                                            +63 999 885 3986
                                        </a>
                                    </p>
                                    <p>
                                        <span className="text-slate-400">
                                            Sales:
                                        </span>{" "}
                                        <a
                                            href="tel:+639188542913"
                                            className="hover:text-white"
                                        >
                                            +63 918 854 2913
                                        </a>
                                    </p>
                                    <div>
                                        <span className="text-slate-400">
                                            Claims Center:
                                        </span>
                                        <ul className="mt-0.5 space-y-0.5">
                                            {claimsNumbers.map((num) => (
                                                <li key={num}>
                                                    <a
                                                        href={`tel:${num.replace(/\s/g, "")}`}
                                                        className="hover:text-white"
                                                    >
                                                        {num}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Mail
                                    className="mt-0.5 h-5 w-5 flex-none text-red-500"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:clientcare@corporateguarantee.com.ph"
                                    className="break-all hover:text-white"
                                >
                                    clientcare@corporateguarantee.com.ph
                                </a>
                            </div>

                            <div className="flex gap-3">
                                <Clock
                                    className="mt-0.5 h-5 w-5 flex-none text-red-500"
                                    aria-hidden="true"
                                />
                                <span>Mon–Sat: 8:00 AM – 5:00 PM</span>
                            </div>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Quick links">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Products */}
                    <nav aria-label="Products">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Products
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <a
                                        href={product.href}
                                        className="text-slate-300 hover:text-white"
                                    >
                                        {product.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Regulated By + Social — the trust column, given deliberate weight */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                                Regulated By
                            </h3>
                            <div className="mt-4 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                                <img
                                    src={iclogo}
                                    alt="Insurance Commission of the Philippines"
                                    className="h-auto w-48 max-w-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                                Follow Us
                            </h3>
                            <div className="mt-4 flex gap-3">
                                <a
                                    href="https://www.facebook.com/corpguaranteeinsurance/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Corporate Guarantee on Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-blue-600 hover:ring-blue-600"
                                >
                                    <FacebookIcon
                                        className="h-5 w-5 text-white"
                                        aria-hidden="true"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/@lausgroupcompanies7204"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Corporate Guarantee on YouTube"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-red-600 hover:from-yellow-400 hover:via-pink-600 hover:to-purple-600 hover:ring-transparent"
                                >
                                    <YoutubeIcon
                                        className="h-5 w-5 text-white"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 border-t border-slate-700/60 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {year} Corporate Guarantee &amp; Insurance Company.
                        All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        <MapPin
                            className="h-4 w-4 flex-none text-red-500"
                            aria-hidden="true"
                        />
                        San Fernando, Pampanga, Philippines
                    </p>
                </div>
            </div>
        </footer>
    );
}
