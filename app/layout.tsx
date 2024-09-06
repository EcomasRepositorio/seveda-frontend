import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Index";
import Footer from "@/components/footer/Index";
import Sidebar from "@/components/sidebar/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coporación - SEVEDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="logo/layout.jpg" />
      </head>
      <body className={` ${inter.className}`}>
        <Sidebar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
