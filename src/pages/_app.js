import { useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Header from '@/components/Header'

import GlobalStyles from '@/styles/globals'
import light from '@/theme/light'
import dark from '@/theme/dark'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(light)

  const handleChangeTheme = () => {
    theme === light
    ? setTheme(dark)
    : setTheme(light)
  }

  return (
    <>
      <Head>
        <title>Eli Vieira Portfolio</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
        handleChangeTheme={handleChangeTheme}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
