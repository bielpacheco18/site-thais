import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-accent via-secondary to-accent/60">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-4 pt-14 md:grid-cols-2 md:px-8 md:pt-20">
        <div className="flex flex-col gap-6 pb-14 md:pb-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
            Finanças · Investimentos · Carreira
          </span>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Prazer, eu sou a <span className="italic text-primary">Thais Hossmann.</span>
          </h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            Ajudo pessoas a crescer no mercado financeiro e a fazer o dinheiro trabalhar por elas,
            com método, estratégia e acompanhamento de perto.
          </p>
          <a
            href="#mentorias"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Conhecer as mentorias
            <ArrowDown className="size-4" />
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm self-end overflow-hidden rounded-t-3xl md:max-w-md">
          <Image
            src="/images/thais-hero.jpg"
            alt="Thais Hossmann"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
