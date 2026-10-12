import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Taylor Hutchens | Senior Full-Stack Software Engineer";
const description = "Taylor Hutchens is a senior full-stack software engineer in Helena, MT. Resume and side projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://taylordouglashutchens.com"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: "Taylor Hutchens", type: "website" },
  twitter: { card: "summary_large_image", title, description },
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
