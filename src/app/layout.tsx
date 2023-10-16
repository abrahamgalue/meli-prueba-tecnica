import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meli - @abrahamgalue',
  description: 'Test of Meli API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>
        <header className='header'>
          <div className='headerContainer'>
            <Link href='/' className='logo'>
              Meli Frontend
            </Link>
            <form action='/items' className='field'>
              <input
                placeholder='Buscar productos, marcas y más... '
                type='text'
                name='search'
                autoComplete='off'
              />
              <button type='submit'>
                <svg
                  width='41'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
                  <path d='M21 21l-6 -6'></path>
                </svg>
              </button>
            </form>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
