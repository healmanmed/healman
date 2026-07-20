"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        {name: "HOME", href: "/"},
        {name: "ABOUT US", href: "/about"},
        {name: "PRODUCTS", href: "/products"},
        {name: "CONTACT", href: "/contact"},
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Brand Identity / Logo Group */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="text-2xl text-medical-green transition-transform group-hover:rotate-12">
                        <i className="fa-solid fa-hexagon-nodes"></i>
                    </div>
                    <div className="leading-none">
                        <h1 className="font-serif text-xl font-bold tracking-wide text-slate-900">HEALMED</h1>
                        <p className="font-sans text-[10px] tracking-widest text-medical-gray uppercase">medical
                            supplies</p>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`relative font-sans text-xs font-semibold tracking-widest transition-colors duration-200 pb-1
                      ${isActive ? "text-medical-green" : "text-slate-600 hover:text-medical-green"}`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span
                                                className="absolute bottom-0 left-0 h-[2px] w-full bg-medical-gold animate-fade-in"/>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile Trigger Switch */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-xl text-slate-800 p-2 focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Context Dropdown Overlay */}
            {isOpen && (
                <nav
                    className="lg:hidden w-full border-t border-slate-100 bg-medical-dark text-white px-6 py-6 animate-fade-in">
                    <ul className="flex flex-col gap-5 text-center">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block font-sans text-xs font-bold tracking-widest py-2 
                    ${pathname === item.href ? "text-medical-gold" : "text-slate-300 hover:text-white"}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}