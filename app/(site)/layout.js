import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
