import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Red Digital Solutions LLC | IT Consulting & Digital Solutions",
  description:
    "Code Red Digital Solutions LLC provides IT consulting, custom software development, cloud solutions, data analytics, and AI-powered digital solutions for businesses.",
  referrer: "no-referrer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
