import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-white border-t-4 border-medical-gold py-12">
            <div
                className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">

                {/* Brand Group */}
                <div>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <div className="text-xl text-medical-gold"><i className="fa-solid fa-hexagon-nodes"></i></div>
                        <div>
                            <h2 className="font-serif font-bold text-lg tracking-wide text-white">HEALMAN</h2>
                            <p className="text-[9px] tracking-widest text-slate-400 uppercase">medical supplies</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Channels */}
                <div className="flex flex-col gap-2 text-xs text-slate-400 font-medium">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                </div>

                {/* Direct Messaging Channels */}
                <div className="flex justify-center md:justify-start gap-6 text-slate-400 text-xl">
                    <a
                        href="https://wa.me/37493029052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-medical-gold transition-colors"
                        aria-label="Contact on WhatsApp"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a
                        href="https://t.me/+37493029052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-medical-gold transition-colors"
                        aria-label="Contact on Telegram"
                    >
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                </div>

                {/* Verified Corporate Contacts */}
                <div className="text-xs text-slate-400 space-y-2">
                    <p><i className="fa-solid fa-envelope mr-2 text-slate-500"></i> miladganji1993@gmail.com</p>
                    <p><i className="fa-solid fa-phone mr-2 text-slate-500"></i> +37493029052</p>
                    <p><i className="fa-solid fa-location-dot mr-2 text-slate-500"></i> Heratsi st. No 7, Yerevan,
                        Armenia</p>
                </div>

            </div>
        </footer>
    );
}