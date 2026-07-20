import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="w-full bg-medical-light text-slate-900">

            {/* Premium Minimalist Hero Section */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                {/* Background Visual Accent */}
                <div
                    className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-medical-gold-light to-transparent opacity-20 pointer-events-none"/>

                <div className="mx-auto max-w-7xl w-full px-6 relative z-10">
          <span
              className="font-sans text-[10px] font-bold tracking-widest text-medical-gold uppercase block mb-3 animate-fade-in">
            Authorized Regional Supply Context
          </span>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide max-w-3xl leading-tight animate-fade-in">
                        Your Trusted Medical Products Partner in Armenia
                    </h1>
                </div>
            </section>

            {/* Corporate Manifesto & Partnership Groundwork */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Main Statement Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-wide">
                            Connecting High-Tier International Engineering with Regional Clinical Mandates
                        </h2>
                        <p className="font-sans text-sm md:text-base text-medical-gray leading-relaxed">
                            We connect high-quality medical products with healthcare professionals, distributors, and
                            medical tourists in Armenia. As the official sales representative of Healman Healthcare, we are
                            committed to delivering reliable products and professional support to our partners.
                        </p>
                        <p className="font-sans text-sm text-medical-gray leading-relaxed">
                            Under the direct portfolio supervision of Milad, we optimize medical device procurement
                            logistics. We eliminate parallel import vulnerabilities, ensuring hospitals gain access to
                            factory-direct orthopedic configurations and surgical instrumentation sets.
                        </p>
                    </div>

                    {/* Visual Tagline Box Callout */}
                    <div
                        className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center space-y-4 shadow-sm relative">
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-medical-gold rounded-b"/>
                        <div className="text-3xl text-medical-green pt-2">
                            <i className="fa-solid fa-notes-medical"></i>
                        </div>

                        {/* Tagline Block */}
                        <div
                            className="font-serif text-lg font-bold tracking-widest text-slate-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 uppercase">
                            <span>Quality</span>
                            <span className="hidden sm:inline text-medical-gold text-xs">•</span>
                            <span>Trust</span>
                            <span className="hidden sm:inline text-medical-gold text-xs">•</span>
                            <span>Healthcare</span>
                        </div>

                        <p className="font-sans text-[11px] text-medical-gray max-w-xs mx-auto leading-relaxed">
                            The immutable baseline standard driving our daily supply metrics, regulatory strictness, and
                            institutional distribution paths throughout the Armenian territory.
                        </p>
                    </div>

                </div>
            </section>

            {/* Strategic Target Demographics Ecosystem */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-slate-900">
                            Ecosystem Specializations
                        </h3>
                        <p className="font-sans text-xs text-medical-gray">
                            Tailoring high-performance supply mechanics to address distinct sector variables.
                        </p>
                        <div className="h-[2px] w-12 bg-medical-gold mx-auto mt-4"/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Sector 1: Medical Professionals */}
                        <div
                            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div
                                    className="w-10 h-10 rounded-lg bg-medical-light border border-slate-100 flex items-center justify-center text-medical-green text-lg">
                                    <i className="fa-solid fa-user-doctor"></i>
                                </div>
                                <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">
                                    Healthcare Professionals
                                </h4>
                                <p className="font-sans text-xs text-medical-gray leading-relaxed">
                                    Supplying operating clinics, trauma centers, and surgical specialists with verified
                                    medical hardware. We guarantee flawless structural precision, supporting high
                                    patient outcome metrics.
                                </p>
                            </div>
                        </div>

                        {/* Sector 2: B2B Channels */}
                        <div
                            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div
                                    className="w-10 h-10 rounded-lg bg-medical-light border border-slate-100 flex items-center justify-center text-medical-green text-lg">
                                    <i className="fa-solid fa-network-wired"></i>
                                </div>
                                <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">
                                    Distributors & Networks
                                </h4>
                                <p className="font-sans text-xs text-medical-gray leading-relaxed">
                                    Structuring robust warehouse allocation options, clear bulk-tier pricing
                                    architectures, and steady factory custom pipeline clearances to eliminate
                                    distribution friction points.
                                </p>
                            </div>
                        </div>

                        {/* Sector 3: Cross Border Logistics */}
                        <div
                            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div
                                    className="w-10 h-10 rounded-lg bg-medical-light border border-slate-100 flex items-center justify-center text-medical-green text-lg">
                                    <i className="fa-solid fa-plane-departure"></i>
                                </div>
                                <h4 className="font-sans font-bold text-sm tracking-wide text-slate-900">
                                    Medical Tourists
                                </h4>
                                <p className="font-sans text-xs text-medical-gray leading-relaxed">
                                    Ensuring international patience criteria traveling to Armenia for specialized
                                    clinical intervention are treated with globally recognized, fully certified medical
                                    hardware.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Logistical Proximity & Regional Action */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
                        Central Coordination Hub
                    </h3>
                    <p className="font-sans text-sm text-medical-gray leading-relaxed max-w-2xl mx-auto">
                        Operating from our central corporate headquarters, we maintain direct pipeline accessibility
                        across all key urban networks. Our location supports immediate institutional support protocols,
                        product display viewings, and responsive emergency trauma equipment distributions.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-medical-green hover:bg-medical-green-dark text-white font-sans text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-lg shadow-md transition-colors"
                        >
                            Initiate Partnership Framework
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}