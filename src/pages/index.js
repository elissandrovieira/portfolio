import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import TemplateDefault from '../templates/Default'
import Banner from '@/components/sections/Banner'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import ProjectsList from '@/components/sections/Projects/List'
import Contact from '@/components/sections/Contact'

import en from '../languages/en'
import pt from '../languages/pt'

const Home = () => {
  const { locale } = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const [ language, setLanguage ] = useState(en)

  useEffect(() => {
    locale === 'pt'
    ? setLanguage(pt)
    : setLanguage(en)
  }, [locale])

  const handleOpenProjects = () => {
    setIsOpen(true)
  }
  const handleCloseProjects = () => {
    setIsOpen(false)
  }

  return (
    <TemplateDefault>
      <ProjectsList
      language={language}
      isOpen={isOpen}
      onClick={handleCloseProjects}
      />
      <Banner language={language} />
      <Features language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects
      language={language}
      onClick={handleOpenProjects}
      />
      <Contact language={language}/>
    </TemplateDefault>
  )
}

export default Home