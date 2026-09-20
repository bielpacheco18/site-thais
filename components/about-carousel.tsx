'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/images/thais-about-1.jpg',
    alt: 'Thais Hossmann em entrevista no Expert XP, festival de investimentos',
  },
  {
    src: '/images/thais-about-2.jpg',
    alt: 'Thais Hossmann conversando com convidados no Expert XP',
  },
  {
    src: '/images/thais-about-3.jpg',
    alt: 'Thais Hossmann palestrando para equipe da XP Inc.',
  },
  {
    src: '/images/thais-about-4.jpg',
    alt: 'Retrato de Thais Hossmann',
  },
]

export function AboutCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl bg-secondary shadow-lg">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 40vw"
          className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
