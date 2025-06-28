// src/app/page.tsx

// Corrected import paths to resolve compilation errors
import Navbar from "../components/ui/navbar";
import Hero from "../components/ui/hero";
import Features from "../components/ui/features";
import CTA from "../components/ui/cta";
import Footer from "../components/ui/footer";
import ContactForm from "../components/ui/contact-form"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <CTA /> {/* The CTA button will link to the #contact ID of the ContactForm section */}
      <ContactForm/>{/* <ContactForm /> <--- Render the ContactForm component here */}
      <Footer />
      
    </div>
  );
}
