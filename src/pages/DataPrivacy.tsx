import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO, { BASE_URL } from "./components/SEO";
import { Shield, ChevronRight, Mail, MapPin } from "lucide-react";

// Animation
import Reveal from "./components/Reveal";

const sections = [
    { id: "collect", title: "What We May Collect From You" },
    { id: "how-collect", title: "How We Collect Your Personal Data" },
    { id: "how-use", title: "How We Use Your Personal Data" },
    { id: "how-share", title: "How We May Share Your Personal Data" },
    { id: "protect", title: "How We Protect Your Personal Data" },
    { id: "retain", title: "How We Retain and Dispose Your Personal Data" },
    { id: "rights", title: "What Your Rights Are" },
    { id: "changes", title: "Changes or Modifications to This Notice" },
    { id: "contact", title: "How You May Contact Us" },
];

export default function DataPrivacy() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    // Highlight the ToC entry matching the section currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -70% 0px" },
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SEO
                title="Data Privacy Notice"
                description="How Corporate Guarantee collects, uses, protects, and discloses your personal data in accordance with the Data Privacy Act of 2012."
                url={`${BASE_URL}/data-privacy-notice`}
            />
            <Header />

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
                            Legal
                        </span>
                        <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
                            DATA PRIVACY NOTICE
                        </h1>
                        <div className="mt-4 h-[3px] w-16 bg-[#d93338]" />
                        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
                            How we collect, use, protect, and dispose of your
                            personal data in accordance with the Data Privacy
                            Act of 2012 (RA 10173).
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ============ BODY ============ */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        {/* LEFT — Sticky table of contents */}
                        <aside className="lg:col-span-1">
                            <Reveal className="lg:sticky lg:top-40 bg-white border border-slate-200 p-6">
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d93338]">
                                    On This Page
                                </span>
                                <nav className="mt-4 space-y-1">
                                    {sections.map((s, i) => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className={`flex items-start gap-2 py-2 text-sm leading-snug transition-colors ${
                                                activeSection === s.id
                                                    ? "text-[#d93338] font-semibold"
                                                    : "text-slate-600 hover:text-[#312d60]"
                                            }`}
                                        >
                                            <span className="flex-none text-xs font-bold text-slate-400 pt-0.5">
                                                {i + 1}
                                            </span>
                                            {s.title}
                                        </a>
                                    ))}
                                </nav>
                            </Reveal>
                        </aside>

                        {/* RIGHT — Content */}
                        <div className="lg:col-span-3 space-y-6 text-slate-800 leading-relaxed">
                            {/* Intro */}
                            <Reveal className="leading-relaxed">
                                <div className="bg-white border border-slate-200 border-l-[3px] border-l-[#d93338] p-6 lg:p-8">
                                    <p>
                                        We, at Corporate Guarantee & Insurance
                                        Company, Inc., a member of the Laus
                                        Group of Companies (LGC), care about the
                                        privacy and security of your personal
                                        data.
                                    </p>
                                    <p className="mt-4">
                                        We aim to establish and implement fair
                                        information practices as part of our
                                        commitment and guarantee to product and
                                        service quality that go beyond your
                                        expectations. Thus, we warrant that our
                                        services are guided by the following
                                        principles:
                                    </p>
                                    <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            We will ensure the security and
                                            confidentiality of any personal data
                                            you share with us;
                                        </li>
                                        <li>
                                            We will limit the collection and use
                                            of personal data to a minimum;
                                        </li>
                                        <li>
                                            We will only authorize employees,
                                            who are knowledgeable in the
                                            handling of customer data, to have
                                            access thereto;
                                        </li>
                                        <li>
                                            We will not disclose personal data
                                            to any external organization unless
                                            we have previously informed you in
                                            disclosures or agreements, have been
                                            expressly authorized by you, or are
                                            required by law. For purposes of
                                            credit reporting, sales verification
                                            and other related and legitimate
                                            purposes, we will exchange
                                            information about you with reputable
                                            reference sources.
                                        </li>
                                    </ul>
                                    <p className="mt-4">
                                        This Data Privacy Notice ("Notice")
                                        carefully and thoroughly explains: a)
                                        what and why personal data may be
                                        collected from you; b) why we process
                                        your personal data and who has access to
                                        the same; c) how we protect and
                                        safeguard the personal data that we
                                        collect, process, disclose and dispose;
                                        and, d) what privacy rights you have and
                                        how you can exercise them as mandated by
                                        Republic Act (RA) No. 10173, also known
                                        as The Data Privacy Act of 2012, its
                                        Implementing Rules and Regulations, and
                                        other related issuances from the
                                        National Privacy Commission (NPC).
                                    </p>
                                    <p className="mt-4">
                                        This Notice covers both our online and
                                        offline data collection activities,
                                        including those we collect and process
                                        through our various channels such as,
                                        but not limited to, websites, social
                                        networking sites, telephone
                                        conversations, consumer engagement
                                        services, points of sale and events, and
                                        other similar activities. It also
                                        includes the privacy practices for our
                                        customers and guests who apply for and
                                        obtain products and services from us.
                                    </p>
                                    <p className="mt-4">
                                        We collect personal data when you
                                        interact with our employees and
                                        authorized representatives through our
                                        various dealerships, business units,
                                        social media, electronic channels and
                                        other similar activities. By filling out
                                        and signing the log documents, customer
                                        sheets, registration and/or application
                                        forms, survey questionnaires, sales
                                        invoices and repair orders, you express
                                        your consent to the collection,
                                        processing, use and disclosure of your
                                        personal data.
                                    </p>
                                    <p className="mt-4">
                                        When accessing our websites, online
                                        applications, and social media pages
                                        and/or availing of our services from
                                        outside the Philippines, you acknowledge
                                        and agree that your personal information
                                        may be transferred to and processed in
                                        the Philippines, following legal and
                                        regulatory standards for data protection
                                        that may differ from your current or
                                        home jurisdiction.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Section 1 */}
                            <Reveal>
                                <div
                                    id="collect"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={1}
                                        title="What We May Collect From You"
                                    />
                                    <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            Basic personal information including
                                            your full name, date of birth,
                                            gender and marital status as well as
                                            supporting documents such as
                                            government ID details;
                                        </li>
                                        <li>
                                            Your contact details including your
                                            residential and business addresses,
                                            mobile and telephone numbers, e-mail
                                            address as well as supporting
                                            documents such as utility records;
                                        </li>
                                        <li>Specimen signatures;</li>
                                        <li>
                                            Images via closed-circuit television
                                            cameras (CCTVs) and other similar
                                            recording devices which may be
                                            observed when visiting our
                                            dealerships, business units and/or
                                            using our other facilities;
                                        </li>
                                        <li>
                                            Voice recordings of our
                                            conversations with you, where
                                            applicable;
                                        </li>
                                        <li>
                                            Financial information (such as
                                            income, expenses, balances,
                                            investments, tax, insurance,
                                            financial and transaction history,
                                            etc.); and,
                                        </li>
                                        <li>
                                            Business interests, assets and
                                            credit information.
                                        </li>
                                    </ul>
                                    <p className="mt-4">
                                        References, as necessary, to verify or
                                        augment the above personal data, may be
                                        made with third parties including
                                        government regulators, supervisory
                                        bodies, tax authorities or courts of
                                        competent jurisdiction and, in the
                                        process, gain additional information
                                        about you.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal>
                                {/* Section 2 */}
                                <div
                                    id="how-collect"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={2}
                                        title="How We Collect Your Personal Data"
                                    />
                                    <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            When you submit any form, including
                                            but not limited to application forms
                                            or other documents relating to any
                                            of our products and services which
                                            you avail at or through Corporate
                                            Guarantee & Insurance Company, Inc.;
                                        </li>
                                        <li>
                                            When you enter into any agreement or
                                            provide other documentation or
                                            information with regard to your
                                            transactions with us, or when you
                                            avail of our products and services;
                                        </li>
                                        <li>
                                            When you interact with our
                                            personnel, including business
                                            managers, sales heads and their
                                            assistants, and all other authorized
                                            personnel via telephone calls (which
                                            may be recorded), letters, fax,
                                            face-to-face meetings and e-mails;
                                        </li>
                                        <li>
                                            When your images are captured by us
                                            via CCTVs or other equipment or
                                            devices while you are within our
                                            premises;
                                        </li>
                                        <li>
                                            When you use some of our products
                                            and services provided through online
                                            and other technology platforms, such
                                            as websites and apps;
                                        </li>
                                        <li>
                                            When you request that we contact
                                            you, or include you in an e-mail or
                                            other mailing list; or when you
                                            respond to our request for
                                            additional personal data,
                                            promotional campaigns and other
                                            marketing activities;
                                        </li>
                                        <li>
                                            When you are contacted by, and
                                            respond to our marketing
                                            representatives, agents and other
                                            service providers;
                                        </li>
                                        <li>
                                            When we seek information about you
                                            and receive your personal data from
                                            third parties in connection with
                                            your relationship and transactions
                                            with us, for example, from
                                            referrers, business partners, public
                                            agencies or the relevant
                                            authorities;
                                        </li>
                                        <li>
                                            When in connection with any
                                            investigation, litigation, or
                                            inquiry which may relate to you or
                                            any connected person; and,
                                        </li>
                                        <li>
                                            When you submit your personal data
                                            to us for any other reason.
                                        </li>
                                    </ul>
                                </div>
                            </Reveal>

                            {/* Section 3 */}
                            <Reveal>
                                <div
                                    id="how-use"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={3}
                                        title="How We Use Your Personal Data"
                                    />
                                    <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>To identify you;</li>
                                        <li>
                                            To process your applications and
                                            transactions;
                                        </li>
                                        <li>
                                            To document and record your
                                            information for sales transaction
                                            and available third party financing,
                                            if applicable;
                                        </li>
                                        <li>
                                            To facilitate warranty registration,
                                            processing and payment of claims as
                                            determined in accordance with
                                            existing company procedures;
                                        </li>
                                        <li>
                                            To bill and collect your payments;
                                        </li>
                                        <li>
                                            To facilitate release and delivery
                                            of your vehicles, parts and
                                            accessories, contracts and policies
                                            and other deliverables;
                                        </li>
                                        <li>
                                            To allow the availment and
                                            processing of your after-sales
                                            concerns and claims services;
                                        </li>
                                        <li>
                                            To determine your financial
                                            capacity;
                                        </li>
                                        <li>
                                            To continuously engage you in
                                            connection with our new products and
                                            offerings as well as events and
                                            services;
                                        </li>
                                        <li>
                                            To conduct studies and researches
                                            for the purpose of reviewing,
                                            developing and improving our
                                            products and services;
                                        </li>
                                        <li>
                                            To perform profile analysis,
                                            behavioral modeling and analytics to
                                            understand the market's needs,
                                            preferences and trends for the
                                            improvements and recommendations of
                                            suitable products and services;
                                        </li>
                                        <li>
                                            To establish certain protective
                                            safeguards against the improper use
                                            or abuse of our products and
                                            services, including fraud
                                            prevention;
                                        </li>
                                        <li>
                                            To be used for referral to LGC's
                                            affiliates and subsidiaries;
                                        </li>
                                        <li>
                                            To be employed in report generation,
                                            consolidation and business review of
                                            Corporate Guarantee & Insurance
                                            Company, Inc.;
                                        </li>
                                        <li>
                                            To be submitted as part of reports
                                            to, and as required by, the
                                            government and/or any regulating
                                            bodies;
                                        </li>
                                        <li>
                                            To receive, address and verify your
                                            inquiries, complaints, or feedback
                                            for appropriate action;
                                        </li>
                                        <li>
                                            To perform other activities using
                                            your personal data for any other
                                            legitimate purpose as permitted by
                                            law and/or with your express
                                            consent.
                                        </li>
                                    </ul>
                                </div>
                            </Reveal>

                            {/* Section 4 */}
                            <Reveal>
                                <div
                                    id="how-share"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={4}
                                        title="How We May Share Your Personal Data"
                                    />
                                    <p className="mt-4">
                                        We will not share your personal
                                        information with third parties unless:
                                    </p>
                                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            necessary for the above-mentioned
                                            purposes; and,
                                        </li>
                                        <li>
                                            you give your express consent
                                            thereto.
                                        </li>
                                    </ul>

                                    <p className="mt-5">
                                        Such third parties include, but are not
                                        limited to:
                                    </p>
                                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            LGC's business units, subsidiaries,
                                            affiliates;
                                        </li>
                                        <li>Principals;</li>
                                        <li>
                                            Third party suppliers and service
                                            providers; and,
                                        </li>
                                        <li>
                                            Government authorities, regulating
                                            bodies and/or courts of competent
                                            jurisdiction.
                                        </li>
                                    </ul>

                                    <p className="mt-5">
                                        We engage third parties for the
                                        following reasons:
                                    </p>
                                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            To offer you additional products and
                                            services that we believe you might
                                            find interesting;
                                        </li>
                                        <li>
                                            To support us in delivering our
                                            services. This may involve anonymous
                                            or aggregated information to help
                                            improve our products, services, and
                                            content;
                                        </li>
                                        <li>
                                            To validate, consolidate or update
                                            your information records and/or
                                            credit history;
                                        </li>
                                        <li>
                                            To send reminders, announcements,
                                            promotions, offers, invitations and
                                            other notifications;
                                        </li>
                                        <li>
                                            To enrol you in, and/or renew your
                                            enlistment in our loyalty and
                                            similar client-oriented programs;
                                        </li>
                                        <li>
                                            To aid us in the conduct and
                                            performance of our business
                                            operations;
                                        </li>
                                        <li>
                                            To assist us in research or to
                                            design other related products or
                                            services;
                                        </li>
                                        <li>
                                            To promote promotional and/or
                                            marketing activities;
                                        </li>
                                        <li>
                                            To comply with a legal obligation to
                                            which Corporate Guarantee &
                                            Insurance Company, Inc., is subject;
                                        </li>
                                        <li>
                                            To enable us to fulfill our
                                            contractual obligations with the
                                            said third party;
                                        </li>
                                        <li>
                                            To enforce our terms of use
                                            including, among others, our rights
                                            as creditor to those availing of our
                                            loan or credit products, or such
                                            other applicable policies with
                                            respect to the products and services
                                            that we provide;
                                        </li>
                                        <li>
                                            To address fraud, security or
                                            technical issues, and respond to an
                                            emergency or otherwise protect your
                                            rights, property or security or that
                                            of said third parties; and,
                                        </li>
                                        <li>
                                            To carry out all other legitimate
                                            and related purposes set out above.
                                        </li>
                                    </ul>

                                    <p className="mt-5">
                                        We may process, store and/or transfer
                                        your personal data outside the
                                        Philippines. In doing so, we will comply
                                        with the Data Privacy Act of 2012 and
                                        its Implementing Rules and Regulations,
                                        and other related issuances of the NPC.
                                    </p>

                                    <Reveal
                                        delay={150}
                                        className="mt-5 flex items-start gap-3 border-l-[3px] border-[#312d60] bg-slate-50 p-5"
                                    >
                                        <Shield
                                            className="flex-none text-[#312d60] mt-0.5"
                                            size={18}
                                        />
                                        <p className="text-sm">
                                            We wish to assure you that we do
                                            not, and will not, sell personal
                                            data to any third parties. All our
                                            engagements with third parties shall
                                            be fully compliant with our
                                            obligation of confidentiality
                                            imposed on us under the applicable
                                            agreements and/or terms and
                                            conditions or any applicable laws
                                            that govern our relationship with
                                            you.
                                        </p>
                                    </Reveal>
                                </div>
                            </Reveal>

                            {/* Section 5 */}
                            <Reveal>
                                <div
                                    id="protect"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={5}
                                        title="How We Protect Your Personal Data"
                                    />
                                    <p className="mt-4">
                                        Your privacy and security are important
                                        to us. We recognize the value of your
                                        personal data. Thus, we strictly enforce
                                        physical, occupational and security
                                        safeguards to maintain the
                                        confidentiality, integrity and
                                        availability of your personal
                                        information against loss, misuse,
                                        wrongful modification, unauthorized or
                                        accidental access or disclosure, illicit
                                        alteration or destruction. These
                                        safeguards include, but are not limited
                                        to the following:
                                    </p>
                                    <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            Your personal data are kept and
                                            maintained by using a secured server
                                            behind a firewall, deploying
                                            encryption on computing devices and
                                            establishing physical security
                                            controls;
                                        </li>
                                        <li>
                                            Access to your personal data is
                                            restricted only to qualified and
                                            authorized personnel who hold your
                                            personal data with strict
                                            confidentiality;
                                        </li>
                                        <li>
                                            Our employees are well-trained to
                                            properly handle your personal data;
                                            and,
                                        </li>
                                        <li>
                                            Our third parties are required to
                                            protect your personal data
                                            conforming with our own security
                                            standards.
                                        </li>
                                    </ul>
                                </div>
                            </Reveal>

                            {/* Section 6 */}
                            <Reveal>
                                <div
                                    id="retain"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={6}
                                        title="How We Retain and Dispose Your Personal Data"
                                    />
                                    <p className="mt-4">
                                        We keep and retain your personal data on
                                        our databases and physical storage
                                        facilities.
                                    </p>
                                    <p className="mt-4">
                                        We retain personal data only according
                                        to our operational needs and in
                                        compliance with legal and regulatory
                                        purposes. We shall retain your personal
                                        data for a period of{" "}
                                        <strong className="text-[#312d60]">
                                            ten (10) years
                                        </strong>{" "}
                                        from the date your information was first
                                        processed and collected, unless
                                        otherwise still necessary:
                                    </p>
                                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            To continue legitimate business
                                            purposes;
                                        </li>
                                        <li>
                                            To establish, exercise or defend
                                            legal claims; or,
                                        </li>
                                        <li>As provided by law.</li>
                                    </ul>
                                    <p className="mt-4">
                                        Such retention shall be without
                                        prejudice to the exercise of your rights
                                        as data subject as protected under the
                                        Data Privacy Act of 2012.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Section 7 */}
                            <Reveal>
                                <div
                                    id="rights"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={7}
                                        title="What Your Rights Are"
                                    />
                                    <p className="mt-4">
                                        Please ensure that the personal data you
                                        submit to us are complete, correct and
                                        accurate. Failure on your part to do so
                                        may result in our inability to provide
                                        you with products and services you have
                                        requested. Kindly inform us immediately
                                        of any change of facts or circumstances
                                        which may render any personal data
                                        previously provided incomplete,
                                        incorrect or inaccurate, and provide any
                                        information or documentation we may
                                        reasonably require for the purposes of
                                        verifying the accuracy of the updated
                                        personal data.
                                    </p>

                                    <p className="mt-5">
                                        Under the Data Privacy Act of 2012, you
                                        have the following rights:
                                    </p>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            "Right to be informed",
                                            "Right to object",
                                            "Right to access",
                                            "Right to rectify or correct erroneous data",
                                            "Right to erase or block",
                                            "Right to secure data portability",
                                            "Right to be indemnified for damages",
                                            "Right to file a complaint",
                                        ].map((right) => (
                                            <div
                                                key={right}
                                                className="flex items-center gap-3 bg-slate-50 px-4 py-3 text-sm font-medium text-[#312d60]"
                                            >
                                                <ChevronRight
                                                    size={14}
                                                    className="flex-none text-[#d93338]"
                                                />
                                                {right}
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-6">
                                        In connection therewith, you may opt to
                                        tell us:
                                    </p>
                                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#d93338]">
                                        <li>
                                            Not to send you marketing materials
                                            via e-mail, SMS or to your
                                            registered address;
                                        </li>
                                        <li>
                                            To opt you out of our customer or
                                            marketing list;
                                        </li>
                                        <li>
                                            Not to share your information with
                                            our affiliates or other companies
                                            that we have business with, provided
                                            that such information is not
                                            critical or required by applicable
                                            laws, contractual obligations and
                                            company regulations to maintain the
                                            products and services that you have
                                            availed with us;
                                        </li>
                                        <li>
                                            To provide you with information that
                                            we currently have about you, subject
                                            to restrictions applied to us and
                                            certain laws and regulations;
                                        </li>
                                        <li>To update your information;</li>
                                        <li>
                                            About your other concerns relating
                                            to how we collect, use, share,
                                            protect or dispose your personal
                                            data; and,
                                        </li>
                                        <li>
                                            To have your information deleted in
                                            our system, subject to restrictions
                                            imposed by law on erasure of your
                                            personal data.
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-500 italic">
                                        Your rights, however, shall be subject
                                        to applicable internal policies,
                                        relevant laws and regulations.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Section 8 */}
                            <Reveal>
                                <div
                                    id="changes"
                                    className="scroll-mt-40 bg-white border border-slate-200 p-6 lg:p-8"
                                >
                                    <SectionHeading
                                        number={8}
                                        title="Changes or Modifications to This Notice"
                                    />
                                    <p className="mt-4">
                                        We reserve the right to change, modify,
                                        revise or update this Notice from time
                                        to time to ensure that it is consistent
                                        with industry trends, relevant laws and
                                        regulations applicable to us. These
                                        changes will be posted in our premises,
                                        as well as in our website and other
                                        social networking platforms for your
                                        information and guidance.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Section 9 */}
                            <Reveal>
                                <div
                                    id="contact"
                                    className="scroll-mt-40 bg-[#312d60] p-6 lg:p-8 relative overflow-hidden"
                                >
                                    <div
                                        className="absolute top-0 right-0 h-24 w-24 bg-[#d93338]/20"
                                        style={{
                                            clipPath:
                                                "polygon(100% 0, 0 0, 100% 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                    <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#d93338]">
                                        Section 9
                                    </span>
                                    <h2 className="mt-2 text-xl lg:text-2xl font-bold text-white uppercase tracking-wide">
                                        How You May Contact Us
                                    </h2>
                                    <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xl">
                                        For any questions, comments, or queries,
                                        or if you want to report what you
                                        reasonably believe is a compromise to
                                        the security and privacy of your
                                        personal data, or you wish to exercise
                                        any of your rights mentioned in this
                                        Notice, you may reach our Data
                                        Protection Officer at:
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <p className="text-sm font-bold uppercase tracking-wide text-white">
                                            Data Protection Officer
                                        </p>
                                        <div className="flex items-start gap-3">
                                            <MapPin
                                                size={16}
                                                className="flex-none text-[#d93338] mt-0.5"
                                            />
                                            <span className="text-sm text-white/80">
                                                Jose Abad Santos Avenue, San
                                                Jose, City of San Fernando,
                                                Pampanga
                                            </span>
                                        </div>
                                        <a
                                            href="mailto:dpo@corporateguarantee.com.ph"
                                            className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#d93338]"
                                        >
                                            <Mail
                                                size={16}
                                                className="flex-none text-[#d93338]"
                                            />
                                            dpo@corporateguarantee.com.ph
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

/* Reusable numbered section heading */
function SectionHeading({ number, title }: { number: number; title: string }) {
    return (
        <div className="flex items-center gap-4">
            <span className="flex-none flex items-center justify-center w-9 h-9 bg-[#312d60] text-white text-sm font-bold">
                {number}
            </span>
            <h2 className="text-lg lg:text-xl font-bold uppercase tracking-wide text-[#312d60]">
                {title}
            </h2>
        </div>
    );
}
