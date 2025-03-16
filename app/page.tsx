import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BackgroundSection } from "@/components/background-section"
import { IntegrationSection } from "@/components/integration-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ValidationSection } from "@/components/validation-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DocumentScanningSection } from "@/components/document-scanning-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <section id="latar-belakang">
          <BackgroundSection />
        </section>
        <section id="integrasi">
          <IntegrationSection />
        </section>
        <section id="cara-kerja">
          <HowItWorksSection />
        </section>
        <section id="validasi">
          <ValidationSection />
        </section>
        <section id="testimoni">
          <TestimonialsSection />
        </section>
        <section id="scan-dokumen">
          <DocumentScanningSection />
        </section>
        <section id="kontak">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

