import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Poppins, Quicksand } from "next/font/google";

export const metadata = {
  title: "Thinkmart - Organic Grocery Store",
  description: "Your trusted source for fresh items.",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${quicksand.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
