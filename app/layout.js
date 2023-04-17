import './globals.css'
import Navegation from '@/components/Navegation'
import Link from 'next/link'

export const metadata = {
  title: 'FurryFoods',
  description: 'Tienda Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" 
              href="https://bootswatch.com/5/morph/bootstrap.min.css" />
      </head>
      <body>
        <Navegation/>
        <div className="container p-4">{children}</div>
      </body>
    </html>
  )
}
