import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RE CONECTA | Rebeca Aguilar - Health coach",
  description:
    "Transforma tu bienestar con la guía experta de una coach de salud holística. Descubre equilibrio y vitalidad a través de enfoques personalizados y sostenibles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
