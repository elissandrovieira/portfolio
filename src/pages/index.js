import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import TemplateDefault from '../templates/Default'
import Banner from '@/components/sections/Banner'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'

import en from '../languages/en'
import pt from '../languages/pt'

const Home = () => {
  const { locale } = useRouter()

  const [ language, setLanguage ] = useState(en)

  useEffect(() => {
    locale === 'pt'
    ? setLanguage(pt)
    : setLanguage(en)
  }, [locale])


  return (
    <TemplateDefault>
      <Banner language={language} />
      <Features language={language} />
      <About language={language} />
      <Skills />
      <Projects language={language} />
    </TemplateDefault>
  )
}

export default Home