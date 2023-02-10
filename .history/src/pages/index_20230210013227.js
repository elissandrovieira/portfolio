import TemplateDefault from '../templates/Default'
import { useRouter } from 'next/router'

export default function Home() {
  const { locale } = useRouter()

  return (
    <TemplateDefault>
      
      
    </TemplateDefault>
  )
}
