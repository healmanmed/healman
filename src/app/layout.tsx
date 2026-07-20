import type {Metadata} from "next";
import {Inter, Playfair_Display} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Configure web fonts with custom CSS variable mapping
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair"
});

export const metadata: Metadata = {
    title: "Healmed Medical Supplies",
    description: "High-end medical equipment and trauma solutions.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        {/* Head section for globally pulling in FontAwesome iconography components */}
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </head>
        <body className="antialiased min-h-screen flex flex-col bg-white">
        <Header/>
        <main className="flex-grow">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}