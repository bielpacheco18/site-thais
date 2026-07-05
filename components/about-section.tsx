import Image from 'next/image'
import { Award, Globe, TrendingUp, Users } from 'lucide-react'

const highlights = [
  {
    icon: Globe,
    title: 'Top Voice Global — Private Banking & Wealth Management 2026',
    description: 'Reconhecida entre os maiores influenciadores globais de finanças e gestão de patrimônio.',
  },
  {
    icon: Award,
    title: 'Top Voice in Finance Brasil 2025 · Favikon',
    description: 'Selecionada pela maior pesquisa do LinkedIn no Brasil na categoria finanças.',
  },
  {
    icon: TrendingUp,
    title: 'Certificações CEA e CPA-20',
    description: 'Qualificação reconhecida pelo mercado para assessorar e recomendar investimentos.',
  },
  {
    icon: Users,
    title: 'Comunidade de mais de 100 mil pessoas',
    description: 'Compartilho educação financeira transformando temas complexos em decisões simples.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="relative order-last md:order-first flex flex-col gap-4">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary shadow-lg">
            <Image
              src="/images/thais-about.jpeg"
              alt="Retrato de Thais Hossmann"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/favikon.png"
              alt="Ranking Favikon — Top Voices Worldwide LinkedIn"
              width={600}
              height={700}
              className="w-full"
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
              Minha trajetória no mercado financeiro passou por duas das maiores instituições do
              Brasil — o Santander, onde atuei na área de gestão patrimonial e fui embaixadora da
              marca, e a XP Investimentos, onde estou hoje como assessora de investimentos.
            </p>
            <p>
              Ao longo desse caminho, ajudei pessoas a organizarem a vida financeira e a
              construírem patrimônio com estratégia. Meu trabalho começa por entender o seu
              momento: objetivos, prazos e o quanto você está disposto a arriscar.
            </p>
            <p>
              A partir daí, construímos juntos um plano claro e acompanhamos os resultados ao
              longo do tempo — sempre com transparência e sem promessas milagrosas. Também
              compartilho conteúdo de educação financeira para uma comunidade de mais de 100 mil
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
