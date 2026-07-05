'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink } from '@/lib/site'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {site.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={whatsappLink('Olá, Thais! Gostaria de falar sobre assessoria de investimentos.')} target="_blank" rel="noopener noreferrer">
              Fale comigo
            </a>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Navegação móvel">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a href={whatsappLink('Olá, Thais! Gostaria de falar sobre assessoria de investimentos.')} target="_blank" rel="noopener noreferrer">
                Fale comigo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
