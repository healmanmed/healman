import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
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
                        Bridging International Medical Precision
                    </h1>

                    <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                        Healman Healthcare, under the direct representation of <strong
                        className="text-white font-semibold">Milad Ganji</strong>, is the official authorized
                        representative for <span className="text-medical-gold font-medium">ChM</span> and <span
                        className="text-medical-gold font-medium">Chirmed</span>. We deliver premium, certified trauma
                        fixation systems and ultra-durable surgical instrumentation directly to leading healthcare
                        institutions.
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

                {/* Right Column: Responsive Portrait Section */}
                <div
                    className="lg:col-span-5 flex items-center justify-center lg:justify-end animate-fade-in mt-10 lg:mt-0 relative">

                    {/* Ambient Glow Backdrop */}
                    <div
                        className="absolute -inset-2 bg-gradient-to-r from-medical-green/20 via-medical-gold/20 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none"/>

                    {/* Portrait Container */}
                    <div
                        className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] lg:aspect-[941/1672] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-950 group transition-all duration-300">

                        <Image
                            src="/images/milad.PNG"
                            alt="Milad Ganji - Official Regional Representative"
                            fill
                            priority
                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                            className="object-cover object-top lg:object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Bottom Vignette for Overlay Contrast */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 lg:opacity-70 pointer-events-none"/>

                        {/* Glassmorphism Representative Tag */}
                        <div
                            className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between pointer-events-none">
                            <div>
                                <p className="font-serif text-sm font-bold text-white tracking-wide">
                                    Milad Ganji
                                </p>
                                <p className="font-sans text-[10px] text-medical-gold font-medium uppercase tracking-wider">
                                    Regional Representative
                                </p>
                            </div>
                            <div
                                className="w-8 h-8 rounded-full bg-medical-green/20 border border-medical-green/40 flex items-center justify-center text-medical-green text-xs">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}