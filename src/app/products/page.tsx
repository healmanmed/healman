import Link from "next/link";

export default function ProductsPage() {
    const divisions = [
        {
            title: "Orthopedics, Trauma & Rehabilitation",
            description: "State-of-the-art internal fixation implants, rigid structural supports, active continuous motion systems, and custom podiatric solutions.",
            brands: [
                {name: "ChM Implants", url: "https://chm.eu", detail: "Trauma & Orthopedic Fixation"},
                {name: "Medical Brace", url: "https://medicalbrace.gr/en/", detail: "Orthopedic Braces & Splints"},
                {name: "Rimec", url: "https://rimec.it/", detail: "Continuous Passive Motion (CPM) Tech"},
                {name: "Dr. Sursil", url: "https://drsursil.ru/", detail: "Orthopedic Footwear & Insoles"}
            ],
            features: ["MDR Compliant Implants", "Post-Op Passive Motion", "Anatomical Stabilization"]
        },
        {
            title: "Neurosurgery & Advanced Operating Theatre",
            description: "Premium surgical instrumentation, clean-air personal protection systems, and temperature-controlled patient management technology.",
            brands: [
                {name: "Stryker NSE", url: "https://www.stryker.com/us/en/nse.html", detail: "Neurosurgical Equipment"},
                {name: "Chirmed", url: "https://chirmed.pl", detail: "Precision Instruments & Tools"},
                {name: "THI GmbH", url: "https://www.thigmbh.at/products/#", detail: "Surgical Protection Helmets"},
                {name: "Zepu Medical", url: "https://en.zepumed.com/product/23/", detail: "Patient Warming Systems"}
            ],
            features: ["Titanium Instrument Arrays", "OR Helmet Filtration", "Active Hyperthermia Systems"]
        },
        {
            title: "Gastroenterology & Endoscopic Accessories",
            description: "Highly specialized clinical consumables and diagnostics interfaces designed for delicate endoscopic interventions.",
            brands: [
                {
                    name: "ZKSK Medical",
                    url: "https://www.zkskmedical.com/",
                    detail: "Endoscopic Accessories & Wound Care"
                }
            ],
            features: ["Hemostasis Devices", "Biopsy Instrumentation", "Advanced Wound Drainage"]
        },
        {
            title: "Clinical Consumables & General Disposables",
            description: "High-volume hospital supplies, safety consumables, and institutional single-use products guaranteeing continuous workflow.",
            brands: [
                {
                    name: "Perlong Medical",
                    url: "https://www.perlong-china.com/Disposables-pl545931.html",
                    detail: "Medical Consumables & Lab Ware"
                }
            ],
            features: ["Sterile Consumables", "Anesthesia Lab Packs", "Fluid Administration Sets"]
        }
    ];

    return (
        <div className="w-full bg-medical-light text-slate-900">

            {/* Structural Minimalist Banner */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-medical-gold-light to-transparent opacity-20 pointer-events-none"/>
                <div className="mx-auto max-w-7xl w-full px-6 relative z-10">
          <span
              className="font-sans text-[10px] font-bold tracking-widest text-medical-gold uppercase block mb-3 animate-fade-in">
            Procurement Catalog Ecosystem
          </span>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide leading-tight max-w-3xl animate-fade-in">
                        Authorized Medical Divisions & Partner Brands
                    </h1>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-xl mt-3 leading-relaxed">
                        Healman Healthcare Supplies provides direct factory pipelines to certified European and
                        international hardware pools, managed under strict clinical validation guidelines.
                    </p>
                </div>
            </section>

            {/* Main Specialized Distribution Grid */}
            <section className="py-20 mx-auto max-w-7xl px-6">
                <div className="space-y-16">
                    {divisions.map((division, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Division Metadata Accent */}
                            <div className="absolute top-0 left-8 w-12 h-[3px] bg-medical-green"/>

                            {/* Left Box: Division Context */}
                            <div className="lg:col-span-5 space-y-4">
                <span
                    className="font-sans text-[10px] font-bold tracking-wider text-medical-gold bg-medical-gold-light/40 px-3 py-1 rounded-full w-fit block">
                  DIVISION 0{index + 1}
                </span>
                                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
                                    {division.title}
                                </h2>
                                <p className="font-sans text-xs leading-relaxed text-medical-gray">
                                    {division.description}
                                </p>

                                {/* Visual Highlights Tag Pill */}
                                <div className="pt-2 flex flex-wrap gap-2">
                                    {division.features.map((feat, fIdx) => (
                                        <span key={fIdx}
                                              className="text-[10px] font-medium font-sans px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-slate-600">
                      ✓ {feat}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Box: Integrated Distribution Chains */}
                            <div
                                className="lg:col-span-7 space-y-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0">
                                <h4 className="font-sans text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                                    Certified Supply Assets
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {division.brands.map((brand, bIdx) => (
                                        <a
                                            key={bIdx}
                                            href={brand.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block p-4 rounded-xl border border-slate-100 hover:border-medical-gold/40 bg-slate-50/50 hover:bg-white transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                        <span
                            className="font-serif font-bold text-sm text-slate-800 group-hover:text-medical-green transition-colors">
                          {brand.name}
                        </span>
                                                <span
                                                    className="text-slate-400 group-hover:text-medical-gold transition-colors text-xs">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </span>
                                            </div>
                                            <p className="font-sans text-[11px] text-medical-gray leading-none">
                                                {brand.detail}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Structured Institutional Inquiries Section */}
            <section className="bg-slate-50 border-t border-slate-100 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
                    <div
                        className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-medical-green text-lg mx-auto">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-wide">
                        Request Comprehensive Specification Sheets
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-medical-gray leading-relaxed max-w-2xl mx-auto">
                        Need localized price models, custom packaging specifications, or cross-border logistics
                        guarantees for hospital networks? Connect directly with our Yerevan administrative office.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-block bg-medical-green hover:bg-medical-green-dark text-white font-sans text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            Request Pricing & Mandates
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}