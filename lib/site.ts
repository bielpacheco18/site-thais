export const site = {
  name: 'Thais Hossmann',
  role: 'Planejadora Financeira',
  linkedin: 'https://www.linkedin.com/in/thaishossmann',
  instagram: 'https://instagram.com/thaishossmann',
  instagramHandle: '@thaishossmann',
  whatsapp: '5521967676237',
  whatsappDisplay: '(21) 96767-6237',
  mentoriasWhatsapp: '5521974593719',
  email: 'thaishossmannconsultoria@gmail.com',
  leadFormUrl:
    'https://lead-planner-pro.vercel.app/cadastro-rapido?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnViapw_LxtsxOvE7kda9Ioy64wvf2QU5HmzvSLuKhvJDm-x6cqyLnGoU-4KI_aem_ZVyQkSaUNscJ1amu0jS2kQ',
}

export function mentoriasWhatsappUrl(message: string) {
  return `https://wa.me/${site.mentoriasWhatsapp}?text=${encodeURIComponent(message)}`
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
