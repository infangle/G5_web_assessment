import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();
  
  // Determine whether to render the Header and Footer based on the route
  const shouldRenderHeaderFooter = pathname !== '/Login' && pathname !== '/SignUp';

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldRenderHeaderFooter && <Header />} {/* Conditionally include the Header component */}
        <main>{children}</main> {/* Main content of each page */}
        {shouldRenderHeaderFooter && <Footer />} {/* Conditionally include the Footer component */}
      </body>
    </html>
  );
}
