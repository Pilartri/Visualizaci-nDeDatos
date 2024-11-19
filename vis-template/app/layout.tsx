import type { Metadata } from "next";
import Image from 'next/image';
import { Raleway } from "next/font/google";
import "./globals.css";
//cambiar la tipografia
const inter = Raleway ({ subsets: ["latin"] });
//cambiar título y descripción para la busqueda en google
export const metadata: Metadata = {
  title: "Participar",
  description: "La promoción del respsto y la igualdad",
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
