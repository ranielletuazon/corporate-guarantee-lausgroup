import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Swap this for whatever image you want on the design panel.
// (You can also just reuse an existing asset, e.g. "../assets/images/herobanner.jpg")
import faqImage from "../../assets/images/facade.jpg";

// Animation
import Reveal from "./Reveal";
/**
 * Sample data — replace the questions/answers freely.
 * Each category can hold as few or as many items as you like.
 */
const faqCategories = [
    {
        category: "Motor Insurance",
        items: [
            {
                q: "Does the insurance automatically transfers to the new owner in the event the insured person sells the insured vehicle?",
                a: "An insurance policy is a personal contract which means that it attaches to the person insured and not to the vehicle insured. In order to avail the policy benefits, the former owner of the vehicle should provide a written request to transfer the insurance policy to the new owner. Such request has to be approved by the insurance company and an endorsement to the policy has to be issued reflecting the new owner as the new named insured. In case that the former owner will not request the transfer of the insurance policy to the new owner, the new owner can buy his own insurance policy.",
            },
            {
                q: "If I let someone else drive my car, will my insurance cover them too?",
                a: "Yes. The insurance policy will still respond as long as the Authorized Driver Clause is not violated. An authorized driver can be the Insured or any person driving on the Insured’s permission.",
            },
            {
                q: "Are the car accessories covered?",
                a: "Yes, the standard car accessories are automatically covered under the Own Damage/Theft cover. However, additional accessories should be declared and be insured to ensure full coverage of your insurance policy at times of fortuitous event.",
            },
            {
                q: "What is the process of filing a Motor Car Insurance Claim?",
                a: "The process of filing a motor car insurance claim usually involves reporting the incident to the insurance company, providing evidence of the damage or loss, and filling out a claim form. The insurance company will then investigate the claim and determine the amount of compensation you are eligible for.",
            },
            {
                q: "What type of damages are covered under the Own Damage/Theft coverage of motor insurance policy?",
                a: "The type of damages are covered under the Own Damage/Theft coverage: \n\n • Accidental damage: provides coverage to the damages caused to your vehicle in case of any accident. \n • Theft of vehicle. \n • Damage to vehicles due to natural calamities like flood, cyclone, landslide, rockslide, earthquake, etc. \n • Damage due to fire and lightning.",
            },
            {
                q: "What is the meaning of Deductible?",
                a: "Deductible is a certain amount stated in the insurance policy that the insured must pay in case of a claim.",
            },
            {
                q: "When will the depreciation of the Motor Vehicle take effect?",
                a: "The depreciation will take effect at the age over 3 years. The schedule of rate is stated in the Policy Form of the Motor Car Insurance.",
            },
        ],
    },
    {
        category: "Fire Insurance",
        items: [
            {
                q: "Who may insure?",
                a: "Building owners and tenants who have insurable interest over the properties that they want to insure.",
            },
            {
                q: "What happens if the insured property is underinsured?",
                a: "According to the Average Clause, if at the time of the loss, the value of the assets is insured for less than their full value, the insured is required to bear a proportion of the loss. Since the fire insurance policy is a contract of indemnity, the insured cannot claim more than the actual amount of loss caused by the fire.",
            },
            {
                q: "What happens if the insured property is over insured?",
                a: "According to the Open Policy Clause, at the time of the accident, the damage to the property shall be subject to ascertainment and the maximum liability of the insurer shall be limited to the amount of losses incurred.",
            },
            {
                q: "Can we insure all the contents of the building?",
                a: "No, this insurance policy excludes cash, jewelry, gadgets, and works of art",
            },
            {
                q: "Is Fire Insurance a protection against fire only?",
                a: "No. Under the Fire Insurance Policy, the insured may choose to get protected against typhoons, floods, earthquakes, water damages, sprinkler leakages, robbery and burglary, and etc.",
            },
        ],
    },
    {
        category: "Personal Accident Insurance",
        items: [
            {
                q: "Are medical expenses due to illness covered?",
                a: "No, only accidents resulting to death and bodily injury are covered.",
            },
            {
                q: "Who can be considered as the Insured’s beneficiaries?",
                a: "Beneficiaries can be any of the Insured’s immediate family members such as parents, legal spouse, siblings, and children.",
            },
            {
                q: "What is a pre-existing illness? Is this covered?",
                a: "Pre-existing illness is defined as any illness or medical condition already affecting the Insured, whether known or unknown before the effectivity date of the insurance coverage. Hence, Corporate Guarantee does not cover losses attributable to pre-existing illness.",
            },
        ],
    },
    {
        category: "Cargo Insurance",
        items: [
            {
                q: "What are the types of Marine Cargo Insurance Policy?",
                a: "Types of Marine Cargo Insurance: \n\n • Inland Marine Cargo Insurance - This policy is designed to cover cargo movements by land, usually via commercial trucks or similar conveyances. \n • Inter-Island Marine Cargo Insurance - This policy is designed to cover cargo movements on-board ships or vessels designed for inter-island voyages usually within sheltered waters.",
            },
            {
                q: "What are the two (2) types of Marine Insurance policy?",
                a: "Types of Marine Insurance Policy: \n\n • Voyage Policy - a policy that covers a single voyage only. \n • Open Policy - a policy whereby the insurer agrees to provide coverage for all cargo shipped by the insured during the policy period.",
            },
            {
                q: "What are the eligibility criteria for buying Marine Insurance?",
                a: "Marine insurance can be purchased by any business engaged in the transportation of goods by sea. This can be manufacturers, import/export merchants, buyers, sellers, banks, contractors, and buying agents.",
            },
        ],
    },
    {
        category: "Bond Insurance",
        items: [
            {
                q: "What is the difference between a bond and an insurance policy?",
                a: "A Bond is a contract among at least three parties. It is issued by a surety company on behalf of a second party known as the principal. This contract guarantees that the second party will complete an obligation to a third party known as the obligee. If the obligation is not met, the third party can recover its losses from that bond. On the other hand, an Insurance Policy is a two-party contract between the insured and the insurance company. The insurance policy assumes a guaranteed promise that the insured will be compensated by the insurance company in the case of a covered loss.",
            },
            {
                q: "What are the acceptable collaterals?",
                a: "Acceptable collaterals could be in the form of cash, savings, time deposit, real estate mortgage and treasury bills or government securities.",
            },
            {
                q: "What is an Obligee and a Principal",
                a: "An Obligee is the entity entitled to receive a product, service, or benefit. While the Principal is the entity that will deliver the product, service, or benefit.",
            },
        ],
    },
];

export default function FAQ() {
    const [openCat, setOpenCat] = useState<number | null>(null);
    const [openQ, setOpenQ] = useState<string | number | null>(null);

    const toggleCat = (i: number) => {
        setOpenCat((prev) => (prev === i ? null : i));
        setOpenQ(null); // collapse any open question when switching category
    };

    const toggleQ = (key: string | number) => {
        setOpenQ((prev) => (prev === key ? null : key));
    };

    return (
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 xl:px-12">
                {/* Section heading */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                        Need Answers?
                    </span>
                    <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#312d60]">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p className="mt-6 text-slate-600 leading-relaxed">
                        Quick, clear answers to common questions about our
                        products, policies, coverage, and claims — grouped by
                        insurance line.
                    </p>
                </div>

                {/* Two-column layout */}
                <Reveal delay={150}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 bg-white overflow-hidden">
                        {/* LEFT — nested accordion */}
                        <div className="divide-y divide-slate-200">
                            {faqCategories.map((cat, ci) => {
                                const catOpen = openCat === ci;
                                return (
                                    <div key={cat.category}>
                                        {/* Category header */}
                                        <button
                                            type="button"
                                            onClick={() => toggleCat(ci)}
                                            aria-expanded={catOpen}
                                            className="group/cat relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50 cursor-pointer"
                                        >
                                            {/* Red active-accent bar */}
                                            <span
                                                className={`absolute left-0 top-0 h-full w-[3px] bg-[#d93338] transition-transform duration-300 origin-top ${
                                                    catOpen
                                                        ? "scale-y-100"
                                                        : "scale-y-0"
                                                }`}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className={`text-base font-bold uppercase tracking-wide transition-colors duration-200 ${
                                                    catOpen
                                                        ? "text-[#d93338]"
                                                        : "text-[#312d60]"
                                                }`}
                                            >
                                                {cat.category}
                                            </span>
                                            <span className="flex items-center gap-3">
                                                <span className="text-[11px] font-semibold text-slate-400">
                                                    {cat.items.length}
                                                </span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`flex-none text-[#312d60] transition-transform duration-300 ${
                                                        catOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </span>
                                        </button>

                                        {/* Questions — animated open/close via grid-rows trick */}
                                        <div
                                            className={`grid transition-all duration-300 ease-out ${
                                                catOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="divide-y divide-slate-100 bg-slate-50/60">
                                                    {cat.items.map(
                                                        (item, qi) => {
                                                            const key = `${ci}-${qi}`;
                                                            const qOpen =
                                                                openQ === key;
                                                            return (
                                                                <div key={key}>
                                                                    {/* Question header */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            toggleQ(
                                                                                key,
                                                                            )
                                                                        }
                                                                        aria-expanded={
                                                                            qOpen
                                                                        }
                                                                        className="flex w-full items-center justify-between gap-4 px-6 py-4 pl-8 text-left transition-colors duration-200 hover:bg-white cursor-pointer"
                                                                    >
                                                                        <span
                                                                            className={`text-sm font-medium transition-colors duration-200 ${
                                                                                qOpen
                                                                                    ? "text-[#312d60]"
                                                                                    : "text-slate-600"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                item.q
                                                                            }
                                                                        </span>
                                                                        <ChevronDown
                                                                            size={
                                                                                16
                                                                            }
                                                                            className={`flex-none text-[#d93338] transition-transform duration-300 ${
                                                                                qOpen
                                                                                    ? "rotate-180"
                                                                                    : ""
                                                                            }`}
                                                                        />
                                                                    </button>

                                                                    {/* Answer */}
                                                                    <div
                                                                        className={`grid transition-all duration-300 ease-out ${
                                                                            qOpen
                                                                                ? "grid-rows-[1fr]"
                                                                                : "grid-rows-[0fr]"
                                                                        }`}
                                                                    >
                                                                        <div className="overflow-hidden">
                                                                            <p className="whitespace-pre-line border-l-2 border-[#d93338] mx-6 mb-4 ml-8 bg-white px-4 py-3 text-sm leading-relaxed text-slate-600">
                                                                                {
                                                                                    item.a
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT — decorative design panel (desktop only) */}
                        <div className="relative hidden lg:block overflow-hidden">
                            {/* Image with branded duotone filter */}
                            <img
                                src={faqImage}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-cover grayscale-[35%] contrast-[1.1] brightness-95"
                            />

                            {/* Navy → red gradient wash (duotone) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#312d60]/90 via-[#312d60]/50 to-[#d93338]/60 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-[#312d60]/20" />

                            {/* Polygon accents */}
                            <div
                                className="absolute top-0 right-0 h-48 w-48 bg-[#d93338]/25"
                                style={{
                                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className="absolute bottom-0 left-0 h-56 w-56 bg-[#312d60]/40"
                                style={{
                                    clipPath: "polygon(0 100%, 0 0, 100% 100%)",
                                }}
                                aria-hidden="true"
                            />
                            {/* Thin outlined polygon for detail */}
                            <svg
                                className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-30"
                                viewBox="0 0 100 100"
                                fill="none"
                                aria-hidden="true"
                            >
                                <polygon
                                    points="50,4 96,28 96,72 50,96 4,72 4,28"
                                    stroke="white"
                                    strokeWidth="1"
                                />
                                <polygon
                                    points="50,20 80,36 80,64 50,80 20,64 20,36"
                                    stroke="#d93338"
                                    strokeWidth="1"
                                />
                            </svg>

                            {/* Overlaid copy */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-10">
                                {/* <ShieldCheck className="mb-4 h-10 w-10 text-white" /> */}
                                {/* <h3 className="text-2xl font-bold leading-snug text-white">
                                Protection you can
                                <br />
                                understand.
                            </h3> */}
                                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                                    Still have questions? Our client care team
                                    is ready to walk you through every policy,
                                    line by line.
                                </p>
                                <span className="mt-6 h-[3px] w-16 bg-[#d93338]" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
