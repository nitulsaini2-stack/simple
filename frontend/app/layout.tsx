import "./globals.css";
import Navbar from "@/components/Navbar";
import CarouselBanner from "@/components/CarouselBenner";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <CarouselBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}