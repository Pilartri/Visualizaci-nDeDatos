import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//cambiar la tipografia
const inter = Inter({ subsets: ["latin"] });
//cambiar título y descripción para la busqueda en google
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
