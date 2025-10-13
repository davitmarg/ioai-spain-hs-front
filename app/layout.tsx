import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "IOAI",
    description: "IOAI Spain Official Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="">{children}</body>
        </html>
    );
}
