import "./globals.css";
import { Work_Sans } from "next/font/google";
import type { Viewport } from "next";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}