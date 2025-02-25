import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Forgione Plein Air & Studio",
  description: "The art of John Forgione.",
};

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>{children}</body>
    </html>
  );
}
