import type { Metadata } from "next";
import "./globals.css";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Hoàng ❤️ Quỳnh - Our Love Story",
  description:
    "A beautiful love story between Nguyễn Hoàng and Quỳnh Phạm since 10.04.2021",
  keywords: ["love story", "Simee Café", "travel", "couple"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
