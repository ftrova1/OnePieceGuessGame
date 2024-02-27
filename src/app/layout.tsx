import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: "../../public/fonts/op_font.ttf",
  variable: "--font-one-piece",
});

export const metadata: Metadata = {
  title: "Guess Who",
  description: "Guess Who - Anime",
};

export const backGroundImage = {
  background:
    "url(https://images5.alphacoders.com/132/1329624.png) no-repeat 50% fixed",
  backgroundSize: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={backGroundImage}>
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
