export default function ContactPage() {
    return (
        <div>
            {/* Hero Banner Component */}
            <section
                className="relative py-24 bg-cover bg-center text-white"
                style={{backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.85), rgba(21, 21, 21, 0.85)), url('/images/contact-banner.jpg')`}}
            >
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h1 className="font-serif text-4xl font-bold tracking-wide md:text-5xl mb-4">Contact Us</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Have questions about our medical supplies, orders, or partner distribution mandates? Our team is
                        ready to assist.
                    </p>
                </div>
            </section>

            {/* Interactive Forms & Info Block Grid */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Corporate Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold tracking-wide text-slate-900 mb-4">Get In
                                Touch</h2>
                            <p className="text-medical-gray text-sm leading-relaxed">
                                Whether you are looking to request a product sheet, verify distribution certificates, or
                                arrange a procurement consultation, use the coordinates below to reach our office.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* HQ Address Card */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <div className="text-medical-green text-lg mt-1"><i
                                    className="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h4 className="font-sans font-bold text-sm tracking-wide text-slate-800">Main
                                        Office</h4>
                                    <p className="text-sm text-medical-gray mt-1 leading-relaxed">
                                        Heratsi st. No 7,<br/>Yerevan, Armenia
                                    </p>
                                </div>
                            </div>

                            {/* Direct Phone Support Card */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <div className="text-medical-green text-lg mt-1"><i className="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-sm tracking-wide text-slate-800">Phone
                                        Logistics</h4>
                                    <p className="text-sm text-medical-gray mt-1 leading-relaxed">
                                        +37493029052<br/>Mon-Fri, 9am - 6pm (AMT)
                                    </p>
                                </div>
                            </div>

                            {/* Mail Channels Card */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <div className="text-medical-green text-lg mt-1"><i
                                    className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h4 className="font-sans font-bold text-sm tracking-wide text-slate-800">Email
                                        Inquiries</h4>
                                    <p className="text-sm text-medical-gray mt-1 leading-relaxed">
                                        Miladganji@healmed.am
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Secure Form Layout */}
                    <div
                        className="lg:col-span-7 relative bg-white px-8 py-10 md:p-12 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
                        {/* Top Border Branding Gradient */}
                        <div
                            className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-medical-gold to-medical-green"/>

                        <div className="mb-8">
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">Send us a message</h3>
                            <p className="text-medical-gray text-sm">Our regional representative office typically
                                responds within 24 business hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name"
                                           className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase">Full
                                        Name</label>
                                    <input type="text" id="name" name="name" placeholder="Dr. John Doe" required
                                           className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-medical-light focus:bg-white focus:outline-none focus:border-medical-gold focus:ring-4 focus:ring-medical-gold-light transition-all duration-200"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email"
                                           className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase">Email
                                        Address</label>
                                    <input type="email" id="email" name="email" placeholder="john.doe@hospital.com"
                                           required
                                           className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-medical-light focus:bg-white focus:outline-none focus:border-medical-gold focus:ring-4 focus:ring-medical-gold-light transition-all duration-200"/>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject"
                                       className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase">Subject</label>
                                <input type="text" id="subject" name="subject"
                                       placeholder="ChM Implants / Chirmed Procurement Inquiry" required
                                       className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-medical-light focus:bg-white focus:outline-none focus:border-medical-gold focus:ring-4 focus:ring-medical-gold-light transition-all duration-200"/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message"
                                       className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase">Message</label>
                                <textarea id="message" name="message" rows={5}
                                          placeholder="Specify system requirements or logistics parameters..." required
                                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm bg-medical-light focus:bg-white focus:outline-none focus:border-medical-gold focus:ring-4 focus:ring-medical-gold-light transition-all duration-200 resize-none"/>
                            </div>

                            <button type="submit"
                                    className="w-full bg-medical-green hover:bg-medical-green-dark text-white font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-lg flex justify-center items-center gap-3 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-medical-green/20"
                            >
                                Send Message <i className="fa-solid fa-paper-plane text-[10px]"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}