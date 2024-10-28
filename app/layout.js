import '@styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='bg-blue-gray-900 border-none p-0 m-0'>{children}</body>
    </html>
  )
}
