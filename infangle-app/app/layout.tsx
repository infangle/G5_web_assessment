import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G5_web_assessment",
  description: "Created for assessment purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Include the Header component here */}
        <main>{children}</main> {/* Main content of each page */}
        <Footer /> {/* Include the Footer component here */}
      </body>
    </html>
  );
}
