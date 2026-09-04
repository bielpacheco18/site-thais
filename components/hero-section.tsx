import Image from 'next/image'
import { ArrowRight, ShieldCheck, TrendingUp, Globe, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Rentabilidade + Eficiência Fiscal',
    description: 'Estratégia de investimento que também protege seu IR.',
  },
  {
    icon: Globe,
    title: 'Patrimônio Internacional',
    description: 'Diversificação e estruturação fora do Brasil.',
  },
  {
    icon: Scale,
    title: 'Suporte Jurídico',
    description: 'Atuação junto a especialistas em planejamento sucessório e tributário.',
  },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/thais-hero.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="max-w-2xl flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
            <ShieldCheck className="size-3.5 text-white/70" />
            CEA · CPA-20
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Mais rentabilidade. Menos imposto. Uma estratégia sob medida para o seu patrimônio.
          </h1>

          <p className="max-w-lg text-pretty text-base leading-relaxed text-white/75 md:text-lg">
            Sou Thais Hossmann, planejadora financeira certificada (CEA/CPA-20). Ajudo você a
            investir com clareza, otimizar sua carga tributária e estruturar seu patrimônio —
            inclusive com soluções internacionais e suporte jurídico especializado, quando necessário.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.leadFormUrl} target="_blank" rel="noopener noreferrer">
                Agendar conversa
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
            <div>
              <dt className="sr-only">Seguidores</dt>
              <dd className="font-serif text-2xl font-semibold text-white">+33 mil</dd>
              <p className="text-xs text-white/60">seguidores no LinkedIn</p>
            </div>
            <div>
              <dt className="sr-only">Reconhecimento</dt>
              <dd className="font-serif text-2xl font-semibold text-white">Top Voice</dd>
              <p className="text-xs text-white/60">em finanças</p>
            </div>
            <div>
              <dt className="sr-only">Certificações</dt>
              <dd className="font-serif text-2xl font-semibold text-white">CEA</dd>
              <p className="text-xs text-white/60">e CPA-20</p>
            </div>
          </dl>
        </div>
      </div>

      {/* Pillars */}
      <div className="relative z-10 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 md:px-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <pillar.icon className="size-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">{pillar.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
