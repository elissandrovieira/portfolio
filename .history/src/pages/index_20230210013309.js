import TemplateDefault from '../templates/Default'
import { useRouter } from 'next/router'

import en from '../languages/en'
import  from '../languages/'

export default function Home() {
  const { locale } = useRouter()

  return (
    <TemplateDefault>
      
    </TemplateDefault>
  )
}
