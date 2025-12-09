import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { CreatorsSection } from "@/components/solutions/creators-section"
import { MarketingSection } from "@/components/solutions/marketing-section"
import { TrainingSection } from "@/components/solutions/training-section"
import { FutureVisionSection } from "@/components/solutions/future-vision-section"
import { SolutionsCTA } from "@/components/solutions/solutions-cta"
import { Navigation } from "@/components/ui/navigation"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SolutionsHero />
      <CreatorsSection />
      <MarketingSection />
      <TrainingSection />
      <FutureVisionSection />
      <SolutionsCTA />
    </main>
  )
}
