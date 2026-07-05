import { MessageCircle, Phone, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
        <span className="text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground/70">
          Vamos conversar
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Pronto para dar o próximo passo com seus investimentos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Me chame no WhatsApp para uma conversa inicial sem compromisso. Vamos entender
          o seu momento e definir juntos a melhor estratégia para você.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href={whatsappLink('Olá, Thais! Vim pelo site e gostaria de conversar sobre investimentos.')} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Falar no WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
          <Phone className="size-4" />
          <span>{site.phoneDisplay}</span>
        </div>
      </div>
    </section>
  )
}
