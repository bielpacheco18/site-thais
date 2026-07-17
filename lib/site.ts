export const site = {
  name: 'Thais Hossmann',
  role: 'Planejadora Financeira',
  phoneDisplay: '+55 21 96767-6237',
  whatsappNumber: '5521967676237',
  linkedin: 'https://www.linkedin.com/in/thaishossmann',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
