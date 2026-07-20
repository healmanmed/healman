import Link from "next/link";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col bg-medical-light">

            <section className="relative min-h-[85vh] w-full flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Decorative Gold Light Flare */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-medical-gold-light to-transparent opacity-30 pointer-events-none"/>

                <div
                    className="mx-auto max-w-7xl w-full px-6 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Core Value & Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 max-w-2xl animate-fade-in">

                        {/* Accreditation Badge */}
                        <div
                            className="inline-flex items-center gap-2 bg-medical-green/90 text-white border border-medical-green-dark/50 px-4 py-2 rounded-full w-fit shadow-lg shadow-black/10">
                            <span className="h-2 w-2 rounded-full bg-medical-gold animate-pulse"/>
                            <p className="font-sans text-[10px] font-bold tracking-widest uppercase">
                                Official Regional Representative
                            </p>
                        </div>

                        {/* Core Value Statement */}
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                            Bridging European Medical Precision
                        </h1>

                        <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                            Healman, under the direct representation of <strong
                            className="text-white font-semibold">Milad Ganji</strong>, is the official authorized
                            representative for <span className="text-medical-gold font-medium">ChM</span> and <span
                            className="text-medical-gold font-medium">Chirmed</span>. We deliver premium, certified
                            trauma fixation systems and ultra-durable surgical instrumentation directly to leading
                            healthcare institutions.
                        </p>

                        {/* CTA Button Grid */}
                        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link
                                href="/products"
                                className="bg-medical-green hover:bg-medical-green-dark border border-transparent text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-medical-green/20"
                            >
                                EXPLORE MEDICAL CATALOG <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent hover:bg-white/5 border border-white/20 hover:border-white text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                REQUEST MANDATE PAPERS
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Protected Portrait Container */}
                    <div
                        className="lg:col-span-5 flex items-center justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0">
                        <div
                            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[941/1672] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
                            <img
                                src="/images/milad.png"
                                alt="Milad - Official Regional Representative"
                                className="w-full h-full object-cover object-center"
                                loading="eager"
                            />
                            {/* Subtle Ambient Vignette Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"/>
                        </div>
                    </div>

                </div>
            </section>

            {/* Official Partnership Validation Ribbon */}
            <section className="bg-white border-b border-slate-100 py-10 shadow-sm relative z-20">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-center font-sans text-[10px] font-bold tracking-widest text-medical-gray uppercase mb-6">
                        Authorized Distribution Pipeline
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">

                        {/* Partner 1: ChM */}
                        <a
                            href="https://chm.eu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 rounded-xl border border-slate-100 hover:border-medical-gold/30 bg-slate-50/50 hover:bg-white transition-all duration-300 group"
                        >
                            <div className="space-y-1">
                                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-medical-green transition-colors">ChM
                                    Implants</h3>
                                <p className="font-sans text-xs text-medical-gray">Orthopedic & Trauma Fixation Systems
                                    (chm.eu)</p>
                            </div>
                            <div className="text-slate-400 group-hover:text-medical-gold transition-colors text-sm">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </a>

                        {/* Partner 2: Chirmed */}
                        <a
                            href="https://chirmed.pl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 rounded-xl border border-slate-100 hover:border-medical-gold/30 bg-slate-50/50 hover:bg-white transition-all duration-300 group"
                        >
                            <div className="space-y-1">
                                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-medical-green transition-colors">Chirmed
                                    Instruments</h3>
                                <p className="font-sans text-xs text-medical-gray">Premium Carbon & Titanium Devices
                                    (chirmed.pl)</p>
                            </div>
                            <div className="text-slate-400 group-hover:text-medical-gold transition-colors text-sm">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* Strategic Trust Pillars */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
                        <h2 className="font-serif text-3xl font-bold tracking-wide text-slate-900">Why Procurement
                            Frameworks Trust Us</h2>
                        <div className="h-[2px] w-12 bg-medical-gold mx-auto mt-4"/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4">
                            <div className="text-2xl text-medical-green"><i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">100% Certified
                                Sourcing</h4>
                            <p className="font-sans text-xs text-medical-gray leading-relaxed">Direct factory allocation
                                avoiding parallel imports or unverified container lots. Fully compliant with EU MDR
                                directives.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4">
                            <div className="text-2xl text-medical-green"><i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">Clinical
                                Consultancy</h4>
                            <p className="font-sans text-xs text-medical-gray leading-relaxed">Milad manages custom
                                requests for rare configurations, customized plate architecture, and specific surgical
                                techniques.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4">
                            <div className="text-2xl text-medical-green"><i className="fa-solid fa-truck-ramp-box"></i>
                            </div>
                            <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">Optimized Supply
                                Chain</h4>
                            <p className="font-sans text-xs text-medical-gray leading-relaxed">Structured cross-docking
                                and immediate distribution access for urgent surgery centers and trauma hospitals.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}