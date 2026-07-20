import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative w-full bg-slate-900 text-white overflow-hidden min-h-[calc(100vh-70px)] flex items-center">
            {/* Structural Decorative Grid Layer */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"/>

            <div
                className="mx-auto max-w-7xl w-full px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Column: Premium Corporate Copy (7 Columns on Desktop) */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-green/20 border border-medical-green text-xs font-semibold tracking-widest text-medical-gold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-medical-gold animate-pulse"/>
                        Official Regional Representative
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wide leading-[1.15] text-white">
                        Precision Hardware. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-gold to-white">
              Elevated Clinical Trust.
            </span>
                    </h1>

                    <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Connecting Armenia's surgical environments, healthcare professionals, and distributors with
                        factory-direct International implant lines from ChM and precision instrumentation from Chirmed.
                    </p>

                    {/* Action Callouts */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="/products"
                            className="w-full sm:w-auto bg-medical-green hover:bg-medical-green-dark text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg shadow-lg shadow-medical-green/10 text-center transition-all transform hover:-translate-y-0.5"
                        >
                            Explore Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto border border-slate-700 hover:border-medical-gold text-slate-300 hover:text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg text-center transition-colors bg-slate-900/50 backdrop-blur-sm"
                        >
                            Request Consultation
                        </Link>
                    </div>
                </div>

                {/* Right Column: Custom Portrait Image Frame (5 Columns on Desktop) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                    <div className="relative w-full max-w-[360px] lg:max-w-[400px] group animate-fade-in">

                        {/* Background Aesthetic Shadow/Border Effect */}
                        <div
                            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-medical-gold/30 to-medical-green/20 opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-300"/>

                        {/* Structural Gold Accent Bracket */}
                        <div
                            className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-medical-gold rounded-bl-xl pointer-events-none hidden sm:block"/>
                        <div
                            className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-medical-gold rounded-tr-xl pointer-events-none hidden sm:block"/>

                        {/* Main Image Masking Container */}
                        <div
                            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl aspect-[941/1672] w-full">
                            <img
                                src="/images/milad.png" // Replace with your actual file path
                                alt="Healman Medical Systems Installation"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                loading="eager"
                            />

                            {/* Subtle Dark Bottom Vignette Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"/>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}