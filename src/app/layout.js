import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // required. see: https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js

// Google fonts
import { Raleway, Roboto } from 'next/font/google';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-raleway',
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
  variable: '--font-roboto',
});

// Styles
import '../styles/global.scss'

// Metadata
export const metadata = {
  title: 'Lee-Anne Clarke | Front-End Developer',
  description: '',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
