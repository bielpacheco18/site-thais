import type { Metadata } from 'next'
import { ArrowRight, Check, Plus } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentoria de Posicionamento Digital | Thais Hossmann',
  description:
    'Mentoria individual para profissionais do mercado financeiro transformarem LinkedIn, Instagram e TikTok em uma fonte constante de bons clientes.',
}

const ctaHref = whatsappUrl('Oi Thais! Quero saber mais sobre a Mentoria de Posicionamento Digital.')

const pains = [
  'Sua carteira depende de indicação e de lista fria, e você sente que bateu no teto.',
  'Você posta, mas quem curte são colegas de mercado, não clientes.',
  'Tem medo de se expor e de errar no compliance.',
  'Vê colegas captando bons clientes pelas redes e não alcança o mesmo resultado.',
  'Quer clientes de outras cidades, mas só atende quem está perto.',
]

const proof = [
  { value: 'R$ 50 mi', title: 'Um único vídeo', text: 'Gerou R$ 50 milhões em procura de boletas.', dark: true },
  { value: '+100', title: 'Convites em um ano', text: 'Para private banking e corporate banking, entre Santander, Itaú, BTG, XP e outros.', dark: false },
  { value: '95%', title: 'Clientes de todo o Brasil', text: 'São Paulo, Belo Horizonte, Manaus e outros estados, atendidos à distância.', dark: false },
]

const steps = [
  { n: '01', title: 'Cliente ideal', text: 'Quem de fato investe e onde ele está nas redes.' },
  { n: '02', title: 'Perfis que convertem', text: 'LinkedIn, Instagram e TikTok prontos para gerar contatos.' },
  { n: '03', title: 'Conteúdo e vídeo', text: 'O método do vídeo que gerou R$ 50 milhões em procura.', highlight: true },
  { n: '04', title: 'Do seguidor ao cliente', text: 'Direct, WhatsApp e reunião, inclusive com clientes de outras cidades.' },
  { n: '05', title: 'Compliance e rotina', text: 'Como se expor com segurança e manter constância sem se desgastar.' },
]

const forYou = [
  'é assessor, gerente, banker, planejador ou consultor financeiro',
  'quer parar de depender só de indicação',
  'quer atender clientes de qualquer lugar do Brasil',
  'quer se tornar referência no mercado financeiro',
]

const gains = 'Perfis que convertem nas três redes, um plano de conteúdo, roteiros de vídeo e um processo para transformar seguidores em clientes.'

const how = [
  { value: '8', label: 'Aulas individuais, só você e eu' },
  { value: '1h30', label: 'Por aula, no horário noturno' },
  { value: '15 dias', label: 'Entre uma aula e outra, para colocar em prática' },
  { value: 'Análise', label: 'Dos seus perfis e conteúdos, aula a aula' },
]

const faqs = [
  { q: 'Preciso ter muitos seguidores para começar?', a: 'Não. O método foca em atrair o cliente certo, não em volume de seguidores.' },
  { q: 'Tenho medo de aparecer em vídeo. Funciona para mim?', a: 'Sim. A gente começa pelo formato em que você se sente confortável e evolui no seu ritmo.' },
  { q: 'E o compliance da minha instituição?', a: 'Uma aula inteira é dedicada a isso: o que se pode e o que não pode postar, com segurança.' },
  { q: 'Preciso estar nas três redes?', a: 'Não. No diagnóstico, a gente escolhe as redes certas para o seu perfil e objetivo.' },
]

export default function PosicionamentoDigitalPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-24">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">
              Mentoria de Posicionamento Digital
            </span>
            <h1 className="mt-4 text-balance font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Um único vídeo gerou R$ 50 milhões em procura de boletas. Eu te ensino a se posicionar para captar clientes que de fato investem.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/75 md:text-base">
              O método para profissionais do mercado financeiro transformarem LinkedIn, Instagram e TikTok em uma fonte constante de bons clientes.
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Quero captar clientes pelas redes
              <ArrowRight className="size-4" />
            </a>
            <p className="mt-3 text-xs text-background/55">Condição especial até 31/10: pagamento por aula, com desconto.</p>
          </div>
          <div className="grid gap-3">
            {proof.map((p) => (
              <div key={p.value} className="rounded-2xl bg-background/10 px-5 py-4">
                <p className="font-serif text-3xl">{p.value}</p>
                <p className="mt-1 text-xs text-background/65">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Identificação</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            Talvez você se <span className="italic text-primary">reconheça</span> aqui
          </h2>
          <ul className="mt-8 grid gap-3">
            {pains.map((pain) => (
              <li key={pain} className="flex items-start gap-3 rounded-xl bg-card px-4 py-3 text-sm shadow-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {pain}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center font-serif text-lg text-foreground">
            Seguidor não paga boleto. <span className="italic text-primary">O que capta cliente é posicionamento.</span>
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">A prova</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            O que o posicionamento <span className="italic text-primary">fez por mim</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {proof.map((p) => (
              <div key={p.value} className={`rounded-2xl p-6 ${p.dark ? 'bg-foreground text-background' : 'bg-card'}`}>
                <p className="font-serif text-4xl">{p.value}</p>
                <p className="mt-2 text-sm font-medium">{p.title}</p>
                <p className={`mt-1 text-xs leading-relaxed ${p.dark ? 'text-background/70' : 'text-muted-foreground'}`}>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-serif text-lg italic text-foreground/85">
            Não é sobre ter milhões de seguidores. É sobre ser encontrada pelo cliente certo.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">O que você vai aprender</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            Do perfil <span className="italic text-primary">ao cliente que investe</span>
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className={`rounded-2xl p-5 ${s.highlight ? 'bg-foreground text-background' : 'bg-card shadow-sm'}`}>
                <p className="font-serif text-2xl text-primary">{s.n}</p>
                <p className="mt-2 text-sm font-medium">{s.title}</p>
                <p className={`mt-1 text-xs leading-relaxed ${s.highlight ? 'text-background/70' : 'text-muted-foreground'}`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
          <div className="rounded-3xl bg-secondary p-8">
            <h3 className="font-serif text-2xl text-foreground">
              É para você <span className="italic text-primary">que...</span>
            </h3>
            <ul className="mt-5 grid gap-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col rounded-3xl bg-foreground p-8 text-background">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">Você sai com</span>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-background/85">{gains}</p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground"
            >
              Quero a Mentoria de Posicionamento
            </a>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">Como funciona</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            Individual e <span className="italic text-background/70">no seu ritmo</span>
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {how.map((h) => (
              <div key={h.value} className="border-t border-background/25 pt-4">
                <dd className="font-serif text-3xl">{h.value}</dd>
                <dt className="mt-2 text-xs leading-relaxed text-background/65">{h.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Depoimentos</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            O que dizem <span className="italic text-primary">quem já passou por aqui</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <figure key={i} className="rounded-2xl bg-card p-6 shadow-sm">
                <blockquote className="text-sm text-muted-foreground">“[Depoimento real, com autorização]”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="size-9 rounded-full bg-accent" aria-hidden />
                  <span className="text-xs">
                    <span className="block font-medium text-foreground">[Nome]</span>
                    <span className="text-muted-foreground">[Cargo]</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Condição especial · até 31 de outubro</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-5xl">
            Pague <span className="italic text-primary">por aula,</span> com desconto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Até 31 de outubro, você entra pagando aula a aula, com desconto. Sem precisar do valor todo de uma vez. Vagas limitadas.
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Garantir minha vaga com desconto
          </a>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Dúvidas</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            Perguntas <span className="italic text-primary">frequentes</span>
          </h2>
          <div className="mt-8 grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-card px-5 py-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground">
                  {f.q}
                  <Plus className="size-4 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
          <h2 className="text-balance font-serif text-3xl tracking-tight md:text-5xl">
            O seu próximo cliente já está nas redes. <span className="italic opacity-75">Ele só precisa te encontrar.</span>
          </h2>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Quero a Mentoria de Posicionamento
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
