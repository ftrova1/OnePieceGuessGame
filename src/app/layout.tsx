import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: "../../public/fonts/one_piece_font.ttf",
  variable: "--font-one-piece",
});

export const metadata: Metadata = {
  title: "Guess Who",
  description: "Guess Who - Anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen antialiased grainy",
          `${font.variable} font-sans`,
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
