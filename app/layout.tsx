import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Math AI",
  description: "Math AI web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
