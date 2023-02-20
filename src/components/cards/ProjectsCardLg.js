import Image from 'next/image'

import { ProjectsCard, ProjectsCardSample } from '../cards/Card'

const ProjectsCardLg = ({ language }) => {

  return (
    <>
      {
      language.projects.projectsList.map((e) => (
        <div key={e.title}>
          <ProjectsCard
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
          />
        </div>
      ))
      }
      < ProjectsCardSample language={language}/>
    </>
    )
}

export default ProjectsCardLg