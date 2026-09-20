'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export function PhotoLightbox({
  src,
  alt,
  children,
}: {
  src: string
  alt: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block size-full cursor-zoom-in"
        aria-label={`Ampliar imagem: ${alt}`}
      >
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
          <div
            className="relative h-full max-h-[90vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
