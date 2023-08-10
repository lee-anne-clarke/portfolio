// eslint-disable @next/next/no-img-element

import '../styles/global.scss'

export const metadata = {
  title: 'Lee-Anne Clarke | Front-End Developer',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
