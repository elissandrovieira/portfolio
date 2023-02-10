import TemplateDefault from '../templates/Default'
import { useRouter } from 'next/router'

import en from '../languages/'

export default function Home() {
  const { locale } = useRouter()

  return (
    <TemplateDefault>
      
    </TemplateDefault>
  )
}
