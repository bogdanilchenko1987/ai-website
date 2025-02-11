import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div
          className=" bg-cover bg-center h-max"
          style={{
            backgroundImage:
              " linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.4)), url('img/3.jpg')",
          }}
        >
          <div className="container mx-auto px-2">
            <Header />

            <main className="flex-grow">
              <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
