export const site = {
  name: 'Thais Hossmann',
  role: 'Planejadora Financeira',
  phoneDisplay: '+55 21 3265-3795',
  whatsappNumber: '552132653795',
  linkedin: 'https://www.linkedin.com/in/thaishossmann',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
