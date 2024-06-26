import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioProvider from "@/lib/AudioProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Story",
  description: "Felix dan Pelisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen max-w-screen-md mx-auto bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 flex items-center justify-center p-5">
          <AudioProvider>{children}</AudioProvider>
        </main>
      </body>
    </html>
  );
}
