import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StorySection } from '@/components/story-section'
import { MentoriasSection } from '@/components/mentorias-section'
import { PosicionamentoSection } from '@/components/posicionamento-section'
import { PromoBar } from '@/components/promo-bar'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <StorySection />
      <MentoriasSection />
      <PosicionamentoSection />
      <PromoBar />
      <SiteFooter />
    </main>
  )
}
