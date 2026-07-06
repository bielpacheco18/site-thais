import Image from 'next/image'
import { ArrowRight, ShieldCheck, TrendingUp, Globe, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/site'

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
            Sou Thais Hossmann, planejadora financeira certificada (CEA/CPA-20). Ajudo você a
            investir com clareza, otimizar sua carga tributária e estruturar seu patrimônio —
            inclusive com soluções internacionais e suporte jurídico especializado, quando necessário.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://lead-planner-pro.vercel.app/cadastro-rapido?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnViapw_LxtsxOvE7kda9Ioy64wvf2QU5HmzvSLuKhvJDm-x6cqyLnGoU-4KI_aem_ZVyQkSaUNscJ1amu0jS2kQ" target="_blank" rel="noopener noreferrer">
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
              alt="Thais Hossmann, planejadora financeira"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-card">
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
