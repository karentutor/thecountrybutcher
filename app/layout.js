import { Oswald, Cormorant_Garamond } from 'next/font/google'

import { AuthProvider } from '@/context'

import './globals.css'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'The Country Butcher',
  description:
    'We are a traditional butcher shop that specializes in high-quality meats and meat products. We source our meats from local farms or ranches when available.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${oswald.variable} ${cormorant.variable} font-oswald bg-secondary`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
