import { Receipt, LineChart, ShieldCheck, GraduationCap, Landmark, Compass } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Planejamento financeiro',
    description: 'Diagnóstico completo da sua vida financeira e um plano de ação para cada objetivo.',
  },
  {
    icon: LineChart,
    title: 'Alocação de investimentos',
    description: 'Carteiras diversificadas e equilibradas de acordo com o seu perfil de risco.',
  },
  {
    icon: Receipt,
    title: 'Otimização de Imposto de Renda',
    description: 'Junto ao time jurídico, te damos todo o suporte para ganhar — e não perder — com o Imposto de Renda.',
  },
  {
    icon: Landmark,
    title: 'Previdência e aposentadoria',
    description: 'Planejamento de longo prazo para você viver o futuro com tranquilidade.',
  },
  {
    icon: GraduationCap,
    title: 'Educação financeira',
    description: 'Entenda cada decisão de investimento com clareza e autonomia.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompanhamento contínuo',
    description: 'Revisões periódicas da carteira e ajustes conforme a sua vida muda.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Serviços
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Como posso ajudar você a investir melhor
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Um acompanhamento próximo e personalizado, do primeiro passo à gestão contínua do seu patrimônio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <service.icon className="size-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
