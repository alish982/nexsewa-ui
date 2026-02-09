import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Thinkmart - Organic Grocery Store",
  description:
    "Your trusted source for fresh, organic groceries delivered right to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
