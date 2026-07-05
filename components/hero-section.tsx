import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/site'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 md:pt-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            CEA · CPA-20
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Seu patrimônio merece uma estratégia sob medida
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Sou Thais Hossmann, assessora de investimentos. Ajudo você a investir
            com clareza, propósito e uma estratégia alinhada aos seus objetivos de vida.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappLink('Olá, Thais! Gostaria de agendar uma conversa sobre meus investimentos.')} target="_blank" rel="noopener noreferrer">
                Agendar conversa
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="sr-only">Seguidores</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">+33 mil</dd>
              <p className="text-xs text-muted-foreground">seguidores no LinkedIn</p>
            </div>
            <div>
              <dt className="sr-only">Reconhecimento</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">Top Voice</dd>
              <p className="text-xs text-muted-foreground">em finanças</p>
            </div>
            <div>
              <dt className="sr-only">Certificações</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">CEA</dd>
              <p className="text-xs text-muted-foreground">e CPA-20</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary shadow-xl">
            <Image
              src="/images/thais-hero.jpeg"
              alt="Thais Hossmann, assessora de investimentos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
