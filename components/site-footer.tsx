import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-serif text-base italic text-foreground">{site.name}</p>
        <p className="text-xs">
          WhatsApp {site.whatsappDisplay} ·{' '}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Instagram {site.instagramHandle}
          </a>{' '}
          ·{' '}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
