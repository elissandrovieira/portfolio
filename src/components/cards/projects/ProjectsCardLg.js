import Image from 'next/image'

import { ProjectsCard, ProjectsCardSample } from '../Card'

const ProjectsCardLg = ({ language, onClick }) => {

  return (
    <>
      {
      language.projects.lastProjects.map((e) => (
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
            repository={e.repository}
            live={e.live}
          />
        </div>
      ))
      }
      <ProjectsCardSample
      language={language}
      onClick={onClick}
      />
    </>
    )
}

export default ProjectsCardLg