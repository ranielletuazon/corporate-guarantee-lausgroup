import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import cg_logo from "../../assets/logos/CG_Logo.png";

interface NavItem {
    label: string;
    path: string;
    external?: boolean;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    {
        label: "About Us",
        path: "/about-us",
        children: [
            { label: "Corporate Governance", path: "/corporate-governance" },
        ],
    },
    { label: "Products", path: "/products" },
    { label: "Updates", path: "/updates" },
    {
        label: "Careers",
        path: "https://careers.lausgroup.com.ph/",
        external: true,
    },
    { label: "Contact Us", path: "/contact-us" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            {/* Top utility bar */}
            <div className="bg-[#312d60] text-white text-xs tracking-wide">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-end gap-1 sm:gap-8 px-4 xl:px-12 py-2">
                    <button
                        onClick={() =>
                            (window.location.href = "tel:+639188542913")
                        }
                        className="flex items-center gap-2 uppercase tracking-widest font-medium transition-colors hover:text-[#d93338] cursor-pointer bg-transparent border-none"
                    >
                        <Phone size={12} />
                        <span>+63 918 854 2913</span>
                    </button>
                    <span className="hidden sm:block text-white/30">|</span>
                    <button
                        onClick={() =>
                            (window.location.href =
                                "mailto:clientcare@corporateguarantee.com.ph")
                        }
                        className="flex items-center gap-2 uppercase tracking-widest font-medium transition-colors hover:text-[#d93338] cursor-pointer bg-transparent border-none"
                    >
                        <Mail size={12} />
                        <span>clientcare@corporateguarantee.com.ph</span>
                    </button>
                </div>
            </div>

            {/* Red accent line */}
            <div className="h-[3px] bg-gradient-to-r from-[#b02025] via-[#d93338] to-[#b02025] w-full" />

            {/* Main bar */}
            <div className="border-b border-slate-200">
                <div className="container mx-auto flex items-center justify-between px-4 xl:px-12 py-3">
                    {/* Logo */}
                    <button
                        onClick={() => navigate("/")}
                        className="bg-transparent border-none cursor-pointer"
                    >
                        <img
                            src={cg_logo}
                            alt="Corporate Guarantee Logo"
                            className="h-16 xl:h-18 w-auto min-w-[160px]"
                        />
                    </button>

                    {/* Desktop nav — xl and above only */}
                    <nav className="hidden xl:flex items-center gap-0 text-[13px] font-semibold tracking-wide text-slate-700 uppercase">
                        {navItems.map((item) =>
                            item.children ? (
                                <div
                                    key={item.label}
                                    className="group/nav relative"
                                >
                                    <a
                                        href={item.path}
                                        className="relative flex items-center gap-1.5 px-4 py-6 transition-colors hover:text-[#d93338] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#d93338] after:transition-all after:duration-300 group-hover/nav:after:w-full bg-transparent border-none cursor-pointer whitespace-nowrap"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className="transition-transform duration-300 group-hover/nav:rotate-180"
                                        />
                                    </a>

                                    {/* Dropdown panel */}
                                    <div
                                        className="absolute left-0 top-full min-w-[240px] bg-white border border-slate-200 border-t-2 border-t-[#d93338] shadow-lg
                                                   opacity-0 invisible translate-y-2
                                                   transition-all duration-200 ease-out
                                                   group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0"
                                    >
                                        {item.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.path}
                                                className="block px-5 py-3.5 text-[12px] font-semibold tracking-wide text-slate-700 normal-case transition-colors hover:bg-slate-50 hover:text-[#d93338]"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    target={
                                        item.external ? "_blank" : undefined
                                    }
                                    rel={
                                        item.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="relative px-4 py-6 transition-colors hover:text-[#d93338] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#d93338] after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer whitespace-nowrap"
                                >
                                    {item.label}
                                </a>
                            ),
                        )}

                        {/* CTA — Online Payment */}
                        <a
                            href="/online-payment"
                            style={{ borderRadius: 0 }}
                            className="group ml-6 relative overflow-hidden border-2 border-[#d93338] px-6 py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-[#d93338] cursor-pointer transition-colors duration-300 hover:text-white flex items-center gap-2 bg-transparent whitespace-nowrap"
                        >
                            <span className="absolute inset-0 bg-[#d93338] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10">
                                Online Payment
                            </span>
                            <ArrowRight
                                size={14}
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </nav>

                    {/* Hamburger — shows below xl */}
                    <button
                        className="xl:hidden relative w-7 h-7 text-[#312d60] bg-transparent border-none cursor-pointer flex items-center justify-center"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute transition-all duration-300 ease-in-out ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
                        >
                            <Menu size={26} />
                        </span>
                        <span
                            className={`absolute transition-all duration-300 ease-in-out ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                        >
                            <X size={26} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet menu — shows below xl */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="bg-white border-b-2 border-[#d93338]">
                    <div className="flex flex-col divide-y divide-slate-100">
                        {navItems.map((item, index) =>
                            item.children ? (
                                <div key={item.label}>
                                    <div className="flex items-stretch">
                                        <a
                                            href={item.path}
                                            onClick={() => setOpen(false)}
                                            className="flex-1 px-6 py-4 text-[13px] font-semibold uppercase tracking-widest text-slate-700 transition-all duration-300 hover:text-[#d93338] hover:bg-slate-50 bg-transparent cursor-pointer text-left"
                                            style={{
                                                transitionDelay: open
                                                    ? `${index * 60}ms`
                                                    : "0ms",
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                        <button
                                            onClick={() =>
                                                setMobileSubOpen((prev) =>
                                                    prev === item.label
                                                        ? null
                                                        : item.label,
                                                )
                                            }
                                            aria-label={`Toggle ${item.label} submenu`}
                                            className="px-5 flex items-center justify-center bg-transparent border-none cursor-pointer text-slate-400 hover:text-[#d93338]"
                                        >
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-300 ${
                                                    mobileSubOpen === item.label
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Sub-items */}
                                    <div
                                        className={`grid transition-all duration-300 ease-out ${
                                            mobileSubOpen === item.label
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden bg-slate-50">
                                            {item.children.map((child) => (
                                                <a
                                                    key={child.label}
                                                    href={child.path}
                                                    onClick={() => {
                                                        setOpen(false);
                                                        setMobileSubOpen(null);
                                                    }}
                                                    className="block pl-10 pr-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-slate-600 transition-colors hover:text-[#d93338]"
                                                >
                                                    {child.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    target={
                                        item.external ? "_blank" : undefined
                                    }
                                    rel={
                                        item.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    onClick={() => setOpen(false)}
                                    className="px-6 py-4 text-[13px] font-semibold uppercase tracking-widest text-slate-700 transition-all duration-300 hover:text-[#d93338] hover:bg-slate-50 hover:pl-8 bg-transparent border-none cursor-pointer text-left"
                                    style={{
                                        transitionDelay: open
                                            ? `${index * 60}ms`
                                            : "0ms",
                                    }}
                                >
                                    {item.label}
                                </a>
                            ),
                        )}

                        {/* Mobile CTA */}
                        <div className="px-4 py-4">
                            <a
                                onClick={() => setOpen(false)}
                                style={{ borderRadius: 0 }}
                                href="/online-payment"
                                className="group relative overflow-hidden w-full border-2 border-[#d93338] px-6 py-4 text-[12px] font-bold tracking-[0.15em] uppercase text-[#d93338] cursor-pointer transition-colors duration-300 hover:text-white flex items-center justify-center gap-2 bg-transparent"
                            >
                                <span className="absolute inset-0 bg-[#d93338] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                                <span className="relative z-10">
                                    Online Payment
                                </span>
                                <ArrowRight
                                    size={14}
                                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
