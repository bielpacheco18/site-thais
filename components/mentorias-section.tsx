import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { mentoriasWhatsappUrl } from '@/lib/site'

const cards = [
  {
    id: 'mentoria-carreira',
    eyebrow: 'Mentoria · 10 aulas',
    title: 'Mentoria de',
    accent: 'Carreira',
    description: 'Para quem quer entrar no mercado financeiro, se recolocar ou crescer onde já está.',
    items: [
      'LinkedIn que atrai recrutadores',
      'Networking, entrevistas e promoção',
      'Como crescer dentro do banco',
    ],
    cta: 'Quero crescer na carreira',
    href: mentoriasWhatsappUrl('Oi Thais! Quero saber mais sobre a Mentoria de Carreira.'),
    dark: false,
  },
  {
    id: 'mentoria-investimentos',
    eyebrow: 'Mentoria',
    title: 'Mentoria de',
    accent: 'Investimentos',
    description: 'Para quem quer organizar o dinheiro, planejar o futuro e aprender a investir do zero.',
    items: ['Organização financeira', 'Planejamento e reserva de emergência', 'Investimentos com estratégia'],
    cta: 'Quero investir melhor',
    href: mentoriasWhatsappUrl('Oi Thais! Quero saber mais sobre a Mentoria de Investimentos.'),
    dark: false,
  },
  {
    id: 'mentoria-posicionamento',
    eyebrow: 'Mentoria · Mercado financeiro',
    title: 'Posicionamento',
    accent: 'Digital',
    description: 'Para profissionais do mercado financeiro que querem captar bons clientes pelas redes.',
    items: ['LinkedIn, Instagram e TikTok', 'Vídeos e conteúdo que captam', 'Do seguidor ao cliente'],
    cta: 'Quero captar clientes',
    href: '#posicionamento',
    dark: true,
  },
]

export function MentoriasSection() {
  return (
    <section id="mentorias" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Escolha o seu caminho
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl tracking-tight text-foreground md:text-5xl">
            Como eu posso te <span className="italic text-primary">ajudar hoje?</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className={`flex flex-col rounded-3xl p-6 ${
                card.dark ? 'bg-foreground text-background' : 'bg-card text-card-foreground'
              }`}
            >
              <span
                className={`text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
                  card.dark ? 'text-background/60' : 'text-primary'
                }`}
              >
                {card.eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-2xl leading-tight">
                {card.title} <br />
                <span className={`italic ${card.dark ? 'text-background/70' : 'text-primary'}`}>
                  {card.accent}
                </span>
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${card.dark ? 'text-background/75' : 'text-muted-foreground'}`}>
                {card.description}
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                        card.dark ? 'bg-background/20' : 'bg-accent'
                      }`}
                    >
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={card.href}
                {...(card.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  card.dark ? 'bg-background text-foreground' : 'bg-foreground text-background'
                }`}
              >
                {card.cta}
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-balance text-center text-sm text-muted-foreground">
          Ainda em dúvida?{' '}
          <a
            href={mentoriasWhatsappUrl('Olá! Quero saber mais sobre as mentorias da Thais.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Entre em contato com a Flávia, minha sócia,
          </a>{' '}
          que ela vai te encaminhar todas as informações.
        </p>
      </div>
    </section>
  )
}
