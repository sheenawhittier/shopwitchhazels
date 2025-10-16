import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "Witch Hazel’s Aroma Balm",
    description: "Modern witchy, organic calm. Small-batch balm crafted by sisters.",
    openGraph: {
        title: "Witch Hazel’s Aroma Balm",
        description: "Small-batch botanical balm with witch hazel, calendula, and blue tansy.",
        url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
        siteName: "Witch Hazel’s Aroma Balm",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
        <body className="font-sans [--tw-prose-headings-font:var(--font-cormorant)]">
        <style>{`
          .font-serif { font-family: var(--font-cormorant), ui-serif, Georgia, serif; }
          .font-sans { font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
        `}</style>
        {children}
        </body>
        </html>
    );
}

