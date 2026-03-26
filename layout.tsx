import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikkiflix Empire 2026",
  description: "Executive Cinema & Casino Monolith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
