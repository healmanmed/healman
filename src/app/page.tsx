import Hero from '../components/Hero'

export default function HomePage() {
    return (
        <div className="w-full flex flex-col bg-medical-light">

            <Hero/>

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