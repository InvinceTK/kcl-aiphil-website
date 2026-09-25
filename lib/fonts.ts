import { Playfair_Display, EB_Garamond, Archivo } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const garamond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-garamond-eb',
  display: 'swap',
})

export const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})
