import Image from 'next/image'
import { Award, TrendingUp, Users } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Certificações CEA e CPA-20',
    description: 'Qualificação reconhecida pelo mercado para assessorar e recomendar investimentos.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégia orientada a objetivos',
    description: 'Cada carteira é construída a partir do seu momento de vida e das suas metas.',
  },
  {
    icon: Users,
    title: 'Educação financeira de verdade',
    description: 'Reconhecida como Top Voice, transformo temas complexos em decisões simples.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="relative order-last md:order-first">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary shadow-lg">
            <Image
              src="/images/thais-about.jpeg"
              alt="Retrato de Thais Hossmann"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Sobre mim
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Uma trajetória dedicada a fazer o seu dinheiro trabalhar melhor
          </h2>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Atuo como assessora de investimentos ajudando pessoas a organizarem a vida
              financeira e a construírem patrimônio com estratégia. Meu trabalho começa por
              entender o seu momento: objetivos, prazos e o quanto você está disposto a arriscar.
            </p>
            <p>
              A partir daí, construímos juntos um plano claro e acompanhamos os resultados ao
              longo do tempo — sempre com transparência e sem promessas milagrosas. Também
              compartilho conteúdo de educação financeira para uma comunidade de mais de 33 mil
              pessoas.
            </p>
          </div>

          <ul className="mt-2 flex flex-col gap-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
