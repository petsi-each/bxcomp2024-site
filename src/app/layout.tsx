import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";


const bubblegum = Bubblegum_Sans(
  {
    subsets: ["latin"],
    weight: "400"
  }
);

export const metadata: Metadata = {
  title: "BXCOMP 2024",
  description: "O BXCOMP é a competição de programação para calouros da EACH-USP organizada anualmente pelo PET-SI. Em 2024, o BXCOMP apresenta sua 14ª edição!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt">
      <body className={bubblegum.className}>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
