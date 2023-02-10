import TemplateDefault from '../templates/Default'
import { useRouter } from 'next/router'

import en from '../languages/en'
import pt from '../languages/pt'

export default function Home() {
  const { locale } = useRouter()

  return (
    <TemplateDefault>
      {
        locale === 'en'
        ? <h1>{en.title</h1>
      }
    </TemplateDefault>
  )
}
