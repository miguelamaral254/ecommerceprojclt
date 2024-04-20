import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Ecommerce Proj Senac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-slate-700 h-screen p-16">{children}</main>
      </body>
    </html>
  );
}
