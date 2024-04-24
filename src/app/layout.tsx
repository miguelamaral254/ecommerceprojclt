import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import Hydrate from "./Components/Hydrate";
import Carousel from "./Components/Carrousel";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Ecommerce Proj Senac",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(inter.className, "bg-gray-200")}>
          <Hydrate>
            <Navbar />
            <Carousel/>
            <main className=" h-screen p-16">{children}</main>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
