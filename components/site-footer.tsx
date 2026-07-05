import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-serif text-base font-semibold text-foreground">{site.name}</p>
          <p>{site.role} · CEA · CPA-20</p>
        </div>
        <p className="max-w-md text-xs leading-relaxed">
          Este site tem caráter informativo e não constitui recomendação de investimento.
          Rentabilidade passada não representa garantia de resultados futuros.
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
