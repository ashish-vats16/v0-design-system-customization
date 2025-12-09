import { Navigation } from "@/components/ui/navigation"
import { ProductHero } from "@/components/product/product-hero"
import { EnginesSection } from "@/components/product/engines-section"
import { HowItWorksSection } from "@/components/product/how-it-works-section"
import { CapabilitiesSection } from "@/components/product/capabilities-section"
import { ProductCTA } from "@/components/product/product-cta"
import { FooterSection } from "@/components/sections/footer-section"

export const metadata = {
  title: "Product | LuminaCore AI",
  description:
    "Everything you need to turn one video into many outcomes. Campaign Engine and Summarization Engine in one powerful workflow.",
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProductHero />
      <EnginesSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <ProductCTA />
      <FooterSection />
    </main>
  )
}
