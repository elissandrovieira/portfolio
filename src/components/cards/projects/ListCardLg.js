import Image from 'next/image'

import { ListCard } from '../Card'

const ListCardLg = ({ language }) => {

  return (
    <>
      {
      language.projects.projectsList.map((e) => (
        <div key={e.title}>
          <ListCard
            language={language}
            image={
              <Image
                src={e.image}
                alt={e.title}
                fill
                style={{
                  borderRadius: '20px 20px 0 0',
                  objectFit: 'cover'
                }}
              />
            }
            title={e.title}
            text={e.text}
            repository={e.repository}
            live={e.live}
          />
        </div>
      ))
      }
    </>
    )
}

export default ListCardLg