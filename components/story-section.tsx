const stats = [
  { value: '+100', label: 'convites para entrevistas' },
  { value: '~40 mil', label: 'seguidores no LinkedIn' },
  { value: '3', label: 'formações: 2 graduações e 1 pós' },
  { value: 'MFO', label: 'fundadora do próprio' },
]

export function StorySection() {
  return (
    <section id="sobre" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Minha história
        </span>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
          Do banco ao meu próprio <span className="italic text-primary">Multi Family Office</span>
        </h2>

        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            No Santander, trabalhei com investimentos e fui embaixadora. Na XP Investimentos, na
            matriz, atendi clientes com patrimônio acima de R$ 3 milhões.
          </p>
          <p>
            Hoje sou fundadora do meu próprio Multi Family Office, onde cuido do patrimônio de
            famílias com atendimento próximo e estratégico.
          </p>
          <p>
            No caminho, construí no LinkedIn uma autoridade que me trouxe mais de 100 convites para
            entrevistas, em menos de um ano, dos maiores bancos do Brasil.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 rounded-2xl bg-secondary px-6 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-serif text-3xl text-primary md:text-4xl">{stat.value}</dd>
              <dt className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <blockquote className="mx-auto mt-12 max-w-xl text-pretty font-serif text-xl italic leading-relaxed text-foreground/85">
          “Criei as minhas mentorias para encurtar o seu caminho: tudo o que eu aprendi errando e
          acertando, organizado para você aplicar.”
        </blockquote>
      </div>
    </section>
  )
}
