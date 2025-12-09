import { Navigation } from "@/components/ui/navigation"
import { OurStorySection } from "@/components/about/our-story-section"
import { OurMissionSection } from "@/components/about/our-mission-section"
import { OurValuesSection } from "@/components/about/our-values-section"
import { ContactSection } from "@/components/about/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <OurStorySection />
      <OurMissionSection />
      <OurValuesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
